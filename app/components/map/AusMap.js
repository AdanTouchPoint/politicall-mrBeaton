"use client";
import React, { useState, useRef } from "react";
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

const AusMap = ({
  mainData,
  setMainData,
  setModalText,
  modalText,
  states,
  setStates,
  setHideMain,
  showMap,
  setShowMap,
  showModal,
  setShowModal,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Referencia al elemento del modal
  const modalRef = useRef(null);
  const handleOutsideClick = (e) => {
    console.log(modalRef);
  };
  const closeModal =() =>{
    //setShowModal(false)
    console.log()
  }
  return (
    <div>
      <div onMouseOver={closeModal} className="top-nav">
        <p className="navbar-text">DOES YOUR STATE CARE ABOUT YOUR CARE?</p>
      </div>
      <div onClick={handleOutsideClick} hidden={showMap} className="map">
        <div className="text-map">
          <h1 className="title-black">DOES YOUR STATE</h1>
          <h1 className="title-green"> CARE ABOUT YOUR CARE?</h1>
          <p className="subtitle-map">
            SEEING YOUR GP IS ABOUT TO GET A LOT HARDER <br/>
            DEPENDING ON WHAT STATE YOU LIVE IN.
          </p>
        </div>
        <div onMouseOver={closeModal} className="map-container">
        <h2 className="top-banner-map">CLICK ON YOUR <div className="text-green-map"> STATE OR TERRITORY </div> BELOW TOFIND OUT MORE!</h2>          
        <Modal
            modalRef={modalRef}
            states={states}
            setHideMain={setHideMain}
            setShowMap={setShowMap}
            modalText={modalText}
            showModal={showModal}
            setShowModal={setShowModal}
            mousePosition={mousePosition}
          />
          <svg className="svg-container"
            version="1.2"
            viewBox="0 0 1000 900"
            xmlns="http://www.w3.org/2000/svg"
          >
            <NT
              setMousePosition={setMousePosition}
              setModalText={setModalText}
              setStates={setStates}
              setShowModal={setShowModal}
            />
            <QLD
              setMousePosition={setMousePosition}
              setModalText={setModalText}
              setStates={setStates}
              setShowModal={setShowModal}
            />
            <WA
              setMousePosition={setMousePosition}
              setModalText={setModalText}
              setStates={setStates}
              setShowModal={setShowModal}
            />
            <TAS
              setMousePosition={setMousePosition}
              setModalText={setModalText}
              setStates={setStates}
              setShowModal={setShowModal}
            />
            <ACT
              setMousePosition={setMousePosition}
              setModalText={setModalText}
              setStates={setStates}
              setShowModal={setShowModal}
            />
            <NSW
              setMousePosition={setMousePosition}
              mainData={mainData}
              setMainData={setMainData}
              setStates={setStates}
              setShowModal={setShowModal}
              setModalText={setModalText}
            />{" "}
            {/*RELEVANTE*/}
            <VIC
              setMousePosition={setMousePosition}
              mainData={mainData}
              setMainData={setMainData}
              setStates={setStates}
              setShowModal={setShowModal}
              setModalText={setModalText}
            />{" "}
            {/*RELEVANTE*/}
            <SA
              setMousePosition={setMousePosition}
              mainData={mainData}
              setMainData={setMainData}
              setStates={setStates}
              setShowModal={setShowModal}
              setModalText={setModalText}
            />{" "}
            {/*RELEVANTE*/}
          </svg>
        </div>
      </div>
    </div>
  );
};
export default AusMap;
