"use client";
import React from "react";
import "./css/map.css";
import WA from "./WA";
import VIC from "./VIC";
import TAS from "./TAS";
import SA from "./SA";
import QLD from "./QLD";
import NSW from "./NSW";
import NT from "./NT";

const AusMap = () => {
  return (
    <div className="map container" >
     <p>Intructions</p>
      <div className="map-container">
      <svg version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" >
          <NT />
          <NSW />
          <WA />
          <VIC />
          <TAS />
          <SA />
          <QLD />
      </svg>
      </div>
    </div>
  );
};

export default AusMap;

