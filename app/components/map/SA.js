// components/MapaAustralia.js
"use client"
import React from 'react';
import "./css/map.css"

const SA = ({mainData,setMainData,setStates, setShowModal, setModalText, setMousePosition}) => {
  const click = (e) => {
    e.preventDefault();
    setStates(e.target.dataset.name)
    setShowModal(true)
    setMousePosition({ x: e.clientX - 135, y: e.clientY - 400})
    setModalText({
      title: 'Attention',
      // message:`Based on SA's plans to enforce a State Tax on GP clinics over the next 2 years…
      // • Your chance to get a bulk-billed GP appointment will reduce by 35%
      // • Your gap fee to see a private GP will increase by an average of $11
      // Concerned about how South Australia’s state tax will impact your care?
      // Then let your local MP know about it.`,
      message: e.target.dataset.name
    })
    setMainData({
      ...mainData,
      instruction: `SA doesn’t care!
      Based on SA’s plans to enforce a State Tax on GP clinics over the next 2 years…
      • Your chance to get a bulk-billed GP appointment will reduce by 35%.
      • Your gap fee to see a private GP will increase by an average of $11.`
    })
    console.log('name-region',e.target.dataset.name)
  };

return (
<svg className='red' version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" cursor={"pointer"} onClick={click}>
 <path className='orange-path' d="M534.8 624.6l0.2 0.2 0 0.4-0.3 0.2-0.5 0.1-0.3 0.4 0 0.4 0.4 0.1 0.7 0 0.3 0.1 0 0.1-0.5 0.8-0.9 1 0.4 0.5 0.5 0 0.5-0.1 0.9 0.5 0.5-0.1 0.9-0.2 0.3-0.1 0.1-0.1 0.1 0 0.2 0.2 0.1 0.2-0.1 0.8 0.2 0.5 0.4 0.2 0.5-0.1 0.4-0.1 0.4-0.3 0.2-0.4 0.2-0.4 0.1-0.5 0.3-0.4 0.5-0.1 0.7 0.1 0.9 0.3 0.9 0.5 0.3 0 0.1 0.2 0.1 0.9 0.2 0.2 0.3 0.2 0.3 0 0.4 0-0.1 0.4 0.1 0.5 0 0.4-0.6 0.2-0.3 0.1-0.6 0.9-0.2 0.3-0.5 0-0.5-0.2-0.4-0.2-0.7-0.7-0.4-0.1-0.4 0-0.5 0.1-0.4-0.1-0.6-0.2-0.5-0.1-0.5 0-0.9 0.2-1.8 0.8-1 0.2-0.3 0.4-0.2 0.5 0.1 0.6 0 0.2 0.2 0.3 0.1 0.2-0.1 0.2-0.2 0.5-0.2 0.2-1 0.3-1.3 0.9-0.7 0.3-0.4-0.3-0.6-0.4-1-1.2-0.7-0.2-1-0.1-1-0.4-0.3-0.1-0.4 0-0.5 0.3-0.2 0.6-0.2 0.5-0.6 0.3-0.4-0.1-0.7-0.3-0.4 0-0.6 0.2-0.3-0.1-0.2-0.3-1.5 0.7-0.7 0-0.7-0.1-0.4-0.4-0.2 0-0.2 0-0.4 0.3-0.2 0.1-0.4-0.1-0.3 0-0.2 0.1-0.2 0.3-0.1 0.1-0.2-0.1-0.3 0-0.3 0.2-0.3 0-0.2-0.2-0.1-0.4-0.1-0.4-0.3-0.5-0.6-0.9-0.3-0.1-0.8-0.2-0.3-0.1-1.3-1.2 0.1-0.3 0-0.5 0.1-0.3 0.1-0.2 0.1-0.1 0.2-0.2 0.1-0.6 0.1-0.3 0.2-0.3 0.1-0.3-0.1-0.5 0.1-0.3 0.3-0.2 0.5-0.2 1.6-0.2 1-0.5 0.6 0 0.3-0.1 0.3-0.3 0.2-0.1 5.8-0.9 0.5-0.2 1-0.6 3-0.7 0.3-0.2 0.2-0.3 0.3-0.3 0.4-0.1 0.3 0.1 1.8 0.6 0.2 0.1 0.2-0.1 0.4-0.3 0.4 0 0.6 0 0.3 0 0.8-0.3 0.4-0.1 0.3 0.2 0.5-0.2z m-24.3-10.9l-0.1 0.2-0.2-0.2-0.4 0-0.4-0.1-0.2-0.2 0.2-0.3 0.3-0.2 0.3 0.1 0.3 0.3 0.2 0.4z m-6.3-2.7l-0.1 0.2-0.3-0.2-0.6-0.1-0.2-0.5 0-0.6-0.2-0.6-0.9-0.9-0.3-0.5 0.5-0.2 0.4 0.2 1 1.7 0.2 0.2 0.2 0.1 0.1 0.2 0.1 0.5 0.1 0.3 0 0.2z m25.1-14.4l-0.3 0.4-0.3-0.3-0.1-0.3 0.2-0.4 0.5-0.7 0.1 0.7-0.1 0.6z m-62.2-19.5l-0.2 0.2-0.2-0.5 0.2-0.7 0.1-0.2 0-0.4 0-0.1 0.3-0.1 0.9-0.3 0.1 0.4 0.1 0.6-0.2 0.2-0.3 0-0.3 0.1-0.5 0.8z m-19.3-37.9l-0.7 0.4-0.5-0.3 0-0.4 0.4-0.5 0.4-0.4 0.4-0.2 0.6-0.2 0.6-0.1 0.5 0 0 0.1-1.2 0.4 0.2 0.4 0.1 0.1-0.3 0.1-0.1 0.3-0.1 0.3-0.3 0z m160 44.2l-0.3-0.5-0.5-0.3 0 2.1 0.1 39.4 0 13.4 0 13.4 0 40.6-0.4-0.1-5.1 0.4-0.5 0-0.5-0.2-0.4-0.3-0.3-0.3-0.2-0.1-0.5 0-0.2-0.1-0.2-0.3-0.2-0.1-0.4-0.3-1.7-1.6-0.5-0.3-0.8-0.3-0.4-0.2-0.2-0.6-0.4-0.1-0.3-0.3 0-0.2 0-0.4-0.1-0.4-0.4-0.9-1-1.8-0.2-0.5-0.9-1.8-0.5-0.6-1.7-1.3-0.6-0.7 0-0.2 0.6-0.1-0.1-0.6-0.4-0.5-0.4-0.3-0.3-0.1-0.4-0.3-0.4-0.1-0.3-0.2-0.1 0.1-0.1 0.2 0 0.3-0.7-0.4-4.2-6-0.5-1.3-0.6-1.1 0.1-0.2 0.4-0.2 0.3-0.3 0.2-0.8-0.3-0.6-0.5-0.6-0.3-0.6-0.1-1.1-0.1-0.4-0.4-0.4-0.5-0.3-0.3-0.2 0-0.4 2.4-1.4 0.7-0.6 0.5-0.9 0.4-1 0.1-1.2-0.1-3.5-0.1-0.4-2.7-6.7-2-4.5-1.5-3.5-0.4-0.4-0.7-0.6-0.9-1.4-0.2-0.4-0.2-0.3-4-4.1-1.6-1.5-0.8-0.5-0.6-0.8-0.7-0.3-0.8-0.8-0.7-0.3-0.7-0.8-0.6-0.3-1.1-0.8 0.9-0.2 0.9 0.5 7.5 7 2.1 2.1 1.1 1.3 1.5 2 0.7 1.6 1.4 3.1 0.2 0-0.2-1.2-1.2-2.8-0.2-1.1-0.1-0.4-2.6-3.3-0.4-0.4-0.8-0.3-0.4-0.4-0.5-0.7-4.1-3.7-0.4-0.2-1.4-1.1-0.2-0.3-0.9-0.5-0.3-0.2-0.1-0.5 0.1-0.3 0.3-0.2 0.5 0.2 0-0.6 0.2-0.5 0.6-0.6 0.5-0.3 0.4 0.1 0.6 0.7 0.4 0.1 0.4 0.2 0.3 0.2 0.1 0.4-0.1 0.7-0.1 0.4-0.1 0.3 0.2 0.4 0.2 0.1 0.2 0 0.1 0-0.1 0.4-0.1 0.2-0.3 0.2-0.2 0.3 0.1 0.3 0.3 0.2 1.2 0.1 0.4 0 0.4-0.3 0.1-0.5-0.1-0.6 0.2-0.5 0.3-0.5-0.1-0.4-1.5-1.5-0.3-0.2-0.8-0.1-0.2-0.2-0.1-0.3 0.2-0.2 0.7-0.2 0.1-0.1 0.2-0.2 0.2 0 0.2 0 1.2 0.3 0.2-0.1 0.3-0.3 0.1-0.4-0.2-0.3-0.3-0.3-0.1-0.3 0.3-1 0-0.4-0.3-0.1-0.2 0.1-0.5 0.6-0.3-1.1-0.8-0.7-0.9-0.3-1-0.1 0.1 0.2 0.1 0.1 0.2 0.1-0.3 0.4-1 0.6-0.4 0.3-0.4 0.3-0.5 0-0.6 0-0.5-0.2-1 0.5-0.4 0.3-0.2 0.6 0.1 0.7 0.3 0.3 0.9 0.4 0.4 0.2 0.2 0.3-0.2 0.3-0.5 0.1-0.3-0.1-0.4-0.2-1.2-0.3-0.2-0.1-0.2-0.5-0.2-0.1-0.2-0.1-1.7 0.2-0.2 0.2 0.3 0.4 0.4 0.2 1.5 0 0.3 0.1 0.2 0.1 0.3 0.4 0.3 0.2 0.2-0.1 0.3-0.1 0.2 0 0.4 0.2-0.1 0.3-0.5 0.1-0.5 0.1-0.2 0-0.4-0.2-0.3 0-0.2 0.1-0.3 0.2-0.3 0-0.3-0.1-0.9-0.5-0.5-0.1-0.9 0.1-1.9 0.6-0.5 0.2-0.2 0.3-0.1 0.4-0.4 0.4-0.8 0.6-0.8 0.4-2 0.3-3.4-0.2 0-0.2-0.3 0.3-0.5 0.2-0.5 0.2-0.4 0.1-0.5-0.1-0.4-0.2-1.1-1.1-0.1-0.3 0.1-0.3 0.1-0.7 0.2-0.4 0.3-0.4 0.5-0.3 2.1-1 0.6-0.6 0.6-0.8 0.6-1 0.3-0.5 0.4-0.2 0.3-0.1 0.5-0.2 0.4-0.3 0.2-0.3 0.1-0.5 0-1.1 0.1-0.5 0.1-0.3 0.3-0.3 0.1-0.3 0-0.4-0.2-0.5 0-0.2-0.1-0.5 0.2-1.5 0.2-0.5 0.7-0.9 0.1-0.5-0.1-1.2-0.4-2.1-0.1-1.1 0.2-2.1 0.2-0.6 0.3 0 0.4 0.3 0.3 0.5 0-0.5 0-0.6-0.3-0.5-0.4-0.2-0.2 0-0.2-0.2-0.2-0.3-0.1-0.3-0.1-0.1-0.5-0.2-0.2-0.1-0.2-0.3 0-0.5 0-0.3-0.1-0.2-0.8-0.8-0.6-0.4-0.3-0.4-0.3-1-0.2-0.5-0.8-0.4-0.3-0.5-0.4-1.2-0.8-3.1-0.4-0.8-0.7-0.5-0.4-0.3 0-0.2 0.2-0.6-0.1-0.4-1.3-1.8-0.5-0.4-0.2 0.3-0.1 0.6-0.2 0.4-0.8 1.3-0.2 0.4 0.1 0.5 0.2 0.6 0.3 0.3 0.1 0.3-0.9 1.2-1.5 1.6 0 0.4-0.8 2.5 0 0.4 0 0.7-0.1 0.3-0.1 0.3 0.6 0.9-0.3 0.5-0.2 0.6-0.2 0.6-0.1 1.8-0.1 0.4-0.1 0.3-0.4 0.7-0.2 0.5-0.4 0.5-0.1 0.3 0 0.3-0.3 1.2-0.5 1.5-0.2 0.9 0.2 0.7-0.5 0.3-0.1 0.3 0.1 0.9 0 0.9-0.1 0.2-0.6 0.3-0.6 0.7-0.2 0.2-0.3 0-1.1-0.3-0.8-0.7-0.4-0.3-0.3 0-0.6 0-0.3-0.1-0.4-0.2-0.2 0-0.8-0.1-0.4 0.1-0.5 0.1-0.4 0.4-0.7 0.8-0.4 0.1-1.5-0.2-0.5 0.2-0.7 0.7-0.3 0.7-0.5 0.5-1-0.1-1.3-0.3-0.5 0-1.3 0.7-0.6 0.8-0.8 0.3-0.9 0-0.4-0.7 0-0.1-0.3-0.3-0.1-0.2 0-0.2 0.2-0.3 0.1-0.3 0.1-0.3 0.7-0.5 0.3-0.2-0.1-0.2 0.2-0.2 0.4-0.2 0.1-0.1 0.1-0.2 0.1-0.3 0.5-1 0-0.4-0.1-0.5-0.2-0.4-0.1-0.2 0-0.2 0.2-0.4 0.5-0.5 0.1-0.3-0.2-0.5 0.9-1.3 0.2-0.4 0.2-0.1 1.4 0.7 0.9 0 1.9-0.5 0.9 0 0.4 0.1 0.2 0.3 0.3 0.2 1 0.2 0.4 0.3 0.4 0.1 0.6-0.2 0.6-0.7 0.1-0.9 0-1 0.1-1.2 0.4-0.7 0.1-0.3 0-0.3 0-0.7 0-0.3 0.7-2.5-0.3-0.7-0.1-1-0.3-0.7 0.1-1.1-0.1-0.5-0.4-0.5-0.4 0.1-0.3 0.4-0.3 0.2 0-0.3 0.4-1.1 0.2-0.4 0.1 0 0.3 0 0.1 0 0.1-0.4 0.1-0.3 0.2-0.6 0.2-1.9 0-0.6-0.1-0.6-0.1-0.6-0.2-0.5-0.5-0.8 0-0.2 0.1-0.2 0.1-0.2 0.2-0.1 0.5 0.3 0.3 0 0.3-0.3 0.6-1.3 0.1-0.4 0-0.3-0.1-0.3-0.2-0.6-0.2-0.3 0.2-0.4 0.3-0.4 0.4-0.5 0.4-0.3 0.5-0.3 0.2-0.3 0.1-0.3 0-0.2-0.1-0.3-0.1-0.2-0.2-0.2-0.2-0.2 0.4-0.2 0.3-0.3 0.5-0.6 1-1.1 0.3-0.1 0.8-1.6 0.5-0.9 0.4 0.2 0.1 0 1.4-1.9 0.3-0.7 0.6-0.3 0.1 0.2-0.3 0.5 0.2 0.3 0.5-0.3 0.1-0.3-0.1-0.7 0.2-0.6 0-0.7-0.2-0.4-0.5-1.4-0.5-0.8-0.2-0.3-0.2-0.5 0-0.5 0.1-0.4-0.2-0.4-0.3-0.6-0.6-0.7-0.2-0.9 0.3-0.3 0.2-0.6 0.2-0.5 0.3-0.4 0.9-0.3 1.2-0.9 0.1 0 0.2 0.1 0.1 0.1 0.5-0.4 0.2 0.1 0.3 0.2 0.2 0 0.2-0.2 0.2-0.3 0-0.1-0.1-0.3 0-0.6 0-0.2-0.1-0.4-0.1-0.4-0.2-0.4-0.2-0.3-0.2-0.1-0.5 0-0.2-0.1-0.3-0.3-1.2-5.6 0-0.3 0.3-0.3 0.5-0.3-0.9-0.8-0.1-0.1-0.1-0.2-0.3-0.1-0.2-0.1-0.3-0.1 0-0.3-0.1-0.2 0.1-0.5 0-0.2-0.1-0.2-0.5-0.5-0.3-0.4-0.1-0.3 0-0.4 0.4-0.3-0.2-0.2-0.4-0.1-0.2-0.1 0-0.2-0.1-0.5-0.1-0.2-0.3 0.2 0 0.4-0.1 0.5-0.1 0.3 0.2 0.5 0 0.7 0 1.1-0.2 0.5 0 0.3 0.6 0.2 0.2 0.3 0.1 0.4 0.1 0.3 0.2 1 0 1.7 0 0.3-0.1 0.2-0.2 0.3-0.2 0.6-0.1 0.3-0.2 0-0.1-0.1-0.1 0-0.2 0.3 0 0.2 0 0.3 0.1 0.3 0.4 0.5 0 0.3-0.1 0.3-0.6 0-0.2 0-0.2-0.1-0.4-0.2-0.7-0.7-0.4-0.1-0.5 0.3-0.5 0.4-0.3 0.4 0 0.2 0 0.5 0 0.2-0.1 0.2-1.7 1.9-0.4 0.3-0.5 0.2-0.4 0.3-0.2 0.5 0 0.7-0.1 0.5-0.1 0.4-1 1.9-0.1 0.4-0.1 2.1-0.2 0.6-0.2 0.4-0.9 1.3-0.3 0.5-1.1 2.9-0.6 1.1-0.5 0.5-0.4 0.1-0.6 0.8-0.5 0.1-1.1 0.1-1.3 0.4-0.4-0.1-0.2-0.2-0.1-0.3-0.1-0.2-0.4-0.4-0.4 0-0.4 0.2-0.1 0.6-0.1 0.3-0.2 0.1-0.2 0.2-0.2 0-0.2 0.2 0 0.2 0.1 0.4 1.3-0.5 0.4 0.1-1.2 0.7-0.2 0.3-0.5 0.3-0.5 0-0.5 0-0.5 0.1-0.4 0.3-0.3 0.3-0.3 0.2-0.6 0.1-0.2 0.1-0.3 0.5-0.3 0.2-0.6 0.3-1.4 0.5-0.3 0.3-0.1 0.2-0.1 0.2 0 0.5-0.9 0.6-0.6 0.7-0.4 0.3-0.9 0.2-0.5 0.2-1.3 1.2-0.2 0.3 0 0.3-0.1 0.5 0 0.3-0.1 0.2-0.4 0.4-0.1 0.2-0.2 0.8-0.5 0.6-1.4 2.6-0.7 0.6-1.3 0.6-0.5 0.8 0.3 0.3-0.2 0.3-0.2 0.2 0 0.3 0.3 0.4 0 0.3 0 0.8-0.2 0.8-0.3 0.5-0.3 0-0.1-0.8-0.3-0.6-0.6 0.1-1.1 0.8-0.5 0-0.3 0.1-0.3 0.4-0.2 0.4-0.1 0.8-0.2 0.3 0.5 0.8 0.1 0.4-0.3 0.4-0.4-0.5-0.4-0.1-0.4 0.4-0.1 0.6 0 0.3-0.2 0.5 0 0.3 0.1 0.2 0.4 0.5 0.1 0.3-0.1 0.6-0.5 0-0.5-0.1-0.2 0.3-0.1 0.3-0.4 0.3-0.1 0.1 0.1 0.3 0.3 0.2 0.6 0 0.5-0.1 0.4-0.2 0.4-0.2 0.8-0.9 0.1-0.1 0.2 0.2 0.2 0.2 0.1 0.1 0.3-0.1 0.1-0.3 0-0.6 0-0.2 0.2-0.1 0.2 0 0.2 0.2 0 0.4 0 1.1-0.1 0.5-0.3 0.4-0.4 0.4-0.2 0.3 0 0.4 0.6 1.8 0 0.5 0 0.1 0.3 0.3-0.2 0.3-0.6 0.2-0.2 0.3-0.5-0.3-0.3-1.1-0.4-0.3-0.2 0-0.5-0.3-0.3-0.1-0.1-0.2 0-0.2-0.1-0.2-0.7-0.9-0.9-0.4-0.9 0.1-0.8 0.8-0.1 0.5-0.1 0.1-0.2 0.1 0.1 0.5 0 0.3-0.2 0.1-1 0-0.2-0.1-0.1-0.3 0.1-0.7-0.4-0.8-2-2.2-0.8-1.2-0.4-0.5-0.6-0.5-1-0.4-0.3-0.2-0.2-0.1-0.6 0.1-0.3-0.1 0.5-0.9 0-0.4-0.4-0.4-0.8-0.8-0.8-0.6-0.4-0.1-0.4 0.1-0.4 0.1-0.4 0.1-0.4 0.2-0.4 0.3-0.4 0.2-0.3-0.2 0.1-0.4 0.7-1 0.1-0.4 0.1-0.6 0.3-0.4 0.2-0.2 0.3-0.4 0.1-0.2 0-0.3 0.1-0.3 0.2-0.1 0.2 0.1 0 0.3-0.2 0.6 0.1 0.6 0.3 0.3 0.3 0.2 1.6 0.3 0.3 0.1-0.4 0.3-0.1 0.3 0 0.4 0.3 0.3 0.7 0.3 0.1 0.1-0.3 0.3 0.2 0.3 0.4 0.4 0.5 0.3 0.3 0.1 0.2-0.1 0.4-0.2 1.4-0.2 0.1-0.4-0.5-0.1-0.9-0.2 0-0.3 0.1-0.5 0-0.3-0.1-0.3-0.2 0.1-0.2 0.2-0.3 0.4 0 0.2-0.2-0.1-0.2-0.2-0.1-0.3 0-0.5-0.1-0.4 0-0.3 0.3-0.2 0-0.2 0.1-0.6-0.2-0.6-0.5-0.7-0.1-0.4-0.3-3.5-0.4-1.4-0.6-1.1-0.8 0-0.4-0.5-0.2-0.3-0.1-0.3 0.4-0.1 0.3-0.2 0.2-0.3-0.2-0.3 0.2-0.3 0-0.2-0.2-0.6 0-1.1-0.1-0.5-0.3-0.5-0.6-0.7-0.6-1.6-0.3-0.2-0.5-0.1-0.3-0.3-1.6-1.9-1.3-1.3-1.3-0.9-0.2-0.2-0.5-0.4-0.1-0.2-0.4-0.6-0.1-0.2-0.7-0.3-0.2-0.2 0.3-0.2-0.2-0.5 0.1-0.5 0.2-0.5 0.2-0.5-0.1-1.2-0.1-0.5-0.1-0.5-0.7-1.8-0.2-1-0.3-0.4-0.8-0.8-0.7-0.8-0.2-0.2-0.6-0.3-0.2-0.2-0.2-0.4 0.4-0.1 0.5 0 0.3-0.1-0.1-0.3-0.2-0.5-0.2-0.5-0.3-0.3-0.5 0-1.4-0.5-0.5 0.1-0.3 0.3 0.1 0.5 0.4 0.2 0.6-0.1 0.2 0.1 0.1 0.2 0.1 0.3 0.4 0.3 0.1 0.2-0.2 0.1-0.2 0.1-0.3 0.4-0.5-0.9-0.4-0.3-1-0.2-1.4-0.9-0.7-0.1-0.5 0.2-0.4 0.2-0.5 0.2 0-0.2-0.2-0.3-0.2-0.1-0.1 0.1 0 0.4-0.1 0.3-0.1 0.3-0.3 0.2-1.2-1.1-0.1-0.4-0.1-0.6-0.1-0.4-0.5-1.3-0.1-0.3-0.3-0.1-0.5-0.1-0.6 0.1-0.2-0.1-0.3-0.3 0.4-0.2 0.7-0.2 0.2-0.3 0.1-0.5-0.2-0.5-0.3-0.4-0.3-0.2-0.3 0-0.1 0.1-0.2 0.2-0.2 0-0.4-0.3-0.8-0.1-0.3-0.1-0.2-0.5 0.2-0.1 0.2-0.4 0.2-0.2 0.6-0.5 0.2-0.1 0.2-0.6-0.2-0.8-0.4-0.7-0.8-1.2-0.1-0.2 0.2-0.3 0.3 0 0.6 0.1 1.7 0.1 0.5 0.1-0.3 0.4-0.2 0.5 0 0.6 0.1 0.3 0 0.2 0.3 0.1 0.2-0.1 0.1-0.6 0.1-0.3 0.3-0.4 0.4-0.3 0.2-0.2 0.1-0.2 0.1-0.6 0.3-0.6 0-0.4-0.5-1.9-0.4-0.9-0.5-0.8-1.8-1.7-0.4-0.1-0.2 0-0.2 0.1-0.2 0.1-0.2 0.2-0.2 0.1-0.4-0.2-0.3-0.1-0.4 0.2-0.3 0.4-0.3 0.4-0.2 0.2-0.6-0.1-0.3-0.1-0.4 0.1-0.4 0.4-0.1 0.3-0.1 0.2-0.1 0.1-0.3 0.1-0.3 0.1-0.2-0.1-0.2-0.1-0.1-0.3 0.1-0.1 0.2-0.5-0.1-0.4 0-0.8 0-0.2 0.2-0.5 0.3-0.6 0.3-0.2 0.1 0.3 0.2 0.2 0.4 0 0.4-0.3 0-0.5-0.2-0.4-0.7-0.8-0.1-0.5-0.2-0.2-1-1.1-0.3-0.6-0.1-0.1-0.4 0.1-0.2 0.2-0.1 0.2-0.2 0.1-0.2-0.1-0.2-0.2-0.1-0.2 0-0.7-0.1-0.1-0.1 0-0.4-0.2-0.5-0.2-0.2-0.1-0.2-0.2 0-0.1 0-0.3 0-0.3-0.2-0.1-0.2 0-0.2-0.1-0.1-0.3 0.2-0.2 0.2-0.1 0-0.2-0.2-0.3-0.5-0.3-0.5-0.1-0.5 0-0.3 0.2-0.1 0.5-0.1 0.5-0.1 0.5-0.3 0.2-0.2 0-0.9-0.5-0.3-0.2-0.1-0.1-0.1-0.6-0.2-0.1-0.6 0.5-0.2 0-0.3 0-0.2 0.1 0 0.3 0 0.3 0.2 0.1 0.5 0 0.5 0.3 0.4 0.3 0.1 0.3-0.5 0.2-0.2-0.1-0.3-0.2-0.3-0.1-0.1 0.1-0.2 0.4-0.2 0-1.2-0.1-0.7-0.2-0.4-0.2-0.6 0.6-0.2 0.1-0.1 0-0.4-0.4-0.5-0.2-0.4-0.2-0.2 0-0.3 0-0.4 0.3-0.2 0-0.1 0-0.1-0.3-0.2-0.2-1.7-1.8-0.5-0.3-0.5 0-0.1 0.1-0.2 0.2-0.2 0.1-0.2-0.1-0.1-0.2 0-0.3-0.1-0.4-0.3-0.1-0.4-0.2-1.4-1.2-0.6-0.6-1-0.9-0.4-0.1-0.5 0-1.1 0-1 0-1.5-0.4-0.5 0-1.1 0.2-0.4 0.1-0.4 0.2-0.3 0.3-0.2 0.4 0.1 0.4 0.2 0.3 0.3 0.4-0.2 0.1-0.2 0-0.5-0.2-0.4-0.2-0.5 0-0.5 0-1.1 0.5-1 0.1-1-0.1-0.8-0.4-0.7-0.7-1.2-1.5-0.6-0.6-3.4-2.1-3-2.5-5.3-3.1-4.2-1.9-3.6-1.3-0.9-0.1-0.9 0.4-2.2 1.6-3.4 1.2-1 0.2-2-0.1-3.2-0.5-5.1 0-0.9-0.3-2.4 0-0.5 0.1-1.2 0.4-2.9-0.1-4.2 0.7-4.6 0.1-1.5 0.5-0.4 0.1-1.8 0-1.3 0.3-0.4 0-1.5 0-0.4 0-1.3 0.5-0.4 0.1-0.6-0.1-2 0.3 0-140.5 194.4 0 64.9 0 0 73.1 0 127.4z" id="AUS2655" data-name="sas">
 </path>
 <text fill="#00000" stroke='black' strokeWidth={'1px'} data-name="sas" fontSize="25" fontFamily="Verdana" x="450" y="470">SA </text>
 </svg>
  );
};

export default SA;
