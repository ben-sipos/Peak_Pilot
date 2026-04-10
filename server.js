const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

loadDotEnv();

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";
const FALLBACK_SKI_GEO = {
  zermatt: { pistes: 322, lifts: 54, stations: 29 },
  "saint-anton": { pistes: 305, lifts: 85, stations: 38 },
  "val-gardena": { pistes: 181, lifts: 79, stations: 31 },
  whistler: { pistes: 274, lifts: 37, stations: 19 },
  niseko: { pistes: 61, lifts: 38, stations: 16 },
  verbier: { pistes: 96, lifts: 35, stations: 15 },
  "les-arcs": { pistes: 200, lifts: 53, stations: 23 },
  banff: { pistes: 137, lifts: 12, stations: 8 },
};

function loadDotEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();
    if (key && !process.env[key]) process.env[key] = value;
  }
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(data));
}

function sendText(res, status, text) {
  res.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(text);
}

function parseNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function getIntegrationStatus() {
  return {
    weather: { enabled: true, provider: "Open-Meteo" },
    skiGeo: { enabled: true, provider: "OpenStreetMap Overpass" },
    hotels: {
      enabled: Boolean(process.env.BOOKING_API_KEY || process.env.EXPEDIA_API_KEY),
      provider: process.env.BOOKING_API_KEY ? "Booking.com Demand API" : process.env.EXPEDIA_API_KEY ? "Expedia Rapid" : null,
    },
    flights: {
      enabled: Boolean(process.env.AMADEUS_CLIENT_ID && process.env.AMADEUS_CLIENT_SECRET),
      provider: process.env.AMADEUS_CLIENT_ID ? "Amadeus Self-Service" : null,
    },
    events: {
      enabled: Boolean(process.env.TICKETMASTER_API_KEY),
      provider: process.env.TICKETMASTER_API_KEY ? "Ticketmaster Discovery" : null,
    },
  };
}

async function fetchWeather(lat, lon) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lon));
  url.searchParams.set(
    "current",
    ["temperature_2m", "snow_depth", "weather_code", "wind_speed_10m"].join(","),
  );
  url.searchParams.set(
    "daily",
    ["temperature_2m_max", "temperature_2m_min", "snowfall_sum", "precipitation_probability_max"].join(","),
  );
  url.searchParams.set("forecast_days", "5");
  url.searchParams.set("timezone", "auto");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Open-Meteo error: ${response.status}`);
  }

  const data = await response.json();
  return {
    provider: "Open-Meteo",
    current: {
      temperatureC: data.current?.temperature_2m ?? null,
      snowDepthM: data.current?.snow_depth ?? null,
      windSpeedKmh: data.current?.wind_speed_10m ?? null,
      weatherCode: data.current?.weather_code ?? null,
      time: data.current?.time ?? null,
    },
    daily: (data.daily?.time || []).map((time, index) => ({
      date: time,
      tempMaxC: data.daily.temperature_2m_max?.[index] ?? null,
      tempMinC: data.daily.temperature_2m_min?.[index] ?? null,
      snowfallCm: data.daily.snowfall_sum?.[index] ?? null,
      precipProbabilityMax: data.daily.precipitation_probability_max?.[index] ?? null,
    })),
  };
}

async function fetchSkiGeo(lat, lon) {
  const query = `
[out:json][timeout:25];
(
  way(around:12000,${lat},${lon})["piste:type"];
  way(around:12000,${lat},${lon})["aerialway"];
  node(around:12000,${lat},${lon})["aerialway"="station"];
);
out body geom;
`;

  const response = await fetch(OVERPASS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: new URLSearchParams({ data: query }),
  });

  if (!response.ok) {
    throw new Error(`Overpass error: ${response.status}`);
  }

  const data = await response.json();
  const elements = Array.isArray(data.elements) ? data.elements : [];
  const pisteWays = elements.filter((element) => element.type === "way" && element.tags?.["piste:type"]);
  const liftWays = elements.filter((element) => element.type === "way" && element.tags?.aerialway);
  const stations = elements.filter((element) => element.type === "node" && element.tags?.aerialway === "station");

  const difficultyCounts = pisteWays.reduce(
    (acc, element) => {
      const difficulty = element.tags?.["piste:difficulty"] || "other";
      acc[difficulty] = (acc[difficulty] || 0) + 1;
      return acc;
    },
    { novice: 0, easy: 0, intermediate: 0, advanced: 0, expert: 0, other: 0 },
  );

  return {
    provider: "OpenStreetMap Overpass",
    counts: {
      pistes: pisteWays.length,
      lifts: liftWays.length,
      stations: stations.length,
    },
    difficulties: difficultyCounts,
  };
}

function notConfiguredMessage(service, envNames) {
  return {
    ok: false,
    service,
    requiresKeys: true,
    message: `This adapter is scaffolded, but not active yet. Add ${envNames.join(" and ")} to enable it.`,
  };
}

async function handleApi(req, res, url) {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return true;
  }

  if (url.pathname === "/api/config") {
    sendJson(res, 200, { ok: true, integrations: getIntegrationStatus() });
    return true;
  }

  if (url.pathname === "/api/weather") {
    const lat = parseNumber(url.searchParams.get("lat"));
    const lon = parseNumber(url.searchParams.get("lon"));
    if (lat === null || lon === null) {
      sendJson(res, 400, { ok: false, message: "lat and lon are required" });
      return true;
    }
    try {
      const weather = await fetchWeather(lat, lon);
      sendJson(res, 200, { ok: true, ...weather });
    } catch (error) {
      sendJson(res, 502, { ok: false, message: error.message });
    }
    return true;
  }

  if (url.pathname === "/api/ski-geo") {
    const lat = parseNumber(url.searchParams.get("lat"));
    const lon = parseNumber(url.searchParams.get("lon"));
    const resortId = url.searchParams.get("resortId");
    if (lat === null || lon === null) {
      sendJson(res, 400, { ok: false, message: "lat and lon are required" });
      return true;
    }
    try {
      const skiGeo = await fetchSkiGeo(lat, lon);
      sendJson(res, 200, { ok: true, ...skiGeo });
    } catch (error) {
      const fallback = resortId ? FALLBACK_SKI_GEO[resortId] : null;
      if (fallback) {
        sendJson(res, 200, {
          ok: true,
          provider: "Fallback resort catalog",
          fallback: true,
          counts: fallback,
          difficulties: { novice: 0, easy: 0, intermediate: 0, advanced: 0, expert: 0, other: 0 },
          message: `Live Overpass data unavailable: ${error.message}`,
        });
      } else {
        sendJson(res, 502, { ok: false, message: error.message });
      }
    }
    return true;
  }

  if (url.pathname === "/api/hotels") {
    if (!process.env.BOOKING_API_KEY && !process.env.EXPEDIA_API_KEY) {
      sendJson(res, 501, notConfiguredMessage("hotels", ["BOOKING_API_KEY", "EXPEDIA_API_KEY"]));
      return true;
    }
    sendJson(res, 501, {
      ok: false,
      service: "hotels",
      message: "Hotel adapter wiring is prepared, but provider-specific request mapping still needs your preferred vendor and credentials.",
    });
    return true;
  }

  if (url.pathname === "/api/flights") {
    if (!process.env.AMADEUS_CLIENT_ID || !process.env.AMADEUS_CLIENT_SECRET) {
      sendJson(res, 501, notConfiguredMessage("flights", ["AMADEUS_CLIENT_ID", "AMADEUS_CLIENT_SECRET"]));
      return true;
    }
    sendJson(res, 501, {
      ok: false,
      service: "flights",
      message: "Flight adapter wiring is prepared, but search request mapping still needs your chosen trip parameters and Amadeus credentials.",
    });
    return true;
  }

  if (url.pathname === "/api/events") {
    if (!process.env.TICKETMASTER_API_KEY) {
      sendJson(res, 501, notConfiguredMessage("events", ["TICKETMASTER_API_KEY"]));
      return true;
    }
    sendJson(res, 501, {
      ok: false,
      service: "events",
      message: "Event adapter wiring is prepared, but event search filters still need to be mapped to your region/resort model.",
    });
    return true;
  }

  return false;
}

function serveStatic(req, res, url) {
  let filePath = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = path.normalize(path.join(ROOT, filePath));

  if (!safePath.startsWith(ROOT)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  fs.readFile(safePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendText(res, 404, "Not found");
      } else {
        sendText(res, 500, "Server error");
      }
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname.startsWith("/api/")) {
    const handled = await handleApi(req, res, url);
    if (!handled) sendJson(res, 404, { ok: false, message: "Unknown API endpoint" });
    return;
  }

  serveStatic(req, res, url);
});

server.listen(PORT, () => {
  console.log(`PeakPilot Alpine running at http://localhost:${PORT}`);
});
