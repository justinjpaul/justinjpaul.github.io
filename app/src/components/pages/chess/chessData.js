import ratingData from "../../../data/chess/ratings.json";
import performances from "../../../data/chess/performances.json";
import verifiedTournaments from "../../../data/chess/tournaments.json";

export const { refreshed_on: chessRefreshedOn, ...ratings } = ratingData;
export const featuredPerformances = performances.filter(({ featured }) => featured);

const monthFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
const shortMonthFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatMonth(period, style = "long") {
  const formatter = style === "short" ? shortMonthFormat : monthFormat;
  return formatter.format(Date.parse(period + "-01"));
}

export function formatDate(date) {
  return dateFormat.format(Date.parse(date));
}

export function ordinal(rank) {
  const suffix = { 1: "st", 2: "nd", 3: "rd" };
  return rank + (rank % 100 >= 11 && rank % 100 <= 13
    ? "th"
    : suffix[rank % 10] ?? "th");
}

const internationalCities = {
  "Al Ain": { name: "Al Ain", country: "United Arab Emirates" },
  "Durban - South Africa": { name: "Durban", country: "South Africa" },
  "Porto Carras - Halkidiki": { name: "Porto Carras, Halkidiki", country: "Greece" },
};

function legacyCity(value) {
  const match = value.match(/^(.+?),\s*([A-Z]{2})\s+\d{5}(?:-\d{4})?(?:\s+(?:USA|US|UNITED STATES))?$/i);
  if (!match) return internationalCities[value] ?? { name: value, country: "Country unspecified" };
  const city = match[1].trim();
  const corrected = { BATIMORE: "Baltimore", MCLEAN: "McLean" };
  const displayCity = corrected[city.toUpperCase()] ?? city.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
  return { name: displayCity + ", " + match[2].toUpperCase(), country: "United States" };
}

function median(values) {
  const sorted = values.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

function scorePlacement({ score_rank, players_on_score }) {
  return players_on_score > 1 ? "Tied " + ordinal(score_rank) + " by score" : ordinal(score_rank);
}

export function tournamentLocations(archive) {
  const cities = new Map();
  const performancesByUrl = new Map(performances.map((result) => [result.archive_url, result]));

  for (const entry of archive) {
    const { name, country } = legacyCity(entry.location);
    const id = country + ":" + name;
    if (!cities.has(id)) cities.set(id, { id, name, country, entries: [] });
    cities.get(id).entries.push(entry);
  }

  const locations = new Map(Array.from(cities.values(), ({ id, name, country, entries }) => [id, {
    id,
    name,
    country,
    detail: "Approximate city location",
    longitude: median(entries.map(({ long }) => long)),
    latitude: median(entries.map(({ lat }) => lat)),
    events: entries.map((entry) => {
      const performance = performancesByUrl.get(entry.link);
      const publishedRank = performance?.published_rank ?? entry.final_rank;
      const scoreRank = performance?.score_rank;
      return {
        id: entry.link,
        name: performance?.event ?? entry.event,
        date: performance?.date ?? entry.date,
        rank: scoreRank ?? publishedRank,
        result: scoreRank ? performance.headline : ordinal(publishedRank) + " in published order",
        publishedOrder: scoreRank ? ordinal(publishedRank) : null,
        source: performance?.source_url ?? entry.link,
        score: performance?.points != null ? performance.points + "/" + performance.rounds : null,
        featured: Boolean(performance?.featured),
        note: performance?.featured ? performance.note : null,
        participants: entry.participants,
        ratingBefore: entry["pre-rating"],
        ratingAfter: entry["post-rating"],
      };
    }),
  }]));

  for (const event of verifiedTournaments) {
    const venue = event.location;
    const name = venue.map_city ?? venue.locality;
    const id = venue.country + ":" + name;
    if (!locations.has(id)) {
      if (!venue.coordinates) continue;
      locations.set(id, {
        id,
        name,
        country: venue.country,
        detail: "Pin marks the recorded tournament venue.",
        longitude: venue.coordinates.longitude,
        latitude: venue.coordinates.latitude,
        events: [],
      });
    }
    const result = event.placement;
    locations.get(id).events.push({
      id: event.id,
      name: event.event,
      date: event.ends_on,
      rank: result.score_rank,
      result: scorePlacement(result),
      publishedOrder: ordinal(result.published_rank),
      participants: result.participants,
      score: result.points + "/" + result.rounds,
      source: result.source_url,
      venue: venue.venue,
      address: venue.address,
      venueSource: venue.venue_source_url,
    });
  }

  return Array.from(locations.values(), (location) => ({
    ...location,
    bestRank: Math.min(...location.events.map(({ rank }) => rank)),
    events: location.events.sort((a, b) => b.date.localeCompare(a.date)),
  })).sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name));
}
