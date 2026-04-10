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
  {
    id: "courchevel",
    name: "Courchevel",
    country: "France",
    region: "Les 3 Vallees",
    skill: "Mixed",
    vibe: "Luxury alpine",
    price: "$$$$",
    match: 92,
    baseDepth: "165 cm",
    freshSnow: "22 cm",
    liftsOpen: "93%",
    temp: "-6°C",
    trailCount: 600,
    lifts: 156,
    summit: "3,230 m",
    lat: 45.4154,
    lon: 6.6345,
    airport: "Geneva (GVA)",
    pass: "From EUR 79/day",
    position: { x: 60, y: 55 },
    summary:
      "Prestige villages, huge linked skiing, and polished service make Courchevel one of the Alps' flagship destination resorts.",
    reasons: ["Massive ski domain", "Luxury stay options", "Strong mixed-group fit"],
    highlights: [
      "Direct access to the vast Three Valleys network",
      "High-end dining, chalets, and concierge-ready stays",
      "Wide terrain mix for confident skiers and social groups",
    ],
    alerts: "Snow bands returning overnight above the mid-mountain line",
    event: "Summit Gastronomy Week",
    stay: "Palace hotels, serviced chalets, slope-side residences",
  },
  {
    id: "chamonix",
    name: "Chamonix",
    country: "France",
    region: "Haute-Savoie",
    skill: "Advanced",
    vibe: "Legendary alpine",
    price: "$$$",
    match: 91,
    baseDepth: "142 cm",
    freshSnow: "20 cm",
    liftsOpen: "81%",
    temp: "-8°C",
    trailCount: 150,
    lifts: 49,
    summit: "3,842 m",
    lat: 45.9237,
    lon: 6.8694,
    airport: "Geneva (GVA)",
    pass: "From EUR 73/day",
    position: { x: 62, y: 53 },
    summary:
      "High-mountain character, famous off-piste terrain, and a real alpine town atmosphere make Chamonix a classic.",
    reasons: ["Iconic terrain", "True alpine town", "Expert appeal"],
    highlights: [
      "Legendary access to steep terrain and high-altitude routes",
      "A large town base with dining, shops, and nightlife",
      "A destination feel that stays authentic and serious",
    ],
    alerts: "Variable visibility on the upper mountain, best skiing lower early",
    event: "Mont Blanc Mountain Film Nights",
    stay: "Town hotels, alpine apartments, guide-focused lodges",
  },
  {
    id: "soelden",
    name: "Solden",
    country: "Austria",
    region: "Tyrol",
    skill: "Mixed",
    vibe: "High-altitude snow",
    price: "$$$",
    match: 90,
    baseDepth: "176 cm",
    freshSnow: "24 cm",
    liftsOpen: "90%",
    temp: "-7°C",
    trailCount: 144,
    lifts: 31,
    summit: "3,340 m",
    lat: 46.9698,
    lon: 11.0076,
    airport: "Innsbruck (INN)",
    pass: "From EUR 76/day",
    position: { x: 59, y: 53 },
    summary:
      "Reliable glacier access, long season snow, and a lively Austrian village make Solden a dependable big-trip option.",
    reasons: ["Altitude security", "Glacier terrain", "Lively village energy"],
    highlights: [
      "Strong snow reliability thanks to glacier access",
      "Wide groomers paired with high-mountain viewpoints",
      "A social village with easy transfer logistics",
    ],
    alerts: "Best snow staying on glacier sectors through the next two mornings",
    event: "Glacier Sunset Sessions",
    stay: "Design hotels, apartments, spa-forward stays",
  },
  {
    id: "kitzbuehel",
    name: "Kitzbuhel",
    country: "Austria",
    region: "Tyrol",
    skill: "Intermediate",
    vibe: "Classic alpine town",
    price: "$$$$",
    match: 89,
    baseDepth: "132 cm",
    freshSnow: "14 cm",
    liftsOpen: "89%",
    temp: "-4°C",
    trailCount: "233 km",
    lifts: 58,
    summit: "2,000 m",
    lat: 47.4464,
    lon: 12.3926,
    airport: "Salzburg (SZG)",
    pass: "From EUR 75/day",
    position: { x: 60, y: 49 },
    summary:
      "A charming medieval town, efficient ski network, and polished Austrian hospitality keep Kitzbuhel in heavy rotation.",
    reasons: ["Town atmosphere", "Polished logistics", "Cruising terrain"],
    highlights: [
      "A destination town with real character and walkable streets",
      "Broad piste network with strong intermediate appeal",
      "Prestige events and premium guest experience",
    ],
    alerts: "Firm early corduroy with softer lower slopes by lunch",
    event: "Hahnenkamm Festival Week",
    stay: "Historic hotels, boutique stays, stylish apartments",
  },
  {
    id: "vail",
    name: "Vail",
    country: "USA",
    region: "Colorado",
    skill: "Mixed",
    vibe: "Big-mountain luxury",
    price: "$$$$",
    match: 88,
    baseDepth: "181 cm",
    freshSnow: "17 cm",
    liftsOpen: "94%",
    temp: "-10°C",
    trailCount: 278,
    lifts: 31,
    summit: "3,527 m",
    lat: 39.6061,
    lon: -106.355,
    airport: "Denver (DEN)",
    pass: "Epic Pass or USD 259/day",
    position: { x: 20, y: 42 },
    summary:
      "Back bowls, strong village infrastructure, and upscale Rocky Mountain planning make Vail a major flagship resort.",
    reasons: ["Back bowl terrain", "Luxury village", "Strong family and group fit"],
    highlights: [
      "Large scale and iconic open bowl skiing",
      "Well-developed lodging, dining, and transfer ecosystem",
      "A dependable choice for polished destination trips",
    ],
    alerts: "Cooler overnight temperatures improving snow quality for the bowls",
    event: "Vail Snow Nights",
    stay: "Village hotels, residences, premium condos",
  },
  {
    id: "park-city",
    name: "Park City",
    country: "USA",
    region: "Utah",
    skill: "Mixed",
    vibe: "Easy-access giant",
    price: "$$$",
    match: 87,
    baseDepth: "154 cm",
    freshSnow: "16 cm",
    liftsOpen: "92%",
    temp: "-8°C",
    trailCount: 330,
    lifts: 41,
    summit: "3,049 m",
    lat: 40.6514,
    lon: -111.5078,
    airport: "Salt Lake City (SLC)",
    pass: "Epic Pass or USD 269/day",
    position: { x: 23, y: 43 },
    summary:
      "Huge skiable acreage, one of the easiest airport transfers in North America, and a lively main street base.",
    reasons: ["Fast transfer", "Huge ski footprint", "Good mixed-group value"],
    highlights: [
      "Short transfer time from a major international airport",
      "Big terrain spread suited to long ski weeks",
      "A resort town with nightlife, events, and dining variety",
    ],
    alerts: "Sunny start before cloud thickens into tomorrow afternoon",
    event: "Main Street Winter Series",
    stay: "Historic inns, condos, mountain hotels",
  },
  {
    id: "aspen-snowmass",
    name: "Aspen Snowmass",
    country: "USA",
    region: "Colorado",
    skill: "Mixed",
    vibe: "Premium multi-mountain",
    price: "$$$$",
    match: 90,
    baseDepth: "170 cm",
    freshSnow: "18 cm",
    liftsOpen: "90%",
    temp: "-9°C",
    trailCount: 336,
    lifts: 42,
    summit: "3,813 m",
    lat: 39.1911,
    lon: -106.8175,
    airport: "Aspen (ASE)",
    pass: "From USD 244/day",
    position: { x: 19, y: 43 },
    summary:
      "Four distinct mountains, upscale service, and a famous social scene make Aspen Snowmass a complete destination play.",
    reasons: ["Multi-mountain variety", "Premium service", "Strong dining and culture"],
    highlights: [
      "Different mountain personalities within one destination",
      "Strong terrain spread from cruisers to advanced lines",
      "High-end food, events, and polished lodging",
    ],
    alerts: "Dry cold pattern preserving chalky snow on upper faces",
    event: "Aspen Alpine Art Weekend",
    stay: "Luxury hotels, designer condos, family residences",
  },
  {
    id: "tignes",
    name: "Tignes",
    country: "France",
    region: "Savoie",
    skill: "Advanced",
    vibe: "Snow-sure altitude",
    price: "$$$",
    match: 89,
    baseDepth: "188 cm",
    freshSnow: "26 cm",
    liftsOpen: "93%",
    temp: "-8°C",
    trailCount: 300,
    lifts: 78,
    summit: "3,456 m",
    lat: 45.4693,
    lon: 6.9059,
    airport: "Lyon (LYS)",
    pass: "From EUR 72/day",
    position: { x: 62, y: 54 },
    summary:
      "High-altitude access, dependable conditions, and linked skiing with Val d'Isere make Tignes a snow-first favorite.",
    reasons: ["High altitude", "Long season", "Strong advanced terrain"],
    highlights: [
      "One of the Alps' more reliable snow bets",
      "Fast lift network with glacier access",
      "Popular for groups that prioritize skiing over formality",
    ],
    alerts: "Fresh wind-drifted snow likely on high ridgelines after tonight",
    event: "Glacier Light Festival",
    stay: "Slope-side apartments, sport hotels, group lodges",
  },
  {
    id: "la-plagne",
    name: "La Plagne",
    country: "France",
    region: "Savoie",
    skill: "Family",
    vibe: "Big terrain value",
    price: "$$",
    match: 86,
    baseDepth: "149 cm",
    freshSnow: "18 cm",
    liftsOpen: "90%",
    temp: "-5°C",
    trailCount: 225,
    lifts: 74,
    summit: "3,250 m",
    lat: 45.5067,
    lon: 6.6779,
    airport: "Lyon (LYS)",
    pass: "From EUR 67/day",
    position: { x: 61, y: 54 },
    summary:
      "A large practical French ski base with broad terrain, family-friendly logistics, and strong value for longer stays.",
    reasons: ["Family scale", "Value", "Large linked terrain"],
    highlights: [
      "Big terrain with easier planning than prestige resorts nearby",
      "Strong apartment stock for week-long stays",
      "Useful mixed-ability flow across linked sectors",
    ],
    alerts: "Snowpack holding well on north-facing runs through midweek",
    event: "Paradiski Family Glow Run",
    stay: "Residences, self-catered apartments, family hotels",
  },
  {
    id: "cortina",
    name: "Cortina d'Ampezzo",
    country: "Italy",
    region: "Dolomites",
    skill: "Intermediate",
    vibe: "Stylish Dolomites",
    price: "$$$$",
    match: 88,
    baseDepth: "121 cm",
    freshSnow: "12 cm",
    liftsOpen: "88%",
    temp: "-3°C",
    trailCount: 120,
    lifts: 35,
    summit: "2,939 m",
    lat: 46.5405,
    lon: 12.1357,
    airport: "Venice (VCE)",
    pass: "From EUR 78/day",
    position: { x: 63, y: 57 },
    summary:
      "Elegant town life, dramatic Dolomite scenery, and social appeal give Cortina a distinctive high-style identity.",
    reasons: ["Dolomite scenery", "Stylish town", "Intermediate appeal"],
    highlights: [
      "A beautiful town base with boutique shopping and dining",
      "Panoramic skiing and linked Dolomite excursions",
      "Strong fit for scenic, social destination trips",
    ],
    alerts: "Best visibility expected tomorrow morning before higher cloud",
    event: "Dolomite Style Weekend",
    stay: "Boutique hotels, design apartments, luxury chalets",
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
const COUNTRY_CODES = {
  Austria: "AT",
  Canada: "CA",
  France: "FR",
  Italy: "IT",
  Japan: "JP",
  Switzerland: "CH",
  USA: "US",
};
const apiState = {
  config: null,
  weatherByResort: {},
  weatherStatusByResort: {},
  skiGeoByResort: {},
  locationByResort: {},
  nearbyByResort: {},
  eventsByResort: {},
  pending: new Set(),
};
let discoverMap = null;
let resortDetailMap = null;
let scheduledRender = null;

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

function scheduleRender() {
  if (scheduledRender) window.clearTimeout(scheduledRender);
  scheduledRender = window.setTimeout(() => {
    scheduledRender = null;
    render();
  }, 600);
}

function selectedResort() {
  return resorts.find((resort) => resort.id === state.selectedResortId) || resorts[0];
}

function discoverFocusResort() {
  const filtered = filteredResorts();
  return filtered.find((resort) => resort.id === state.selectedResortId) || filtered[0] || selectedResort();
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

function locationFor(resort) {
  return apiState.locationByResort[resort.id] || null;
}

function nearbyFor(resort) {
  return apiState.nearbyByResort[resort.id] || null;
}

function eventsFor(resort) {
  return apiState.eventsByResort[resort.id] || [];
}

function serviceEnabled(key) {
  return Boolean(apiState.config?.integrations?.[key]?.enabled);
}

function countryCodeFor(resort) {
  return COUNTRY_CODES[resort.country] || "";
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

function formatAreaLabel(resort) {
  return locationFor(resort)?.areaLabel || `${resort.region}, ${resort.country}`;
}

function featuredEventFor(resort) {
  return eventsFor(resort)[0] || null;
}

function weatherStatusFor(resort) {
  return apiState.weatherStatusByResort[resort.id] || "idle";
}

function weatherLabelFromCode(code) {
  const labels = {
    0: "Clear",
    1: "Mostly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Rime fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Dense drizzle",
    56: "Freezing drizzle",
    57: "Heavy freezing drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    66: "Freezing rain",
    67: "Heavy freezing rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Rain showers",
    81: "Heavy showers",
    82: "Violent showers",
    85: "Snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Storm and hail",
    99: "Severe storm",
  };
  return labels[code] || "Mountain weather";
}

function formatTempValue(value) {
  if (value == null) return "--";
  return `${Math.round(value)}C`;
}

function formatWindValue(value) {
  if (value == null) return "--";
  return `${Math.round(value)} km/h`;
}

function formatPrecipValue(value) {
  if (value == null) return "--";
  return `${Math.round(value)} mm`;
}

function shortDayLabel(value) {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { weekday: "short" });
}

function shortDateLabel(value) {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatCurrentWeatherLabel(resort) {
  if (!weatherFor(resort)?.current) return "Loading";
  return weatherLabelFromCode(weatherFor(resort)?.current?.weatherCode);
}

function currentTempLabel(resort) {
  if (weatherFor(resort)?.current?.temperatureC != null) {
    return formatTempValue(weatherFor(resort).current.temperatureC);
  }
  const match = String(resort.temp).match(/-?\d+/);
  return match ? `${match[0]}C` : String(resort.temp);
}

function renderForecastStrip(resort, count = 3) {
  const weather = weatherFor(resort);
  if (!weather?.daily?.length) {
    return `
      <div class="forecast-strip">
        <div class="forecast-card">
          <small>Forecast</small>
          <strong>Loading</strong>
          <span>Live weather is still being fetched for ${resort.name}.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="forecast-strip">
      ${weather.daily.slice(0, count).map(
        (day) => `
        <div class="forecast-card">
          <small>${shortDayLabel(day.date)} · ${shortDateLabel(day.date)}</small>
          <strong>${weatherLabelFromCode(day.weatherCode)}</strong>
          <span>${formatTempValue(day.tempMaxC)} high · ${formatTempValue(day.tempMinC)} low</span>
          <span>${Math.round(day.snowfallCm ?? 0)} cm snow · ${Math.round(day.precipProbabilityMax ?? 0)}% precip</span>
        </div>`,
      ).join("")}
    </div>
  `;
}

function renderForecastGrid(resort) {
  const weather = weatherFor(resort);
  if (!weather?.daily?.length) {
    return `
      <div class="forecast-grid">
        <div class="forecast-card">
          <small>Forecast</small>
          <strong>Loading</strong>
          <span>Live daily forecast is still being fetched for ${resort.name}.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="forecast-grid">
      ${weather.daily.map(
        (day) => `
        <div class="forecast-card">
          <small>${shortDayLabel(day.date)}</small>
          <strong>${weatherLabelFromCode(day.weatherCode)}</strong>
          <span>${formatTempValue(day.tempMaxC)} / ${formatTempValue(day.tempMinC)}</span>
          <span>${Math.round(day.snowfallCm ?? 0)} cm snow</span>
          <span>${Math.round(day.precipProbabilityMax ?? 0)}% precip · ${formatWindValue(day.windSpeedMaxKmh)}</span>
        </div>`,
      ).join("")}
    </div>
  `;
}

const TRAIL_MAPS = {
  "zermatt": "https://skimap.org/data/1004/7/1218552399.jpg",
  "saint-anton": "https://skimap.org/data/111/4/1199388863.jpg",
  "val-gardena": "https://skimap.org/data/278/1/1572528775.jpg",
  "whistler": "https://skimap.org/data/285/1/1511280365.jpg",
  "niseko": "https://skimap.org/data/3261/1/1393699317.jpg",
  "verbier": "https://skimap.org/data/1039/1/1199383617.jpg",
  "les-arcs": "https://skimap.org/data/981/1/1344408139.jpg",
  "banff": "https://skimap.org/data/289/1/1414434283.jpg",
  "courchevel": "https://skimap.org/data/953/1/1547466542.jpg",
  "chamonix": "https://skimap.org/data/969/1/1216342600.jpg",
  "soelden": "https://skimap.org/data/127/1/1541212850.jpg",
  "kitzbuehel": "https://skimap.org/data/104/1/1541258671.jpg",
  "vail": "https://skimap.org/data/239/1/1542127202.jpg",
  "park-city": "https://skimap.org/data/255/1/1446726207.jpg",
  "aspen-snowmass": "https://skimap.org/data/230/1/1448206979.jpg",
  "tignes": "https://skimap.org/data/985/1/1539268670.jpg",
  "la-plagne": "https://skimap.org/data/982/1/1539158372.jpg",
  "cortina": "https://skimap.org/data/268/1/1569429532.jpg"
};

function slopeMapImage(resort) {
  return TRAIL_MAPS[resort.id] || "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&q=80&w=1000";
}

function polylinePoints(values, width, height, padding) {
  const valid = values.filter((value) => value != null);
  if (!valid.length) return "";
  const min = Math.min(...valid);
  const max = Math.max(...valid);
  const span = max - min || 1;
  return values
    .map((value, index) => {
      const x = padding + (index * (width - padding * 2)) / Math.max(values.length - 1, 1);
      const normalized = value == null ? min : value;
      const y = height - padding - ((normalized - min) / span) * (height - padding * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function renderWeatherTrendCharts(resort) {
  const weather = weatherFor(resort);
  if (!weather?.daily?.length) {
    return `
      <div class="chart-grid">
        <article class="chart-card">
          <span class="mini-badge badge-blue">Weather trends</span>
          <p>Live charts are loading for ${resort.name}.</p>
        </article>
      </div>
    `;
  }

  const hourly = weather.hourly?.slice(0, 8) || [];
  const daily = weather.daily.slice(0, 5);
  const width = 420;
  const height = 220;
  const padding = 26;
  const hourlyTemps = hourly.map((item) => item.temperatureC);
  const dailySnow = daily.map((item) => item.snowfallCm ?? 0);
  const dailyWind = daily.map((item) => item.windSpeedMaxKmh ?? 0);
  const tempLine = polylinePoints(hourlyTemps, width, height, padding);
  const windLine = polylinePoints(dailyWind, width, height, padding);
  const maxSnow = Math.max(...dailySnow, 1);

  return `
    <div class="chart-grid">
      <article class="chart-card">
        <span class="mini-badge badge-blue">Next 8 hours</span>
        <h3>Temperature trend</h3>
        <svg viewBox="0 0 ${width} ${height}" class="chart-svg" aria-label="Hourly temperature trend">
          <path d="M ${padding} ${height - padding} H ${width - padding}" class="chart-axis"/>
          <path d="M ${padding} ${padding} V ${height - padding}" class="chart-axis"/>
          <polyline points="${tempLine}" class="chart-line chart-line-temp"/>
          ${hourlyTemps
            .map((value, index) => {
              const x = padding + (index * (width - padding * 2)) / Math.max(hourlyTemps.length - 1, 1);
              const valid = hourlyTemps.filter((item) => item != null);
              const min = Math.min(...valid);
              const max = Math.max(...valid);
              const span = max - min || 1;
              const y = height - padding - (((value ?? min) - min) / span) * (height - padding * 2);
              return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" class="chart-dot"/>`;
            })
            .join("")}
        </svg>
        <div class="chart-label-row">
          ${hourly
            .map((item) => `<span>${new Date(item.time).toLocaleTimeString("en-US", { hour: "numeric" })}</span>`)
            .join("")}
        </div>
      </article>
      <article class="chart-card">
        <span class="mini-badge badge-lime">Next 5 days</span>
        <h3>Snowfall and wind outlook</h3>
        <svg viewBox="0 0 ${width} ${height}" class="chart-svg" aria-label="Snowfall and wind outlook">
          <path d="M ${padding} ${height - padding} H ${width - padding}" class="chart-axis"/>
          ${dailySnow
            .map((value, index) => {
              const x = padding + 18 + index * ((width - padding * 2) / Math.max(dailySnow.length, 1));
              const barWidth = 34;
              const barHeight = (value / maxSnow) * (height - padding * 2 - 24);
              const y = height - padding - barHeight;
              return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth}" height="${barHeight.toFixed(1)}" rx="10" class="chart-bar"/>`;
            })
            .join("")}
          <polyline points="${windLine}" class="chart-line chart-line-wind"/>
        </svg>
        <div class="chart-label-row">
          ${daily.map((day) => `<span>${shortDayLabel(day.date)}</span>`).join("")}
        </div>
      </article>
    </div>
  `;
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
      scheduleRender();
    })
    .catch(() => {
      apiState.config = { integrations: {} };
      scheduleRender();
    })
    .finally(() => apiState.pending.delete("config"));
}

function ensureWeatherForResort(resort) {
  if (!canUseApi() || !resort?.lat || !resort?.lon) return;
  const weatherKey = `weather:${resort.id}`;
  if (!apiState.weatherByResort[resort.id] && !apiState.pending.has(weatherKey)) {
    apiState.pending.add(weatherKey);
    apiState.weatherStatusByResort[resort.id] = "loading";
    fetchJson(`/api/weather?lat=${encodeURIComponent(resort.lat)}&lon=${encodeURIComponent(resort.lon)}`)
      .then((data) => {
        apiState.weatherByResort[resort.id] = data;
        apiState.weatherStatusByResort[resort.id] = "ready";
        scheduleRender();
      })
      .catch(() => {
        apiState.weatherStatusByResort[resort.id] = "error";
        window.setTimeout(() => {
          if (!apiState.weatherByResort[resort.id]) ensureWeatherForResort(resort);
        }, 2200);
        scheduleRender();
      })
      .finally(() => apiState.pending.delete(weatherKey));
  }
}

function ensureResortApiData(resort) {
  if (!canUseApi() || !resort?.lat || !resort?.lon) return;
  ensureWeatherForResort(resort);

  const geoKey = `geo:${resort.id}`;
  if (!apiState.skiGeoByResort[resort.id] && !apiState.pending.has(geoKey)) {
    apiState.pending.add(geoKey);
    fetchJson(
      `/api/ski-geo?lat=${encodeURIComponent(resort.lat)}&lon=${encodeURIComponent(resort.lon)}&resortId=${encodeURIComponent(resort.id)}`,
    )
      .then((data) => {
        apiState.skiGeoByResort[resort.id] = data;
        scheduleRender();
      })
      .catch(() => {})
      .finally(() => apiState.pending.delete(geoKey));
  }

  const locationKey = `location:${resort.id}`;
  if (!apiState.locationByResort[resort.id] && !apiState.pending.has(locationKey)) {
    apiState.pending.add(locationKey);
    fetchJson(`/api/location?lat=${encodeURIComponent(resort.lat)}&lon=${encodeURIComponent(resort.lon)}`)
      .then((data) => {
        apiState.locationByResort[resort.id] = data;
        scheduleRender();
      })
      .catch(() => {})
      .finally(() => apiState.pending.delete(locationKey));
  }

  const nearbyKey = `nearby:${resort.id}`;
  if (!apiState.nearbyByResort[resort.id] && !apiState.pending.has(nearbyKey)) {
    apiState.pending.add(nearbyKey);
    fetchJson(`/api/nearby?lat=${encodeURIComponent(resort.lat)}&lon=${encodeURIComponent(resort.lon)}`)
      .then((data) => {
        apiState.nearbyByResort[resort.id] = data;
        scheduleRender();
      })
      .catch(() => {})
      .finally(() => apiState.pending.delete(nearbyKey));
  }

  const eventsKey = `events:${resort.id}`;
  if (
    serviceEnabled("events") &&
    !apiState.eventsByResort[resort.id] &&
    !apiState.pending.has(eventsKey)
  ) {
    apiState.pending.add(eventsKey);
    fetchJson(
      `/api/events?keyword=${encodeURIComponent(resort.name)}&countryCode=${encodeURIComponent(countryCodeFor(resort))}`,
    )
      .then((data) => {
        apiState.eventsByResort[resort.id] = data.items || [];
        scheduleRender();
      })
      .catch(() => {})
      .finally(() => apiState.pending.delete(eventsKey));
  }
}

function hydrateVisibleData() {
  ensureConfigLoaded();
  const leadResort = state.view === "discover" ? discoverFocusResort() : selectedResort();
  const weatherTargets =
    state.view === "discover"
      ? filteredResorts()
      : state.view === "snow"
        ? resorts
        : [leadResort, ...resorts.filter((resort) => state.compareResorts.has(resort.id) || state.savedResorts.has(resort.id)).slice(0, 4)];

  weatherTargets.forEach((resort) => ensureWeatherForResort(resort));

  const richTargets =
    state.view === "discover"
      ? [leadResort, ...filteredResorts().slice(0, 8)]
      : [leadResort];

  resorts
    .filter((resort) => richTargets.some((item) => item.id === resort.id))
    .forEach((resort) => ensureResortApiData(resort));
}

let discoverLayerGroup = null;

function destroyDiscoverMap() {
  if (!discoverMap) return;
  discoverMap.remove();
  discoverMap = null;
  discoverLayerGroup = null;
}

function destroyResortDetailMap() {
  if (!resortDetailMap) return;
  resortDetailMap.remove();
  resortDetailMap = null;
  // Note: resort detail map doesn't strictly need a layergroup since it's just one static pin, but we'll preserve it cleanly.
}

function mountDiscoverMap() {
  if (state.view !== "discover") {
    destroyDiscoverMap();
    return;
  }

  const mapNode = document.getElementById("discover-map");
  if (!mapNode || !window.L) return;

  const filtered = filteredResorts();
  const focus = discoverFocusResort();

  if (!discoverMap) {
    discoverMap = window.L.map(mapNode, {
      zoomControl: false,
      minZoom: 2,
      worldCopyJump: true,
    });
    window.L.control.zoom({ position: "topright" }).addTo(discoverMap);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 18,
    }).addTo(discoverMap);
    discoverLayerGroup = window.L.layerGroup().addTo(discoverMap);

    const bounds = [];
    filtered.forEach((resort) => bounds.push([resort.lat, resort.lon]));
    if (bounds.length === 1) discoverMap.setView(bounds[0], 8);
    else if (bounds.length > 1) discoverMap.fitBounds(bounds, { padding: [36, 36] });
    else discoverMap.setView([46.8, 8.2], 4);
  }

  discoverLayerGroup.clearLayers();

  filtered.forEach((resort) => {
    const marker = window.L.marker([resort.lat, resort.lon], {
      icon: window.L.divIcon({
        className: "resort-marker-wrap",
        html: `<span class="resort-marker ${focus.id === resort.id ? "is-active" : ""}"></span>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      }),
      title: resort.name,
    });

    marker.on("click", () => {
      state.selectedResortId = resort.id;
      render();
    });

    marker.bindTooltip(`${resort.name} - ${resort.country}`, {
      direction: "top",
      offset: [0, -12],
    });

    marker.addTo(discoverLayerGroup);
  });

  window.setTimeout(() => discoverMap && discoverMap.invalidateSize(), 0);
}

function mountResortDetailMap() {
  if (state.view !== "resort") {
    destroyResortDetailMap();
    return;
  }

  const mapNode = document.getElementById("resort-detail-map");
  if (!mapNode || !window.L) return;

  const resort = selectedResort();

  if (!resortDetailMap) {
    resortDetailMap = window.L.map(mapNode, {
      zoomControl: false,
      dragging: true,
      scrollWheelZoom: false,
    });
    window.L.control.zoom({ position: "bottomright" }).addTo(resortDetailMap);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 18,
    }).addTo(resortDetailMap);
    
    // We can directly add since it doesn't change dynamically within the same view instance without a hard redraw anyway
    window.L.marker([resort.lat, resort.lon], {
      icon: window.L.divIcon({
        className: "resort-marker-wrap",
        html: `<span class="resort-marker is-active"></span>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      }),
      title: resort.name,
    }).addTo(resortDetailMap);

    window.L.circle([resort.lat, resort.lon], {
      radius: 4200,
      color: "#2e66ff",
      weight: 2,
      fillColor: "#7ee3f2",
      fillOpacity: 0.12,
    }).addTo(resortDetailMap);

    resortDetailMap.setView([resort.lat, resort.lon], 12);
  }

  window.setTimeout(() => resortDetailMap && resortDetailMap.invalidateSize(), 0);
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

let savedDiscoverMapEl = null;
let savedResortDetailMapEl = null;

function render() {
  persist();

  const curDiscMap = document.getElementById("discover-map");
  if (curDiscMap) {
    savedDiscoverMapEl = curDiscMap;
    // Detach firmly before innerHTML wipe to preserve Leaflet's internal resize contexts and canvas memory perfectly
    curDiscMap.parentNode.removeChild(curDiscMap);
  }
  
  const curResMap = document.getElementById("resort-detail-map");
  if (curResMap) {
    savedResortDetailMapEl = curResMap;
    // Detach firmly
    curResMap.parentNode.removeChild(curResMap);
  }

  // We do NOT destroy the maps here so they persist!

  app.innerHTML = `
    <div class="topbar-wrap">
      <header class="topbar">
        <button class="brand" data-action="navigate" data-view="home" aria-label="Go to homepage">
          <span class="brand-mark"><img src="/logo.png" alt="PeakPilot" /></span>
          <span class="brand-copy">
            <strong>PeakPilot Alpine Intelligence</strong>
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
    ${renderFooter()}
    ${renderMobileNav()}
  `;

  const newDiscMap = document.getElementById("discover-map");
  if (newDiscMap && savedDiscoverMapEl) newDiscMap.replaceWith(savedDiscoverMapEl);

  const newResMap = document.getElementById("resort-detail-map");
  if (newResMap && savedResortDetailMapEl) newResMap.replaceWith(savedResortDetailMapEl);

  hydrateVisibleData();
  mountDiscoverMap();
  mountResortDetailMap();
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
          <span class="eyebrow">Mountain planning</span>
          <h2 style="color: white;">Clarity for discovery, depth for real trip planning</h2>
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
  const focus = discoverFocusResort();
  const nearby = nearbyFor(focus);
  const geo = skiGeoFor(focus);
  const event = featuredEventFor(focus);
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
          <span class="mini-badge badge-lime">Live data stack</span>
          <h3 class="panel-title">Free public data, stitched into one resort explorer</h3>
          <p>OpenStreetMap, Nominatim, and Open-Meteo feed the map, place context, and live snow signals right on this page.</p>
        </div>
      </aside>
      <section>
        <div class="discover-top">
          <div class="discover-map-card">
            <div class="discover-map-wrap">
              <div id="discover-map" class="discover-map" aria-label="Interactive map of ski resorts"></div>
              <div class="discover-map-overlay">
                <div class="map-caption">
                  <strong>${filtered.length} resorts matched</strong>
                  <div class="muted" style="color: rgba(255,255,255,0.78); margin-top: 4px;">Browse the live map, then keep the detailed decision-making in the list and resort brief.</div>
                </div>
                <div class="map-caption map-caption-secondary">
                  <strong>${focus.name}</strong>
                  <div class="muted" style="color: rgba(255,255,255,0.78); margin-top: 4px;">${formatAreaLabel(focus)}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel">
            <span class="mini-badge badge-blue">Selected resort</span>
            <h3 class="panel-title">${focus.name}</h3>
            <p>${focus.summary}</p>
            <div class="provider-row">
              <span class="mini-badge badge-blue">OpenStreetMap map</span>
              <span class="mini-badge badge-lime">Nominatim</span>
              <span class="mini-badge badge-warm">Open-Meteo</span>
              ${serviceEnabled("events") ? `<span class="mini-badge badge-pine">Ticketmaster</span>` : ""}
            </div>
            <div class="discover-side-grid" style="margin-top: 16px;">
              <div class="meta-pill"><strong>${formatAreaLabel(focus)}</strong><span>Area label</span></div>
              <div class="meta-pill"><strong>${formatCurrentWeatherLabel(focus)}</strong><span>Current sky</span></div>
              <div class="meta-pill"><strong>${currentTempLabel(focus)}</strong><span>Current temp</span></div>
              <div class="meta-pill"><strong>${formatTempValue(weatherFor(focus)?.current?.apparentTemperatureC)}</strong><span>Feels like</span></div>
              <div class="meta-pill"><strong>${formatFreshSnow(focus)}</strong><span>Fresh snow</span></div>
              <div class="meta-pill"><strong>${formatSnowDepth(focus)}</strong><span>Base depth</span></div>
              <div class="meta-pill"><strong>${formatWindValue(weatherFor(focus)?.current?.windSpeedKmh)}</strong><span>Wind now</span></div>
              <div class="meta-pill"><strong>${geo?.counts?.pistes ?? "..."}</strong><span>Mapped pistes</span></div>
              <div class="meta-pill"><strong>${geo?.counts?.lifts ?? "..."}</strong><span>Mapped lifts</span></div>
              <div class="meta-pill"><strong>${nearby?.counts?.lodging ?? "..."}</strong><span>Nearby stays</span></div>
              <div class="meta-pill"><strong>${nearby?.counts?.dining ?? "..."}</strong><span>Food and bars</span></div>
            </div>
            <div style="margin-top: 16px;">
              ${renderForecastStrip(focus, 3)}
            </div>
            <div class="chip-row" style="margin-top: 14px;">
              <span class="chip">${focus.skill}</span>
              <span class="chip">${focus.vibe}</span>
              <span class="chip">${focus.price}</span>
              <span class="chip">${focus.pass}</span>
            </div>
            ${
              event
                ? `<div class="panel-note" style="margin-top: 16px;"><strong>${event.title}</strong><span>${event.venue || event.city || focus.name}${event.date ? ` - ${event.date}` : ""}</span></div>`
                : ""
            }
            <div class="hero-actions" style="margin-top: 16px;">
              <button class="pill-btn" data-action="select-resort" data-id="${focus.id}">Open resort page</button>
              <button class="ghost-btn" data-action="toggle-save" data-id="${focus.id}">
                ${state.savedResorts.has(focus.id) ? "Saved to trips" : "Save resort"}
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
                  <div class="meta-pill"><strong>${formatCurrentWeatherLabel(resort)}</strong><span>Current weather</span></div>
                  <div class="meta-pill"><strong>${currentTempLabel(resort)}</strong><span>Temp now</span></div>
                  <div class="meta-pill"><strong>${formatFreshSnow(resort)}</strong><span>New snow</span></div>
                  <div class="meta-pill"><strong>${resort.pass}</strong><span>Pass info</span></div>
                </div>
                <div class="chip-row">${resort.reasons.map((reason) => `<span class="chip">${reason}</span>`).join("")}</div>
                <div class="detail-actions">
                  <button class="pill-btn" data-action="preview-resort" data-id="${resort.id}">Preview on map</button>
                  <button class="outline-btn" data-action="select-resort" data-id="${resort.id}">Open resort page</button>
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
  const weatherStatus = weatherStatusFor(resort);
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
          <span class="mini-badge badge-lime">Resort map</span>
          <div class="resort-media-grid" style="margin-top: 14px;">
            <div class="resort-map-panel">
              <div id="resort-detail-map" class="resort-detail-map" aria-label="Zoomed map of ${escapeAttr(resort.name)}"></div>
            </div>
            <figure class="slope-map-panel">
              <img class="slope-map-image" src="${slopeMapImage(resort)}" alt="${escapeAttr(resort.name)} slope map preview" />
              <figcaption class="muted">Slope map preview for ${resort.name}</figcaption>
            </figure>
          </div>
        </article>
        <article class="panel">
          <span class="mini-badge badge-blue">Live weather and forecast</span>
          ${
            weatherStatus === "error"
              ? `<div class="panel-note" style="margin-top: 14px;"><strong>Weather retrying</strong><span>The live weather feed missed once and is retrying automatically.</span></div>`
              : ""
          }
          <div class="detail-grid" style="margin-top: 14px;">
            <div class="metric"><small>Current sky</small><strong>${formatCurrentWeatherLabel(resort)}</strong></div>
            <div class="metric"><small>Current temp</small><strong>${currentTempLabel(resort)}</strong></div>
            <div class="metric"><small>Feels like</small><strong>${formatTempValue(weatherFor(resort)?.current?.apparentTemperatureC)}</strong></div>
            <div class="metric"><small>Wind now</small><strong>${formatWindValue(weatherFor(resort)?.current?.windSpeedKmh)}</strong></div>
            <div class="metric"><small>Precipitation now</small><strong>${formatPrecipValue(weatherFor(resort)?.current?.precipitationMm)}</strong></div>
            <div class="metric"><small>Forecast source</small><strong>${weatherFor(resort)?.provider || "Open-Meteo"}</strong></div>
          </div>
          <div style="margin-top: 16px;">
            ${renderForecastGrid(resort)}
          </div>
          <div style="margin-top: 18px;">
            ${renderWeatherTrendCharts(resort)}
          </div>
        </article>
        <article class="panel">
          <span class="mini-badge badge-warm">Highlights</span>
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
          <span class="mini-badge badge-blue">Weather now</span>
          <h3>${formatCurrentWeatherLabel(resort)}</h3>
          <p>${currentTempLabel(resort)} now, feels like ${formatTempValue(weatherFor(resort)?.current?.apparentTemperatureC)}, with wind around ${formatWindValue(weatherFor(resort)?.current?.windSpeedKmh)}.</p>
          <div class="hero-actions" style="margin-top: 16px;">
            <button class="outline-btn" data-action="navigate" data-view="snow">Open snow hub</button>
          </div>
        </div>
        <div class="summary-card">
          <span class="mini-badge badge-warm">Next snow signal</span>
          <h3>${resort.alerts}</h3>
          <p>${formatFreshSnow(resort)} fresh snow in the current forecast window with ${formatSnowDepth(resort)} base depth.</p>
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
                  <div><strong>${currentTempLabel(resort)}</strong><small>Temp</small></div>
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
          <p>${resort.name} is currently your selected resort. Saved stays, offers, and alerts all feed this plan automatically.</p>
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
          <span class="mini-badge badge-blue">Budget snapshot</span>
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
        <h2>Helpful guidance for trip decisions</h2>
        <p>This tool answers planning questions, explains why a resort fits, and pushes useful actions into the rest of the site.</p>
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
          <span class="mini-badge badge-warm">Current resort focus</span>
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
        <p>This area keeps your trip momentum, saved places, and live decision signals together.</p>
      </div>
    </section>
    <div class="dashboard-layout">
      <section class="stack">
        <div class="dashboard-cards">
          <article class="summary-card">
            <span class="mini-badge badge-blue">Saved resorts</span>
            <h3>${saved.length}</h3>
            <p>Resorts you want to revisit or keep in the shortlist.</p>
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

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <div class="brand">
            <span class="brand-mark"><img src="/logo.png" alt="PeakPilot" /></span>
            <span class="brand-copy">
              <strong style="color: white;">PeakPilot Alpine Intelligence</strong>
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
            <li>Map tiles: ${serviceStatusLabel("mapTiles")}</li>
            <li>Geocoding: ${serviceStatusLabel("geocoding")}</li>
            <li>Weather: ${serviceStatusLabel("weather")}</li>
            <li>Ski geodata: ${serviceStatusLabel("skiGeo")}</li>
            <li>Events: ${serviceStatusLabel("events")}</li>
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
    summary: `For "${question}", I would start with ${resort.name}. It combines ${resort.reasons[0].toLowerCase()}, ${resort.reasons[1].toLowerCase()}, and a planning setup that stays practical once flights, lodging, and resort logistics are added. The recommendation stays transparent by showing the snow window, stay style, and event context in one place.`,
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

  if (action === "preview-resort") {
    state.selectedResortId = target.dataset.id;
    state.view = "discover";
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
