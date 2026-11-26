import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button, ButtonGroup, FormControl, FormLabel, Sheet, Typography, useColorScheme } from "@mui/joy";
import MapView, { FullscreenControl, Layer, Marker, NavigationControl } from "@vis.gl/react-maplibre";
import { formatDate, ordinal, tournamentLocations } from "./chessData";

const mapStyles = {
  light: "https://tiles.openfreemap.org/styles/positron",
  dark: "https://tiles.openfreemap.org/styles/dark",
};

const northAmerica = { id: "north-america", label: "North America", bounds: [[-125, 24], [-66, 50]] };
const regions = [
  { id: "world", label: "World", bounds: [[-172, -55], [170, 76]] },
  northAmerica,
  { id: "mid-atlantic", label: "Mid-Atlantic", bounds: [[-81.5, 36.2], [-71.5, 43]] },
  { id: "dc-area", label: "DC area", bounds: [[-77.66, 38.77], [-76.88, 39.16]] },
];
const initialView = { bounds: northAmerica.bounds, fitBoundsOptions: { padding: 23 } };

const placementLegend = [
  { value: 1, label: "1st" },
  { value: 2, label: "2nd" },
  { value: 3, label: "3rd" },
  { value: "other", label: "Other" },
];

function observeArchive(signal) {
  return fetch(import.meta.env.BASE_URL + "tourneys_fuzzed.json", { signal }).then((response) => {
    if (!response.ok) throw new Error("Tournament archive could not be loaded");
    return response.json();
  });
}

function TournamentList({ location }) {
  const [expanded, setExpanded] = useState(false);
  const displayed = expanded ? location.events : location.events.slice(0, 3);
  return (
    <div>
      <Typography level="title-md">{location.name}</Typography>
      <Typography level="body-sm">{location.country} · {location.detail}</Typography>
      <ul className="chess-map-events">
        {displayed.map((event) => (
          <li key={event.id}>
            <a href={event.source}>{event.name}</a>
            <Typography level="body-sm">
              {formatDate(event.date)} · {event.result}{event.score && " · " + event.score}
              {event.featured && " · Highlight"}
            </Typography>
            {event.note && <Typography level="body-sm">{event.note}</Typography>}
            {event.publishedOrder && (
              <Typography level="body-sm">
                Published order {event.publishedOrder} of {event.participants}
              </Typography>
            )}
            {event.venue && (
              <Typography level="body-sm">
                <a href={event.venueSource}>{event.venue}</a> · {event.address}
              </Typography>
            )}
            {event.ratingBefore != null && event.ratingAfter != null && (
              <Typography level="body-sm">
                {event.ratingBefore} → {event.ratingAfter}
              </Typography>
            )}
          </li>
        ))}
      </ul>
      {location.events.length > 3 && (
        <Button size="sm" variant="plain" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show fewer tournaments" : "Show all " + location.events.length + " tournaments"}
        </Button>
      )}
    </div>
  );
}

export default function ChessMap() {
  const { mode, systemMode } = useColorScheme();
  const dark = (mode === "system" ? systemMode : mode) === "dark";
  const map = useRef(null);
  const [mapAvailable, setMapAvailable] = useState(true);
  const [archive, setArchive] = useState([]);
  const [archiveStatus, setArchiveStatus] = useState("loading");
  const [region, setRegion] = useState(northAmerica.id);
  const [selectedCity, setSelectedCity] = useState("");
  const locations = useMemo(() => tournamentLocations(archive), [archive]);
  const countries = useMemo(() => {
    const grouped = new Map();
    for (const city of locations) {
      if (!grouped.has(city.country)) grouped.set(city.country, []);
      grouped.get(city.country).push(city);
    }
    return Array.from(grouped);
  }, [locations]);
  const location = locations.find((city) => city.id === selectedCity);
  const total = locations.reduce((count, city) => count + city.events.length, 0);

  function showRegion(id) {
    setRegion(id);
    const selectedRegion = regions.find((item) => item.id === id);
    map.current?.fitBounds(selectedRegion.bounds, { padding: 23, duration: 0 });
  }

  function selectLocation(id) {
    setSelectedCity(id);
    const city = locations.find((item) => item.id === id);
    if (city && map.current) {
      map.current.jumpTo({
        center: [city.longitude, city.latitude],
        zoom: Math.max(map.current.getMap().getZoom(), 7),
      });
      setRegion(null);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    observeArchive(controller.signal)
      .then((data) => {
        setArchive(data);
        setArchiveStatus("loaded");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setArchiveStatus("failed");
      });
    return () => controller.abort();
  }, []);

  return (
    <Sheet variant="outlined" className="chess-panel">
      <div className="chess-panel-heading">
        <Typography level="title-lg">Tournament locations</Typography>
        {mapAvailable && (
          <ButtonGroup size="sm" className="chess-map-regions" aria-label="Map region">
            {regions.map(({ id, label }) => (
              <Button
                key={id}
                aria-pressed={region === id}
                variant={region === id ? "soft" : "outlined"}
                onClick={() => showRegion(id)}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        )}
      </div>
      {mapAvailable && (
        <div className="chess-map">
          <MapView
            ref={map}
            initialViewState={initialView}
            style={{ width: "100%", height: "100%" }}
            mapStyle={dark ? mapStyles.dark : mapStyles.light}
            minZoom={-1}
            scrollZoom={false}
            dragRotate={false}
            touchPitch={false}
            renderWorldCopies={false}
            onError={({ target }) => {
              if (!target?.getStyle()?.layers.length) setMapAvailable(false);
            }}
          >
            <Layer
              id="chess-state-borders"
              type="line"
              source="openmaptiles"
              source-layer="boundary"
              maxzoom={8}
              filter={["all", ["==", ["get", "admin_level"], 4], ["!=", ["get", "maritime"], 1]]}
              paint={{ "line-color": dark ? "#414141" : "#c9ccce", "line-width": 1 }}
            />
            <NavigationControl showCompass={false} />
            <FullscreenControl />
            {locations.map((city) => (
              <Marker key={city.id} longitude={city.longitude} latitude={city.latitude} anchor="bottom">
                <button
                  className="chess-map-pin"
                  type="button"
                  data-place={city.bestRank <= 3 ? city.bestRank : "other"}
                  title={city.name + " · best recorded finish " + ordinal(city.bestRank)}
                  aria-label={city.name + " · " + city.events.length + (city.events.length === 1 ? " tournament" : " tournaments")}
                  aria-pressed={selectedCity === city.id}
                  onClick={() => setSelectedCity(city.id)}
                />
              </Marker>
            ))}
          </MapView>
        </div>
      )}
      {mapAvailable && (
        <div className="chess-map-legend" aria-label="Map pin colors">
          <Typography level="body-sm">Best recorded finish</Typography>
          <ul>
            {placementLegend.map(({ value, label }) => (
              <li key={value}><span data-place={value} />{label}</li>
            ))}
          </ul>
        </div>
      )}
      <Typography level="body-sm" className="chess-map-note">
        {mapAvailable
          ? "Each pin represents one city. Choose a pin or use the city list to see its tournaments."
          : "The interactive map is unavailable. Browse tournament locations below."}
      </Typography>
      <FormControl>
        <FormLabel htmlFor="chess-map-location">Browse cities</FormLabel>
        <select id="chess-map-location" value={selectedCity} onChange={(event) => selectLocation(event.target.value)}>
          <option value="">Select a city</option>
          {countries.map(([country, places]) => (
            <optgroup key={country} label={country}>
              {places.map((place) => <option key={place.id} value={place.id}>{place.name}</option>)}
            </optgroup>
          ))}
        </select>
      </FormControl>
      {archiveStatus === "loading" && <Typography level="body-sm">Loading tournament history…</Typography>}
      {archiveStatus === "failed" && <Typography level="body-sm">The older tournament archive could not be loaded.</Typography>}
      {location && <TournamentList key={location.id} location={location} />}
      {archiveStatus === "loaded" && !location && (
        <Typography level="body-sm">
          {total} tournament records across {locations.length} cities
        </Typography>
      )}
    </Sheet>
  );
}
