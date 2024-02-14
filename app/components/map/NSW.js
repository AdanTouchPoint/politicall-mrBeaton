// components/MapaAustralia.js
"use client"
import React from 'react';
import "./css/map.css"

const NSW = ({mainData, setMainData, setStates, setShowModal, setModalText, setMousePosition}) => {
  const click = (e) => {
    e.preventDefault();
    setStates(e.target.dataset.name)
    setMousePosition({ x: e.clientX - 235 , y: e.clientY -276})
    setShowModal(true)
    setModalText({
      title: 'Attention',
      message:`Based on NSW's plans to enforce a State Tax on GP clinics over the next 2 years…
      • Your chance to get a bulk-billed GP appointment will reduce by 35%
      • Your gap fee to see a private GP will increase by an average of $11
      Concerned about how NSW state tax will impact your care?
      Then let your local MP know about it.`,
      button: 'Take Action!'
    })
    setMainData({
      ...mainData,
      instruction: `NSW doesn’t care!
      Based on NSW’s plans to enforce a State Tax on GP clinics over the next 2 years…
      • Your chance to get a bulk-billed GP appointment will reduce by 35%.
      • Your gap fee to see a private GP will increase by an average of $11.`
    })
  };

return (
<svg className='red' version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" cursor={"pointer"} onClick={click}>

 <path className='orange-path' d="M817.4 612.3l-0.6 0.1-0.8 0.6-0.5 1.1-0.6 0.2-0.7 0.5-0.1 0.2-0.1 0.5-0.1 0.2-0.1 0.2-0.3 0.3-0.5 0.6-0.2 0.4-0.1 0.5 0 0.7 0.1 0.4 0.1 0.2-0.2 0.3-0.6 0.6-0.1 0.1-0.1 0.4-0.3 0.4-0.3 0.4-0.2 0.3-0.1 0.6 0.1 1.3-0.1 0.3-0.4 0.2-0.3 0.6-0.9 1.6-0.5 1.6-0.4 0.6-0.4 0.2-0.4-0.1-0.5-0.3-0.2 0.1-0.6 0.2 0.5 0.7 0.2 0.7 0.1 0.2 0.2 0.4 0 0.2 0 0.7-0.1 0.3-0.4 0.1-0.5 0.2-0.1 0.1-0.8 0.9 0 0.1 0 0.4 0.2 0.7 0.1 0.5-0.2 1.8-0.2 1-0.4-0.1-0.5-0.3-0.4 0.4 0.1 0.2 0 0.1-0.2 0.3 0.3-0.1 0.1-0.1 0.4 0.2 0.4 0.3 0.1 0.5-0.4 1-0.1 0.6 0.1 0.6 0.5 1.5 0 0.5-0.3 0.3 0 0.1 0.2 0.6 0 0.3-0.1 0.3-0.2 0.2-0.4 0.3-0.4 0.5-0.3 0.5-0.1 0.5-0.1 0.6 0.1 0.7 0 0.2 0 0.2-0.3 0.5-0.1 0.4 0.2 1.1 0.1 0.6-0.2 0.6-0.6 1-0.8 1.7-0.1 0.4-0.1 0.5 0 0.6-0.1 0.7-0.3 0.7-0.4 0.5-0.4 0.4 0.2 0.6-0.1 0.5-0.5 1-0.1 0.6 0.1 0.3 0.3 0.1 0.4 0.3-0.2 0.3-0.2 0.5-0.1 0.5 0.1 0.4 0.3 0.4 0.1 0.3 0 0.3 0 0.2-0.1 0.2-0.3-0.2-0.4 0.2-0.3 0.4-0.1 0.2-0.2 0.1 0.1 0.3 0.3 0.4 0.4 0.1 0.3 0 0.2-0.1 0.2 0 0.2 0.1 0.9 0.7 0.2 0.2 0.1 0.4 0 0.9 0.2 0.4 0.7 1.3 0 0.2-0.5-0.3-0.5-0.1-0.5 0-0.4 0.2-0.3 0.4 0 0.5 0.4 1-0.3 1.1 0 1 0.2 1 0.4 1.2-0.3 0.4-4.5-2.3-9.4-4.8-4.7-2.4-4.7-2.3-9.4-4.8-4.6-2.4-0.6-0.2-1.2-0.1-0.6-0.2-0.2-0.1 0-0.1 1.5-2.5 0.3-0.5 0.1-0.6 0.1-0.6 0-0.3-0.4-0.9-0.3-0.1-0.3 0-0.2-0.1-0.1-0.2-0.1-0.2-0.1-0.4 0-1.2 0-0.1-0.2-0.3-0.1-0.6-0.1-0.2-0.2-0.3-0.7-0.6-0.4-0.4-0.2-0.6 0.1-0.3 0.3-0.4 0-0.2 0-0.3-0.1-0.3-0.2-0.4-0.4-1.6-0.1-0.2-0.2-0.3 0.1-0.7 0.2-1.1-0.2-0.5-0.8-0.6-0.2-0.4 0.1-0.7 0.1-0.5-0.1-0.3-0.5-0.3-0.5-0.1-0.2 0-0.2-0.2-0.2-0.3-0.1-0.3-0.1-0.2-0.3-0.1-0.6-0.1-2.8-1.4-0.2-0.1-0.4-0.1-0.2 0-0.2 0.1-0.3 0.4-0.2 0-2.5 1-0.3-0.1-0.2-0.5-0.3-0.4-0.3-0.2-0.4-0.1-0.2 0-0.4 0.3-0.2 0-0.6 0-0.3 0-0.2 0.2-0.3 0.4-0.3 0.4-0.2 0.3-0.3 1.5-0.1 0.4-0.4-0.4-0.4-0.3-0.4-0.1-0.3 0-1.2 0.4-0.7 0-0.4-0.1-0.3-0.3-0.2-0.2-0.2 0-0.2 0.1-0.6 0.8-0.1 0.3-0.2 0.3-0.1 0.2 0 0.2 0.2 0.5 0.1 0.7 0 0.3 0.2 0.3 0.2 0.3 0.2 0.2 0.3 0.2 0.3 0.1 0.6 0 0.3 0 0.1 0.3-1.9 0.6-0.3-0.2-0.9-1-0.2-0.6-0.1-1 0.2-0.8-0.6-0.4-0.3-0.1-0.3 0-0.4 0.2-0.1 0.2-0.1 0.2-0.1 0.2-0.6-0.1-0.5-0.4-0.6-0.3-0.7 0.2-0.4-0.4-0.2-0.2-0.1-0.1-0.6 0-0.3-0.1-0.4-0.5-0.4-0.1-0.5 0-0.5 0-0.4-0.3-0.7-0.9-0.3-0.1-1.7 0-0.2-0.1-0.5-0.4-0.2-0.1-0.2 0.1-0.2 0.2-0.3 0.1-0.4-0.2-0.2 0-0.3 0.1-1 1.7-0.3 0.1-1.5-0.1-0.7-0.3-0.5 0-0.5 0.1-0.1 0.4-0.4-0.1-0.4-0.2-0.5-0.2-1.3-0.1-0.5-0.2-0.3-0.2-0.6-0.1-0.9 0.1-0.2-0.1-0.2-0.2-0.1-0.5-0.2-0.3-0.4-0.3-0.5 0-0.4 0-1.5 0.5-0.9-0.1-0.9-0.4-3.7-3.3-0.8-0.3-0.9 0-1 0.2-1.6 0.9-0.9 0.1-0.9-0.2-0.9-0.3-0.7-0.1-2.1 0-2.4 0.4-0.4 0.2-0.3 0.3-0.1 0.2-0.2 1.6-0.5 0.9-0.1 0.5 0.2 0.5 0.3 0.4 0.4 0.5 0.2 0.6-0.2 0.4-0.5 0.1-0.9-0.5-0.5-0.1-0.4 0.2-0.9 0.9-0.4 0.3-0.9 0.2-0.6-0.1-0.3-0.2 0-0.3-0.1-0.1-0.4 0 0-0.1-0.1-0.3-0.4-0.3-0.4-0.2-0.9-0.1-0.4-0.2-2.4-2.9-0.8-0.3-0.4-0.4-0.3-0.5-1-2.6-0.5-1-0.6-0.6-0.3-0.1-0.5 0-0.2-0.1-0.2-0.2-0.3-0.4-0.4-0.2-0.4-0.5-0.2-0.2-0.4-0.2-0.2-0.1-0.7-0.8-1.1-1.7-0.7-0.5-1-0.1-0.5-0.2-0.3-0.9-0.5-0.2-1.3-0.6-0.9-0.6-0.5-0.5-0.4-0.3-0.5-0.1-0.1-0.1-0.1-0.2-0.1-0.2-1-0.4-1.8-0.3-1.2-0.8-0.2-0.2-0.1-0.3-0.1-0.3 0.1-0.2 0.2-0.2 0.1-0.3 0-0.5-0.1-0.5-0.2-0.4-0.3-0.5-0.4-0.2-1.9-0.4-0.5-0.3-0.4-0.3-0.2-0.2-0.5-0.9-0.5-1-0.3-1.1-0.1-1.6-0.2-0.7-0.1-0.4 0.1-0.2 0.2-0.5 0-0.3 0-0.2-0.1-0.4 0-0.3 0.4-0.4 0-0.3 0-0.2-0.1-0.3 0-0.3 0.1-0.5 0.1-0.2-0.1-0.2-0.6-0.4-0.3-0.1-0.4 0.3-0.3 0-0.1-0.6-0.2-0.4-0.4-0.2-0.4-0.1-0.2-0.3-1.4-0.8-0.3-0.1-2-0.1-0.9-0.6-0.3-0.1-0.2 0.4-0.1 0.2-0.4-0.2-0.7-0.6-0.2 0-0.3 0.2-0.6 0.3 0-0.1-0.3-0.3-0.1-0.3 0-0.6-0.2-0.2-0.1-0.2-0.7-0.3-0.2-0.3-0.2-0.2-0.2 0-0.2 0-0.5 0.3-0.2 0-0.4 0.2-0.2 0.5-0.2 1.2-0.3 0.4 0 0.2 0 0.4 0.1 0.2-0.1 0.5-0.2 0.1-0.2 0-0.4-0.1-0.4 0.1-0.2 0 0 0.2 0 0.5 0.3 0.4 0 0.3-0.4 0.2-0.4-0.4-0.3-0.1-0.3 0-0.5-0.1-0.4-0.2-0.3-0.2 0-0.2 0-0.6 0-0.2-0.6-1.4-0.5-0.6-0.1-0.3 0-0.6 0-0.2-0.2-0.3-1.4-1.2-0.2-0.3-0.3-2.3 0-0.6 0.1-0.5 0.5-0.8 0.1-0.5-0.2-0.4-0.3-0.1-0.3 0.1-0.5 0.1-0.3-0.2-0.5-0.5-0.5-0.5-0.2-0.4-0.3-0.2-0.1-0.3 0-0.6-0.2-0.6-0.2-0.6-0.1-0.1-0.2 0-0.5 0.1-0.2-0.2-0.3-0.4-0.3-0.2-0.3-0.1-0.5-0.1-0.1 0.1-0.4 0.2-0.2 0.1-0.4-0.9-0.5-0.5-0.6-0.1-1.2 0.3-0.4 0-0.3-0.1-0.2-0.1-0.5 0.2-0.4 0.1-1 0-0.5-0.1-1-0.5-0.5-0.1-0.9 0.2-0.9 0.4-0.7 0.6-0.6 0.6-0.5 0.8-0.3 0.3-0.4 0.1-0.2 0-0.2-0.2-0.1-0.3-0.1-0.6-0.2-0.1-1.1-0.1-0.3-0.1-0.7-0.5-0.1-0.1-0.4-0.2-0.5 0.1-0.5 0.2-0.3 0-0.2-0.2-0.3-0.6-0.2-0.1-0.3-0.1-0.2-0.3-0.2-0.2-0.5-0.3-0.2 0-0.1 0-0.3 0.3-0.2 0.1-0.3 0-0.2-0.2-0.2-0.2-0.3-0.2-0.5-0.1-2-0.1-0.4-0.2-0.5-0.9 0-127.4 172.1 0 0.1 0 0.6-0.5 0.5-0.2 0.5-0.4 0.4-0.4 0.2-0.5 0.2-1.2 0.2-0.5 0.4-0.2 0.5-0.1 0.5-0.2 0.5-0.2 0.4-0.4 0.1-0.2 0.2-0.3 0.1-0.2 0.5-0.2 0.2-0.2 0.3-0.2 0.1-0.3 0.2 0 2.2-1.2 0.4 0 0.4-0.2 0.4-0.5 0.8-1.6 0.3-0.3 2-0.3 0.4-0.2 0.3 0.3 0.1 0.4 0.1 0.4 0.4 0.1 0.8-0.1 0.4 0.1 0.2 0.4 0.6-0.4 0.2-0.1 0.4-0.1 2.4 0 0.8 0.1 1-0.2 0.4 0 0.7 0 0.4 0 0.8-0.4 1-0.3 1.2-0.4 0.3-0.1 1.3 0.1 0.5-0.1 0.4-0.2 0.5-0.2 0.5 0.2 0.8 0.7 1.3 1.3 0.6 0.5 1 0.2 2.8 0.1 0.9-0.1 1.9-0.4 0.9-0.1 0.9 0.4 0.8 0.5 0.4 0.2 0.9 0.2 0.3 0.3 0.3 0.4 0.4 0.2 0.4 0.1 0.6 0 0.4 0.2 0.2 0.5 0 0.8 0 0.6 0.2 0.4 0.3 0.2 0.5 0.1 0.9 0 0.4 0.1 0.5 0.3 0.8 0.7 1.4 0.9 0.4 1.6 0.1 0.3-0.1 0.3 0 0.2 0.1 0.3 0 0.8 0.2 0.9 0 0.2 0.4 0.2 0.1 0.2 0.1 0.3 0 0.4 0.1 0.3 0.6 0.2 0.1-0.1 0.5-0.2 0.4-0.1 0.1-0.3 0-0.2 0.5-0.2 0.2-0.2 0.1-0.3 0.4-0.5 0.2-0.2 0.4-0.3 0.2-0.1 0-0.2 0-0.7 0.1-0.4 0.5-1 0.1-0.4 0.4-0.1 0.5-0.1 0.3-0.3 0.3-0.1 0.4 0 0.5-0.2 0.8-0.6 0.3-0.2 0.2-0.1 0.1 0.1 0.7 1.5 0.3 0.2 0.6 0 0.2 0.3 0.2 0.1 0.2-0.1 0.1-0.1 0.1-0.7 0.2-0.3 0.1-0.1 0.2-0.2 0.3 0 0.4 0.1 0.5 0.2 0.3 0 0.7-0.4 0.2-0.1 0.5 0 0.1 0 0.3-0.3 0.2-0.3 0-0.1 0-0.6 0-0.2 0.3-0.6 0.1-0.3 0-0.3 0-0.6 0-0.6 0.1-0.3 0.1-0.2 0.2-0.3 0.1-0.3-0.1-0.2-0.1-0.2-0.6-0.7-0.5-0.5-0.2-0.3-0.1-0.3 0-0.4-0.2-0.3-0.6-0.6 0.1-0.3 0.1-0.3 0.3-0.1 0.3 0 0.4-0.2 0.5-0.4 0.3-0.4 2.5-1.3 0.2-0.1 0.3 0 0.7 0.1 0.3-0.1 0.1-0.1 0.2-0.2 0.4-0.4 0.5-0.5 0.2-0.1 0.3 0 1-0.1 0.6-0.3 0.4-0.2 0.2-0.3 0.3-0.9 0.1-0.1 0.3-0.2 0.7-0.7 0.3-0.2 0.2 0.1 0.2 0 0.4 0.4 0.1 0.2 0.1 0.2-0.1 0.3 0.1 0.2 0.3 0.3 0.2 0.1 0.3 0 0.1 0 0.3-0.2 0.1-0.2 0.1-0.4 0.1-0.2 0.3 0 0.5 0.6 0.2 0.1 2.1 0.9 0.3 0 0.3 0 0.4-0.1 0.6-0.2 0.1-0.1 0.3-0.4 0.2 0 0.3 0 0.4 0 0.5 0.1 0.5 0.3 0.2 0 1.3 0.1 0.2 0 1.2 0 0.2 0 0.3 0.2 0.4 0 0.2-0.1 0.3-0.2 0.5-0.8 0.3-0.2 0.1-0.3 0.1-0.3 0.3-0.4 0.6 0 0.3 0 1.7-0.4 0.3 0 0.6 0.2 0.6-0.3 2-1.6 0.7-0.6 0.5 0.7 0.7-0.1 0.2 0.5 0.2 1.3 0.2 0.5 0 1.3-0.6 3.5 0 1 0.3 2.1 0.2 0.5 0.8 0.9 0.2 0.4-0.1 0.1-0.2 0.5 0 0.2 0 0.6 0 0.3-0.4 0.8 0 0.5 0.2 1.1-0.1 1-0.5 0.7-1.3 1.1-1 1.5-0.4 0.8-0.4 1 0 0.5 0.2 1.1 0 0.3-0.1 0.1-0.4 0.1-0.1 0.1-0.1 0.3-0.9 1.6-0.5 1-0.2 1 0.2 1 0.4 0.5 0 0.4-0.2 0.4 0 0.3 0 0.4 0.1 0.5 0 0.2-0.2 0.5-0.2 1.1-0.4 0.8 0 0.2-0.1 0.6 0.2 0.5-0.1 0.1-0.2 0.3 0 0.2 0 0.6 0.1 0.4 0 0.4-0.5 0.9-0.2 0.4 0 0.5 0 0.3 0.1 1.1-0.1 0.2-0.3 0.4 0 0.1-0.1 1.1-0.1 0.6-0.1 0.5-0.8 1.1-0.1 0.3-0.1 0.2-0.3 0.4 0 0.3 0 0.3 0.1 0.6 0 1.4-0.3 1.2-1.2 2 0.2 0.7-0.3 1-0.9 1.6-0.2 0.5-0.1 0.8-0.6 0.8-0.1 0.6-0.4 2-0.2 1.5-0.2 0.4 0.1 0.1-0.5 2 0.2 0.4 0.2 2.2 0.4 1 0.2 0.1 0.2 0.2 0.2 0.1 0.2 0 0.2-0.3 0.2 0.1 0.1 0.2 0.1 0.3 0 0.5-0.2 0.5-0.4 0.4-0.3 0.8-0.2 0.9 0.1 0.5 0.3 0.1 0.1 0.2-0.1 0.4-0.3 0.4-0.8 0.8-0.6 1.1 0 0.8-0.4 1.1 0.2 0.3 0.2 1.7-1 1.1-0.3 0.8-0.1 0.6 0.4 0.5 0.2 0.6-0.2 0.5-0.6 0.6-0.6 0.7-0.7 0.9 0.1 0.8-0.3 0.6 0.3 0.5-0.4 0.3-0.4 0.5-0.5 0.7 0.3 0.4 0 0.4-0.6 0.5-0.7 1-0.1 0.9 0.2 0.3-0.7 0.5-0.5 0.6-0.6 0.5-1.2 1.1-1.3 2.5 0.1 0.7-0.5 0.6-0.2 0.5-0.1 0.5-0.1 0.7 0.1 0.4 0.4 0.1 0.2 0.4 0.4 0.2 0.2 0.4-0.3 0.3-0.2 0.3-0.2 0.4-0.3 0.5 0 0.4 0 0.4 0.3 0.1 0.3 0.2 0 0.1-0.2 0.2-0.1 0.2-0.1 0.3 0 0.4-0.2 0.5-0.1 0.5 0 0.5 0.4 0.4-3 1.2-1 0.6-1.3 1.2-0.2 0.7-0.4 0.2-0.7 0.3-0.5 0.6-0.4 0.6-0.1 0.4 0.3 0.4 0.4 0.3-0.3 0-0.3-0.3-0.4 0-0.1 0-0.5-0.5-0.2-0.1 0 0.1-0.4 0.4-0.2 0.1-1 0.3 0.5 0.5 0.1 0 1.7 0 0.2 0.1 0.3 0.1 0.1 0.1-0.1 0.2-0.1 0.6-0.1 0.2-0.2 0-0.5 0-0.2 0.1-0.3 0.4-0.1 0.1-0.3 0.1-1.1-0.2-1.6 0.3-1.1 0.4-1.2 0.7-0.5 0.4-0.4 0.2-0.8 0.8 0.1 0.6-0.3 0.3-0.4 0.4-0.5 0.3-0.2 0.4-0.1 1.1-0.3 0.1-0.4 0.2-0.7 0.9-0.1 0.3 0 0.3-0.3 0.6-0.1 0.9-0.2 0.4-0.2 0.4 0 0.4-0.3 0.4-0.5 0.3-0.5 0.7-0.1 0.5 0.3 0.5-0.2 0.2-0.8 0.7-0.3 0.2 0-0.2 0.3-0.4 0.2-0.6-0.5-0.5-0.6 0.4-0.8 0.7 0 0.2 0.4 0.5-0.6 0.1 0 0.3 0.2 0.3 0.2 0.1 0.3 0.1 0.3-0.4 0.1-0.2 0.2 0.1 0 0.4-0.3 0.4-0.1 0.5-0.6 0.6-0.2 0.5 0.1 0.2 0 0.2-0.3 0.3 0.1 0.4 0.1 0.2-0.1 0.1-0.3 0.1 0.1 0.4-0.1 0.3-0.1 0.1-0.2 0.2-0.2 0-0.4 0-0.2 0.1-0.3-0.1-0.2 0.2-0.2 0.2-0.5 0.1-0.3-0.1-0.6 0.3-0.3 0-0.2-0.4-0.2-0.6-0.4 0.3-0.1 0.5 0.2 0.5 0.4 0.3-0.1 0.2-0.1 0.1-0.2 0.1-0.2 0.1 0 0.1 0.5 0 0.7-0.9 0.4 0 0.2 0.2-0.2 0.7-0.2 0.8 0.1 0.3 0.3-0.3 0.2-0.4 0.2-0.8 0.3 0.7-0.4 1.3-0.3 0.6-0.1 0.9 0.2 0.3 0.1 0.2 0 0.3-0.2 0.6-0.1 1.2-0.3 0.1-0.2-0.1-0.3 0.1-0.3 0.3-0.1 0.4 0 0.3 0.1 0.1 0.4 0.1 0.2-0.1 0.1-0.3 0.1-0.1 0.1 0.3 0 0.6-0.4 1.2 0.1 0.4-0.3 0.7-0.1 0.3-0.3 0.3-0.1-0.1-0.7-0.8-0.2-0.2-0.4 0.1-0.1 0.2-0.1 0.4-0.2 0.3-0.4 0.1-0.5-0.1-0.4 0-0.2 0.4 0.6 0.2 0.2 0.1 0.2 0.2 0.2 0 0.2-0.4 1.3 0.2 0.3 0-0.1 0.4-0.1 0.2-1.1 0-0.2 0.2-0.1 0.2-0.1 0.2-0.1 0.2-0.3 0.1 0.2 0.1 0.5 0 0.2 0.1 0 0.2-0.2 0.3-0.4 0.4-0.8 0.6-0.4 0.4-0.6 0.3-0.9 0.7-1.2 1.6-0.6 1-0.4 0.8 0.1 0.8-0.4 1.2-0.2 1.1 0.4 0.9-0.5 0.5-0.2 0.7-0.3 0.4-0.4-0.1 0.3-0.5-0.2-0.2-0.2-0.1-0.2 0-0.1 0.1-0.8 0.9 0.1 0.2 0.2 0.1 0.2 0 0.4 0 0.3 0.2 0.6 0.6 0.3 0.3 0.4 0-0.7 0.1-0.3 0.5-0.4 3.3-0.4 0.8-0.5 0.4-0.6 0.3-0.6 1.3-0.5 0.3-0.1 0.1 0.3 0.3 0.3 0.2 0.2 0.2 0.4 0.1-0.1 0.2-0.3 0.2-0.4 0 0.2 0.3 0.5 0.2 0.2 0.2-0.1 0.2 0.1 0.2-0.2 0.7 0.4 0.5 0.7 0.2 0.5 0.1 0.1 0.1-0.2 0.9 0 0.6-0.3 0.4-0.5 0.5-0.2-0.3-0.3-0.3-0.2-0.3 0.2-0.3 0.2-0.4-0.3-0.6 0.1-0.3-0.4-0.2-0.4 0-0.4 0.2-0.7 0.3-0.2 0.3-0.2 1 0.4 0.1 0.1 0.3 0 0.5 0 0.2z m-28.5 6.1l0.2-0.2 0.3-0.3-0.1-0.2-0.1 0-1-0.6-0.5-0.2-0.4-0.1-1.1-0.5-0.2-0.2-0.1-0.1 0-0.5 0-0.2-0.2 0-0.3-0.1-0.3-0.1-0.2-0.1-0.1-0.1 0-0.4 0-0.3-0.1-0.3-0.2-0.2-1.1-0.9-0.6 0.2-3.5 2.7-2.4 1.8-0.2 0.1-0.2 0.3-0.2 0.4 0 0.3 0.1 0.3 0 0.2 0 0.3-0.3 0.7-0.1 0.2 0 0.7-0.3 1.2-0.1 0.4 0.1 1.1 0.2 0.9 0 0.6-0.2 0.9 0 0.3 0.1 0.3 0.2 0.2 0.1 0.3 0 0.5 0 0.2 0.2 0.3 0.7 0.7 0.2 0.1 0.1 0.1 0.2-0.2 0.2-0.2 0.1-0.2 0.3 0 0.1 0.1 0.1 0.3 0 0.5 0.2 1.5 0.1 0.5 0.4 0.8 0.1 0.2 0.2 0.2 0.2 0.1 1.3 0.5 0.5 0.3 0.2 0.1 0.3-0.1 0.1-0.3 0.1-0.4 0.2-0.2 0.1-0.2 0.4-0.4 0.1-0.2 0.1-0.4 0-0.3 0-0.3-0.2-1 0-0.3 0-0.2 0.2-0.7 0-0.5-0.1-0.8-0.3-1.4 0-0.6 0.1-0.2 0.1-0.3 0.7-0.2 0.1-0.3 0-0.1 0-0.3 0.3-0.7 0.1-0.3 0-0.2-0.1-0.3-0.1-0.3-0.1-0.3 0-0.2 0.2-0.4 0-0.3-0.1-0.1 0.1-0.2 0.2-0.2 0.2-0.4 0.4-0.6 0.1-0.2 0.1-0.1 0.3-0.1 0.1 0 0.3 0.2 0.2 0.1 0.2-0.2 0.1-0.2 0.3-0.4 0.3-0.1 1.6 0.3 0.4-0.1 0.3-0.2z" id="AUS2654" data-name="nsws">
 </path>
 <text fill="#00000" data-name="nsws" stroke='black' strokeWidth={'1px'} fontSize="25" fontFamily="Verdana" x="670" y="550">NSW</text>
 </svg>
  );
};

export default NSW;
