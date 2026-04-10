# PeakPilot Alpine

Hybrid ski travel prototype that combines:

- SkiScout-style polished AI-first discovery
- BERGFEX-style region depth and practical planning data
- Live public API integrations where possible
- Server-side placeholders for private travel APIs

## Run locally

1. Open a terminal in this folder
2. Optionally copy `.env.example` to `.env`
3. Start the local server:

```powershell
node server.js
```

4. Open:

```text
http://localhost:3000
```

## Live APIs already wired

- `Open-Meteo`
  - `/api/weather`
  - Used for current temperature, snow depth, and forecast snowfall

- `OpenStreetMap Overpass`
  - `/api/ski-geo`
  - Used for nearby pistes, lifts, and station counts

## Private API adapters scaffolded

- `Booking.com Demand API` or `Expedia Rapid`
  - `/api/hotels`

- `Amadeus Self-Service`
  - `/api/flights`

- `Ticketmaster Discovery`
  - `/api/events`

These routes are intentionally server-side so credentials do not need to live in browser code.

## Environment variables

See `.env.example`.

Main ones:

- `BOOKING_API_KEY`
- `EXPEDIA_API_KEY`
- `AMADEUS_CLIENT_ID`
- `AMADEUS_CLIENT_SECRET`
- `TICKETMASTER_API_KEY`

## Notes

- The current UI uses live weather and ski-geodata where available.
- Hotels, flights, and events are scaffolded but still need your keys and final provider mapping.
