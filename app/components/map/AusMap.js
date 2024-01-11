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
import Modal from "../Modal";

const AusMap = ({modalText, states, setStates, setShowFindForm, showMap, setShowMap, showModal, setShowModal}) => {
  return (
    <div hidden={showMap} className="map" >
      <div className="map-container">
         <Modal
            states={states}
            modalText={modalText}
            showModal={showModal}
            setShowModal={setShowModal}
         />
      <svg version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" >
          <NT
            setStates={setStates}
            setShowModal={setShowModal}
            />
          <QLD
            setStates={setStates}
            setShowModal={setShowModal}
            />
          <WA
            setStates={setStates}
            setShowModal={setShowModal}
            />
          <TAS
            setStates={setStates}
            setShowModal={setShowModal}
            />
          <NSW
            state={states}
            setStates={setStates}
            setShowFindForm={setShowFindForm}
            setShowMap={setShowMap}
          /> { /*RELEVANTE*/}
          <VIC
            state={states}
            setStates={setStates}
            setShowFindForm={setShowFindForm}
            setShowMap={setShowMap}
          /> { /*RELEVANTE*/}
          <SA
            state={states}
            setStates={setStates}
            setShowFindForm={setShowFindForm}
            setShowMap={setShowMap}
          /> { /*RELEVANTE*/}
      </svg>
      </div>
    </div>
  );
};

export default AusMap;