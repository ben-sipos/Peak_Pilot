# PeakPilot Alpine

Hybrid ski travel prototype focused on:

- polished resort discovery
- practical trip planning data
- live public API integrations where possible
- server-side placeholders for private travel APIs

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

- `OpenStreetMap Tiles`
  - Used directly in the discovery map

- `Nominatim`
  - `/api/location`
  - Used for reverse geocoding and live resort area labels

- `Open-Meteo`
  - `/api/weather`
  - Used for current temperature, snow depth, and forecast snowfall

- `OpenStreetMap Overpass`
  - `/api/ski-geo`
  - Used for nearby pistes, lifts, and station counts
  - `/api/nearby`
  - Used for nearby stays, dining, and rental counts

## Free-tier API adapters ready when keys are added

- `Ticketmaster Discovery`
  - `/api/events`
  - Real event lookup is wired, but still needs your free key

- `Booking.com Demand API` or `Expedia Rapid`
  - `/api/hotels`

- `Amadeus Self-Service`
  - `/api/flights`

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

- The discovery page now uses a real OpenStreetMap-backed map with resort overlays.
- The current UI uses live weather, geocoding, and ski/place geodata where available.
- Flights and hotels still need your keys and final provider mapping.
