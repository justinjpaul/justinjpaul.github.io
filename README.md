# justinjpaul.github.io
My website

## Mapbox setup

Set `VITE_MAPBOX_ACCESS_TOKEN` in `app/.env.local` before building or deploying the site. Use a public Mapbox token with access to the light and dark Mapbox styles. Vite reads the token at build time. When the token is missing, the Chess page offers the city and tournament list.
