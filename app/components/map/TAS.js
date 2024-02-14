// components/MapaAustralia.js
"use client"
import React from 'react';
import "./css/map.css"

const TAS = ({setShowModal, setStates, setModalText,setMousePosition}) => {
  const click = (e) => {
    e.preventDefault();
    setStates(e.target.dataset.name)
    setModalText({
      title: 'Attention',
      message:`Based on ${e.target.dataset.name}'s decision to not impose a state tax on health services in the next 2 years:
      •Your chance to get a bulk billed GP is unchanged
      •Your gap fee to see a private GP is unchanged`,
      button: 'Close'
    })
    setMousePosition({ x: e.clientX - 235, y: e.clientY - 256})
    setShowModal(true)
  };

return (
<svg className='green' version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" cursor={"pointer"} onClick={click}>

 <path className='green-path' d="M745.3 843.4l0 0.3 0 0.3-0.1 0.3-0.1 0.3-0.2 0.3-0.1 0.2-0.2 0.4-0.1 0.9-0.3 0.6-0.2 0.3-0.4-0.1-0.5-0.4-0.1-0.1-0.3 0-0.2-0.1 0-0.4 0.2-0.1-0.2-0.5-0.1-0.2-0.3-0.1 0.4-0.4-0.4-0.4-0.3 0.3-0.2 1.3-0.2 0.6-0.4 0.4-0.4 0-0.3-0.5-0.2-0.6-0.3-0.4-0.4-0.4-0.1-0.3 0.1-0.5 0.4 0.1 1.1 1.2 0.2 0.1 0.2-0.1 0-0.6 0-1.1-0.1-0.6-0.2-0.3 0.2-0.2 0.1-0.2 0.2-0.1 0.2 0.2 0.4 0.6 0.2 0.2 0.2-0.4 0.1-0.2 0-0.3-0.1-0.3-0.2-0.4 0.2-0.2 0.4-0.4 0.7-1.1 0.4-0.4 0.2 0.2 0.5 2.2 0 0.1 0.5 0.7 0.1 0.3z m1.6-4.1l-0.3 0.3-0.5-0.2-0.2 0-0.3 0.1-0.2 0.2-0.2 0.1-0.2-0.2-0.1-0.7 0.2-0.3 0.4-0.2 0.3-0.4-0.4-0.4-1.1-0.2-0.5-0.3-0.1-0.4 0.3-0.2 1.1-0.2-0.2-0.2-0.3-0.2-0.1-0.2 0-0.5 0.4-0.6 0.3-0.2 0.3 0.8 0.5 0.4 0.1 0.5 0 0.4 0 0.3 0.1 0.3 0.2 0.3 0.1 0.4 0.2 0.7 0.2 0.8z m15.9-17.5l-0.6 0.5-0.9 0-0.7 0.1 0.3 0.8 0.5 0.6-0.1 0.1-1.3 0.3-0.4 0.2-0.2 0.4-0.1 0 0-0.6 0.2-0.3 0.2-0.5 0.3-1-0.5-0.1-0.2-0.4 0-0.6 0.2-0.5 0.4-0.3 0.6-0.3 0.2-0.4 0.4 0.1 0.4 0.1 0.4 0.1 0.2 0.4 0 0.5 0.1 0.4 0.3 0.2 0.3 0.2z m3.4-8.5l-0.1 0-0.2-0.1-0.3-0.2-0.3-0.3-0.2-0.2-0.7-0.2-0.1-0.2-0.3-0.5 0.3-0.1 0.5 0 0.7 0.3 0.4 0.2 0.1 0.3 0.1 0.4 0.3 0.5-0.2 0.1z m-77.1-47.1l0.2 0 0.3-0.3 0.1 0 0.8 0.1 1.4 0.7 0.8 0.1 0.8-0.1 0.4 0 0.3 0.2 0.3 0.4 0.3 0.2 0.7 0.3 0.3 0.7 0.4 0.1 0.6 0.3 0.4-0.1 0.2-0.3-0.3-0.5 2 0.2 0.5-0.2 0.2-0.4 0.1-0.7-0.1-0.6-0.2-0.4 0.4 0.1 0.6 0.5 0.2 0.5-0.6 0.3-0.2 0.2 0 0.3 0 0.4 0.2 0.2 0.9 0.6 0.3 0.3 0.2 0.2 0.3 0.1 0.7 0 0.3 0.1 0.9 0.5 0.6-0.1 1.1-0.5 0.2 1.1 0.9 0.7 1 0.4 2 0.2 0.3 0.2 0.2 0.6 0.2 0.5 0.3 0.5 0.7 0.7 0.4 0.3 0.4 0.1 0.5 0.1 1.1 0.1 0.3 0.1 0.1 0.2 0.1 0.3 0.2 0 0.4 0 0.5 0.1 0.9 0.7 0.5 0.2 0.8 0.6 0.9 0.1 2 1 3 0.4 1.6-0.1 1.4-0.4 1.2-0.5 0.2 0.1 0.1 0.6 0.1 0.3 0.2 0.2 0.3 0.1 0.3-0.1-0.4-0.4 0.2-0.4 0.7-0.6 0.2-0.2 0.3-0.6 0.1-0.2 0.3-0.1 0.5 0 0.3-0.1 0.2-0.1 0.4-0.4 0.3 0 0.2 0 0.2 0.1 0.5 0.2 0.2 0.4 0.3 0.6 0.1 0.6-0.3 0.2 0.2 0.5 0.3 0.1 0.4 0 0.4 0.2 0.3-0.2 0.1-0.2 0.6 0 0.2 0.1 0.2 0.1 0.2 0.1 0.3-0.1-0.3-0.3-0.3-0.3-0.3-0.3-1-0.2-0.5-0.2-0.3-0.5-0.1-0.7 0.4-1 0.9-0.4 1.2-0.2 0.8-0.5 0.2-0.2 0.3-0.2 0.3-0.2 0.2-0.1 0.1 0 0.2 0.1 0 0.2 0.1 0.1 2.9 0.5 0.8-0.5 1.7-1.4 0.2 0.5 1-0.5 0.2 0.3 0.1 0.4 0 0.2 0.2 0.1 0.6 0.1 0.1 0.1 0.1 0.3 0.1 0.3 0.8 0.1 0.9-0.6 0.7-1 1.4-2.3 0.1-0.4 0.2-0.3 1.2-0.5 0.4-0.1 0.3 0.3 0.3 0.5 0.4 0.4 0.8-0.3 0.5 0.3 0.5 0.5 0.4 0.2 0.7-0.1 0.7-0.4 0.7-0.6 0.3-0.7 0-0.3 0.4-0.7 0.1-0.9 0.1-0.3 0.2-0.2 0.4-0.3 0.1 0.2 0.1 0 0.6 0.1 0.1 0 0.2 0.2 0.1 0.5 0.2 0 0.4-0.2 0.3 0.1 0.2 0.3 0.5 0.6 0.3 0.8 0.3 0.3 0.5 0.1 0.7-0.1 0.2 0.1 1.7 2.4 0.6 1.1 0.3 0.6 0.1 0.5-0.2 0.3-0.3 0.1-0.4 0.3-0.3 0.3-0.1 0.3 0.3 0 0.2 0.2 0.1 0.1 0.1 0.3-0.3 1.1 0 0.2-0.3 0.4-0.2 0.7 0 0.9 0.1 0.6 0.1 0.4 0.1 0.1 0.7 1 0.2 0.4-0.1 0.4-1 0.7-0.4 0.5 0.1 0.6 1.6-1.5 0.5-0.1-0.5 0.9-1.1 3.7 0 0.5 0 0.5 0.1 0.7 0 0.3-0.1 0.3 0 0.2 0.6 1.1 0.1 0.3 0 0.6-0.1 0.7-0.2 0.7-0.2 0.5-0.1 0.5 0.4 1.8-0.2 0.4-0.5 0.5-0.2 0.6 0.1 0.6 0.1 0.2 0.2 0.7 0.2 0.5 0.5 0.7 0.1 0.5 0.2 0.1-0.3 1-0.3 1.5 0 1.4 1.4 1.8 0 0.1-0.2 0.1-0.2 0.3-0.6 0.8-0.1 0.4 1 0.4 0.1 0.6-0.2 1.1-0.1 0.1-0.4 0.5-0.1 0.2-0.1 0.3-0.3-0.2-0.2-0.3 0-0.1-0.8-0.3-0.1-0.1 0-0.3 0.5-0.3 0.2-0.3 0.1-0.2 0.2-0.3 0-0.3 0-0.2-0.3-0.3-0.2-0.3-0.2-0.1 0.6-0.4 0.3-0.2 0.1-0.5-0.6 0-0.3-0.2-0.7-0.7-0.4-0.4-1.4-0.4 0.6-0.5 0.4-0.3 0.3 0 0.2-0.3 0.2-0.4 0.1-0.5-0.7-0.4-0.2-0.4 0-0.4-0.1-0.2-0.4 0.1 0.1 0.4 0.3 0.6-0.1 0.6-0.2 0-0.2-0.2-0.3-0.1-0.3 0.2 0 0.4 0.1 0.5 0.1 0.5-0.4 0.1-0.2 0.2 0.1 0.2 0.2 0.2 0.3 0.3 0.2 0.1 1.1 0.3-2.1-0.1-0.6 0.3-0.2 0.4-0.1 0.7 0 1.4-0.1 0.3-0.7 0.8-0.1 0.3 0 0.3-0.1 0.3-0.4 0.1 0.1 0.2-0.1 0.4-0.6 1.2-0.5 0.6 0.3-0.2 0.4-0.5 0.2-0.1 0.4 0.1 0.2 0.4 0 0.5-0.6 0.6 0 0.8 0.2 1.4 0 1.3-0.2 0.8-0.2 0.3-0.3 0.1-0.3 0.6-0.3 0.1-0.2-0.1-0.3-0.7-0.3-0.2 0 0.3-0.1 0.3-0.2 0.1-0.3 0.1 1 1.3 0.2 0.6 0 0.5 0.1 0.4 0.2 0.3 0 0.8-0.1 0.4-0.1 0.3 0.1 0.5-0.3 0.5-0.4 0.3-0.3 0.1-0.4 0.3-0.2 0.6 0 0.7 0.2 0.5-0.1 0.2-0.1 0.1-0.2-0.1-0.4 0.7-0.1 0.4 0 0.5 0.3 0.2 0.4 0.1 0.4 0 0.4-0.1 0-0.2-0.7-0.3 0.2-0.6 0.6-0.4 0.3 0.6 0.1 0.4 0.2 0.1 0.2-0.1 0.2-0.1 0.2 0 0.1 0.1 0.1 0.1 0 0.3 0 0.2 0.3 0.2 0.1 0.3 0 0.1-0.3 0.4 0 0.3 0.4 0.3 0.1 0.1-0.1 0.6-0.2 0.2-0.3 0.1-0.2 0.2-0.3 0.7 0.1 1.5-0.4 0.3 0.5 0.8 0.1 0.2 0 0.4 0 0.2-0.3 0.5 0.5 0 0.3 0.2 0.1 0.3-0.1 0.5-0.1 0.2-0.2 0.1-0.1 0.2-0.1 0.3 0.3 0.2 0.1 0.3 0.1 0.3-0.5-0.1-0.3-0.1-1.2-1.3-0.3-0.3-0.1-0.5 0-0.4-0.1-0.2-0.3 0.3-0.3 0.4 0 0.5 0 0.5 0.3 0.4-0.7 0-0.3 0.3-0.3 0.5-0.4 0.4-0.4-0.8-1.6-1.6-0.1-0.8 0.3-0.2 0.6-0.3 0.3-0.4-1.8-0.7-0.4-0.3-0.2-0.3-0.2-0.6-0.2-0.5 0.1-0.5 0.2-0.2 0.7-0.3 0.4-0.2 0-0.2 0-0.3-0.1-0.3-0.1-0.3 0.1-0.2 0.3-0.1 0.5 0 0.2 0.1 0.1 0.2 0 0.9-0.1 0.3-0.2 0.5 1 1 0.5 0.3 0.6 0.1 0.2 0 0.2-0.1 0.2-0.1 0.4 0 0.3-0.1 0.3-0.2 0.5-0.5-0.7 0-0.4-0.3-0.3-0.6-0.3-0.7 0.2 0 0.2 0 0.2-0.2 0-0.2-0.6-0.2 0-0.3 0.1-0.5 0.1-0.4-0.3-0.2-1.4 0.2-0.1-0.1-0.4-0.2-0.2-0.1-0.2 0-0.7 0.2-0.3-0.2-0.1-0.2-0.2-0.2-0.1-0.2-0.2-0.1-0.4 0-0.2-0.1 0-0.2-0.1-0.6-0.2-0.2-0.2-0.2-0.2 0-1.2 0.5-0.4 0.2-0.2 0.3 0 0.8 0.3 1.1 0.9 1.7-0.4 0.8-0.3 0.3-0.3 0.3-1.3 0.4-0.4 0.2-0.2-0.2-0.3-0.4-0.2-0.4 0-0.4 0.3-0.4 0.3 0.3 0.3 0.5 0.2 0.2 0.3-0.2 0.3-0.5 0.1-0.5-0.1-0.2-0.3-0.2 0-0.5 0.2-1.1-0.4 0.1-0.4 0.3-0.4 0.1-0.1-0.4-0.1-0.7-0.4-0.3-0.4-0.2-0.5-0.3-1.1-2.2-0.1-0.3-0.3 0-0.2 0.2-0.3 0.2 0.2 0.3 0.4 0.4 0.4 0.4 0.3 0.6 0.4 1 0.5 0.8 0 0.5-0.4 0.9-0.2 0.7-0.1 0.5 0.1 1.3-0.2 0.2-0.4-0.4-0.7-0.7-0.4 0.5 0.2 0.5 0.6 0.6 0.2 0.5-0.1 0.3-0.4 0.3-0.4 0.4-0.2 0.4-0.1 0.5 0 0.4 0.3 1.1 0 0.6 0 1.1-0.2 0.4-0.4 0.4-0.5 0.2-0.3-0.2-0.2-0.1-0.5-0.2-0.2-0.2 0-0.2 0.1-0.3 0-0.2-0.3-0.1-0.9 0.1-0.2-0.2 0.2-0.6 0.4-0.5 0-0.2-0.2-0.3-0.1-0.7-0.2 0.6-0.4 0.5-0.4 0.3-0.2-0.1-0.5-0.4-0.1-0.2 0-1.2-0.1-0.8-0.3-0.1-0.4 0.3-0.3 0.4-0.1 0.5-0.1 0.7 0.1 0.8 0.3 0.3 0.2 0.1 1.6 1.2 0.4 0.4 0.3 0.5 0.1 0.5-0.2 0.2-0.2 0.2-0.2 0.3-0.2 0.1-0.2 0-0.2-0.3-0.2-0.1-0.4-0.1-0.5 0.2-0.4 0.2-0.3 0.5 1.3-0.1 0.3 0.1 0.4 0.2 0 0.2-0.5 0.6-0.2 0.3-0.4 0.9-0.2 0.2-0.3 0.2-0.4 0.1-0.9-0.1 0.5 0.5 1.2 0.3 0.4 0.7-1.2-0.2-0.4 0.1-0.2 0.6 0.1 0.2 0.2 0.2 0.1 0.3-0.1 0.4-0.2 0.1-0.3 0.1-0.3-0.1-0.2-0.1-0.2 0.8 0.3 0.2 0.4 0.1 0.4 0.3 0 0.6-0.4 0.4-1.5 0.8-0.2 0-0.3 0-0.1-0.1 0.1-0.2-0.1-0.2-0.5-0.4-0.5 0-0.5 0.1-1 0.5-0.3-0.2-0.1-0.4-0.4-0.7-1.5-0.8-0.1-0.2-0.2-0.5-0.2-1.2-0.2-0.5-0.4-0.3-0.2 0.4 0.1 0.7 0.2 0.6-0.4-0.1-0.1-0.1-0.5 0.4-0.5 0.1-2.4-0.2-0.5-0.3-0.4-0.4-0.4 0.5-0.3 0.2-0.3 0.1-0.3-0.2-0.1-0.3 0-0.4-0.2-0.3-0.2-0.2-0.4 0-0.3 0-0.3 0.2-0.1 0.4 0 0.4-0.1 0.4-0.2 0.2-0.2-0.5-0.2-0.3-0.2-0.2-0.3 0-0.7 0.3-0.2 0.1 0 0.1 0 0.6 0 0.1-0.2 0.1-0.2-0.3-0.2 0-1.2 0.4 0.2-2.1-0.2-0.9-0.5-1-1.2-1-0.2-0.2 0.2-0.4 0.4 0.1 0.5 0.3 0.4 0.1-0.1-0.3-0.5-0.7 0.4-0.1 1.9 0.3 0.6 0.3 0.4 0.5 0.3 0.6 0.4 0.4 0.1-0.3-0.2-0.6 0.1-0.3 0.1 0.1 0.3 0.1-0.1-0.4 0.1-0.1 0.3 0.1 0.3 0.2 0.3 0.5 0.2 0.1 0.1-0.3 0-0.8 0-0.7-0.1-0.4-0.2-0.2-0.6-0.4-0.3-0.5-0.3-0.2-0.2 0.1-0.6 1.3-0.4 0.3-0.6-0.4 0-0.2-0.1-0.7 0-0.1-0.2-0.2-0.2 0.1-0.1 0.3-0.1 0.3-0.2 0.6-0.4 0-0.4-0.4-0.3-0.3-0.3-0.5-0.2-0.5-0.1-0.5 0-0.7-0.1-0.1-0.4-0.4-0.5-0.4-0.1 0.1 0 0.7 0.1 0.4 0 0.3-0.3 0.1-0.3 0-0.2 0.1-0.1 0.1-0.1 0.5 0.2 0.1 0.8-0.2 0.3 0.2-0.1 0.4-0.3 0.3-0.3 0.2-0.8-0.1-0.4-0.1-0.2-0.2-0.6-1.5 0-0.2 0-0.7-0.1-0.2-0.6-0.6-0.2-0.1-0.1-0.2-0.2-0.7-0.1-0.1-0.2-0.2-0.2-0.4 0-0.4 0.1-0.5-0.5 0.2-0.2 0.1-0.2-0.1-0.3-0.2-0.1-0.2 0.1-0.7 0.2-0.3 0.1-0.2-0.3-0.2-0.2 0-0.3-0.2-0.4-0.4-0.8-1.5-0.3-0.3-1.4 0-0.2-0.1-0.8-1.3-0.5-1-0.4-1.1-0.5-1.5-0.2-0.5-0.1-0.2-0.1-0.1-0.4-0.1-0.1-0.2 0-0.2 0.1-0.2 0.3-0.5 0-0.3-0.2-0.2-0.1-0.1-0.4-1.6-0.1-0.1-0.4 0-0.1 0-0.2-0.4-0.1-0.3-0.1-0.4-0.3-0.1-0.6-0.1 0-0.2 0.7-1.1-0.5-0.6-0.6-1-0.2-1.2 0.2-1-0.6-1.7-0.2-1-0.1-0.9 0-1.7-0.1-0.4-0.2-0.6 0-0.5 0.3 0.2 0.3 0.4 0.3 0.5 0.1 0.4 0.1 0.5 0.3 0.2 0.8 0.2 0.3 0.1 0.1 0.1 0.3 0.6 0 0.3 0.1 0.2 0.6 0.2 1.5 1.2 0.2 0.2 0.1 0.4 0.1 1.1 0.1 1.1 0.3 1 0.2 0.3 0.1-0.1 0.1-0.6 0-2.1 0.6 0.4 0.2-0.1 0.2-0.9 0.2-0.5 0.4-0.8 0.1-0.3-0.3 0.1-0.3 0.1-0.1 0.3-0.2 0.1 0-0.1 0-0.2-0.1-0.3 0-0.2 0-0.2-0.2-0.2-0.3 0 0 0.2 0 0.2-0.2 0.2-0.4-0.4-1.2-1.7-0.4-0.6-0.5-0.3-0.1-0.8-0.3-0.8-0.1-0.6 0.1-0.5-0.3-0.1-0.2 0-0.4 0.4-0.2 0.4-0.3 0.2-0.1 0.2 0 0.3 0.1 0.3 0 0.3-0.3 0.3-0.1-0.1-0.8-0.7 0.8-2.2-0.3-2.3-0.9-2.2-1.2-1.5-1.7-1.7-0.2-0.1-0.1-0.1-0.1-0.8-0.1-0.2-0.2-0.1-0.2-0.2-0.9-1.7-0.4-0.4-0.1-0.3-0.2-0.3-0.2-0.1-0.3 0-0.2 0-0.1-0.2-0.2-0.4 0-0.3 0-0.8-1-3.1-1.2-1.9-0.4-0.9-0.1-0.1-0.2-0.1-0.3-0.2-0.3-0.5 0.1-0.1 0-0.3 0.6-0.3 0-0.7-0.3-0.9-1.5-2.7-0.4-0.5 0.2-0.7 0-0.9-0.1-0.8-0.4-0.6 0.2-1.1-0.4-0.9-1.1-1.5 0.3-0.1 0.2-0.2 0.2-0.4 0-0.4-0.4-0.6-0.1-0.2 0.2-0.2 0.3-0.1 0.4-0.6 0.2-0.1 0.4-0.1 0.2-0.2 0.2-0.4 0.1-0.9 0-0.8-0.4-3.1 0-0.6 0.2-0.6 0.5-0.6 0 0.5 0.3 0.4 0.4 0.7 0.1 0.2 0.1 0.5 0 0.2z m6.1-1.3l0.2 0.4 0.2 0.4-0.6 0-0.5-0.5-0.7 0.2-1.2 0.7-0.4-0.1-0.2 0.2-0.2 0-0.1-0.1-0.3-0.2 0-1.3 0-0.2 1-1.2 0.3-0.2 0.1 0.3 0.2 0.4 0.4 0.2 0.3 0.1 0.4 0.4 0.4 0.1 0.4 0.1 0.3 0.3z m68.3-2.8l-0.3 0.3-0.5-0.3-0.2-0.4-0.3-0.1-0.4 0-0.2-0.1-0.2-0.5-0.1-0.4 0.2-0.2 0.3-0.3 0.9-0.2 0.3-0.2 1.4-0.3-0.1 0.3-0.2 0.3-0.1 0.2 0 0.3 0 0.3-0.1 0.3-0.3 0.1-0.1 0.3 0 0.6z m-73.8-4.4l0 2.1-0.1 0.2-0.5 0.4 0 1.7-0.5 0.2-0.2-0.4-0.1-0.2 0-1.6 0-0.2-0.4-0.3 0-0.2 0.2-0.4 0.3 0 0.3 0 0.4-0.2 0.1-0.2 0.2-1.4 0.1-0.1 0.2 0.4 0 0.2z m2.5 0.9l-0.2 0.2-0.5 0-0.4-0.3-0.2-0.5-0.4-0.3 0.2-0.1 0.4-0.1 0.2 0 0.2-0.2 0.1-0.3 0.1-0.2-0.2-0.2 0.1-0.1 0.2-0.2 0.2 0 0.5 0 0.2 0.1 0.2 0.1 0.4 0.3 0 0.3-0.1 0.3-0.1 0.5 0.1 0.4-0.1 0.1-0.5 0.1-0.2 0-0.2 0.1z m75.5-2.8l0.4 0.2 0.2 0.1 0.8 1.2 0.4 0.4-0.2 0.2-0.2 0.1-0.1-0.1-0.1-0.2-0.1 0.1-0.2 0.4-0.5 0.2-0.2 0.4-0.1 0.2 0 0.4-0.4-0.2-0.4 0.1-0.3 0.2-0.3 0.3 0-1-0.3-0.9-0.7-0.1-1.4 0.8-0.1-0.3-0.2-0.1-0.2-0.1-0.2-0.1-0.2 0.1-0.2 0.3-0.1 0-0.1 0-0.3-0.1-0.1-0.1-1.5 0.2-0.5-0.2-0.2-0.1-0.2-0.3-0.2-0.1-0.4 0-0.2-0.1-0.1-0.2 0.1-0.8 0.2-0.4 1.3-0.7 0.4-0.1 1-0.1 0.5 0.1 0.2 0.1 0.5 0.4 0.2-0.2 0.2-0.6 0.9-0.1 0.6-0.1 0.2-0.3 0.1 0 0.5-0.4 0.1 0 0.3 0 0.2 0.1 1 1.3 0.2 0.2z m-11.8-2l0.2 0.2 0.4 0 0.5-0.2 0 0.5-0.3 0.3-0.6 0.1-0.3-0.3-0.3-0.2 0.4-0.4z m-2-5.6l-0.6 0.3-0.2 0-0.1-0.4 0.5-0.4 0.1-1.2 0.6-0.3 0.1 0.4-0.1 0.5-0.3 0.5 0 0.6z m4.1-10.8l4.1 5.3 0.1 0.3 0.4 0.7 1 0.5 1.9 0.3-0.2 0.6 0 2.2-0.2 0.5-0.9 0.8-0.3 0.5 0.4 0.2 0.5-0.2 0.4-0.3 0.3-0.5 0.2 0.4 0.2 0.7 0.3 1.1 0 0.5-0.2-0.1-0.7-0.6-0.1 0.6 0.4 0.3 0.4 0.3 0.1 0.3-0.4 0.5-0.5-0.2-0.4-0.4-0.4-0.3-0.5-0.1-0.3 0-0.2 0.1-0.1 0.3-0.1 0.8-0.2 0.1-0.4 0.2-0.4 0.2-0.5 0.2-1.1-0.4-0.5-0.4-0.2-0.6 0.4-0.5-0.7-0.7-0.3-0.4 0-0.4 0.1-0.4-0.1-0.5-0.2-0.5-0.3-0.3-0.4 0-0.3 0-0.1-0.1-0.1-0.7-0.2-0.5-0.4-0.3-0.4-0.1-0.4 0 0-0.2 0.4-0.9 0.2-0.4-0.1-0.4-0.3-0.9-0.1-0.4-0.2-0.6-0.4 0-0.7 0.5-0.4-0.1-1.1-0.9 0.3-0.3 0.5-0.6 0.4-0.2 0.9-0.3 0.2-0.3-0.2-0.6 0.1-0.1 0.4-0.3-0.2-0.4-0.1-0.2-0.1-0.2 0.1-0.3 0.2 0.1 0.3 0.2 0.1 0.1 0.4-0.2 0.9-1.1z m-83.9 9.6l-0.3 0.5-0.1 0.2-0.2 0.1-0.5 0-2.1 1.3-0.4 0-0.4-0.6-0.1-0.4-0.2-1.1 0.3 0 0.2-0.5 0-1.2-0.2-0.7-0.3-0.3-0.4-0.2-0.3-0.4 0-0.5 0.1-1.5 0.1-0.3 0.3-0.3 0.1-0.7 0-1.1-0.1-0.2-0.2-0.3 0-0.1 0-0.1 0.2-0.4 0.1-0.1-0.1-0.7 0-0.3 0.3-0.1 0.4-0.1 0.5-0.3 0.4-0.4 0.3-0.4-0.1-0.6-0.2-0.7 0-0.6 0.2-0.2 0.2 0 0.4-0.2 0.3 0 0.1 0.1 0.7 0.7 0.9 0.4 0.4 0.3 0.2 0.6 0.2 0.3 0.1 0.2 0.1 0.4-0.1 1.2 0 0.7 0.3 1.1 0.1 0.6-0.1 0.6-0.3 1.2 0 0.6 0.1 0.3 0.5 0.2 0.1 0.1 0.1 0.4 0 0.2-0.1 0.3 0 1-0.1 0.3-0.3 0.3-0.1 0.3 0 0.3-0.1 0.2-0.2 0.2-0.5 0.2-0.2 0.2z m71-15.9l-0.2 0.3-0.1-0.1-0.2 0-0.2 0.4-0.1-0.1-0.1-0.4-0.1-0.2-0.1 0 0-0.1 0.1-0.2 0.1-0.2 0.2-0.2 0.1 0 0.1-0.1 0.2 0 0.4 0.4-0.2 0.2 0.1 0.3z" id="AUS2660" data-name="Tasmania">
 </path>
 <text data-name="Tasmania" stroke='black' strokeWidth={'1px'} fontSize="25" fontFamily="Verdana" x="770" y="816">TAS</text>
 </svg>
  );
};

export default TAS;
