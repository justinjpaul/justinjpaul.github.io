import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useEffect, useState, useMemo } from 'react';
import ReactMapGL, { Marker, Popup, FullscreenControl } from 'react-map-gl';
import GetData from '../../shared/GetData';
import FormatDate from '../../shared/FormatDate';

const ChessMap = () => {

  const mapStyle = {
    position: 'relative',
  };

  const mapContainerStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
  };

  const [popupInfo, setPopupInfo] = useState(null);
  const [data, setData] = useState([]);

  const url = '/tourneys_fuzzed.json'
  useEffect(() => {
    GetData({ url, setData });
  }, []);

  const handleMarkerClick = (tourney) => {
    setPopupInfo(tourney);
  }

  function colorSelector(placement){
    if (placement===1) {return "#FFD700"}
    if (placement===2) {return "#C0C0C0"}
    if (placement===3) {return "#CD7F32"}
    return "#3FB1CE"
  }

  const pins = useMemo(
    () =>
      data.map((tourney, index) => (
        <Marker
          key={`maker-${index}`}
          latitude={tourney.lat}
          color={colorSelector(tourney.final_rank)}
          longitude={tourney.long}
          anchor="bottom"
          scale={.5}
          onClick={e => {
            e.originalEvent.stopPropagation();
            handleMarkerClick(tourney);
          }}
        />
      )),
    [data]
  );



  function ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  return (
    <div style={mapContainerStyle}>
      <ReactMapGL
        style={mapStyle}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        initialViewState={{
          longitude: -40,
          latitude: 35,
          zoom: .5
        }}
        mapboxAccessToken='pk.eyJ1IjoiamNoZXNzIiwiYSI6ImNsaHQ4NXlwcjB4czYzam1yNmc3cnQyOXEifQ.f9AgQqpfRvrzJXKOe8gEKw'
      >
        {pins}
        {popupInfo && (
          <Popup
            latitude={popupInfo.lat}
            longitude={popupInfo.long}
            onClose={() => setPopupInfo(null)}
            anchor="top"
          >
            <div className="popup">
              <b><a href={popupInfo.link} rel='noreferrer' target="_blank">{popupInfo.event}</a></b>
              <br />
              {FormatDate(popupInfo.date)}
              <br />
              Placed {ordinal_suffix_of(popupInfo.final_rank)} out of {popupInfo.participants} players
              <br />
              {popupInfo['pre-rating'] && `${popupInfo['pre-rating']} => ${popupInfo['post-rating']}`}
            </div>
          </Popup>
        )}
      <FullscreenControl />
      </ReactMapGL>
    </div>
  );
};

export default ChessMap;
