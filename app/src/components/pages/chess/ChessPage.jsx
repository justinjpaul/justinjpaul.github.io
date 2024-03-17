import "./chess.css";
import ChessGraph from "./ChessGraph";
import ChessMap from "./ChessMap";
import Header from "../../shared/Header";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { data, updated } from "../../../constants/chess";

import {
  Button,
  ButtonGroup,
  Grid,
  List,
  ListItem,
  ListItemContent,
  Stack,
  Typography,
  Snackbar,
  Sheet,
  Box,
} from "@mui/joy";

function formatElem(li) {
  return (
    <ListItem variant="soft">
      <ListItemContent sx={{ padding: "none", textAlign: "left" }}>
        {li.map((elem, i) => (
          <Typography key={`chess-nested-list${i}`} level="body-md">
            {elem}
          </Typography>
        ))}
      </ListItemContent>
    </ListItem>
  );
}

function MakeStats({ data }) {
  if (!data) {
    return null;
  }

  return data.map(function (elem, i) {
    return (
      <List
        sx={{
          alignitems: "left",
        }}
        key={`chess-list${i}`}
      >
        {formatElem(elem)}
      </List>
    );
  });
}

export default function ChessPage() {
  const page = "chess";
  const [toggleMap, setToggleMap] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const mapText = "Look where I have played!";
  const graphText = "Look at my rating progression!";

  const isSmallScreen = useMediaQuery("(max-width:1100px)");
  const mapAlertText = "Click markers on map for more info";
  const graphAlertText = "Click/hover over graph for more info";

  const handleToggleClick = () => {
    setToggleMap((x) => !x);
    setAlertOpen(true);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "timeout") {
      return;
    }
    if (
      reason === "clickaway" &&
      (event.target.id === "map-toggle-button" ||
        event.target.id === "graph-toggle-button")
    ) {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <>
      <Header page={page} />
      <div className="main-body">
        <Grid container spacing={2}>
          {/* map + graph */}
          <Grid xs={12} sm={12} md={8} lg={9}>
            <Stack direction="column">
              <Stack
                direction="row"
                display="flex"
                justifyContent="space-between"
                alignItems="stretch"
              >
                <Typography level={isSmallScreen ? "h4" : "h2"}>
                  {toggleMap ? mapText : graphText}
                </Typography>
                <ButtonGroup sx={{ alignItems: "flex-end" }}>
                  <Button
                    disabled={!toggleMap}
                    onClick={handleToggleClick}
                    id="graph-toggle-button"
                  >
                    Graph
                  </Button>
                  <Button
                    disabled={toggleMap}
                    onClick={handleToggleClick}
                    id="map-toggle-button"
                  >
                    Map
                  </Button>
                </ButtonGroup>
              </Stack>
              {toggleMap ? <ChessMap /> : <ChessGraph />}
            </Stack>
          </Grid>
          {/* chess stats */}
          <Grid xs={12} sm={12} md={4} lg={3}>
            {data.length > 0 && <MakeStats data={data} />}
            <br />
            <Typography level="body-xs">*Updated {updated}</Typography>
          </Grid>
        </Grid>
        {/* snackbar alerts */}
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={alertOpen}
          onClose={handleAlertClose}
          endDecorator={
            <Button
              onClick={() => setAlertOpen(false)}
              size="sm"
              variant="soft"
              color="neutral"
            >
              Dismiss
            </Button>
          }
        >
          {toggleMap ? mapAlertText : graphAlertText}
        </Snackbar>
      </div>
    </>
  );
}
