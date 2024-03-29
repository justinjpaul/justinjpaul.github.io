import "mapbox-gl/dist/mapbox-gl.css";
import ChessPopup from "./ChessPopup";
import React, { useEffect, useMemo, useState } from "react";
import ReactMapGL, { FullscreenControl, Marker, Popup } from "react-map-gl";
import { useColorScheme } from "@mui/joy";
import { colorSelector, getData } from "../../shared/utils";

import {
  mapStyle,
  mapContainerStyle,
  mapLayers,
  mapLayerPrefix,
  chessTourneysURL as url,
} from "../../../constants/chess";

const ChessMap = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [data, setData] = useState([]);
  const { mode } = useColorScheme();

  useEffect(() => {
    getData({ url, setData });
  }, []);

  const handleMarkerClick = (tourney) => {
    setPopupInfo(tourney);
  };

  const pins = useMemo(
    () =>
      data.map((tourney, index) => (
        <Marker
          key={`maker-${index}`}
          latitude={tourney.lat}
          color={colorSelector(tourney.final_rank)}
          longitude={tourney.long}
          anchor="bottom"
          scale={0.5}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            handleMarkerClick(tourney);
          }}
        />
      )),
    [data]
  );

  return (
    <div style={mapContainerStyle}>
      <ReactMapGL
        style={mapStyle}
        mapStyle={`${mapLayerPrefix}/${mapLayers[mode]}`}
        initialViewState={{
          longitude: -40,
          latitude: 35,
          zoom: 0.5,
        }}
        mapboxAccessToken="pk.eyJ1IjoiamNoZXNzIiwiYSI6ImNsaHQ4NXlwcjB4czYzam1yNmc3cnQyOXEifQ.f9AgQqpfRvrzJXKOe8gEKw"
      >
        {pins}
        {popupInfo && (
          <Popup
            latitude={popupInfo.lat}
            longitude={popupInfo.long}
            onClose={() => setPopupInfo(null)}
            anchor="top"
          >
            <ChessPopup
              dataPoint={popupInfo}
              props={{ boxShadow: "none", padding: "none" }}
              link
            />
          </Popup>
        )}
        <FullscreenControl />
      </ReactMapGL>
    </div>
  );
};

export default ChessMap;
