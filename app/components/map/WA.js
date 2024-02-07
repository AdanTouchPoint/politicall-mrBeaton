// components/MapaAustralia.js
"use client"
import React from 'react';
import "./css/map.css"

const WA = ({setShowModal, setStates, setModalText,setMousePosition}) => {
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
    setMousePosition({ x: e.clientX, y: e.clientY + 95 })
    setShowModal(true)
  };
return (
<svg className='green' version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" cursor={"pointer"} onClick={click}>

<path d="M202.5 587.2l-0.1 0-0.2-0.1 0.1-0.7-0.1-0.3 0.3-0.2 0.2 0.1 0.1 0.1-0.2 0.4 0 0.4-0.1 0.3z m-141.9-50.3l0.1 0.6-0.5-0.2 0-0.6-0.2-0.6-0.1-0.6 0.3-0.3 0.1 0.6 0.3 1.1z m-2.7-5.4l-0.5 0.3-0.3 0.2-0.5-0.2-0.7 0.1-0.4 0 0.4-0.3 0.5 0 0.2-0.4 0.7 0 0.4 0.2 0.2 0.1z m-40.2-88.2l-0.2 0.1-0.1-0.9 0.5-0.1 0.4-0.5 0.6 0-0.3 0.4-0.4 0.5-0.3 0.2-0.2 0.3z m-15.8-72.8l0.2 0.3 0.3-0.1 0.3 0 0.2 0.1 0 0.2 0 1.2 0.3 0.8 0.5 1 0.1 1.2 0 0.9 0.5 0.7 0.4 1.2 0.6 1.2 0.4 1-0.5 1.2 0 0.6 0.7 0.2-0.3-0.6 0.3 0 0.2 0.3 0.2 0.4 0.2 0.4 0.2 0.2 0.3 0.5 0.1 0.1 0.2 0.3 0 0.5 0.3 0.7 0 0.5-0.1 0.5-0.3 0.3-0.2-0.1-0.4-0.3-0.2-0.8-0.3-0.9-0.4-0.5-0.2-0.2-1-1.4-0.8-0.6-0.7-2.3-1-1.3-0.3-0.5 0.2-0.2 0.1-0.2-0.2-1.4-0.8-1.6 0-1.3 0.1-0.4-0.1-0.8 0.3-0.4 0.3-0.4 0.3-0.2z m2.3-5l-0.1 0-0.2-0.3-0.1-0.5 0.6-1.7 0.1-0.8 0-1.8 0.2-0.8 0.6-0.4-0.2 0.8 0 0.4 0.1 0.2-0.2 0.2 0 0.5 0 1-0.1 0.4-0.4 0.8-0.1 0.3 0 0.9 0 0.5-0.2 0.3z m1.2-7.2l-0.1 0.1-0.2-0.4 0.5-3.8 0.4-1.1 0.2 0.5 0 0.6-0.5 2.2 0 0.6 0.3 0.2-0.5 0.7-0.1 0.4z m49.5-97.1l-0.1 0.4-0.3 0.2-0.7 0.3-0.1-0.3-0.2-0.2-0.3-0.1-0.1 0-0.1 0.3-0.2 0.2-0.2-0.1-0.2-0.3 0.1-0.3 0.2-0.9 0.4-0.7 1.5-1.8 0.6-0.6 0.5 0 0.1 0.3 0 0.8 0.2 0.3 0.1 0.4-0.1 0.4-0.5 0.7 0 0.4-0.1 0.2-0.2 0.1-0.3 0.3z m24.7-6.1l0.1 0.6-0.1 0.4-0.6 0-0.7 0-0.5-0.1-0.1-0.2 0.3-0.4 0.7-0.1 0.1 0.4 0.3-0.1 0-0.3 0.3-0.3 0.2 0.1z m150.5-90.1l-0.2 0.3-0.2 0.1-0.4-0.1-0.2-0.1-0.2-0.1-0.2-0.2 0.4-0.1 0.2 0 0.3 0.3 0.2-0.4 0.2-0.1 0.1 0.1 0.1 0.1-0.1 0.2z m-3-0.7l0 0.1-0.2 0-0.3-0.4-0.3-0.5 0-0.4 0.1-0.2 0.1 0.1 0 0.1 0.2 0.3 0.4 0.4 0.1 0.2-0.1 0.3z m-0.8-3.4l-0.1 0 0-0.3 0-0.2 0.1-0.1 0.1 0 0.1 0.1 0 0.3-0.2 0.2z m-4.8-0.3l0.1 0.1-0.4 0-0.2-0.1-0.1 0-0.2-0.1 0.3-0.3 0.3 0.3 0.2 0.1z m1.9-0.3l0 0.1-0.2 0-0.1-0.1 0.2-0.3 0.2-0.3 0.1 0.1 0 0.2-0.1 0.2-0.1 0.1z m-0.4 0l-0.1 0.3-0.3 0-0.2-0.1-0.2 0 0.1-0.1 0.2-0.2 0.1-0.2-0.2-0.4 0.2 0 0.2 0 0.2 0 0.2 0.1 0.1 0.1-0.2 0.4-0.1 0.1z m22.6-0.8l0.2-0.1 0.1 0.2-0.1 0.2-0.3-0.1-0.4-0.3 0-0.3 0-0.1 0-0.3 0.2 0-0.1 0.3 0.3 0.2 0.1 0.3z m-19.2-0.7l0.2 0.3-0.4-0.2-0.2 0-0.1-0.3 0.2-0.2 0.2 0.1 0.1 0.3z m6 0.1l-0.1 0-0.4-0.4-0.1-0.1 0.1-0.1 0.3 0.1 0 0.2 0.2 0.1 0 0.2z m-1.9-2.1l-0.1 0.2-0.1 0.1-0.2 0.1-0.2-0.5 0.2 0.1 0.4 0z m7.4-0.6l0.8 0.7 0.4 0.2-0.1 0.1-0.2 0-0.3 0-0.1-0.1 0-0.1-0.2-0.1 0-0.2-0.5-0.2 0.2-0.3z m5 0l0.3 0.1 0.1 0.1 0.2 0.1-0.4 0.1-0.2 0-0.3 0-0.1-0.1 0.1-0.2 0.2 0 0.1-0.1z m-13.3 0.2l0.6 0.2-0.5 0-0.2 0 0.1 0.3 0.1 0.1-0.1 0.3-0.3-0.1-0.1 0 0.1-0.2-0.2-0.4-0.1-0.2-0.1-0.2-0.1 0-0.3-0.2-0.1-0.1 0.2-0.2 0.1-0.1 0.4 0.1 0.2 0.2 0 0.1 0.1 0.3 0.2 0.1z m-3.7-2.1l0.1 0.1 0.2-0.1 0.2 0.1 0 0.2-0.2 0-0.2 0-0.2-0.3 0-0.1 0.1 0.1z m4 0.3l-0.1 0-0.1-0.1 0.1-0.3 0.1-0.1 0.2 0 0 0.4-0.2 0.1z m12-0.6l0.1 0 0.3 0.1 0 0.2 0 0.1 0.1 0.2 0 0.1-0.2-0.1-0.2-0.1-0.3-0.2 0.1-0.1-0.1-0.3 0.2 0.1z m-14.4-0.4l0.2 0 0.2 0.2-0.1 0.1-0.2-0.1-0.1 0-0.3 0 0-0.2 0.1 0 0-0.3 0.1 0 0.1 0.3z m7-0.1l0.3 0 0.7 0.2 0-0.1 0.2-0.1 0.1 0 0 0.4 0.1 0.1 0.1 0.1-0.3 0.3-0.2-0.1-0.1 0-0.2 0.1-0.6-0.6-0.7-0.3-0.2 0 0-0.2 0.6 0 0.1 0.1 0.1 0.1z m8-0.3l0 0.3-0.2 0-0.1-0.1-0.1 0.2-0.1-0.1-0.2 0.2-0.1-0.1 0.1-0.3-0.2 0 0.2-0.2 0.1-0.3 0.3 0.1 0.3 0.3z m-11-0.5l0.1 0.1 0.2 0 0.2 0.1 0.2 0 0.2 0.1 0.2 0.1-0.1 0.1-0.1 0.1-0.5-0.2-0.4-0.3 0-0.1z m-4.2-0.5l0.3 0.2 0.2 0.1-0.6-0.1 0.1-0.2z m3.6 0.3l-0.1 0.1-0.1 0.2 0.1 0.2-0.2 0.1-0.1-0.3-0.2 0.2 0-0.1-0.1-0.1-0.1-0.3 0-0.1 0.1-0.2 0.2 0 0.2 0.2 0.3 0.1z m-5.6-0.8l0.1 0-0.1 0.2-0.2 0.1-0.2 0.1-0.2-0.1 0.2-0.2 0.2 0 0.2-0.1z m4.9-0.3l-0.1 0.1 0.1 0.1 0.1-0.1 0.2 0.2 0.2 0.1 0 0.2-0.2 0 0 0.1-0.3-0.1-0.2-0.3-0.2-0.3 0.2-0.2 0.2 0.2z m3.4-1.3l0-0.1 0.1-0.1 0-0.4 0-0.2 0.2 0.3 0 0.2-0.1 0.1-0.2 0.2z m11.2-0.6l0.1 0.4 0.5-0.1 0.1 0.2 0 0.2-0.7 0-0.1-0.3-0.2-0.7 0.1-0.2 0.2 0.1 0 0.4z m8.3-0.7l0.1 0.1 0 0.3 0 0.1-0.2 0.3 0 0.1 0 0.2-0.3-0.1-0.2 0.1-0.1 0.2-0.3 0.1-0.1-0.1-0.1 0.1 0-0.3 0.2-0.2 0-0.2 0.3-0.2 0.1 0 0.1-0.1 0.1-0.2 0.1-0.1 0.2-0.1 0.1 0z m-2.7 0.2l0 0.1 0.1 0.5-0.2 0.1-0.1 0.3-0.1 0.7-0.1-0.4 0.1-0.3 0-0.3 0-0.2 0.1-0.3-0.1-0.3 0.1-0.1 0.1-0.1 0.1 0.2 0 0.1z m-4-13.8l0 0.2-0.1 0-0.3 0 0-0.1-0.2 0-0.3 0.4-0.1-0.1-0.1-0.3 0.1-0.1 0.8-0.4 0.1 0 0.1 0.4z m3.6 0l-0.2 0.2-0.3-0.1-0.2-0.1-0.3 0-0.1 0-0.2 0.3-0.1 0.1-0.1 0-0.7-0.3-0.1-0.1 0-0.2 1-0.3 0.5-0.2 0.4-0.5 0.2 0 0.3 0.1 0.1 0.3-0.1 0.2-0.2 0.2-0.1 0.2 0.2 0.2z m2.6-1l-0.3 0.9 0 0.2 0.3 0 0.2 0.1 0.2 0.2-0.1 0.3 0.5 0.3 0.6 0.9 0.5 0.2-0.3 0.2-1.9 0.7-0.4 0.1-0.2-0.1-0.1-0.3 0-0.2 0.2-0.1 0.2 0.2 0.4-0.6 0.3-0.3 0-0.1-0.7-0.1-0.2 0-0.2 0.2-0.2 0.1 0.1-0.5-0.3 0.4-0.3 0-0.2-0.2-0.4-0.2 0.3-0.2 0-0.2 0-0.3 0.2-0.2 0.2-0.1 0.3 0.1 0-0.2 0-0.2 0.2-0.2-0.4 0 0.2-0.3 1.1-0.7 0.3-0.1-0.1 0.3z m5.8 0.6l-0.2 0.1-0.4-0.1-0.3-0.2 0-0.2 0.1-0.3 0.2-0.4 0.1-0.1 0.3 0.2 0.2 0 0.3 0.2 0.1 0.2-0.1 0.4-0.2 0.1-0.1 0.1z m72.7-2.4l-0.2 0.3-0.1-0.2-0.2-0.2-0.2-0.1-0.3-0.1-0.3-0.4-0.2-0.2-0.1-0.4 0-1.6 0.2-0.2 0.4 0.3 0.2 0.8 0.1 0.2 0.4 0.2 0.1 0.1 0.2 0.4 0 0.6 0 0.5z m-70.5-4.7l-0.3 0.4 0.1 0.2 0.3 0.1 0 0.4 0 0.2-0.2 0.1-0.4-0.2-0.3-0.7-0.1 0-0.4 0.1-0.1-0.1-0.1-0.4 0.2-0.3 0.3-0.1 0.4 0.4 0.1-0.4 0.3-0.4 0.2 0.4 0 0.3z m-4.2-0.9l0 0.4-0.1-0.5 0-0.3 0.3 0 0 0.1-0.2 0.3z m80 2l0 0.5-0.6-0.4-1.2-1.4-0.2-0.6 0-1.1 0.1-0.3 0.4 0.1 0.3 0.4 0.5 1.2 0.2 0.3 0.2 0.2 0.2 0.5 0.1 0.6z m-2.8-5.7l0 0.1-0.2-0.3-0.1-0.3 0.1-0.1 0.2 0.1 0.1 0.1 0.1 0 0.3 0.3-0.1 0.1-0.4 0z m-71.8-5.3l-0.2 0.1 0-0.2-0.1-0.1 0.1-0.2 0-0.2 0.1 0 0.2 0.1 0.1 0.2 0 0.2-0.2 0.1z m9.8-0.9l0.6 0.2 0.3-0.2 0 0.2-0.1 0.2-0.1 0.2-0.3-0.1-0.2-0.2-0.2-0.3z m-5.1 0l-0.1 0.6-0.4 0.5-0.1 0.2 0.1 0.2 0.3 0.6 0.2 0.3-0.3 0.1-0.5 0.4-0.2-0.1-0.1 0-0.2 0.2 0 0.1 0.1 0.2 0 0.2-0.1 0.1-0.2 0.1-0.2-0.5-0.2-0.2-0.1-0.1-0.4 0.1-0.1 0 0-0.2 0.1-0.7 0-0.6 0.1-0.3 0.3 0.1 0.3 0.2 0.2 0.2 0-0.4 0-0.7-0.1 0-0.4-0.3 0.2-0.3 0.4-0.4 0.3-0.2-0.1-0.3 0.2-0.1 0.2 0 0.2 0.3 0 0.2 0.1 0.1 0.1 0.1 0.1 0 0.3 0.1 0 0.2z m7.5 0.1l-0.3 0-0.2 0-0.1-0.1-0.1-0.4-0.2-0.2 0-0.3 0.4-0.4 0.2 0.3-0.1 0.2 0.2 0.1 0 0.2-0.1 0.2 0 0.1 0.3 0.1 0 0.2z m-12.4-1.4l-0.2-0.3 0.1-0.2-0.3-0.2 0.3-0.3 0 0.1 0.2 0.3-0.1 0.2 0 0.4z m21.1-1.2l-0.2 0.3-0.2-0.1-0.3-0.1 0.3-0.1 0-0.3 0.2-0.2 0.1-0.3 0.1-0.1 0-0.1 0.2 0 0.1 0.4-0.2 0.2-0.1 0.4z m1.1-1.5l0.1 0 0.2 0 0.4 0.3 0.1 0.2-0.1 0.1-0.3 0-0.1 0.1-0.1 0.3-0.1 0-0.3-0.2 0-0.2-0.1-0.3-0.1-0.1 0.1-0.2 0-0.2 0-0.1 0.2-0.1 0.1 0 0 0.4z m-15.2-0.4l-0.1 0.2-0.1-0.2-0.1 0 0-0.2 0.1-0.1 0.3 0 0 0.1-0.1 0.2z m8.7-3.3l-0.2 0.2-0.1-0.2 0.1-0.2-0.1-0.3 0.2 0 0.1 0.5z m-1.6-4.3l0.3 0 0 0.1-0.3 0.1-0.1 0.1 0-0.2-0.1-0.3 0.2-0.2 0.1 0.1-0.1 0.1 0 0.2z m14.7-0.5l-0.1 0.1-0.1-0.2 0-0.2 0.1-0.2 0.2 0 0 0.4-0.1 0.1z m6.4-0.6l0 0.1-0.2 0.1-0.3-0.1-0.3-0.1-0.4 0-0.3 0-0.3 0.2-0.2 0-0.2-0.3-0.1-0.4 0.4-0.1 0.7 0.1 0.7 0.2 0.5 0.3z m51.7 21.7l0 257.4 0 140.5-0.3 0.1-1.2 0.4-3.5 1.8-0.3 0.4-0.7 0.2-1.5 1.1-9.4 4.4-4.4 1.7-5.4 1-3.9 1.5-0.4 0.1-0.2 0.1-0.4 0.4-0.2 0.1-5.2 1.6-3.9 0.5-0.4 0.2-0.2-0.1-0.6 0.2-2.5-0.1-2.5 0.3-0.7-0.3-0.6 0.3-1.8 0.1-6.6-0.8-2.1-0.7-0.6-0.4-1-0.1-0.3-0.1-0.3 0.1-0.8 0.2-0.2 0.2-0.4 0.4-0.1 0.1-0.6 0.2-1.5-0.2-0.6 0.3-1.1 0.6-1.3 0.7-1.4 1-2.8 2.2-3 2.3-1.3 0.4-3 0.9-1.7 1-3.5 1.9-1.3 0.4-0.4 0.1-0.4 0.1-2.1 2.5-1.5 0.9-1.9 0.6-0.8 0.3-4.1 0.6-3.5 0.7-0.9 0.3-0.4 0.3-0.9 0.9-0.2 0.2-0.5 0.2-0.4 0.3-0.8 0.7-1.1 1.4-0.4 0.9-0.3 0.9-0.1 1.1-0.2 0.5-0.2 0.5-0.3 0.3-0.8 1.8 0 0.2 0 0.4-0.1 0.3-0.2 0.6-0.1 0.7-0.4 1.1-0.1 0.5-0.1 1.2-0.2 0.6-0.4 0.2-0.5 0.1-0.4 0.2-0.4 0.3-0.2 0.4 0 0.3-0.1 0.2-1 0.6-1.2 1.5-0.3 0.6-0.2 0.5 0 0.2 0 0.4 0.1 0.2 0 0.2-0.2 0.2-0.4 0.3-1 0.5-0.3 0.2-0.2 0.2-0.3 0.6-0.1 0.1-0.3 0-0.6 0-0.3 0.2-0.9 1.4-0.3 0-0.4-0.2-0.3-0.3-0.2-0.3-0.2-0.2-1.7-0.2-0.9 0.3-0.6 0.7-1 1.5-0.8 0.3-0.3-0.2-0.1 0-0.4 0.4-0.1 0-0.7 0.1-0.2-0.2-0.3-1.7-0.4-0.9-0.6-0.6-0.9-0.4-0.5-0.1-0.3 0.1-0.3 0.1-0.9 0.1-1.6 0.6-0.8 0.2-0.5 0-0.2-0.1-0.5-0.5-0.2-0.1-0.3 0.1-0.6 0.3-1.9-0.1-0.9 0.2-0.7 0.4 0.2 0.3 0 0.4-0.2 0.3-0.3 0.3-0.4-0.5-0.4-0.3-0.4 0.4-0.3 0-2.2-0.8-0.8 0-0.8 0.3-0.7 0.5-0.3 0.4-0.1 0.3 0.1 0.8-0.2 0.5-0.4-0.2-0.4-0.3-0.1-0.3-0.2 0.2-0.3 0.5-0.1 0.1-2-0.1-0.5-0.1 0-0.2 0.6-0.7 0.1-0.4-0.5-1-0.2-0.9-0.1-0.4-0.2-0.1-0.4-0.4-0.6-0.8-0.2-0.1-0.2 0-0.3 0.2-0.9 0-0.6 0.2-0.7 0.8-0.3 0.2-0.4 0.1-0.7 0.4-0.4 0-0.4-0.1-0.7-0.6-0.4-0.1-0.2-0.1-0.4-0.1-0.2 0-0.3 0-0.2 0.2-0.4 0.3-0.4 0-0.3-0.3-0.3-0.4-0.4-0.2-0.1 0-0.6-0.3-0.4-0.3-0.2 0-0.5 0.1-3.6-0.2-0.4 0.1-0.8 0.4-1.1 0.1-0.3 0.1-1 0.7-0.1 0-0.1-0.1-0.5-0.3-0.6-0.2-0.2-0.1-0.4 0.1-0.8 0.3-0.5 0.2-0.5 0-0.3 0-0.2 0.1-0.5-0.2-0.6-0.1-1.2 0-0.5 0.2-0.6 0.3-0.5 0.3-0.6-0.1-0.4 0.2-3.7 0-0.3 0-0.2 0.1-0.1 0.3 0 0.4-0.1 0.2-0.3 0.2-2.3 0.8-0.6 0.1-0.3-0.3-2.2-0.6-2.1-0.2-0.5 0.1-0.8 0.4-0.4 0.1-0.4-0.1-0.6-0.5-0.4-0.1-0.4-0.1-0.4 0.1-0.3 0.1-0.3 0.2-0.6 0.5-0.4 0.2-0.4 0-1.1 0.1-1.1 0.4-0.3 0.2-1.3 1.5-0.6 0.4-1.4 0.5-0.6 0.5 0.3 0.2-0.2 0.3-0.2 0.2-0.5 0.1-0.3 0.2-0.7 1.8-0.1 0.2-0.8 0.6-0.2 0.5-0.2 0.7-0.2 0.7 0 0.6 0.3 0.6 0.6 0.2 0.5 0.1 0.6 0.4-0.3 0.1-0.3 0-0.5 0.2-0.7 0.2-0.8-0.8-0.7-0.1-0.5 0.4-0.2 0.7 0.1 0.7 0.5 0.5-0.3 0.1-0.5 0.5 0 0.3 0 0.1-0.3-0.1-0.1-0.1-0.1-0.4-0.2-0.6-0.3-0.1-0.4 0-0.4 0.2-0.2 0.2-0.1 0.1-0.1 0.6 0 0.6-0.1 0.3-0.3 0.1-0.3 0.1-0.2 0-0.1-0.1-0.1-0.4-0.1-0.2-0.2-0.1-0.2-0.2-0.3 0-0.4 0.1-0.2-0.1-0.2-0.1-0.3-0.3-0.2-0.1-4-0.7-0.2 0-0.4 0.3-0.1 0-1.1-0.1-0.2 0 0.9 1 0.2 0.2-0.3 0.2-1.4 0.2-0.5 0.1-0.7 0.6-0.3 0.2-0.3 0.2-0.1 0.6 0.2 0.5 0.5 0.1-0.7 0.9-0.4 0.3-0.8 0.2-0.8 0.6-0.4 0.2-1.9 0.4-1 0.4-0.8 0.6-0.2 0.4-0.5 0.9-0.2 0.4-0.2 0.6 0 0.5 0.2 0.8 0 0.7-0.3 0.1-0.9 0-1.7 0.1-0.4 0.2-0.9 0.6-0.8 0-0.1 0.1-0.1 0.3 0.2 0.1 0.3 0.2 0.2 0.4 0.2 0.5 0 0.4-0.4 0.1-0.3-0.1-1-0.8-0.2 0.2-0.1-0.2-0.3 0.2-1.1 0.4-0.2 0.1-0.4 0.1-0.1-0.1-0.5-0.1-0.2 0-0.1 0-0.4 0.1-0.2 0.1-0.1-0.1-0.3-0.1-0.1 0-0.1 0-0.2 0.3-1.3 0.1-0.3 0.2 0 0.4 0.2 0.4 0.4 0.2 0.6 0.3 0.2 0 0-0.2-0.1-0.5 0-0.2 0.1-0.1 0.4 0.1 0.4 0.9 0.3 0.2 0.8-0.1 0.3 0.1-0.1 0.4-0.3-0.1-0.3 0.1-0.4 0.4-0.4 0-0.9 0-0.6-0.3-1.1-1-1.4-0.5-1.3-0.1-0.4 0.1-0.6 0.3-0.3 0.5-0.1 0.7 0 0.8-0.7-0.3-1.1-0.9-0.7-0.2-0.8-0.1-0.2-0.1-1.2-0.8-0.3-0.2-0.7-0.4-0.4-0.2-0.1 0-0.2 0.4-0.4 0-0.9-0.4-0.4-0.1-0.2 0.1-0.3 0.1-0.2-0.1-0.3-0.2-0.2 0-0.4 0.1-0.3 0.4-0.4 0.9-0.3-0.2-0.4-0.4-0.3-0.1-0.3-0.1-0.6-0.2-0.3-0.1-0.2 0.1-0.3 0.1-0.3 0-0.4-0.2-0.4-0.2-0.3 0-0.3 0.1-0.4 0.6-0.4 0.3-0.5 0.1-0.7-0.1-0.3-0.2-0.8-0.6-0.9-0.2-0.3-0.1-0.2 0.2 0 0.3-1.5 0-0.3 0.3-0.2 0.3-0.4-0.2-0.7-0.6-1.1-0.1-0.5-0.3-0.2-0.1-0.2-0.1-0.6 0.1-0.1-0.1-0.5-0.6-0.9-0.7-0.4-0.4 0.1-0.2 1.9 0.4 0.4 0.1 0.2 0 0.1-0.1 0-0.3-0.3-0.2-0.3-0.2-0.7-0.2-0.3-0.4-0.3-0.4-0.3-0.3-0.3-0.2-0.1 0-0.2 0.2 0.6 1-0.5 0.4-1-0.1-0.9-0.4-0.9-0.6-3.3-1-1.6-0.2-0.2 0-0.5 0.1-0.2 0-0.1-0.1 0-0.3 0.2-0.5-0.2-0.5-0.6-0.6-0.3-0.9-0.4-0.6-0.6-0.6-3-3.6-2.9-2.5-0.9-0.6-0.8-0.1-0.2-0.1-0.1-0.3-0.1-0.2-0.2-0.3-0.2 0-0.2-0.1-3.3-1.8-1-0.3-0.6-0.1-1.7 0.1-0.4 0.2-0.6 1.1-0.4 0.3-0.2-0.5-2-2.1-0.1-0.5-0.1-0.7 0.1-1 0-0.4-0.2-0.5-0.6-1.4-0.1-0.2 0.1-0.6 0-3.6-0.2-1.1-0.1-0.5 0.1-0.5 0.3-1.1 0.2-0.5-0.4-0.6-0.2-1-0.1-0.9 0.3-0.8 0.6-0.6 0.1-0.3 0-0.6-0.3-1.4 0-0.5 0.3 0 0.9 0.4 0.6 0.7 0.4 0.7 0.6 0.6 0.8 0.5 0.9 0.3 0.9 0.1 1 0 0.9-0.1 0.9-0.4 0.8-0.4 0.6-0.5 1.8-2.2 1.3-2.2 0.6-1.5 0.3-1.2 0.2-0.4 0.2-0.2 0.2 0 0.3 0.2 0.4 0 0.5-0.2 0.2-0.7 0-1.6-0.1-0.4-0.2 0-0.1 0.3-0.1 0.9-0.3 1.2-0.1 0 0.1-4.3 0-2.5-0.3-2.2-0.7-3.3-0.3-2.1-0.2-0.9-0.1-0.8 0.3-1 0.4-0.8 1-1.5 0.5-0.5-0.2 1-1.1 1.4 0 1.3 0.6 1.9 0.5 1 0.5 0.2 0.2-0.4-0.1-0.6-0.5-0.9-0.3-0.4 0-0.2 0-0.4-0.2-0.6-0.2-0.2-0.1-0.2 0.2-0.1 0.2 0 0.3 0.3 0.3 0 0.9 0.1 0.3-0.3 0.2-0.6-0.2-0.6-0.3-0.3-0.4-0.1-0.2-0.2-0.1-0.5 0-0.3 0.1-0.2 0.2-0.4 0.1-0.3 0.3-0.9 0-0.9-0.3-0.8-0.5-0.5 0.5-0.6 0.1-0.3-0.2-0.5-0.3-0.3-0.6-0.3-0.3-0.5 1 0 0.4-0.2 0.1-0.6 0.1-0.5 0.2-0.9 0-0.6-0.1-0.2-0.3-0.4-0.1-0.2 0.2-0.4 0-0.3-0.1-0.3-0.2-0.4 0-0.5 0.3-3.3-0.5-3.9-0.4-2.1-0.4-1.1-1.7-2.6-1.1-2.8-2.1-3.3-1.6-4.3-1.5-3.6-1.6-2.9-1.2-1.3-0.3-1.5-0.1-0.3 0-0.3-1.4-2.7 0-0.2-0.1-0.5-0.7-2.1-0.1-0.5 0-0.9-0.1-0.5-0.4-1.9-0.3-0.8-0.2-0.4-0.1-0.1 0.1-0.2 0.2-0.2 0-0.2 0.1-0.6-0.1-0.2 0-0.2-0.2-0.2-0.5-0.3-0.1-0.1-0.2-0.5 0.1-0.5 0.1-0.6 0.1-0.6 0-0.2-0.2-0.5-0.2-0.6-0.1-0.2-0.2-0.2-0.2-0.2-0.1-0.9 0.6-3.2-0.1-0.6-0.3-0.9-0.1-0.3-0.1-2.2 0.1-2.1 0.3-2 0.4-1.4 0.1-0.5-0.1-0.6-0.5-1.2-0.3-1.1-0.1-0.5-0.1-0.5-0.1-0.4-0.3-0.9-0.4-1.5-1.1-3.1-0.3-0.4-3.9-4.4 0-0.3-0.8-1.1-0.2-0.4-0.2-1-0.4-0.4 0.4-0.9 0.1-1.1-0.2-1.1-1.3-3.3-0.5-0.8-1.8-2.2-1.2-1.9-0.1-0.4-0.1-0.4-1.1-1.5-0.3-0.2-0.7-0.4-0.4-0.3-1.7-2.1-0.2-0.7-0.1-0.3-0.1-0.2 0-0.8 0-0.2-0.9-2.8-0.1-1-0.1-1.1 0.2-0.5 0.4-0.9 0-0.5 0.1-0.3 0.3-0.5 0.1-0.2 0-0.3-1.5-5.9-1.4-3.2-1.9-3.5-3.4-6.1-2.4-3.5-1.4-2.4-1.3-1.3-1.4-1.6-2.3-2.4-0.3-0.3-0.7-0.7-0.3-0.4 0-0.6-0.2-0.5 0.2-0.3-0.3-0.5-0.3-0.8-0.6-1.1-0.7-0.6-0.8-0.9-0.4-0.6 0.1-0.3 0.6 0.4 0.5 0.4 0.4 0.1 0.6 0.2 0.1 0.6 0.3 0.6 0.1-0.9 0.1-0.8 0.2-0.8-0.1-0.9-0.1-0.9 0.1-0.8 0.4-0.7 0.3 3 0.2 2.8-0.1 0.9 0.2 0.9 0.2 0.5 0.4 0.6 0.1 0.5 0.3 0.1-0.1-0.7-0.5-1.1 0-0.8 0.2-1.1 0.3-0.5 0.1-2.6-0.6-1.4 0.2-0.7 0.5 1.2 0.2 2.7 0.4-0.5 0.8 0.1 0 1 0.2 0.5 0 0.7 0.3 0.3 0.1 0.5 0.2 0.4 0.2 0.7 0.1 1.2-0.3 0.5 0.1 0.9-0.3 0.9 0.2 0.2 0.4-0.3 0-1.4 0.1-0.4 0.3-1-0.4-1 0.1-0.4 0-0.5 0.4-0.2 0.3 0.5 0.1 0.4 0.1 0.5 0.2 0.7-0.2 0.8 0.1 0.6 0.2 0.8-0.2 0.6 0.2 0.5 0 1 0 0.8 0.3 0 0.3-0.3 0-0.3 0.1-0.5 0.1-0.3 0.4-0.4-0.1-1 0.1-0.2 0.5 1 0 0.4-0.1 0.7 0 0.5-0.2 0.6 0.1 0.4-0.2 0.2 0.4 0.1 0.3 0 0.1 0.3 0.1 0.5 0 0.4 0.4 0.1 0-0.6 0.2-0.4 0.3-0.1 0.5-0.2 0.6-0.1 0.2-0.2 0.2 0.3 0.7 0 0-0.9 0.9-0.5 0.3-0.5 0.4-0.7 0.1-0.7-0.2-1-0.2-0.6 0.2-0.5 0.1-0.8-0.4-0.6-0.6-0.6-0.6-0.7-0.7-0.6-0.7-0.1-1.4-0.4-0.1-0.5 0-0.4-0.6-1-0.9-1.1-0.7-0.2-0.2-1.2 0.2-0.7-0.3-0.2-0.2-0.7 0.1-0.7-0.9-0.5 0.2-0.7-0.2-0.5-0.1-0.4-0.3-0.3-0.2-0.3-0.3-0.3-0.1-0.3 0-0.3-0.2-0.4-0.3-0.3-0.6-0.8-0.1-0.7 0.1-0.5 0.1-0.6 0.2-0.5 0.4-0.7 0.3-0.8 0.5-0.6 0.3-0.8 0.3-0.1 0.1 0.8 0.1 0.9-0.1 0.5 0.3 0.4 0.3 0 0.2 0.1 0.1 0.2 0.5 0.1 0.2 0.8 0.3 0.9 0.5 0.8 0.6 0.3 0.3 0.7 0.6 0.3 0.6 0.1-0.1 0.8-0.2 0.4 0.1 0.5 0.2 0.1 0.6 0.3 0.1 0.5-0.2 0.4-0.4 0.4 0.1 0.4 0 0.7-0.2 0.6-0.2 0.6 0.1 0.4-0.2 0.7 0 1-0.2 0.7 0.5 0.7 0 0.4 0.7 0 0.1 0.4 0.6-0.1 1.2-2.1 0.4-1 0.2-0.9-0.3-1 0-0.3-0.2-0.4-0.1-0.2 0-0.4 0.1 0 0.2 0 0.5 0.1 0.5 0.6-0.1 0.6-0.1 0.8 0.2 1.3-0.1 0.8 0.5 0.4 0.4 0.1-0.2 1.2 0.1 0.9 0.3 0.8 0 0.5 0.2 0.6 0.1 0.6 1.1 1.4 1 1.1 0.4 0.3 0.4 0 0.4-0.4 0.5-0.4 0.2-0.5 0.6-0.3 0.5-0.2 0.2-0.7 0.4-0.7-0.3-1-0.3-0.7-0.1-0.6-0.2-0.6 0.1-0.7 0.2-0.5 0.2-1 0.2-0.1 0-0.3 0.1-0.3 0-0.2-0.2-0.6-0.6-0.9-0.1-0.6 0.1-0.2 0.2 0.1 0.3 0.4 0.1 0.1 0.3 0 0.3-0.1 0.2-0.1 0.3 0-0.2-0.4-0.3-0.2-0.2-0.3-0.1-0.5 0.2-0.5 0.2-0.5 0.2-0.6-0.1-0.5-0.3-0.3-1.1-0.7-0.8-0.3-0.1-0.4-0.1-0.3-0.3-0.2 0.1-0.4-0.2-0.4-0.3-0.4-0.3-0.1 0-0.1-0.1-0.5-0.2-0.1-0.8-0.5-0.2-0.3-0.5-1.5-1.4-2-0.5-0.9-1.4-3.5-0.1-0.6-0.1-0.4-0.8-1.3-0.2-0.6-0.1-0.3-0.3-0.2-0.9-0.6-0.8-0.3-0.4-0.4-0.3-0.6-0.2-0.8-0.3-0.5-0.1-0.5-0.1-0.3 0-0.2 0-0.2 0.3-0.4 0.1-0.1 0-0.5-0.1-0.6-0.4-0.3-0.7-0.1 0-0.5-0.1-0.5 0-0.5 0.2-0.4 0.2-0.4-0.1-0.6-0.1-0.6-0.2-0.4-1.3-2.1-2.3-2.6-0.5-0.8-0.3-1-0.2-1-0.1-3.9 0.1-0.5 0.1-0.4 0.6-0.5 0.2-0.5 0-0.5-0.3-1-0.1-0.9 0-0.5 0.2-0.3 0.3-0.3 0.2-0.3 0.2-0.4 0.1-0.6 0-0.5-0.1-0.4 0.1-0.4 0.7-0.9 0.2-0.5 0.5-2.1 0.3-0.4 0.4-0.1 0.9-2.6 0.1-0.2 0.3-0.2 0.2-0.1 0.1-0.3 0.1-0.1 0.5-0.2 0.5-0.2 0.1-0.2 0.1-0.3 0.2-0.2 0.8-0.5 0.2-0.4 0.1-0.6 0.1-0.1 0.2-0.3 0.1-0.2 0-1.6 0.2-1 0-0.5-0.2-2-0.4-1.5-0.1-0.4 0.1-0.6 0-0.2 0.1-0.2 0.2-0.2 0.3-0.1 0.2-0.2 0.3-0.5 0.2-0.6-0.1-2.8-0.1-0.8-0.4-0.5-0.2-0.6-0.3-1.5-1-1.1-0.3-0.1-0.2-0.1-0.4-0.1-0.3 0 0.3-0.9 0-0.5-0.3-0.4 0-0.2 0-0.8-0.1-0.3-0.1-0.2-0.1-0.2 0.1-0.4 0.2-0.2 0.5-0.2 0.2-0.2 0.5-1 0.3-0.3 0.1-0.2 0.1-1.1 0.2-0.5 0.2-0.5 0.8-0.8 0.2-0.4 1.8-5.1 0.1-0.5 0-0.5 0.1-0.5 0.6-0.8 0.5-1.4 1.4-2.2 0.5-0.5 0.7-0.4 0.4-0.2 0.5-0.1 0.4-0.1 0.4-0.2 0.3-0.1 0.3 0.3 0.1 0.4-0.3 0.3-0.3 0.3-0.1 0.3-0.1 0.5-0.3 1-0.7 4.3-0.3 0.8-0.1 0.8 0.4 0.8 0.2 0.3 0.4 0.9 0 0.3-0.2 0.9-0.1 0.4 0.3 0.2 0.2-0.3 0.1-0.4 0.2-0.3 0.4 0.2 0.2 0.3-0.1 0.5-0.1 0.4-0.3 0-0.6 0.8-0.1 0.2 0 0.3 0.2 0.6-0.4 0.9 0.3 0.7 0.5 0.4 0.7 0 0.4-0.3 0.2-0.5 0.3-0.5 0.7-0.2 0.2-0.1 0.3-0.2 0.2-0.1 0.3 0.2 0.2 0.3 0.1 0.3 0.2 0.3 0.3 0.1 0.5-0.2 0.2-0.1 0.1-0.3 0-0.6 0-0.2 0.2-0.4 0.1-0.3 0-0.5 0.1-0.6 0.7-1.3 0.1-0.7 0.3-0.6 0-0.2 0.6-0.7 0-0.3-0.1-0.3 0.1-0.2 0.2-0.1 0.2 0 0.2-0.1 0.2-0.9 0.3-0.8 0-0.5 0-0.2-0.3-0.3-0.2-0.3 0-0.4 0-0.3 0.1-0.2 0.4 0.3 0.4 0.5 0.2 0.3 1.1-2 0.3-0.8 0.2 0 0.1-0.2 0.1-0.4 0.1-0.9 0.2-0.4 0.5-0.1 0.2-0.1 0.3-0.4 0.2-0.2 1.7-0.6 3.2-2 0.9-0.3 0.8 0.2 1-0.3 0.3-0.2 0.2-0.2 0.3-0.2 0.2 0 0.1 0.3 2.6-1.6 5-1.9 0.5-0.3 0.2-0.4 0.1-0.4 0.3-0.4 0.6-0.6 1.5-1.9 0.5-0.5 0.8-0.5 3.1-1.5 0.2-0.2 0.3-0.8 0.6-0.9 0.4-0.9 0.6-0.7 0.7-0.6 0.5-0.2 0.3-0.1 1.1-0.6 0.7-0.2 0.3-0.2 0.3-0.2 0.8-0.2 0.6-0.3 0.5-0.7 0.3-0.9 0.1-1 0.1-0.3 0.5-0.1 0.2 0.1 0.4 0.2 0.4 0.2 0.5 0 0.4-0.2 0.6-0.5 0.3-0.1 0.9 0 1-0.2 0.3-0.1 0.7-0.6 0.3-0.1 0.2-0.1 0.2-0.2 0.1-0.5 0.2-0.1 0.5 0 0.7-0.3 2.5-1.7 0.9-1 0.8-1.3 0.4-0.3-0.1-0.3 0.3-0.1 0.4-0.1 0.2 0.1 0.2 0.1 0 0.1-0.2 0-0.3 0.2-0.1 0.5-0.1 0.9-0.1 0.2-0.4 0.4-0.1 0.2 0 0.3 0.1 0.2 1 0.9 0.4 0.2 0.6 0 0.4-0.1 0.5-0.2 0.4-0.3 0.1-0.3 0.2-0.1 2.3-1.1 0.2 0 0.4 0.3 0.1 0.1 0.3-0.1 0.2-0.1 0.6-0.5 0.2-0.3 0.1 0 0.2 0.2 0 0.1 0 0.4-0.1 0.3-0.1 0.1 0.1 0.1 0.2 0.2 0.2 0.4 0.3 0.2 1.7 0.7 0.8 0.2 0.9 0.1 1.8-0.1 1.7-0.3 0.6-0.4 0.8-0.6 0.5-0.2 0.4 0.1 0.3 0.3 0.3 0 0.3-0.4 0.2 0.1 0.1 0.2 0 0.1 0.3-0.1 0.8-0.4 0.2 0.1 0.3-0.2 0.8-0.3 0.5-0.3 0.4 0 0.2-0.1 0.2-0.2 0.3-0.6 0.1-0.2 0.3-0.2 0.1-0.1 0.6 0 0.1-0.1 0.3-0.4 0.1-0.2-0.1-0.5 0.1-0.2 0.1-0.2 4.2-3 0.3-0.1 0.3-0.1 0.3-0.1 0.3 0 0 0.2 0 0.2 0.1 0.1 0.3-0.2 0.5 0.2 0.3-0.1 0.4-0.3 0.4-0.1 0.2 0 0.4-0.3 0.2 0 0.3 0.1 0.2 0.4 0.2 0.1 0.3 0 1-0.4 3-0.5 0.3 0 0.2-0.2 0.7-0.1 0.2 0 0.3 0 0.4 0.3 0.3 0 0.4 0 0.4-0.1 0.8-0.6 0.5-0.1 0.5 0 0.5-0.2 0.6-0.4 0.4-0.6 0.6-1.2 1.7-1.8 0.2-0.8 0.1-0.5 0.3-0.2 0.3-0.1 0.3-0.3 0.7-0.2 0.2-0.1 0.3-0.6 0.6-0.4 0.4 0.1 1 0.8 0-0.6 0-0.3 0.2-0.2 0.4 0 0.5 0.1 1.7 0.5 0.9 0.2 0.5 0 0.4 0.1 0.9 0.3 0.4 0.1 0.2-0.1 0.3-0.2 0.1 0 0.2 0.1 0.1 0.2 0.1 0.2 0.1 0.2 0.8 0.5 0.5 0.2 0.4 0.1 0.5 0 0.8-0.5 0.3-0.1 0.1-0.1 0.5-0.6 0.1 0 0.4 0.1 0.3 0 0.3-0.3 0-0.2 0-0.2 0-0.3 0.4-0.2 0.4 0 1 0.1 2.3-0.5 3.5-0.5 3.6-0.4 2.9-0.9 6.1-2.4 3.3-1.5 3.2-1.5 3.8-2.6 0.8-0.8 0.3-0.1 0.3-0.2 2.5-2.7 2.3-3 2.2-3.5 0.5-1.3 0.4-0.5 0.1-0.3 0-0.5 0.1-0.2 0.1-0.2 0.4-0.4 0.1-0.2 0.3-1.1 0.5-0.9 0.2-0.3 0.1-0.6 0-0.2 0-0.3-0.2-0.2-0.2-0.1-0.2-0.2-0.1-0.6 0.2-0.1 0.4 0.2 0.4-0.1 0.1-0.1 0.3-0.1 0.8 0 0.1-0.1 1-1 0.2-0.4 0.1-0.5-0.2-0.3-0.2-0.2-0.7-0.4 0.6-0.4 0.3-0.4 0.5-1.3 0.3-0.6 0.3-0.2 0.3 0.1 0.3 0.2 0.3 0.1 0.5 0.1 0.5-0.2 2.4-1.8 0.5-0.6 0.2-0.6 0.2-0.3 1.2-0.6 0.5-0.3 0.3-0.4 0.6-0.9 0 0.1 0.3 0.3 0.3-0.7 0.2-0.3 0.6-0.2 1.6-0.9 0.5-0.6 0.4-0.8 0.1-0.5 0-0.9-0.2-0.6-0.4-0.4-0.6-0.2-0.7-0.2-0.7-0.1-0.7 0.2-0.4 0.7-0.2 0 0-0.2-0.3-0.2-0.1-0.1 0.5-0.7 0.3-0.8 0-0.9-0.3-1.5 0.1-1.4 0.1-0.5 0-0.3-0.1-0.2-0.2-0.4-0.3-0.4 0-0.2-0.1-0.6-0.3-0.7-0.1-0.2-0.2-0.4 0-0.2 0-2.4 0.1-2.6 0.4-1.1 0.1-0.7 0.2-0.4 0.2-0.3 0.4-0.2 0.1-0.3 1.2-1.3 0.3-0.3-0.2-0.3-0.2 0-0.1-0.1 0.2-0.5 0.2-0.2 2.9-2.7 0.9-0.5-0.2 0.4 0.2 0.3 0.2 0.1 0.3-0.3 0.1-0.5-0.1-0.4-0.1-0.3 0.4-0.1 0.3 0.1 0.2 0.2 0.2 0.3 0.2 0.3 0.2 0.2 1.2 0.2-0.3-0.3-0.5-1.1-0.6-0.8-0.1-0.3 0-0.2 0.1-0.2 0.2-0.1 0.2 0 0.1-0.2 0-0.4 0.1-0.3 0.2-0.2 0.3-0.2 0.4-0.2 0.1 0.3 0.2 0.2 0.2 0.1 0.4 0 0.2 0 0.3-0.2 0.2-0.1 0.5 0 0.1 0 0.3-0.2 0.3-0.2 0.2-0.1 0.4-0.1 0.3 0.1 1.1 0.4-1.3-1.2-0.4-0.6 0-0.7 0.3-0.5 0-0.2 0-0.8 0.1-0.2 0.2-0.4 0.3-0.3 0.2-0.1 0.6 0.1 0.3-0.1 0.3-0.1 0.1-0.3 0.1-0.3 0.2-0.3 0.4-0.1 0.1-0.4 0.2-1 0.3-0.7 0.5 0 1.5-1 0.3 0.2-0.1 0.3-0.4 0.6 0.9 0.4 0.4 0.3-0.1 0.4-0.3 0.2-0.3-0.1-0.2-0.1-0.3 0-0.3 0.1-0.1 0.1-0.2 0.6 0.3 0.5-0.6 1.2 0.2 0.3 0.1 0.5 0.1 0.2 0.2 0.1 0.4-0.3 0.3-0.1 0.1 0.3 0 0.5 0.1 0.6 0.2 0.4 0.6-0.2 0.3 0.4 0.2 0.2 0.2 0 0.3 0 0.1-0.3 0.1-0.2 0.2 0 0 0.2 0 0.3-0.2 0.2-0.2 0.2-0.3 0.1-0.1 0.3 0 0.5 0.2 0.4 0.4 0.3 0.3 0 0.3 0.2 0.1 0.4 0 0.4 0 0.3-0.3 0.8 0 0.5 0.4 0.2 0.5 0.1 0.3 0.4 0.4 0.7 0.9 0.9 0.2 0.3 0 0.9 0.1 0.4 0.2 0.3 0.7 0.9 0.4 0.5 0.2 0.6 0.2 0.4 0.4 0.5 0.2 0.6-0.2 0.6 0.4 0.8 0.3 0.3 0.7 0.3 0.3 0.5 0.2 0.4 0.2 0.2 0.2 0.3 0.3 0.3 0.3 0.3 0.2 0.9 0.6 0.7 0.3 0.4 0.1 0.4 0.2 0.9 0 0.3 0.1 0.1 0.1-0.1 0.2-0.2 0-0.2 0-1.3 0-0.2-0.1-0.3-0.4-0.8-0.1-0.2 0.1-1 0.1-1 0.1-0.2 0.4-0.6 0.1-0.3 0-0.7 0-0.3 0.2-0.2 0-0.2 0.1-0.5 0.1-0.3 0.1-0.2 0.3-0.1 0.2 0.1 0-0.5-0.1-0.2-0.3-0.4-1-1.4-0.1-1.2 0.1-0.4 0.3-0.6 0.1-0.3 0.2 0.3 0.2 0 0.2-0.1 0.3-0.1 0.4 0.1 0.2 0.3 0.1 0.2 0.2 1 0.1 0 0.3-0.3 0.3 0.1 0.5 0.3 0.4 0.4 0.1 0.4 0.1 0.2 0.1 0.2 0.2 0.3 0.3 0.2 0.5 0.2 0.2 0.2 0.3 0.3 0.2 0.5 0.3 0.4 0.4 0.2 0.5 0 0.3-0.1 0-0.2 0-0.2-0.2 0-0.3-0.1-0.2 0-0.6-0.7-0.4-0.7-0.5-1.7-0.3-0.8-0.1-0.5 0.2-0.2 0.3 0.2 0.8 0.5 0.2 0.1 0.1-0.5-0.2-0.2-0.4-0.3-0.1-0.4 0.1-0.4 0.6-0.5 0.2-0.2 0.1-0.4 0.4-0.2 0.4-0.2 0.4-0.2 0.2-0.4 0.1-0.5-0.1-0.5-0.4-0.2-0.1 0.9-0.5 0.5-1.4 0.5-1 0.2-0.5-0.3-0.7-1.5-0.2-0.4-0.2-0.8-0.2-0.4-0.3-0.3-0.7-0.3-0.4-0.2-0.7-0.7-0.3-0.2-1.9-0.3 0-0.1 0.1-0.1 0.4-0.3 0.5-0.1 0.3-0.2-0.3-0.5 0.9-0.5 0.3-0.2 0-0.4-0.3-0.2-0.9 0-0.5-0.1 0.3 0.7 0 0.1-0.7 0-0.3-0.2-0.1-0.2-0.1-0.2-0.7-0.4-0.2-0.3-0.4-0.3-0.1-0.1 1 0.2 0.2 0.1 0.3-0.1-0.2-0.3-0.4-0.6 0.5 0.2 0.7 0.6 0.5 0.2 0.5 0.1 0.5 0.3 0.6 0.1 0.5-0.1-0.2-0.2-0.3-0.1-0.7-0.1 0.4-0.3 0.7-0.1 0.4-0.1-2.5-1.3-0.7-0.2 0-0.2 0.6 0.1 0.3 0 0.1-0.4 2 0.7 1.4 0.1-0.5-0.5-0.3-0.2-0.5-0.2-0.2-0.1-0.2-0.3 0-0.2 0.2-0.1 0.2 0 0.3 0.2 0.3 0.2 0.4 0.1 0.3 0 0.1-0.2 0-0.3 0-0.4-0.1-0.2-0.3-0.1-0.9 0-0.1-0.1-0.1-0.2-0.2-0.2-0.2-0.2-0.2-0.1-0.2 0-0.1 0.1-0.1 0.1 0.3 0.1-0.1 0.3-0.2 0-0.1-0.1-0.3-0.4-0.5-0.3-0.3-0.2-0.1-0.2 0.6-0.1 0.2-0.5-0.2-0.4-0.3-0.3 0.2-0.5 0.1-0.2 0.3-0.2 0.1 0.1 0.2 0.1 0.2-0.1-0.2-0.4 2-0.2 0.7 0.2 0.1-0.4 0.1 0.1 0.2 0.3 0.2 0.2 0.5 0 0.1 0.1 0.2 0.3 0.3 0.1 0.2 0.1 0 0.2-0.1 0.2-0.2 0-0.5-0.2-0.1 0.1 0 0.3 0.4 0.2 0.5 0.1 0.4 0-0.3 0.3-0.6 0.2-0.6 0-0.5 0.1 1.5 1.1 0.5 0.3 0.6 0.1 0.2 0.1 0.1 0.3 0 0.3-0.1 0.3-0.1 0-0.2-0.2-0.3 0.2 0.4 1.1 0.2 0.3 0.1-0.3 0.2 0 0 0.1 0.2 0.2 0.2-0.5-0.1-0.9 0.1-0.3-0.1-0.4 0.3 0 0.5 0.2 0.3 0.2 0.2 0.1 0.3 0.3 0.4 0.3 0.2-0.2-0.8-1.3-0.1-0.6 0.7-0.2 0-0.1-0.4-0.3-0.5-0.3-0.4-0.4-0.3-0.4 0.5 0.1 0.8 0.4 0.5 0.1 0.5 0 0.3 0.1 0.1 0.3 0.3 0 0.4-0.1 0.9 0.2 0.4 0.1 0.4 0.4 0.4 0.2 0.1 0.1 0.6 1.6 0.3 0.4 0.2 0.1 1.7 0.2 0.7 0.1 0.2 0 0.5-1 0.5-0.3 0.3 0 0.5 0.5 0.5 0.3 0.6 0.1 2.5 0.2 0.7 0 0.6-0.3 0.1 0.2 0.5-0.2 1-0.1 0.9 0.1 0.5 0.3 0.3 0.4 0.8 0.2 0.8-0.1 0.6-0.4-0.5-0.1-0.9 0.1-0.3-0.1-0.4-0.3-0.4-0.1-0.8-0.2-1.2-0.7-2.2-0.4-0.5 0-1.6 0.2-0.3 0.3-0.2 0-0.4-0.3-0.3 0.2-0.3 0-0.3-0.1-0.3-0.2-0.1-0.7-0.2-0.2-0.1-0.1 0.1-0.3 0.2-0.5 0-0.2-0.1-0.3-0.2-0.1-0.1-0.2 0.2-0.3 0.1-0.3 0-0.2 0.1-0.3 0.5-0.1 0.1-0.2 0.1-0.2 0-1.6 0.1-0.3 0.2-0.1 0.2 0 0.3 0.2 0.1 0.2 0 0.4 0 0.3 0 0.3 0.1 0.1 0.5 0.5 0.3 0.4 0.2 0.4 0.2-0.5 0.3-0.6 0.5-0.4 0.6 0.1-0.1-0.5 0-1.5-0.2-0.9 0.2-0.2 0.5 0-0.1-0.5-0.1-0.4 0.1-0.9 0.2-0.4 0.5-0.3 0.5-0.1 0.3 0.4 0.1 0 0.2-0.5 0.1-0.5 0.2-0.3 0.6-0.4-0.8-0.2-0.4-0.1-1 0.1-0.2 0-0.3 0.2-0.5 1-0.6 0.6-0.9 2.1-0.7 0.7 0-0.3 0.1-0.5 0.1-0.3-0.1-0.2-0.3-0.3-0.1-0.7-0.4-1.2-0.3-0.4 0 0.3 0 0.2-0.1 0.1-0.2 0-0.2 0.3-0.2 0.2-0.1-1.6-0.2-0.4-0.2-0.3 0-0.6 0-0.4 0.2-0.3-0.3-0.6 0-0.3 0-0.2 0.2 0 0.1 0.2 0.1 0 0-0.3 0-0.2 0.1-0.2 0.1-0.2 0.3 0.8 0.1-0.5 0.1-0.6-0.2-0.4-0.5 0.1 0.1-1.1-0.1-0.5-0.4-0.3 0.3 0 0.3 0.1 0.3 0.1 0.1 0.1 0.1-0.2 0.4-0.1 0.1-0.1 0-0.6 0.4-0.5 0.7-0.1 0.7 0.3 0.6 0.5 0.3 0.1 0.4 0.1 0.5 0 0.2-0.1 0-1.7 0.1-0.3 0.2 0 0.1 0 0.1 0.2-0.2 0.5 0 0.2 0.3 0.3 0.3 0.2 0.3-0.1 0.2-0.4-0.4-0.3 0-0.6 0.2-0.6 0.3-0.4 0.7-0.3 0.1 0-0.1-0.3-0.5 0 0-0.3-0.6 0.4-0.2 0-0.1-0.2 0-0.4 0.3-0.1 0.2 0 0.2-0.1 0-0.4-0.2-0.1-0.3 0-0.2 0-0.1-0.2 0-0.2 0.1-0.5 0.4 0.2 0.1 0 0.2 0 0.1-0.2 0.1 0 0.1 0 0 0.4 0.1 0.1 0.1 0 0.8 0.2 0.1 0.2-0.2 0.3-0.3 0.6 0.1 0.1 0.8-0.8 0.4-0.2 0.1 0.1 0.2 0.3 0.5 0.2 0 0.2-0.2 0.3-0.1 0.3 0.5 0 0.5-0.2 0.3 0 0.5 0.1 0.3 0.2 0.6 0.7 0.1 0.3 0.1 0.1 0.4 0 0.2 0.1 0.2 0.2 0 0.4-0.4 0.7 0.1 0.2 0.3 0 0.3-0.3 0.2-0.1 0.2 0.1 0 0.4 0 0.2 0.5 0.1 0.1-0.3 0-0.4 0.2-0.4 0.5 0.1 1.5 1.2 0.6 0.3-0.2-0.4-0.9-0.7-0.2-0.2-1.1-1 0-0.2 0.4-1.4 0.2-0.2 0.3-0.2 0.3-0.1 0.4-0.1 0-0.1-0.4 0-0.3-0.1-0.2-0.3-0.2-0.3-0.1 0.5-0.4 0-0.4-0.3-0.3-0.2-0.3 0-0.9 0.6-0.7 0.3-0.5 0.3-0.2 0.1-0.3-0.2-0.1-0.2-0.1-0.5-0.2-0.1-0.1-0.2 0-0.2 0.3-0.3 0.2-0.2 0.3-0.1 0.1-0.1-0.1-0.2 0.1-0.2 0.3-0.2 0.2-0.1 0.4-0.1 0.1-0.1 0.1 0 0.3 0.3 0.4 0 0.4-0.4 0.6-0.9-0.2-0.1-0.4-0.1-0.3-0.1-0.1 0.6-0.1 0.1-0.2 0-0.2-0.1-0.1-0.1 0-0.2-0.1 0.1-0.3 0.4 0 0.1-0.1 0-0.5 0.3-1 0.8-0.4 0.3 0-0.4 0.2-0.2-0.2-0.2-0.1 0.3-0.2 0 0.1-0.2-0.1-0.6 0.1-0.2 0.2-0.2 0-0.2-0.2-0.1-0.3 0.1-0.2-0.1 0.1-0.5 0.3-0.1 0.1-0.4 0.1-0.1 0.2-0.1 0.2-0.1 0.3-0.1 0.2 0 0.2 0 0.3 0.3 0.5 0 0.2 0.1 0.2 0.4 0.6-0.9 0.3-0.3 0.2 0.4 0.1-0.4 0.1-0.5-0.1-0.4-0.3-0.2 0-0.2 0-0.4-0.1-0.5-0.2-0.3 0.3 0 0.2 0.1 0.4 0.3 0.2-0.2 0.2-0.2 0.3-0.1 0.2 0.2 0 0.4-0.4 0.5 0 0.4 0.1-0.2 0.2 0.8 0.2-0.2 0.3-0.5 0.2-0.1 0.1 0.2 0.2 0.1 0.1 0.3-0.2 0.2 0 0.2 0.3 0.9 0 0.1 0.2 0.1 0.3 0.7 0.2 0.3 0.1-0.2-0.1-0.1 0-0.2 0.1-0.2 0.1-0.2 0-0.1-0.3-1.2-0.3-0.4 0-0.4 0.4-0.4 0 0.5 0.2 0.2 0.3 0.2 0.3 0 0.3 0.1 0.1 0.3 0.2 0.1 0.4-0.2 0 0.3 0.2 0.2 0.1 0 0.4 0.5 0 0.1-0.1 0.3 0.3 0.3 0.5 0.2 0.3 0.1 0-0.3 0.7-0.1 1.3 0.3 0.3-0.3-0.1-0.4-0.1 0-0.7 0.1-0.2-0.1-0.2-0.2-0.1-0.3 0-0.2 0.4-0.1 0.1-0.1-0.1-0.2-0.3-0.1-0.1-0.3 0-0.1 0.3 0 0.1-0.1 0.4-0.3 0.5-0.2 0-0.2-0.2-0.2-0.8 0.3-0.3-0.2-0.3-0.3-0.4 0.1-0.1 0-0.1-0.3-0.1 0-0.2 0.1-0.1 0-0.4 0.1-0.2 0-0.1-0.2-0.1-0.2 0.1-0.2 0.2-0.2-0.2 0-0.3 0.1-0.2 0.2-0.2-0.1-0.1-0.3-0.2-0.1-0.2 0.1-0.1 0.1-0.2 0-0.4-0.3-0.1-0.1 0.2-0.1 0.2-0.1 0.2-0.4 0.1-0.1 0.2 0 0.4-0.2 0.2 0 0.1 0.3 0.1 0.1 0.3 0.1 0.3 0 0.1-0.2 0-0.2-0.2-0.2 0.5-0.2-0.2-0.4-0.7-0.3-0.7 0.1-0.1-0.2-0.6-0.1-0.2-0.3-0.1-1.2-0.1-0.2-0.5 0.2-0.1-0.1 0-0.3-0.2 0-0.2-0.1 0-0.5 0.2-0.1 0.5 0 0.2 0 0-0.2-0.1-0.2 0-0.1 0.2-0.2 0.2 0.1 0.4 0-0.2-0.4 0.1-0.4 0.2-0.1 0.8 0.2 0.2 0 0-0.4 0.2-0.1 0.3 0 0.3-0.3-0.4-0.1-0.5 0-0.4 0-0.1-0.4 0.2-0.4 0.5-0.4 0.5-0.3 0.4 0.2 0.1 0 0.2-0.3 0.2-0.4 0.1-0.6 0.1-0.3 0.1-0.1 0.2 0.2 0 1.4-0.1 0.3-0.2 0.6 0.3-0.5 0.4-0.3 0.3-0.3 0.1-0.5 0.3 0.4 0.7 1.7 0.1 0.1 0.1-0.3-0.2-0.5 0.1-0.2 0.4 0-0.1-0.2 0.1-0.3 0.1-0.2 0.2-0.2-0.2-0.1-0.1-0.1 0-0.2 0.1-0.2 0.6 0.5-0.1-0.6-0.1-0.4 0.2-0.2 0.2-0.1 0.1 0 0.2 0 0.3 0.2 0.4 0 0.1 0 0 0.4-0.2 0.3-0.3 0.2-0.1 0.2 0.3 0.2 0.4 0 0.4-0.1 0.3-0.1-0.1-0.3-0.1-0.1 0.2-0.4 0.2 0 0.1-0.2-0.1-0.2-0.1-0.1 0.2-1.2 0.2-0.5 0.1-0.2-0.2-0.4-0.3-0.4-0.2-0.4 0.1-0.3 0-0.2-0.1-0.4 0-0.5 0.2-0.3 0-0.2-0.2-0.2 0-0.2 0.2-0.1 0.3 0-0.1-0.3 0.3-0.1 0.4 0.2 0.2 0.6 0.1 0 0-0.2 0.2 0 0.1 0.3 0.6 0.4 0.3 0.2 0.1-0.3 0.3-0.3 0.2 0.2-0.2 0.1-0.3 0.6 0.2 0.2 0 0.2-0.2 0.3-0.3 0.1-0.2-0.1-0.1-0.1-0.2-0.1-0.3 0.1 0.1 0.2 0 0.2-0.1 0.2 0.3 2.2 0.2 0.4 0 0.7-1 2.1 0 0.8 0.3-0.3 1-2.6 0.2-0.3 0.1-0.5 0-1 0.2-0.5 0.3-0.1 0.1 0.3-0.1 0.4 0.2 0.1 0 0.2-0.2 0.6 0.7-0.1 0.3-0.2 0.2-0.4 0.2-0.1 0.1 0.1 0.1 0.2-0.1 0.3 0.3 0.1 0.1-0.1 0.2-0.3 0.2 0 0.2 0.2 0 0.2-0.2 0.2-0.2 0.1-0.3 0.1 0.3 0.8-0.2 0.3 0 0.1 0.3 0.2 0 0.1-0.1 0.3-0.1 0.2 0.1 0.3 0.2 0.2 0.2 0.1 0.1 0 0.8 0.6 0.4 0.3 0.2-0.1 0.1-0.9-0.1-0.2-0.2-0.2-0.1-0.2 0-0.1 0.1-0.1 0.1-0.5 0.1-0.3 0.1-0.1 0.8 0 0.1 0.1 0.1 0.1 0.2 0.3 0.1 0.1 0.3-0.1 0-0.2 0-0.3 0.1-0.2 0.2 0 0.3 0.2 0.2 0 0.1-0.2 0-0.3-0.1-0.3-0.1-0.5-0.3-0.3 0-0.2-0.1-0.3-0.1-0.1-0.1-0.1-0.2-0.2-0.2-0.1-0.1-0.2 0-0.3 0.1 0.1 0.3-0.2 0.3-0.1 0-0.1 0.5-0.3 0.6-0.1 0-0.2 0-0.5 0.1-0.1 0.1-0.2 0.1-0.2-0.1-0.2-0.2-0.4 0-0.2 0-0.3 0-0.2 0.2-0.2 0.6-0.1 0.4-0.2 0.5-0.4 0.1 0 0-0.4-0.1-0.5 0-0.3 0.2-0.2-0.4-0.9-0.5-0.3-2.2 0-0.3-0.2-0.1-0.3-0.1-0.3-0.2-0.3 0-0.2 0-0.2 0.1-0.3 0-0.2 0.3 0.2 0.4 0.6 0.2 0.1 0.3-0.1 0-0.2 0-0.3 0-0.3 0.3-0.1 0.5 0.9 0.5 0-0.1-0.2 0-0.5 0-0.3-0.1-0.3-0.1-0.1-0.1 0-0.9-0.5-0.2-0.1-0.2-0.3 0.1-0.1 0.2 0.1 0.6 0.2 0.2-0.1 0-0.4 0.2-0.2 0.2-0.2 0.3-0.1 0.1 0.2-0.1 0.3-0.2 0.2 0 0.2 0.6 0 0.2 0.1 0.2 0 0.3-0.2 0 0.2-0.1 0.2-0.3 0.3 0.4 0.2 0 0.1-0.3 0.2-0.3 0.2-0.2 0.4-0.1 0.3 0.4-0.1 0.3-0.2 0.7-0.6 0.2-0.1 0.2-0.2 0.6-0.2-0.2 0.5-0.7 0.4-0.3 0.4 0.6 0 0.4 0.3 0.1 0.3-0.4 0.1-0.6 0.1-0.1 0.2 0.1 0.3-0.1 0.3 0.7-0.2 0.3 0.1 0.1 0.4-0.6 0.5-0.2 0.3 0.5-0.2-0.2 0.8 0.5 0.3 0.6 0.2 0 0.3-0.1 0.1-0.2 0.1-0.1 0.2 0.5 0.2 0.2-0.1 0.3-0.2 0.2 0 0.2 0.4 0.1 0 0.1-0.3 0.1-0.3 0.2-0.2 0.7-0.2 0-0.2-0.2-0.3-0.4-0.4-0.1 0-0.3-0.1-0.1 0 0.1-0.2 0.2-0.4 0.1-0.3 0.1-0.2 0.2-0.2 0.4-0.2-0.3-0.3 0.3-0.3 0.4 0 0.3 0 0.3-0.9 0.7-0.5 0.2-0.3 0.4 0.5 0.4 0 0.4-0.2 0.3-0.4 0.3-0.6 0.2-0.2 0.4 0.1 0.5 0.2-0.2 0.1-0.4 0.2-0.3 0.2-0.1 0.2 0 0.3-0.3 0.1-0.1 0.2-0.1 0.5-0.1 0.2-0.6 0.6-0.3 0.4 0.2 0.2 0.5-0.1 0.7-0.2 0.2 0-0.7 0.9 0.2 0.2 0.2 0.5 0.2 0.1 0.3 0 0.5-0.3 0.2 0.1 0.1 0.3-0.1 0.7 0 0.3 0.2 0.3 0.3 0.2 0.3 0.2 0-0.6 0-0.3 0.1-0.3 0.3-0.1 0.3-0.1 0.2-0.2 0.1-0.3-0.1-0.4 0-0.2 0.2-0.3 0-0.2-0.2-0.4 0.1-0.2 0.5 0.3 0.1 0.1 0.1 0.2 0.1 0.5 0.1 0.1 0.3-0.1 0.3-0.7 0.3-0.3-0.2-0.3 0.2-0.3 0.2-0.3 0.1-0.4-0.1 0-0.1 0.1-0.4 0.3-0.2-0.2-0.2-0.3 0-0.3 0.1-0.3 0.2 0 0.4 0.2 0.3 0 0.1-0.2 0.2-0.3 0.3 0.2 0.3-0.1 0-0.1 0.6 0.3 0.3 0 0.3-0.3-0.5-0.1-0.2-0.1-0.1-0.2 0.2-0.2 0.3 0.1 0.6 0.1-0.2-0.2-0.1-0.2-0.2-0.1-0.3 0-0.3-0.1-0.2-0.2 0-0.3-0.1-0.4 0-0.1-0.4-0.5-0.2-0.2-0.2-0.9-0.2-0.3 0.4 0 0.4-0.1 0.4-0.2 0.1-0.3 0.1 0.1 0.2 0.1 0.1 0.4-0.1 0.4 0.5 0.2 0-0.3 0.2-0.1 0.2-0.1 0.3 0 0-0.1-0.4-0.2-0.3-0.3 0-0.4 0.4-0.2 0.4 0.1 0.3 0.2 0.4 0.2 0.4-0.2-0.4-0.2-0.2-0.1 0.2-0.2 0.3-0.1 0.5-0.1 0.6 0.6 0.3 0.3 0.4 0.1 0.2 0.2 0 0.3 0 0.7 0.4-0.2 0.2 0 0.2 0.1-0.2 0.4 0.5-0.2 0 0.3-0.2 0.6-0.2 0.4 0.7-0.1 0.2 0.4 0 0.6 0.3 0.6 0.5 0.3 0.2-0.3 0.3-0.5 0.4-0.4-0.2-0.1-0.1-0.2 0-0.2 0.1-0.2 0.4 0.2 0.1 0.2 0 0.7 0 0.3 0.2 0.1 0.2-0.1 0.2-0.2 0.2-0.7 0.3-0.3 0.3 0.1 0.8 0.9 0.3 0.3 0.6 0.2 0-0.3-0.2-0.6 0.2-0.4 0.3 0.1 0.2 0.3 0.1 0.2 0.2 0.2 0.3 0 0.2 0.2 0.2 0.4 0.1 0 0-0.1 0.3-0.4 0.3 0.3 0.2 0.3 0.1 0.4 0.1 0.4 0 0.2-0.1 0.8 0.1 0.2 0.4 0.3 0.2 0.2 0.2-0.5 0.3 0.2 0.4 0.4 0.2 0.2 0.4 0.1 0.6 0.6 0.3 0.2 0.3 0 0.2 0.1 0.2 0.2 0.9 0.7 0.1 0.4 0.3 0.5 0.3 0.4 1.3 1.1 0.1 0.2 0.6 1.6 0.2 0.1 0.4 0.1 0.1 0.1 0.1 0.2-0.1 0.8 0.1 0.3 0.2 0.1 0.1 0 0.1-0.1 0-0.3 0.1-0.2 0.2 0 0.3 0.1 0.2 0.4-0.6 0.6 0.1 0.4 0.3-0.3 0.3 0.1 0.4 0.5 0.8 0.5 0.3 0.3-0.3 0.1-0.1 0.1 0.1 0.3 0 0.2 0.1 0.2 0.2 0.1 0.2 0 0.6-0.2 0.1-0.1 0.2-0.1 0.3 0.2 0.5 0.5 0.2 0.2 0.1 0.4 0.2 0.4 0.3 0.1 0.3 0 0.3 0.1 0.2 0.1 0.9 0.9 0.3 0.2 0.5 0.1 0.4-0.1 0.1 0 0.2 0.3 0.1 0.1 0 0.3-0.1 0.3-0.3-0.2-0.4-0.1-0.2 0.2-0.2 0.3 0.1 0.4 0.2 0.8 0.1 0.4-0.1 0.1-0.2 0.1-0.4 0-0.3 0-0.3 0.1-0.4 0.4 0.4 0.2-0.1 0.7-0.4 1.5-0.1 0.2-0.3 0.6-0.1 0.3 0 0.4 0 0.4 0 0.3-0.4 0.6-0.1 0.4 0 0.5 0.1 0.3 0.2 0.5 0.1 0.3-0.2 2.3-0.1 0.2-0.2 0.1-0.4 0 0.6 1.7 0 0.8-0.3 0.9-0.8 0.8-0.1 0.2 0.2 0.2 0.4-0.2 0.5-0.4 0.4-0.3 0.3-0.7 0.3-1 0.1-1 0-1-0.4-1.4 0.2-0.1 0.1-0.3-0.1-0.3 0.1-0.2 0.3-0.2 0.2 0.2 0.2 0.2 0.6 0.3 1.1 1.1 0.2 0.3 0.1 0.2 0.4 0.6 0.5 1.6 0.1 0.5 0.1 0 0.2-2-0.1-0.5-0.3-0.5-0.8-0.7-0.3-0.3-0.2-0.4-0.1-0.5 0.2-0.6-0.1-0.9-0.2-0.2-0.2-0.2-0.1-1 0.4-0.8 1.2-1.1 0.2-0.1 0.1-0.2 0-0.3 0.2-0.4 0.4-0.5 0.2 0.2 0.2 0.5 0.3 1.9 0.1 0.4 0.3 0.2-0.1-0.7 0-0.4 0.1-0.3 0.8 0.9 0.4 0.3 0.6 0.2 0.1-0.1 0.1-0.2 0.1-0.2 0-0.2 0-0.3-0.1-0.2-0.2-0.2-0.5-1-0.1-0.5-0.2-0.5-0.1-0.2 0.1-0.4 0.1-0.1 0.1 0 0.3-0.2 0.1-0.1-0.1-0.2-0.1-0.1-0.4-0.2-0.1-0.1-0.3-0.4 0.1-0.2 1-0.1 0.8-0.3 0.4-0.2 0.3-0.2 0.5-0.2 0.4 0.2 0.8 0.4 1.9 0.2 0.8 0.2 0.7 0.7 0.4-0.1 0.5 0.1 0.5 0.2 0.5 0.1 1.8 0 0.5 0.1 0.7 0.4 0.6 0.1z" id="AUS2651" data-name="Western Australia">
 </path>
 <text fontSize="25" data-name="Western Australia" fontFamily="Verdana" x="50" y="350">WA</text>
 </svg>
  );
};

export default WA;
