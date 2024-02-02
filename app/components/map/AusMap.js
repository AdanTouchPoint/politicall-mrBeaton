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
import ACT from "./ACT";
import Modal from "../Modal";

const AusMap = ({mainData,setMainData,setModalText,modalText, states, setStates, setHideMain, showMap, setShowMap, showModal, setShowModal}) => {
  return (
    <div hidden={showMap} className="map">
      <div className="header-img"></div>
      <h1>Does your state care about your care?</h1>
      <p> Seeing your GP is about to get a lot harder depending on what state you live in. Click on the your state or territory below to find out more. </p>
      <div className="map-container">
         <Modal
            states={states}
            setHideMain={setHideMain}
            setShowMap={setShowMap}
            modalText={modalText}
            showModal={showModal}
            setShowModal={setShowModal}
         />
      <svg version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg">
          <NT
            setModalText={setModalText}
            setStates={setStates}
            setShowModal={setShowModal}
            />
          <QLD
            setModalText={setModalText}
            setStates={setStates}
            setShowModal={setShowModal}
            />
          <WA
            setModalText={setModalText}
            setStates={setStates}
            setShowModal={setShowModal}
            />
          <TAS
            setModalText={setModalText}
            setStates={setStates}
            setShowModal={setShowModal}
            />
            <ACT
            setModalText={setModalText}
            setStates={setStates}
            setShowModal={setShowModal}
            />
          <NSW
            mainData={mainData}
            setMainData={setMainData}
            setStates={setStates}
            setShowModal={setShowModal}
            setModalText={setModalText}
          /> { /*RELEVANTE*/}
          <VIC
            mainData={mainData}
            setMainData={setMainData}
            setStates={setStates}
            setShowModal={setShowModal}
            setModalText={setModalText}
          /> { /*RELEVANTE*/}
          <SA
            mainData={mainData}
            setMainData={setMainData}
            setStates={setStates}
            setShowModal={setShowModal}
            setModalText={setModalText}
          /> { /*RELEVANTE*/}
      </svg>
      </div>
    </div>
  );
};
export default AusMap;