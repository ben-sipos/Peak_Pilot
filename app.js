const resorts = [
  {
    id: "zermatt",
    name: "Zermatt",
    country: "Switzerland",
    region: "Valais",
    skill: "Advanced",
    vibe: "Luxury alpine",
    price: "$$$$",
    match: 97,
    baseDepth: "192 cm",
    freshSnow: "34 cm",
    liftsOpen: "88%",
    temp: "-7°C",
    trailCount: 322,
    lifts: 54,
    summit: "3,883 m",
    lat: 46.0207,
    lon: 7.7491,
    airport: "Zurich (ZRH)",
    pass: "From CHF 97/day",
    position: { x: 66, y: 57 },
    summary:
      "Iconic scenery, serious vertical, and reliable high-altitude snow wrapped in a polished village experience.",
    reasons: ["High snow reliability", "Luxury stay options", "Advanced terrain variety"],
    highlights: [
      "Matterhorn views and a premium village atmosphere",
      "Large ski area with altitude security through the season",
      "Excellent dining, spas, and guided alpine experiences",
    ],
    alerts: "Powder window Sunday to Tuesday",
    event: "Sunrise Glacier Breakfast",
    stay: "Ski-in suites, boutique lodges, premium chalets",
  },
  {
    id: "saint-anton",
    name: "St. Anton",
    country: "Austria",
    region: "Tyrol",
    skill: "Advanced",
    vibe: "Legendary apres",
    price: "$$$",
    match: 94,
    baseDepth: "158 cm",
    freshSnow: "27 cm",
    liftsOpen: "92%",
    temp: "-5°C",
    trailCount: 305,
    lifts: 85,
    summit: "2,811 m",
    lat: 47.1286,
    lon: 10.2641,
    airport: "Innsbruck (INN)",
    pass: "From EUR 76/day",
    position: { x: 58, y: 50 },
    summary:
      "High-energy Arlberg skiing with world-class lift connectivity, steep terrain, and famous after-ski culture.",
    reasons: ["Strong expert terrain", "Arlberg access", "Lively social atmosphere"],
    highlights: [
      "Fast access to Lech, Zurs, and Stuben in one connected domain",
      "Strong steep terrain and off-piste reputation",
      "Bustling village and iconic apres bars",
    ],
    alerts: "Wind easing by afternoon; fresh chalk on north-facing lines",
    event: "Arlberg Mountain Music Weekend",
    stay: "Boutique hotels, central apartments, design-led pensions",
  },
  {
    id: "val-gardena",
    name: "Val Gardena",
    country: "Italy",
    region: "Dolomites",
    skill: "Intermediate",
    vibe: "Scenic cruising",
    price: "$$$",
    match: 91,
    baseDepth: "126 cm",
    freshSnow: "18 cm",
    liftsOpen: "95%",
    temp: "-3°C",
    trailCount: 181,
    lifts: 79,
    summit: "2,518 m",
    lat: 46.5567,
    lon: 11.7573,
    airport: "Innsbruck (INN)",
    pass: "From EUR 74/day",
    position: { x: 62, y: 58 },
    summary:
      "Sunlit cruising, dramatic Dolomite landscapes, and polished mountain villages make this a broad-appeal favorite.",
    reasons: ["Beautiful scenery", "Intermediate-friendly flow", "Excellent huts and cuisine"],
    highlights: [
      "Strong intermediate terrain and stunning panoramas",
      "Part of a huge connected Dolomiti network",
      "Warm hospitality, mountain dining, and family comfort",
    ],
    alerts: "Bluebird conditions most of next week",
    event: "Dolomite Sunset Sessions",
    stay: "Family hotels, spa resorts, half-board lodges",
  },
  {
    id: "whistler",
    name: "Whistler Blackcomb",
    country: "Canada",
    region: "British Columbia",
    skill: "Mixed",
    vibe: "Big-mountain village",
    price: "$$$$",
    match: 90,
    baseDepth: "244 cm",
    freshSnow: "41 cm",
    liftsOpen: "86%",
    temp: "-9°C",
    trailCount: 274,
    lifts: 37,
    summit: "2,284 m",
    lat: 50.1163,
    lon: -122.9574,
    airport: "Vancouver (YVR)",
    pass: "Epic Pass or CAD 179/day",
    position: { x: 18, y: 40 },
    summary:
      "Huge scale, deep snow cycles, and one of the best-equipped resort villages in North America.",
    reasons: ["Size and variety", "Strong village infrastructure", "Great mixed-group fit"],
    highlights: [
      "Large terrain footprint across two mountains",
      "Village handles dining, shopping, transit, and nightlife well",
      "Appeals to powder chasers, families, and social groups",
    ],
    alerts: "Heavy snow expected overnight with colder temps",
    event: "Peak to Village Winter Nights",
    stay: "Condos, village hotels, ski-in residences",
  },
  {
    id: "niseko",
    name: "Niseko United",
    country: "Japan",
    region: "Hokkaido",
    skill: "Mixed",
    vibe: "Powder-first",
    price: "$$$",
    match: 93,
    baseDepth: "298 cm",
    freshSnow: "51 cm",
    liftsOpen: "80%",
    temp: "-11°C",
    trailCount: 61,
    lifts: 38,
    summit: "1,308 m",
    lat: 42.8646,
    lon: 140.7042,
    airport: "Sapporo (CTS)",
    pass: "From JPY 9,500/day",
    position: { x: 90, y: 44 },
    summary:
      "Deep snowfall, tree skiing, and a compact international village setup make Niseko a powder magnet.",
    reasons: ["Consistent snowfall", "Tree skiing", "Strong travel buzz"],
    highlights: [
      "Frequent storms and soft snow texture",
      "Night skiing across key sectors",
      "Appeals to mixed ski and snowboard groups",
    ],
    alerts: "Fresh snow totals tracking above forecast",
    event: "Lantern Powder Night",
    stay: "Modern condos, powder lodges, transit-linked stays",
  },
  {
    id: "verbier",
    name: "Verbier",
    country: "Switzerland",
    region: "Valais",
    skill: "Advanced",
    vibe: "Upscale freeride",
    price: "$$$$",
    match: 89,
    baseDepth: "170 cm",
    freshSnow: "23 cm",
    liftsOpen: "84%",
    temp: "-6°C",
    trailCount: 96,
    lifts: 35,
    summit: "3,330 m",
    lat: 46.0961,
    lon: 7.2286,
    airport: "Geneva (GVA)",
    pass: "From CHF 86/day",
    position: { x: 64, y: 55 },
    summary:
      "Freeride credibility, premium stays, and a high-energy social scene in a sleek Swiss package.",
    reasons: ["Expert appeal", "Strong dining scene", "Premium lodging"],
    highlights: [
      "Steep terrain and freeride culture",
      "Upscale restaurants and bars",
      "Strong luxury positioning for destination trips",
    ],
    alerts: "Variable alpine wind; lower mountain skiing best tomorrow morning",
    event: "Alpine House Sessions",
    stay: "Luxury chalets, design hotels, chef-led apartments",
  },
  {
    id: "les-arcs",
    name: "Les Arcs",
    country: "France",
    region: "Savoie",
    skill: "Family",
    vibe: "Value and variety",
    price: "$$",
    match: 88,
    baseDepth: "148 cm",
    freshSnow: "19 cm",
    liftsOpen: "91%",
    temp: "-4°C",
    trailCount: 200,
    lifts: 53,
    summit: "3,226 m",
    lat: 45.5722,
    lon: 6.8243,
    airport: "Lyon (LYS)",
    pass: "From EUR 68/day",
    position: { x: 61, y: 54 },
    summary:
      "Large linked skiing, practical family planning, and better value than many prestige Alpine neighbors.",
    reasons: ["Family logistics", "Large terrain", "Better price-to-size ratio"],
    highlights: [
      "Arc villages give varied stay styles and budgets",
      "Connected Paradiski domain expands choices",
      "Good for mixed abilities and week-long itineraries",
    ],
    alerts: "Stable grooming and good visibility through midweek",
    event: "Family Night Descents",
    stay: "Residences, family hotels, self-catered ski apartments",
  },
  {
    id: "banff",
    name: "Banff Sunshine",
    country: "Canada",
    region: "Alberta",
    skill: "Intermediate",
    vibe: "National park alpine",
    price: "$$$",
    match: 85,
    baseDepth: "166 cm",
    freshSnow: "15 cm",
    liftsOpen: "87%",
    temp: "-14°C",
    trailCount: 137,
    lifts: 12,
    summit: "2,730 m",
    lat: 51.1151,
    lon: -115.7635,
    airport: "Calgary (YYC)",
    pass: "From CAD 165/day",
    position: { x: 21, y: 38 },
    summary:
      "Scenic Rockies skiing with broad blue terrain, cold smoke snow, and a destination-town backdrop.",
    reasons: ["Scenery", "Reliable cold snow", "National park appeal"],
    highlights: [
      "Big-open alpine bowls and broad pistes",
      "Strong pairing with Banff lodging and dining",
      "Ideal for scenic first long-haul ski trips",
    ],
    alerts: "Cold clear weather; best snow remains on shaded aspects",
    event: "Rockies Winter Market",
    stay: "Town hotels, shuttle-linked lodges, spa escapes",
  },
];

const events = [
  {
    title: "Arlberg Mountain Music Weekend",
    location: "St. Anton",
    type: "Après + culture",
    date: "Jan 17 - Jan 19",
    note: "Live mountain stages, village bars, and late-lift sessions.",
  },
  {
    title: "Dolomite Sunset Sessions",
    location: "Val Gardena",
    type: "Scenic experience",
    date: "Feb 2 - Feb 5",
    note: "Golden-hour gondola rides, hut dinners, and live acoustic sets.",
  },
  {
    title: "Lantern Powder Night",
    location: "Niseko",
    type: "Night skiing",
    date: "Feb 11",
    note: "Extended lifts, village food stalls, and guided low-light laps.",
  },
];

const offers = [
  {
    title: "7-night family bundle in Les Arcs",
    price: "From EUR 1,180 / person",
    kicker: "Best value",
    note: "Lift pass, slope-side apartment, airport transfer, and kids club credit.",
  },
  {
    title: "Luxury chalet week in Verbier",
    price: "From CHF 4,900 / person",
    kicker: "Premium",
    note: "Private shuttle, chef breakfast, concierge, and spa partner access.",
  },
  {
    title: "Powder launch package in Niseko",
    price: "From JPY 280,000",
    kicker: "Snow-first",
    note: "Condo stay, airport coach, avalanche briefing, and first-night ramen tour.",
  },
];

const plannerTemplate = [
  { id: "resort", title: "Choose resort", detail: "Lock in the destination that best fits your snow, budget, and group style." },
  { id: "stay", title: "Reserve accommodation", detail: "Balance ski-in convenience against price, vibe, and transport needs." },
  { id: "flight", title: "Book flights or transfers", detail: "Package flights, rail, and final-mile resort transport in one place." },
  { id: "passes", title: "Buy lift passes", detail: "Surface early-booking savings and regional pass logic automatically." },
  { id: "gear", title: "Plan rental or packing", detail: "Connect resort conditions with the right equipment and checklist." },
  { id: "dining", title: "Reserve standout meals", detail: "Add mountain lunches, village dinners, and special events to the itinerary." },
  { id: "alerts", title: "Track snow alerts", detail: "Follow powder windows and weather shifts as the trip gets closer." },
];

const state = loadState();
const app = document.getElementById("app");
const API_BASE = window.location.protocol.startsWith("http") ? window.location.origin : "";
const apiState = {
  config: null,
  weatherByResort: {},
  skiGeoByResort: {},
  pending: new Set(),
};

function loadState() {
  const saved = safeParse(localStorage.getItem("peakpilot-state"));
  return {
    view: saved?.view || "home",
    selectedResortId: saved?.selectedResortId || "zermatt",
    filters: {
      search: saved?.filters?.search || "",
      country: saved?.filters?.country || "All",
      skill: saved?.filters?.skill || "All",
      vibe: saved?.filters?.vibe || "All",
    },
    savedResorts: new Set(saved?.savedResorts || ["zermatt", "les-arcs"]),
    compareResorts: new Set(saved?.compareResorts || ["zermatt", "saint-anton"]),
    plannerChecks: saved?.plannerChecks || {
      resort: true,
      stay: true,
      flight: false,
      passes: false,
      gear: false,
      dining: false,
      alerts: true,
    },
    expertQuestion:
      saved?.expertQuestion ||
      "Build me a high-snow, high-comfort trip with strong dining and an easy transfer.",
  };
}

function persist() {
  localStorage.setItem(
    "peakpilot-state",
    JSON.stringify({
      view: state.view,
      selectedResortId: state.selectedResortId,
      filters: state.filters,
      savedResorts: [...state.savedResorts],
      compareResorts: [...state.compareResorts],
      plannerChecks: state.plannerChecks,
      expertQuestion: state.expertQuestion,
    }),
  );
}

function safeParse(value) {
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function selectedResort() {
  return resorts.find((resort) => resort.id === state.selectedResortId) || resorts[0];
}

function filteredResorts() {
  return resorts.filter((resort) => {
    const searchHit =
      !state.filters.search ||
      `${resort.name} ${resort.country} ${resort.region} ${resort.vibe}`
        .toLowerCase()
        .includes(state.filters.search.toLowerCase());
    const countryHit = state.filters.country === "All" || resort.country === state.filters.country;
    const skillHit = state.filters.skill === "All" || resort.skill === state.filters.skill;
    const vibeHit = state.filters.vibe === "All" || resort.vibe === state.filters.vibe;
    return searchHit && countryHit && skillHit && vibeHit;
  });
}

function plannerCompletion() {
  const done = Object.values(state.plannerChecks).filter(Boolean).length;
  return Math.round((done / plannerTemplate.length) * 100);
}

function canUseApi() {
  return Boolean(API_BASE);
}

function weatherFor(resort) {
  return apiState.weatherByResort[resort.id] || null;
}

function skiGeoFor(resort) {
  return apiState.skiGeoByResort[resort.id] || null;
}

function fallbackTemp(resort) {
  return resort.temp.replace("Â", "");
}

function formatCurrentTemp(resort) {
  const weather = weatherFor(resort);
  if (weather?.current?.temperatureC == null) return fallbackTemp(resort);
  return `${Math.round(weather.current.temperatureC)}°C`;
}

function formatSnowDepth(resort) {
  const weather = weatherFor(resort);
  if (weather?.current?.snowDepthM == null) return resort.baseDepth;
  return `${Math.round(weather.current.snowDepthM * 100)} cm`;
}

function formatFreshSnow(resort) {
  const weather = weatherFor(resort);
  const firstDay = weather?.daily?.[0];
  if (firstDay?.snowfallCm == null) return resort.freshSnow;
  return `${Math.round(firstDay.snowfallCm)} cm`;
}

function integrationSummary() {
  if (!canUseApi()) {
    return "API adapters are available when you run the local server.";
  }
  if (!apiState.config) {
    return "Checking live integrations...";
  }
  const enabled = Object.values(apiState.config.integrations).filter((service) => service.enabled);
  if (enabled.length === 0) {
    return "Public weather and geodata are ready; private travel APIs still need keys.";
  }
  return `${enabled.length} integration${enabled.length === 1 ? "" : "s"} active`;
}

function serviceStatusLabel(key) {
  const service = apiState.config?.integrations?.[key];
  if (!canUseApi()) return "Run via local server";
  if (!apiState.config) return "Checking";
  if (!service) return "Unavailable";
  return service.enabled ? `Connected: ${service.provider}` : "Needs API keys";
}

async function fetchJson(pathname) {
  const response = await fetch(`${API_BASE}${pathname}`);
  const data = await response.json();
  if (!response.ok || data.ok === false) {
    throw new Error(data.message || `Request failed for ${pathname}`);
  }
  return data;
}

function ensureConfigLoaded() {
  if (!canUseApi() || apiState.config || apiState.pending.has("config")) return;
  apiState.pending.add("config");
  fetchJson("/api/config")
    .then((data) => {
      apiState.config = data;
      render();
    })
    .catch(() => {
      apiState.config = { integrations: {} };
      render();
    })
    .finally(() => apiState.pending.delete("config"));
}

function ensureResortApiData(resort) {
  if (!canUseApi() || !resort?.lat || !resort?.lon) return;

  const weatherKey = `weather:${resort.id}`;
  if (!apiState.weatherByResort[resort.id] && !apiState.pending.has(weatherKey)) {
    apiState.pending.add(weatherKey);
    fetchJson(`/api/weather?lat=${encodeURIComponent(resort.lat)}&lon=${encodeURIComponent(resort.lon)}`)
      .then((data) => {
        apiState.weatherByResort[resort.id] = data;
        render();
      })
      .catch(() => {})
      .finally(() => apiState.pending.delete(weatherKey));
  }

  const geoKey = `geo:${resort.id}`;
  if (!apiState.skiGeoByResort[resort.id] && !apiState.pending.has(geoKey)) {
    apiState.pending.add(geoKey);
    fetchJson(
      `/api/ski-geo?lat=${encodeURIComponent(resort.lat)}&lon=${encodeURIComponent(resort.lon)}&resortId=${encodeURIComponent(resort.id)}`,
    )
      .then((data) => {
        apiState.skiGeoByResort[resort.id] = data;
        render();
      })
      .catch(() => {})
      .finally(() => apiState.pending.delete(geoKey));
  }
}

function hydrateVisibleData() {
  ensureConfigLoaded();
  const activeResorts = new Set([selectedResort().id, ...filteredResorts().slice(0, 4).map((resort) => resort.id)]);
  resorts
    .filter((resort) => activeResorts.has(resort.id))
    .forEach((resort) => ensureResortApiData(resort));
}

function navButton(view, label) {
  return `<button class="nav-link ${state.view === view ? "is-active" : ""}" data-action="navigate" data-view="${view}">${label}</button>`;
}

function quickEntry(title, copy, badgeClass, view) {
  return `
    <button class="quick-entry" data-action="navigate" data-view="${view}">
      <span class="mini-badge ${badgeClass}">${title}</span>
      <strong>${title}</strong>
      <span>${copy}</span>
    </button>
  `;
}

function render() {
  const resort = selectedResort();
  persist();
  app.innerHTML = `
    <div class="topbar-wrap">
      <header class="topbar">
        <button class="brand" data-action="navigate" data-view="home" aria-label="Go to homepage">
          <span class="brand-mark">✦</span>
          <span class="brand-copy">
            <strong>PeakPilot Alpine</strong>
            <span>AI clarity + alpine depth</span>
          </span>
        </button>
        <nav class="nav-links" aria-label="Primary navigation">
          ${navButton("home", "Home")}
          ${navButton("discover", "Discover")}
          ${navButton("snow", "Snow")}
          ${navButton("planner", "Trip Planner")}
          ${navButton("expert", "Expert AI")}
          ${navButton("dashboard", "My Trips")}
        </nav>
        <div class="topbar-actions">
          <button class="ghost-btn" data-action="navigate" data-view="discover">Browse Regions</button>
          <button class="outline-btn" data-action="navigate" data-view="expert">Ask an Expert</button>
          <button class="pill-btn" data-action="navigate" data-view="planner">Start Planning</button>
        </div>
      </header>
    </div>

    <main class="page app-shell">${renderView()}</main>
    ${renderDock(resort)}
    ${renderFooter()}
    ${renderMobileNav()}
  `;
  hydrateVisibleData();
}

function renderView() {
  switch (state.view) {
    case "discover":
      return renderDiscover();
    case "resort":
      return renderResort();
    case "snow":
      return renderSnow();
    case "planner":
      return renderPlanner();
    case "expert":
      return renderExpert();
    case "dashboard":
      return renderDashboard();
    default:
      return renderHome();
  }
}

function renderHome() {
  const bestSnow = [...resorts]
    .sort((a, b) => parseInt(formatFreshSnow(b), 10) - parseInt(formatFreshSnow(a), 10))
    .slice(0, 3);
  return `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">PeakPilot x Alpine Intelligence</span>
          <h1>Find your perfect <span>ski base, snow window, and full trip plan</span></h1>
          <p>
            Explore mountain destinations with live snow data, map-based discovery, accommodation planning,
            events, and one connected trip workflow.
          </p>
          <div class="hero-actions">
            <button class="pill-btn" data-action="navigate" data-view="discover">Find my best resort</button>
            <button class="ghost-btn" data-action="navigate" data-view="discover">Explore map and regions</button>
          </div>
          <div class="hero-proof">
            <span>Guest browsing enabled</span>
            <span>500+ resorts</span>
            <span>Live snow, stays, events, and trip planning</span>
            <span>${integrationSummary()}</span>
          </div>
        </div>
        <aside class="floating-panel">
          <h3>Built for fast, confident trip decisions</h3>
          <div class="floating-panel-grid">
            <div class="signal-card">
              <strong>One clear action</strong>
              <span>No CTA overload, just a clean start path.</span>
            </div>
            <div class="signal-card">
              <strong>Dense data, calmly</strong>
              <span>Tabs, cards, and filters instead of cluttered sidebars.</span>
            </div>
            <div class="signal-card">
              <strong>Fast first screen</strong>
              <span>Core tools visible immediately, not hidden behind marketing copy.</span>
            </div>
            <div class="signal-card">
              <strong>Trip-ready</strong>
              <span>Every resort, stay, and alert flows into planning.</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="quick-grid">
        ${quickEntry("AI Match", "Smart resort recommendations tuned to skill, budget, vibe, and travel effort.", "badge-blue", "discover")}
        ${quickEntry("Region Explorer", "Browse countries, alpine regions, and linked resort clusters from a map-first view.", "badge-lime", "discover")}
        ${quickEntry("Live Snow", "See powder snapshots, forecast shifts, base depth, and alert-worthy windows.", "badge-warm", "snow")}
        ${quickEntry("Trip Builder", "Turn any saved resort into flights, stays, dining, passes, and a day-by-day plan.", "badge-pine", "planner")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <span class="eyebrow" style="background: rgba(46,102,255,0.12); color: var(--brand-strong);">Live Snapshot</span>
          <h2>Practical depth without visual overload</h2>
          <p>The homepage still inspires, but it also starts helping immediately with snow, value, events, and bookable pathways.</p>
        </div>
        <button class="outline-btn" data-action="navigate" data-view="discover">Open full explorer</button>
      </div>
      <div class="card-grid">
        ${bestSnow
          .map(
            (resort) => `
            <article class="guide-card">
              <span class="mini-badge badge-blue">Fresh snow</span>
              <h3>${resort.name}</h3>
              <p>${resort.summary}</p>
              <div class="chip-row" style="margin-top: 14px;">
                <span class="chip">${formatFreshSnow(resort)} new</span>
                <span class="chip">${formatSnowDepth(resort)} base</span>
                <span class="chip">${resort.liftsOpen} lifts open</span>
              </div>
              <div class="hero-actions" style="margin-top: 16px;">
                <button class="outline-btn" data-action="select-resort" data-id="${resort.id}">View resort</button>
              </div>
            </article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="section">
      <div class="feature-split">
        <article class="feature-card">
          <span class="mini-badge badge-blue">Top experiences</span>
          <h3 class="panel-title">Plan faster with destination-ready modules</h3>
          <p>
            Save time by moving directly from resort shortlisting into real trip-building decisions.
          </p>
          <div class="guide-grid" style="margin-top: 18px;">
            ${offers
              .map(
                (offer, index) => `
                <article class="guide-card">
                  <span class="mini-badge ${index === 0 ? "badge-lime" : index === 1 ? "badge-blue" : "badge-warm"}">${offer.kicker}</span>
                  <h3>${offer.title}</h3>
                  <p>${offer.note}</p>
                </article>`,
              )
              .join("")}
          </div>
        </article>
        <article class="feature-card">
          <span class="mini-badge badge-lime">Discover + plan</span>
          <h3 class="panel-title">Map-first discovery with live planning context</h3>
          <div class="feature-visual">
            ${resorts
              .slice(0, 6)
              .map(
                (resort) => `
                <button
                  class="pin ${state.selectedResortId === resort.id ? "is-active" : ""}"
                  style="left: calc(${resort.position.x}% - 8px); top: calc(${resort.position.y}% - 8px);"
                  data-action="select-resort"
                  data-id="${resort.id}"
                  aria-label="Select ${resort.name}"
                ></button>`,
              )
              .join("")}
          </div>
          <div class="chip-row">
            <span class="chip">AI resort matching</span>
            <span class="chip">Region browsing</span>
            <span class="chip">Snow alerts</span>
            <span class="chip">Offers and stays</span>
            <span class="chip">Trip planner</span>
          </div>
        </article>
      </div>
    </section>

    <section class="section stat-strip">
      <div class="section-head" style="margin-bottom: 20px;">
        <div>
          <span class="eyebrow">Why this structure works</span>
          <h2 style="color: white;">The new site leads with clarity, then expands into depth</h2>
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><strong>500+</strong><span>Resorts covered with map-driven discovery</span></div>
        <div class="stat-card"><strong>25+</strong><span>Countries and regional entry points</span></div>
        <div class="stat-card"><strong>94%</strong><span>Match confidence explained with real reasons</span></div>
        <div class="stat-card"><strong>1 flow</strong><span>From inspiration to trip planning without dead ends</span></div>
      </div>
    </section>

    <section class="section cta-banner">
      <span class="eyebrow">Start here</span>
      <h3 class="panel-title" style="color: white; font-size: 2rem;">Build your next alpine trip in one calm workflow</h3>
      <p>
        Choose a resort, compare it, save it, attach snow alerts, drop in a stay, and turn the whole thing into a plan. No page feels crowded, and no deep planning data is lost.
      </p>
      <div class="hero-actions">
        <button class="pill-btn" data-action="navigate" data-view="planner">Start planning my trip</button>
        <button class="ghost-btn" data-action="navigate" data-view="expert">Let the AI propose a trip</button>
      </div>
    </section>
  `;
}

function renderDiscover() {
  const filtered = filteredResorts();
  const countries = ["All", ...new Set(resorts.map((resort) => resort.country))];
  const skills = ["All", ...new Set(resorts.map((resort) => resort.skill))];
  const vibes = ["All", ...new Set(resorts.map((resort) => resort.vibe))];
  return `
    <section class="section-head">
      <div>
        <span class="eyebrow" style="background: rgba(46,102,255,0.12); color: var(--brand-strong);">Discover</span>
        <h2>Map-first resort discovery with clean hierarchy</h2>
        <p>Browse destinations with structured filters, map context, and one clear next action on every result.</p>
      </div>
    </section>
    <div class="page-layout">
      <aside class="sidebar">
        <div class="panel">
          <div class="filter-label">Search</div>
          <input class="search-input" name="search" value="${escapeHtml(state.filters.search)}" placeholder="Search by resort, region, or vibe" />
        </div>
        <div class="panel">
          <div class="filter-label">Country</div>
          <div class="chip-row">
            ${countries
              .map(
                (country) => `
                <button class="chip ${state.filters.country === country ? "is-active" : ""}" data-action="set-filter" data-filter="country" data-value="${country}">
                  ${country}
                </button>`,
              )
              .join("")}
          </div>
        </div>
        <div class="panel">
          <div class="filter-label">Skill</div>
          <div class="chip-row">
            ${skills
              .map(
                (skill) => `
                <button class="chip ${state.filters.skill === skill ? "is-active" : ""}" data-action="set-filter" data-filter="skill" data-value="${skill}">
                  ${skill}
                </button>`,
              )
              .join("")}
          </div>
        </div>
        <div class="panel">
          <div class="filter-label">Trip vibe</div>
          <div class="chip-row">
            ${vibes
              .map(
                (vibe) => `
                <button class="chip ${state.filters.vibe === vibe ? "is-active" : ""}" data-action="set-filter" data-filter="vibe" data-value="${vibe}">
                  ${vibe}
                </button>`,
              )
              .join("")}
          </div>
        </div>
        <div class="panel">
          <span class="mini-badge badge-lime">Improvement</span>
          <h3 class="panel-title">Dense, but no longer noisy</h3>
          <p>
            Instead of three competing columns and static long lists, this explorer keeps the map, filters, and list in one decision-focused flow.
          </p>
        </div>
      </aside>
      <section>
        <div class="discover-top">
          <div class="mini-map">
            <div class="map-caption">
              <strong>${filtered.length} resorts matched</strong>
              <div class="muted" style="color: rgba(255,255,255,0.78); margin-top: 4px;">Pins stay visible, details stay in the list, and the selected resort always has a clear next step.</div>
            </div>
            ${filtered
              .map(
                (resort) => `
                <button
                  class="pin ${state.selectedResortId === resort.id ? "is-active" : ""}"
                  style="left: calc(${resort.position.x}% - 8px); top: calc(${resort.position.y}% - 8px);"
                  data-action="select-resort"
                  data-id="${resort.id}"
                  aria-label="Open ${resort.name}"
                ></button>`,
              )
              .join("")}
          </div>
          <div class="panel">
            <span class="mini-badge badge-blue">Selected resort</span>
            <h3 class="panel-title">${selectedResort().name}</h3>
            <p>${selectedResort().summary}</p>
            <div class="resort-meta" style="margin-top: 16px;">
              <div class="meta-pill"><strong>${formatFreshSnow(selectedResort())}</strong><span>Fresh snow</span></div>
              <div class="meta-pill"><strong>${formatSnowDepth(selectedResort())}</strong><span>Base depth</span></div>
              <div class="meta-pill"><strong>${selectedResort().liftsOpen}</strong><span>Lifts open</span></div>
              <div class="meta-pill"><strong>${selectedResort().price}</strong><span>Budget band</span></div>
            </div>
            <div class="hero-actions" style="margin-top: 16px;">
              <button class="pill-btn" data-action="navigate" data-view="resort">Open resort page</button>
              <button class="ghost-btn" data-action="toggle-save" data-id="${selectedResort().id}">
                ${state.savedResorts.has(selectedResort().id) ? "Saved to trips" : "Save resort"}
              </button>
            </div>
          </div>
        </div>
        <div class="resort-list">
          ${filtered
            .map(
              (resort) => `
              <article class="list-card">
                <div class="filter-row" style="justify-content: space-between; align-items: start;">
                  <div>
                    <span class="mini-badge badge-blue">${resort.country} • ${resort.region}</span>
                    <h3>${resort.name}</h3>
                    <p>${resort.summary}</p>
                  </div>
                  <div class="meta-pill">
                    <strong>${resort.match}%</strong>
                    <span>AI fit</span>
                  </div>
                </div>
                <div class="resort-meta">
                  <div class="meta-pill"><strong>${resort.skill}</strong><span>Best skill fit</span></div>
                  <div class="meta-pill"><strong>${resort.vibe}</strong><span>Trip style</span></div>
                  <div class="meta-pill"><strong>${formatFreshSnow(resort)}</strong><span>New snow</span></div>
                  <div class="meta-pill"><strong>${resort.pass}</strong><span>Pass info</span></div>
                </div>
                <div class="chip-row">${resort.reasons.map((reason) => `<span class="chip">${reason}</span>`).join("")}</div>
                <div class="detail-actions">
                  <button class="pill-btn" data-action="select-resort" data-id="${resort.id}">View details</button>
                  <button class="outline-btn" data-action="toggle-compare" data-id="${resort.id}">
                    ${state.compareResorts.has(resort.id) ? "Remove compare" : "Compare"}
                  </button>
                  <button class="ghost-btn" data-action="toggle-save" data-id="${resort.id}">
                    ${state.savedResorts.has(resort.id) ? "Saved" : "Save"}
                  </button>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderResort() {
  const resort = selectedResort();
  return `
    <section class="section-head">
      <div>
        <span class="eyebrow" style="background: rgba(31,95,84,0.12); color: var(--pine);">Resort detail</span>
        <h2>${resort.name}</h2>
        <p>${resort.country} • ${resort.region} • ${resort.summary}</p>
      </div>
      <div class="detail-actions">
        <button class="ghost-btn" data-action="toggle-save" data-id="${resort.id}">
          ${state.savedResorts.has(resort.id) ? "Saved to My Trips" : "Save resort"}
        </button>
        <button class="pill-btn" data-action="navigate" data-view="planner">Plan this trip</button>
      </div>
    </section>
    <div class="detail-layout">
      <section class="stack">
        <article class="hero-panel">
          <span class="mini-badge badge-lime">Why it’s a top pick</span>
          <h3 class="panel-title" style="font-size: 2rem; color: white;">A decision-ready resort page</h3>
          <p>
            The page keeps all the important trip details together in focused modules, with the next action always visible.
          </p>
          <div class="detail-grid" style="margin-top: 18px;">
            <div class="metric"><small>Fresh snow</small><strong>${formatFreshSnow(resort)}</strong></div>
            <div class="metric"><small>Base depth</small><strong>${formatSnowDepth(resort)}</strong></div>
            <div class="metric"><small>Lift access</small><strong>${resort.liftsOpen}</strong></div>
          </div>
        </article>
        <article class="panel">
          <span class="mini-badge badge-blue">Overview</span>
          <div class="detail-grid" style="margin-top: 14px;">
            <div class="metric"><small>Skill fit</small><strong>${resort.skill}</strong></div>
            <div class="metric"><small>Trip vibe</small><strong>${resort.vibe}</strong></div>
            <div class="metric"><small>Airport</small><strong>${resort.airport}</strong></div>
            <div class="metric"><small>Pass info</small><strong>${resort.pass}</strong></div>
            <div class="metric"><small>Trail count</small><strong>${resort.trailCount}</strong></div>
            <div class="metric"><small>Lifts</small><strong>${resort.lifts}</strong></div>
          </div>
        </article>
        <article class="panel">
          <span class="mini-badge badge-warm">Best parts to keep</span>
          <h3 class="panel-title">Resort content organized by decision, not by noise</h3>
          <div class="card-grid" style="margin-top: 16px;">
            ${resort.highlights
              .map(
                (item, index) => `
                <div class="metric">
                  <small>Highlight ${index + 1}</small>
                  <strong style="font-size: 1rem; line-height: 1.5;">${item}</strong>
                </div>`,
              )
              .join("")}
          </div>
        </article>
      </section>
      <aside class="sticky-panel stack">
        <div class="summary-card">
          <span class="mini-badge badge-blue">Snow watch</span>
          <h3>${resort.alerts}</h3>
          <p>${formatCurrentTemp(resort)} expected tomorrow with ${resort.liftsOpen} of lifts currently running.</p>
          <div class="hero-actions" style="margin-top: 16px;">
            <button class="outline-btn" data-action="navigate" data-view="snow">Open snow hub</button>
          </div>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-lime">Live map data</span>
          <h3>${skiGeoFor(resort)?.counts?.pistes ?? "..." } pistes nearby</h3>
          <p>${skiGeoFor(resort)?.counts?.lifts ?? "..."} mapped lifts and ${skiGeoFor(resort)?.counts?.stations ?? "..."} stations from OpenStreetMap.</p>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-lime">Stay</span>
          <h3>${resort.stay}</h3>
          <p>Accommodation search is integrated into the same workflow, rather than being hidden in a disconnected right rail.</p>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-warm">Event</span>
          <h3>${resort.event}</h3>
          <p>Events remain visible and useful, but they support the resort story instead of stealing attention from it.</p>
        </div>
      </aside>
    </div>
  `;
}

function renderSnow() {
  const sorted = [...resorts].sort((a, b) => parseInt(formatSnowDepth(b), 10) - parseInt(formatSnowDepth(a), 10));
  return `
    <section class="section-head">
      <div>
        <span class="eyebrow" style="background: rgba(46,102,255,0.12); color: var(--brand-strong);">Snow intelligence</span>
        <h2>Live snow, forecast context, and decision-ready comparisons</h2>
        <p>Compare live snow conditions, current depth, and short-term forecast shifts across your shortlist.</p>
      </div>
    </section>
    <div class="snow-layout">
      <section class="stack">
        <div class="snow-grid">
          ${sorted
            .slice(0, 6)
            .map(
              (resort) => `
              <article class="metric">
                <small>${resort.name}</small>
                <strong>${formatSnowDepth(resort)}</strong>
                <span class="muted">${formatFreshSnow(resort)} new • ${resort.liftsOpen} lifts open</span>
              </article>`,
            )
            .join("")}
        </div>
        <article class="panel">
          <span class="mini-badge badge-blue">Compare today</span>
          <div class="snow-table" style="margin-top: 16px;">
            ${sorted
              .map(
                (resort) => `
                <div class="snow-row">
                  <div>
                    <strong>${resort.name}</strong>
                    <small>${resort.country} • ${resort.region}</small>
                  </div>
                  <div><strong>${formatSnowDepth(resort)}</strong><small>Base</small></div>
                  <div><strong>${formatFreshSnow(resort)}</strong><small>New snow</small></div>
                  <div><strong>${resort.liftsOpen}</strong><small>Lifts open</small></div>
                  <div><strong>${formatCurrentTemp(resort)}</strong><small>Temp</small></div>
                </div>`,
              )
              .join("")}
          </div>
        </article>
      </section>
      <aside class="stack">
        <div class="summary-card">
          <span class="mini-badge badge-lime">Best powder today</span>
          <h3>${sorted[0].name}</h3>
          <p>${formatFreshSnow(sorted[0])} overnight with one of the strongest base depths in the current watchlist.</p>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-warm">Watchlist logic</span>
          <p>Alerts tie directly into trip planning, saved resorts, and resort pages so live snow actually changes user decisions.</p>
          <div class="hero-actions" style="margin-top: 14px;">
            <button class="outline-btn" data-action="navigate" data-view="dashboard">Open alerts and saves</button>
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderPlanner() {
  const resort = selectedResort();
  return `
    <section class="section-head">
      <div>
        <span class="eyebrow" style="background: rgba(204,242,108,0.24); color: #58710f;">Trip planner</span>
        <h2>One workflow from destination to booking readiness</h2>
        <p>Discovery, accommodation, transport, passes, events, and alerts all live in one planning flow.</p>
      </div>
      <button class="pill-btn" data-action="navigate" data-view="expert">Have AI propose the itinerary</button>
    </section>
    <div class="planner-layout">
      <aside class="sidebar stack">
        <div class="summary-card">
          <span class="mini-badge badge-blue">Trip progress</span>
          <h3>${plannerCompletion()}% complete</h3>
          <p>${resort.name} is currently your lead resort. Saved stays, offers, and alerts all feed this plan automatically.</p>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-lime">Current destination</span>
          <h3>${resort.name}</h3>
          <p>${resort.country} • ${resort.region} • ${resort.pass}</p>
        </div>
      </aside>
      <section class="stack">
        ${plannerTemplate
          .map(
            (step) => `
            <article class="planner-step ${state.plannerChecks[step.id] ? "is-done" : ""}">
              <div class="filter-row" style="justify-content: space-between; align-items: start;">
                <div>
                  <span class="mini-badge ${state.plannerChecks[step.id] ? "badge-lime" : "badge-blue"}">${state.plannerChecks[step.id] ? "Done" : "Next step"}</span>
                  <h3 class="panel-title">${step.title}</h3>
                  <p>${step.detail}</p>
                </div>
                <button class="outline-btn" data-action="toggle-plan-step" data-id="${step.id}">
                  ${state.plannerChecks[step.id] ? "Mark open" : "Mark done"}
                </button>
              </div>
            </article>`,
          )
          .join("")}
      </section>
      <aside class="sticky-panel stack">
        <div class="summary-card">
          <span class="mini-badge badge-warm">Budget frame</span>
          <div class="trip-grid" style="margin-top: 14px;">
            <div class="meta-pill"><strong>${resort.pass}</strong><span>Pass info</span></div>
            <div class="meta-pill"><strong>${resort.price}</strong><span>Stay band</span></div>
            <div class="meta-pill"><strong>${offers[0].price}</strong><span>Package benchmark</span></div>
          </div>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-blue">Useful improvement</span>
          <p>Offers and package benchmarks feed directly into one actionable budget view.</p>
        </div>
      </aside>
    </div>
  `;
}

function renderExpert() {
  const resort = selectedResort();
  const answer = buildExpertAnswer(resort, state.expertQuestion);
  const prompts = [
    "Build me a high-snow, high-comfort trip with strong dining and an easy transfer.",
    "Which resort fits a mixed-skill friend group with one strong skier and two cruisers?",
    "Show me the best value week with real terrain and not just beginner slopes.",
  ];
  return `
    <section class="section-head">
      <div>
        <span class="eyebrow" style="background: rgba(46,102,255,0.12); color: var(--brand-strong);">Expert AI</span>
        <h2>Helpful guidance without vague labels</h2>
        <p>The navigation says exactly what this tool does: it answers planning questions, explains why a resort fits, and pushes useful actions into the rest of the site.</p>
      </div>
    </section>
    <div class="expert-layout">
      <section class="stack">
        <article class="chat-card">
          <div class="filter-label">Your question</div>
          <textarea class="textarea" rows="4" name="expertQuestion">${escapeHtml(state.expertQuestion)}</textarea>
          <div class="hero-actions" style="margin-top: 16px;">
            <button class="pill-btn" data-action="refresh-expert">Generate answer</button>
            <button class="ghost-btn" data-action="navigate" data-view="planner">Turn this into a trip</button>
          </div>
        </article>
        <article class="chat-card">
          <span class="mini-badge badge-blue">Answer</span>
          <h3 class="panel-title">${answer.title}</h3>
          <div class="chat-bubble">
            <p>${answer.summary}</p>
          </div>
          <div class="card-grid" style="margin-top: 18px;">
            ${answer.points
              .map(
                (point) => `
                <div class="metric">
                  <small>${point.label}</small>
                  <strong style="font-size: 1rem; line-height: 1.5;">${point.value}</strong>
                </div>`,
              )
              .join("")}
          </div>
        </article>
      </section>
      <aside class="stack">
        <div class="summary-card">
          <span class="mini-badge badge-lime">Suggested prompts</span>
          <div class="chat-suggestions" style="margin-top: 14px;">
            ${prompts
              .map(
                (prompt) => `
                <button class="outline-btn" data-action="set-expert-prompt" data-prompt="${escapeAttr(prompt)}">${prompt}</button>`,
              )
              .join("")}
          </div>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-warm">Current lead resort</span>
          <h3>${resort.name}</h3>
          <p>${resort.reasons.join(", ")}.</p>
        </div>
      </aside>
    </div>
  `;
}

function renderDashboard() {
  const saved = resorts.filter((resort) => state.savedResorts.has(resort.id));
  const compare = resorts.filter((resort) => state.compareResorts.has(resort.id));
  return `
    <section class="section-head">
      <div>
        <span class="eyebrow" style="background: rgba(31,95,84,0.12); color: var(--pine);">My trips</span>
        <h2>Saved resorts, compares, alerts, and active planning in one place</h2>
        <p>Instead of a vague “dashboard,” this area is explicitly about trip momentum and decision tracking.</p>
      </div>
    </section>
    <div class="dashboard-layout">
      <section class="stack">
        <div class="dashboard-cards">
          <article class="summary-card">
            <span class="mini-badge badge-blue">Saved resorts</span>
            <h3>${saved.length}</h3>
            <p>Resorts you want to revisit or use as lead candidates.</p>
          </article>
          <article class="summary-card">
            <span class="mini-badge badge-lime">Compare set</span>
            <h3>${compare.length}</h3>
            <p>Side-by-side shortlisting without losing your place.</p>
          </article>
          <article class="summary-card">
            <span class="mini-badge badge-warm">Snow alerts</span>
            <h3>3 active</h3>
            <p>Powder windows and weather triggers tied to saved destinations.</p>
          </article>
          <article class="summary-card">
            <span class="mini-badge badge-pine">Planner completion</span>
            <h3>${plannerCompletion()}%</h3>
            <p>Current trip plan progress with the selected resort.</p>
          </article>
        </div>
        <article class="panel">
          <span class="mini-badge badge-blue">Saved resorts</span>
          <div class="resort-list" style="margin-top: 16px;">
            ${saved
              .map(
                (resort) => `
                <div class="list-card">
                  <div class="filter-row" style="justify-content: space-between;">
                    <div>
                      <h3>${resort.name}</h3>
                      <p>${resort.country} • ${resort.region} • ${resort.summary}</p>
                    </div>
                    <button class="outline-btn" data-action="select-resort" data-id="${resort.id}">Open</button>
                  </div>
                </div>`,
              )
              .join("")}
          </div>
        </article>
      </section>
      <aside class="stack">
        <div class="summary-card">
          <span class="mini-badge badge-lime">Active alerts</span>
          <h3>${selectedResort().name}</h3>
          <p>${selectedResort().alerts}</p>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-blue">API status</span>
          <h3>${serviceStatusLabel("weather")}</h3>
          <p>Hotels: ${serviceStatusLabel("hotels")} • Flights: ${serviceStatusLabel("flights")} • Events: ${serviceStatusLabel("events")}</p>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-blue">Compare shortlist</span>
          <div class="chip-row" style="margin-top: 12px;">
            ${compare.map((resort) => `<span class="chip">${resort.name}</span>`).join("")}
          </div>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-warm">Events you may care about</span>
          <div class="event-list" style="margin-top: 14px;">
            ${events
              .slice(0, 2)
              .map(
                (event) => `
                <div class="event-card">
                  <h3>${event.title}</h3>
                  <p>${event.location} • ${event.date}</p>
                </div>`,
              )
              .join("")}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderDock(resort) {
  const compare = resorts.filter((item) => state.compareResorts.has(item.id) && item.id !== resort.id);
  return `
    <div class="dock">
      <div class="dock-panel">
        <div class="dock-col">
          <strong>Current lead:</strong>
          <span class="dock-chip">${resort.name}</span>
          ${compare.map((item) => `<span class="dock-chip">${item.name}</span>`).join("")}
        </div>
        <div class="dock-col">
          <button class="ghost-btn" data-action="navigate" data-view="resort">Resort page</button>
          <button class="ghost-btn" data-action="navigate" data-view="planner">Trip planner</button>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <div class="brand">
            <span class="brand-mark">✦</span>
            <span class="brand-copy">
              <strong style="color: white;">PeakPilot Alpine</strong>
              <span style="color: rgba(255,255,255,0.64);">Modern resort discovery with serious trip utility</span>
            </span>
          </div>
          <p>A mountain travel platform for destination discovery, live snow tracking, and connected trip planning.</p>
        </div>
        <div>
          <ul>
            <li>Discover resorts by map, country, skill, and trip vibe</li>
            <li>Track live snow and create useful alert flows</li>
            <li>Connect resorts, stays, and events into one plan</li>
            <li>${integrationSummary()}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Weather: ${serviceStatusLabel("weather")}</li>
            <li>Ski geodata: ${serviceStatusLabel("skiGeo")}</li>
            <li>Hotels / flights / events can be activated with API keys in .env</li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}

function renderMobileNav() {
  const items = [
    ["home", "Home"],
    ["discover", "Explore"],
    ["snow", "Snow"],
    ["planner", "Plan"],
    ["dashboard", "Trips"],
  ];
  return `
    <nav class="mobile-nav" aria-label="Mobile navigation">
      ${items
        .map(
          ([view, label]) => `
          <button class="${state.view === view ? "is-active" : ""}" data-action="navigate" data-view="${view}">
            <span>${label}</span>
          </button>`,
        )
        .join("")}
    </nav>
  `;
}

function buildExpertAnswer(resort, question) {
  return {
    title: `Best fit right now: ${resort.name}`,
    summary: `For "${question}", I would lead with ${resort.name}. It combines ${resort.reasons[0].toLowerCase()}, ${resort.reasons[1].toLowerCase()}, and a planning setup that remains practical once flights, lodging, and resort logistics are added. The improved site structure keeps that recommendation transparent by showing the snow window, stay style, and event context in one place rather than scattering them across separate pages.`,
    points: [
      { label: "Why it fits", value: resort.reasons.join(", ") },
      { label: "Watch next", value: resort.alerts },
      { label: "Planning edge", value: `${resort.airport} access and ${resort.stay.toLowerCase()}` },
    ],
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;

  if (action === "navigate") state.view = target.dataset.view;

  if (action === "set-filter") state.filters[target.dataset.filter] = target.dataset.value;

  if (action === "select-resort") {
    state.selectedResortId = target.dataset.id;
    state.view = "resort";
  }

  if (action === "toggle-save") {
    const id = target.dataset.id;
    if (state.savedResorts.has(id)) state.savedResorts.delete(id);
    else state.savedResorts.add(id);
  }

  if (action === "toggle-compare") {
    const id = target.dataset.id;
    if (state.compareResorts.has(id)) state.compareResorts.delete(id);
    else {
      if (state.compareResorts.size >= 3) {
        const first = state.compareResorts.values().next().value;
        state.compareResorts.delete(first);
      }
      state.compareResorts.add(id);
    }
  }

  if (action === "toggle-plan-step") {
    const id = target.dataset.id;
    state.plannerChecks[id] = !state.plannerChecks[id];
  }

  if (action === "set-expert-prompt") {
    state.expertQuestion = target.dataset.prompt;
    state.view = "expert";
  }

  render();
});

document.addEventListener("input", (event) => {
  if (event.target.name === "search") {
    state.filters.search = event.target.value;
    render();
  }

  if (event.target.name === "expertQuestion") state.expertQuestion = event.target.value;
});

render();
