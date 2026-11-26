import "./chess.css";
import { useState } from "react";
import { Button, ButtonGroup, Chip, Grid, Sheet, Typography } from "@mui/joy";
import ChessGraph from "./ChessGraph";
import ChessMap from "./ChessMap";
import { chessRefreshedOn, featuredPerformances, formatDate, ordinal, ratings } from "./chessData";
import { headerColor } from "../../../constants/shared";

const numberFormat = new Intl.NumberFormat("en-US");

function StatTile({ href, label, value, detail }) {
  return (
    <a className="chess-stat-tile" href={href}>
      <span className="chess-stat-label">{label}</span>
      <strong>{value}</strong>
      {detail && <small>{detail}</small>}
    </a>
  );
}

function ChessStats() {
  return (
    <Sheet component="aside" variant="outlined" className="chess-profile" aria-label="Ratings and rankings">
      <section aria-labelledby="chess-ratings-heading">
        <Typography id="chess-ratings-heading" component="h2" level="title-lg">Classical Ratings</Typography>
        <div className="chess-stat-tiles">
          {Object.values(ratings).map(({ label, history, source_url }) => (
            <StatTile key={label} href={source_url} label={label} value={history.at(-1)[1]} />
          ))}
        </div>
      </section>
      <section aria-labelledby="chess-rankings-heading">
        <Typography id="chess-rankings-heading" component="h2" level="title-lg">US Chess rankings</Typography>
        <div className="chess-stat-tiles">
          {ratings.us.rankings.entries.map(({ label, rank, players }) => (
            <StatTile
              key={label}
              href={ratings.us.source_url}
              label={label}
              value={ordinal(rank)}
              detail={"of " + numberFormat.format(players) + " players"}
            />
          ))}
        </div>
      </section>
      <Typography level="body-sm">
        Last refreshed <time dateTime={chessRefreshedOn}>{formatDate(chessRefreshedOn)}</time>
      </Typography>
      <Typography level="title-sm" className="chess-profile-titles">
        FIDE Master · US Chess National Master
      </Typography>
    </Sheet>
  );
}

const stateK12Results = featuredPerformances
  .filter(({ state_k12_grade }) => state_k12_grade)
  .sort((a, b) => a.date.localeCompare(b.date));

const achievementsByCategory = new Map();
for (const event of featuredPerformances) {
  if (event.state_k12_grade && event !== stateK12Results.at(-1)) continue;
  const group = event.category ?? "Other results";
  if (!achievementsByCategory.has(group)) achievementsByCategory.set(group, []);
  const highlight = event.state_k12_grade ? {
    ...event,
    startYear: stateK12Results[0].date.slice(0, 4),
    achievement: "1st/Tied 1st",
    source_url: null,
    achievement_links: stateK12Results.map(({ state_k12_grade, source_url }) => ({
      label: state_k12_grade,
      url: source_url,
    })),
  } : event;
  achievementsByCategory.get(group).push(highlight);
}

const achievementGroups = Array.from(achievementsByCategory);
const achievementColumns = [
  achievementGroups.filter(([category]) => category === "Scholastics"),
  achievementGroups.filter(([category]) => category !== "Scholastics"),
];

function HighlightRow({ event }) {
  const year = event.date.slice(0, 4);
  const yearRange = event.startYear && event.startYear !== year ? `${event.startYear}–${year}` : null;
  const location = event.achievement_location;
  const label = (location ? [event.section, location] : [event.event, event.section]).filter(Boolean).join(", ");
  const score = event.points == null ? null : String(event.points).replace(".5", "½") + "/" + event.rounds;
  const badge = event.highlight_badge ?? (event.norm && event.norm + " norm");
  const result = event.achievement ?? (location || badge ? score : event.headline);

  return (
    <li className="chess-highlight-row">
      <div className="chess-highlight-meta">
        {result && <span className="chess-highlight-ribbon">{result}</span>}
        {badge && <Chip component="span" size="sm" variant="outlined">{badge}</Chip>}
      </div>
      {yearRange ? (
        <span className="chess-highlight-year">{yearRange}</span>
      ) : (
        <time className="chess-highlight-year" dateTime={year}>{year}</time>
      )}
      <div className="chess-highlight-content">
        {event.source_url ? <a className="chess-highlight-name" href={event.source_url}>{label}</a> : <span>{label}</span>}
        {event.highlight_detail && <span className="chess-highlight-detail">{event.highlight_detail}</span>}
        {event.achievement_links && (
          <ul className="chess-highlight-links" aria-label={(yearRange ?? year) + " " + label + " links"}>
            {event.achievement_links.map(({ label: linkLabel, url }) => (
              <li key={url}><a href={url}>{linkLabel}</a></li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

function AllAmericanTeam() {
  return (
    <li className="chess-highlight-row">
      <div className="chess-highlight-content">
        <span>All-American team</span>
        <ul className="chess-highlight-links" aria-label="All-American team rosters">
          <li><a href="https://www.uschess.org/index.php/November/2014-All-America-Chess-Team-Announced.html#:~:text=Justin%20Paul">2014 roster</a></li>
          <li><a href="https://new.uschess.org/news/2017-all-american-team-announced#:~:text=Justin%20Paul">2017 roster</a></li>
        </ul>
      </div>
    </li>
  );
}

function Highlights() {
  return (
    <section className="chess-highlights" aria-labelledby="chess-highlights-heading">
      <Typography id="chess-highlights-heading" level="h3">Highlights</Typography>
      <div className="chess-highlights-columns">
        {achievementColumns.map((groups) => (
          <div className="chess-highlight-column" key={groups[0]?.[0]}>
            {groups.map(([category, events]) => (
              <section key={category}>
                <Typography level="title-md" component="h4" className="chess-highlight-category">{category}</Typography>
                <ul className="chess-highlight-list">
                  {category === "Team USA / World Youth Chess Championships" && <AllAmericanTeam />}
                  {events.slice().sort((a, b) => b.date.localeCompare(a.date)).map((event) => (
                    <HighlightRow key={event.id} event={event} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ChessPage() {
  const [view, setView] = useState("ratings");

  return (
    <div className="chess-page" style={{ "--chess-header-color": headerColor }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={8} sx={{ minWidth: 0 }}>
          <div className="chess-view-heading">
            <Typography level="h2" component="h1">
              {view === "map" ? "Where I've played" : "Rating history"}
            </Typography>
            <ButtonGroup aria-label="Chess view">
              <Button
                aria-pressed={view === "ratings"}
                variant={view === "ratings" ? "solid" : "outlined"}
                onClick={() => setView("ratings")}
              >
                Classical Ratings
              </Button>
              <Button
                aria-pressed={view === "map"}
                variant={view === "map" ? "solid" : "outlined"}
                onClick={() => setView("map")}
              >
                Map
              </Button>
            </ButtonGroup>
          </div>
          {view === "map" ? <ChessMap /> : <ChessGraph />}
        </Grid>
        <Grid xs={12} md={4}>
          <ChessStats />
        </Grid>
      </Grid>
      <Highlights />
    </div>
  );
}
