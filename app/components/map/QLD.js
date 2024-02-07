"use client"
import React from 'react';
import "./css/map.css"

const QLD = ({setShowModal, setStates, setModalText, setMousePosition}) => {
  const click = (e) => {
    e.preventDefault();
    setStates(e.target.dataset.name)
    setModalText({
      title: 'Attention',
      message:`Based on ${e.target.dataset.name}'s decision to not impose a state tax on health services in the next 2 years:
      •Your chance to get a bulk billed GP is unchanged\n•Your gap fee to see a private GP is unchanged`,
      
      button: 'Close'
    })
    setMousePosition({ x: e.clientX, y: e.clientY + 95 })
    setShowModal(true)
  };

return (
<svg className='green' version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" cursor={"pointer"} onClick={click}>

 <path d="M877.6 417.2l0.3 0 1 0-0.4 0.9-0.5 1.2-1.1 5.3-0.1 0.1-0.3 0-0.6 0.1-0.1-0.1-0.3-0.6 0-0.3 0.2-0.7 0.2-0.3 0-0.2 0-0.2-0.2-0.4 0-0.2 0-0.3 0.2-0.8 0-0.3 0-0.4-0.2-0.9 0.1-0.4 0.4-0.7 0.2-0.3 0-0.8 0-0.3 0.2-0.1 0.4 0.1 0.2 0.2 0.2 0.2 0.2 0.2z m-1.3-1.5l-0.1 0.1-0.3-0.5 0.1-0.4-0.2-0.7-0.2-0.6-0.2-0.3-0.2-0.2-0.2-0.6-0.1-1.5 0.1-1.4 0-0.6-0.2-0.3 0.1-0.3 0.4-0.3 0.8-0.1 0.5-0.4 0.2-0.1 0.3 0.1 0.1 0.4-0.1 0.5-0.8 2.9-0.2 1.1 0 1.2 0.1 0.2 0.1 0.7 0.1 0.3 0 0.4-0.1 0.4z m-9.1-48.9l-0.3 0.2-0.6-0.9-0.2-0.5 0.1-0.2 0.7 0.8 0.3 0.6z m6-14.1l-0.1 2.9 0.1 0.4 0.4 1.3 0.2 0.2 0.2 0.2 0.8 0.7 0.2 0.3 0.1 0.5-0.1 0.4-0.3 0.4-0.1 0.4-0.1 0.5-1.7 4.1-2.3 5-1.6 4.9 0 0.6 0.4 0.7-0.1 0.9-0.3 0.7-0.7 0.2-0.8-1-0.4-0.6 0-0.4 0.1-0.5-0.4-1.1 0.1-0.6-0.6-0.2-0.3-0.7 0-0.8 0.3-0.3 0.5-0.3 0.2-0.7 0.2-1.5 0.1-0.3 0.4-0.3 0.2-0.2 0.3-0.8 0.2-0.3 0.2-0.6-0.2-1.3 0.2-0.6-0.1-0.3-0.2-0.1-0.2 0-0.5-0.2-0.1-0.1 0-0.2 0.1-0.3 0.4-0.4 2.3-1.6 0.7-0.7 0.6-0.7 0.4-0.7 0.4-0.8 0.1-0.9-0.2-1-0.3-0.8-0.7-1-0.6-0.6-0.6 0.1 1.3-1.7 0.2 0 0.6-0.6 0.8-0.5 0.2-0.2 0.1 1.1z m-41-20.7l-0.1 0.3-0.4-0.2-0.1-0.5-0.2-0.4-0.5-0.7-0.1-0.7 0-0.1 0.1-0.3 0.1-0.1 0.2 0 0.1 0.7 0.1 0.4 0.5 0.5 0.2 0.5 0.1 0.6z m-7.6-9.8l0.2 0.1 0.6-0.2 0.1 0.1 0 0.4 0.1 0.2 0.4 0.1 0.9 0.2 0.2 0.2 0.2 0.2 0.4 0 0.3 0.2-0.3 0.3 0.4 0.2 0.3-0.3 0.3-0.5 0.3-0.3 0 0.6-0.3 1.1 0 0.5 0.1 0.6 0.2 0.6 0.3 0.6 0.4 0.2 0.4 0.3 0.1 0.7 0.1 0.6 0 0.3-0.2 0.1-0.1 0.1-0.3 0.4-0.2 0.1-0.7 0-0.2 0.1-0.1-0.1-0.2-0.2-0.3-0.3-0.3-0.3-0.2-0.3-0.2-0.9-0.3-0.4-0.9-1.1-0.6-0.5-0.2-0.2-0.3-0.5-0.7-1-0.5-0.7-0.4-0.4 0.8-0.3 0.1-0.2 0-0.1-0.1-0.2 0.2-0.2 0.2 0.1z m-1.2-6.6l0.3 0.2-0.1 0.2-0.1 0-0.1 0-0.2 0-0.2 0.1-0.2 0-0.3 0.1-0.1-0.3 0.1-0.3 0.3 0 0 0.1 0.2-0.4 0.2-0.1 0.1 0 0 0.1 0 0.2 0.1 0.1z m-1.6-2.3l0.1 0.2-0.1 0.1-0.2-0.1-0.1 0-0.1 0-0.1-0.2 0.2-0.4 0.3 0.4z m-25.4-15.1l-0.1 0.3-0.3-0.4 0.1-0.2 0-0.3 0-0.2-0.1-0.2 0.1-0.3 0.1-0.5 0.1-0.3 0.2 0 0.3 0.2 0.4 0.4-0.2 0.1-0.1 0.2 0 0.2 0 0.3-0.5 0.7z m17.9-3.1l-0.1 0.2-0.4 0.4-0.1 0.2-0.1 0.1-0.3 0.2-0.4 0.2-0.2-0.2-0.1-0.3 0.3-0.3-0.4-0.3-0.1 0-0.1 0-0.2 0.1 0.2-0.4 0.4-0.4 0.2-0.5-0.1-0.4-0.2-0.2-0.1-0.1 0.1-0.2 0.3 0 0.2 0 0.2 0.2 0.1 0.3 0.1 0.2 0.1 0.2 0.1 0.4 0.3 0.2 0.2 0.1 0.1 0.1 0 0.2z m-11.9-4.5l0.3 0.1 0.2 0 0 0.1-0.3 0 0 0.3-1 0.8-0.4 0.2-0.3 0 0-0.2 0-0.3 0.4-0.3 0.1 0 0.4-0.3 0.4-0.1 0.1-0.2 0.1-0.1z m-2.1 2.6l-0.5 0.3-0.2-0.2 0-0.1 0.1-0.3 0-0.2-0.1-0.2-0.2-0.2 0-0.3 0-0.5 0.1-0.5 0.2-0.5 0.3-0.4-0.2-0.2 0.1-0.3 0.3-0.3 0.2-0.1-0.1 0.7 0 0.3 0 0.4 0.4 0.4 0 0.3 0 0.6-0.2 0.7-0.2 0.6z m-0.7-5l0 0.1-0.3 0.2-0.4 0 0-0.3 0.3 0.1 0.1-0.1 0.1-0.2 0.2-0.1 0.1 0.1 0.1 0.1-0.2 0.1z m5.9-0.7l0.2 0.1 0.2 0 0.3-0.1 0 0.2-0.1 0.2 0 0.2-0.3 0.2 0-0.2 0-0.2-0.3-0.2 0-0.2z m4.7-5.7l-0.2 0.4-0.2 0.4-0.2 0.3-0.3-0.1-0.7-0.5 0-0.1 0.5-0.2 0.3 0 0.2 0.2 0.6-0.4z m-1.4-1.5l-0.1 0.4-0.1-0.2-0.1 0.3-0.1 0-0.3-0.1-0.1-0.2-0.2 0-0.1 0-0.2 0.2 0-0.2 0-0.1 0-0.2 0.2-0.1-0.1-0.3-0.1-0.4 0.2 0 0.3 0.4 0.5 0.2 0.3 0.3z m-10.8-1.2l-0.2 0.1-0.1-0.1-0.1-0.1 0.2-0.2 0.2 0 0-0.1 0.2 0 0 0.1 0.1 0.3-0.3 0z m-2.5-6.5l-0.1 0.1-0.2-0.4-0.1-0.1 0.2-0.3 0 0.2 0.2 0.1 0.1 0.3-0.1 0.1z m4.7-7.1l-0.2 0 0-0.4 0.3 0 0 0.3-0.1 0.1z m-10.2-1.9l-0.1 0 0.1-0.3-0.1-0.3-0.1 0 0.1-0.2 0.3-0.1 0.3 0.2 0.1 0.3-0.1 0.1-0.3 0.3-0.2 0z m-0.6-1l0.2 0.1 0.1 0.5-0.1-0.1-0.2 0.1-0.3-0.2 0-0.1-0.1-0.1 0.1-0.1 0.3-0.1z m4.7-0.7l0 0.1-0.1 0.2-0.2 0.1-0.2 0-0.3-0.1-0.1-0.3 0.2-0.1 0.2 0.1 0-0.3 0.1-0.1 0.2 0 0.2 0.2 0 0.2z m-7.3-1.2l0 0.2-0.2-0.2-0.3 0.3 0.1-0.3-0.3-0.1 0.1-0.2 0.3-0.1 0.1 0.1 0.1 0.1 0.1 0.2z m0.4-0.4l-0.4 0.1-0.2-0.1-0.1-0.3 0.3-0.2 0.2 0.2 0.2 0.3z m3.7-1.2l0 0.1-0.2-0.3 0-0.2 0.3 0.1 0.1 0.3-0.2 0z m-6.7-1.6l-0.1 0.1-0.5 0.4 0-0.2 0.2 0 0-0.4 0.2-0.1 0.2 0.2z m-1.6-4.4l-0.2 0.3-0.2 0.4-0.4 0.2-0.2-0.2-0.1-0.2 0-0.2 0.1-0.1 0.4 0 0.1-0.1 0.3-0.5 0.1-0.4 0-0.4 0.2-0.4 0 0.5 0 0.3 0.2 0.3 0.2 0.3-0.5 0.2z m-4.6-2.1l-0.1 0-0.1-0.1-0.1-0.1-0.1-0.2 0-0.1-0.1-0.1 0-0.3 0-0.5 0-0.4 0.2 0-0.1 0.7 0.3 0.4 0.1 0.2 0.1 0.3 0 0.1-0.1 0.1z m-1-3.3l0.2 0.2 0.2-0.1-0.1 0.4-0.3 0.2-0.1-0.2 0.1-0.2-0.1-0.2 0.1-0.1z m4.6 0.5l0.5 0.3 0.1 0.3-0.1 0.3-0.3-0.2-0.3-0.4-0.3 0.7-0.2 0.2-0.3-0.4-0.3 0.1-0.2 0.2-0.2 0 0-1-0.4 0.3-0.1 0-0.4 0-0.1-0.1 0.2-0.2 0.6-0.7 0.2-0.3-0.5-0.1 0.2-0.5 0.1-0.5 0.2-0.6 0.3-0.3 0.1 0.4 0.3 0.5 0 0.3 0 0.6 0.2 0.2 0.4 0.1 0 0.1 0.3 0.7z m-1.4-5l-0.2 0.4-0.4 0.5-0.2 0.4 0.1 0.1 0.2 0.4 0 0.2-0.1 0.1-0.6 0.7 0-0.5 0-0.2-0.2 0.2 0-0.2-0.1 0-0.2 0.4-0.3-0.3-0.1-0.2 0-0.2 0.1-0.3 0.6-0.8-0.2-0.2 0-0.1 0.1-0.2 0.2-0.1 0.1 0 0.1 0.1 0.2 0 0.2-0.1 0.1-0.1 0.2-0.4 0.4 0.4z m-10.9-0.7l-0.1 0.5-0.1-0.1-0.4-0.1 0.1-0.7-0.1-0.3-0.1-0.3 0.1-0.4 0.6 0.4 0.1 0.5-0.1 0.5z m-34.6-21.1l0 0.3 0 0.5-0.1 0.2-0.1 0.3-0.2-0.3-0.8 0.5-0.4-0.2-0.2-0.3-0.1-0.3-0.1-0.2 0.1-0.2 0.2-0.1 0.3 0 0.3 0 0.2-0.3 0.2 0.1 0.4 0.2 0.1-0.3 0.1 0 0.1 0.1z m-5.2-8.5l0.4 0.2 0.7 0 0 0.2-0.2 0.2-0.5 0.2-0.3-0.1-0.3-0.1-0.5 0-0.4 0-0.3 0 0-0.4 0.3-0.6 0-0.4-0.1-0.3 0.1-0.1 0.2 0.1 0.2 0.2 0.2 0.1 0.2 0.3 0.3 0.5z m-8.6-11.7l0.3 0.2 0.8 0 0.3 0.1-0.1 0.3-0.2 0.4-0.2 0.5 0 0.4 0.1 0.4 0.6 0.6 0.1 0.1 0.4 0.1 0.1 0.1 0.1 0.2-0.1 0.2-0.2 0-0.2 0 0.1 0.2 0.5 0.3 0.1 0.2 0 0.2-0.1 0.1-0.3 0.1-0.3 0.8-0.2 0.3-0.4 0.3-0.4-0.2-0.7-0.2-0.4-0.2-0.2-0.5-0.2-1.2-0.1-0.3-0.6-1-0.2-0.2-0.9-0.6-0.3-0.2-0.2-0.3-0.1-0.2 0.1-0.5 0.5 0 1.2 0.5 0.9 0.2 0.1-0.3-0.1-0.8 0.3-0.7 0.1 0.6z m-1.3-1l-0.3 0.1-0.3-0.1 0.1-0.3 0.2-0.3 0.1 0 0.3 0.2 0.1 0.2-0.2 0.2z m-0.1-4.9l-0.2-0.2-0.3 0-0.2-0.3 0-0.2 0.1-0.1 0.5 0.4 0.1 0.4z m-142.7-19.6l-0.3 0.2-0.7 0-0.1 0.1-0.2 0.2-0.3 0-0.2-0.1-0.1-0.4-0.4 0-0.3 0.2-0.3 0.3 0 0.5-0.2 0 0-0.1-0.1-0.2-0.3-0.7 0.1-0.3 0.4-0.1 0.5-0.4 0.5-0.9 0.3-0.3 0.1-0.2 0-0.4 0.3 0.2 0.9 0.7 0.3 0.3-0.2 0.4 0.1 0.2 0.4 0.4-0.2 0.4z m139-3.7l-0.2 0.2-0.2-0.2 0.3-0.3 0.2 0.1-0.1 0.2z m-148.8-1.8l-0.1 0.1-0.2 0-0.1-0.3 0-0.4-0.1-0.1 0.3-0.1 0.6-0.2 0.5 0 0.1 0.3-0.2 0.2-0.6 0-0.1 0.2-0.1 0.3z m12.6-9.2l-0.1 0.3 0.4 0.2 0.2-0.3 0.1-0.3 0.2 0 0.1 0.2 0 0.5 0 0.4-0.1 0.3-0.3-0.5-0.2 0.2-0.1 0.2 0.1 0.4-0.1 0.1-0.2 0-0.4-0.1-0.5 0-0.4 0.2-0.4 0.2-0.2 0.4-0.2-0.3-0.4-0.8-0.2-0.3-0.2-0.1-0.2-0.1-0.5 0.6-0.2 0.1-0.6 0-0.1 0.1-0.1 0.2 0.2 0.1 0.3 0.1 0.2 0 0.2 0.2 0 0.2-0.2 0.2-0.3 0-0.2-0.2-0.2 0-0.2 0-0.2 0.3 0.2 0.7 0 0.2-0.1 0.2-0.3 0.3 0.1 0.2-0.1 0.3-0.2 0.3-0.2 0.1-0.3-0.1-0.3-0.4-0.3-0.1-0.2 0.2-0.3 0.8-0.3 0.2-0.4 0.1-0.5 0.4-0.3 0.1-1.4 0-0.3-0.1-0.1-0.2-0.6-0.9-0.3-0.2 0.1 0.5 0.1 0.6-0.1 0.5-0.3 0-0.1 0.3-0.3 0.2-0.1 0-0.1-0.6-0.1-0.5 0-0.2 0.4-0.6 0.1-0.3 0-0.5 0.1-0.4 0.2-0.4 0.2-0.3 0.6-0.4 0.1-0.3 0.1-0.4 0-0.3 0.2-0.1 0.2-0.1 0.3-0.1 0.1-0.1 0.5-0.6 0.2-0.2 0.4-0.2 0.5-0.1 0.9 0 2.5-0.5 1.2-0.8 0.8-0.1 0.5 0.1 0.2 0.1 0.1 0.3 0.3 0.3 0.3 0.1 0.3 0.1 0.9 0.1-0.1 0.1z m124.7-39.6l-0.4-0.1-0.1-0.1-0.1-0.1 0.1-0.3 0-0.2 0.2 0 0.1 0.1 0.2 0.2 0.1 0.2-0.1 0.3z m-10.8-4.2l0.3 0.4-0.6-0.2 0-0.2 0.2 0.1 0.1-0.1z m-15-6.7l0 0.1-0.4-0.1-0.4-0.2-0.1-0.2 0.2-0.2 0.1-0.1 0.2-0.1 0.2 0.1 0.2 0.3 0.1 0.3-0.1 0.1z m-1.4-0.3l-0.1-0.2 0.4-0.4 0-0.4 0-0.1 0.1 0 0.3 0.2 0.2 0 0.2 0.2-0.3 0-0.5 0.3-0.2 0.1-0.1 0.3z m-20.2-48.6l-0.2 0-0.1-0.1 0-0.3 0.2 0.1 0.1 0.3z m4.3-1.5l-0.1 0 0-0.3 0.1 0.2 0 0.1z m216.8 375l-0.7 0.6-2 1.6-0.6 0.3-0.6-0.2-0.3 0-1.7 0.4-0.3 0-0.6 0-0.3 0.4-0.1 0.3-0.1 0.3-0.3 0.2-0.5 0.8-0.3 0.2-0.2 0.1-0.4 0-0.3-0.2-0.2 0-1.2 0-0.2 0-1.3-0.1-0.2 0-0.5-0.3-0.5-0.1-0.4 0-0.3 0-0.2 0-0.3 0.4-0.1 0.1-0.6 0.2-0.4 0.1-0.3 0-0.3 0-2.1-0.9-0.2-0.1-0.5-0.6-0.3 0-0.1 0.2-0.1 0.4-0.1 0.2-0.3 0.2-0.1 0-0.3 0-0.2-0.1-0.3-0.3-0.1-0.2 0.1-0.3-0.1-0.2-0.1-0.2-0.4-0.4-0.2 0-0.2-0.1-0.3 0.2-0.7 0.7-0.3 0.2-0.1 0.1-0.3 0.9-0.2 0.3-0.4 0.2-0.6 0.3-1 0.1-0.3 0-0.2 0.1-0.5 0.5-0.4 0.4-0.2 0.2-0.1 0.1-0.3 0.1-0.7-0.1-0.3 0-0.2 0.1-2.5 1.3-0.3 0.4-0.5 0.4-0.4 0.2-0.3 0-0.3 0.1-0.1 0.3-0.1 0.3 0.6 0.6 0.2 0.3 0 0.4 0.1 0.3 0.2 0.3 0.5 0.5 0.6 0.7 0.1 0.2 0.1 0.2-0.1 0.3-0.2 0.3-0.1 0.2-0.1 0.3 0 0.6 0 0.6 0 0.3-0.1 0.3-0.3 0.6 0 0.2 0 0.6 0 0.1-0.2 0.3-0.3 0.3-0.1 0-0.5 0-0.2 0.1-0.7 0.4-0.3 0-0.5-0.2-0.4-0.1-0.3 0-0.2 0.2-0.1 0.1-0.2 0.3-0.1 0.7-0.1 0.1-0.2 0.1-0.2-0.1-0.2-0.3-0.6 0-0.3-0.2-0.7-1.5-0.1-0.1-0.2 0.1-0.3 0.2-0.8 0.6-0.5 0.2-0.4 0-0.3 0.1-0.3 0.3-0.5 0.1-0.4 0.1-0.1 0.4-0.5 1-0.1 0.4 0 0.7 0 0.2-0.2 0.1-0.4 0.3-0.2 0.2-0.4 0.5-0.1 0.3-0.2 0.2-0.5 0.2 0 0.2-0.1 0.3-0.4 0.1-0.5 0.2-0.1 0.1-0.6-0.2-0.1-0.3 0-0.4-0.1-0.3-0.1-0.2-0.4-0.2 0-0.2-0.2-0.9 0-0.8-0.1-0.3 0-0.2 0.1-0.3-0.1-0.3-0.4-1.6-1.4-0.9-0.8-0.7-0.5-0.3-0.4-0.1-0.9 0-0.5-0.1-0.3-0.2-0.2-0.4 0-0.6 0-0.8-0.2-0.5-0.4-0.2-0.6 0-0.4-0.1-0.4-0.2-0.3-0.4-0.3-0.3-0.9-0.2-0.4-0.2-0.8-0.5-0.9-0.4-0.9 0.1-1.9 0.4-0.9 0.1-2.8-0.1-1-0.2-0.6-0.5-1.3-1.3-0.8-0.7-0.5-0.2-0.5 0.2-0.4 0.2-0.5 0.1-1.3-0.1-0.3 0.1-1.2 0.4-1 0.3-0.8 0.4-0.4 0-0.7 0-0.4 0-1 0.2-0.8-0.1-2.4 0-0.4 0.1-0.2 0.1-0.6 0.4-0.2-0.4-0.4-0.1-0.8 0.1-0.4-0.1-0.1-0.4-0.1-0.4-0.3-0.3-0.4 0.2-2 0.3-0.3 0.3-0.8 1.6-0.4 0.5-0.4 0.2-0.4 0-2.2 1.2-0.2 0-0.1 0.3-0.3 0.2-0.2 0.2-0.5 0.2-0.1 0.2-0.2 0.3-0.1 0.2-0.4 0.4-0.5 0.2-0.5 0.2-0.5 0.1-0.4 0.2-0.2 0.5-0.2 1.2-0.2 0.5-0.4 0.4-0.5 0.4-0.5 0.2-0.6 0.5-0.1 0-172.1 0 0-73.1-64.9 0 0-219.8 1.4 1.6 0.8 0.5 1.2 0.9 0.6 0.5 0.8 0.3 0.4 0.2 0.5 0.1 0.2 0 0.1 0.1 0.4 0.4 0.4 0.1 1.3-0.1 0.6 0.3 1 0.5 1 0.3 1.1-0.4 2.2 0 0.2 0.1 0.6 0.6 0.3 0.1 0.3 0.1 0.6 0.4 0.3 0.2 1.1 0.2 0.8 0.4 0.6 0.2 2.2 0.1 0.8 0.3 0.6 0.4 0.6 1.4 0.7 0.6 1.4 0.7-0.4 0.7 0 1.2 0.2 1.2 0.3 0.8 1 1.8 0.6 0.9 0.8 0.5 0.8 0.3 1.9 0.1 0.8 0.2 0.2 0.2 0.6 0.5 0.7 0.4 0.2 0.1 0.3 0.3 1 0.7 0.9 1 0.5 0.4 0.6 0.2 0.6 0 1.8 0.6 0.5 0 0.4 0.2 0.2 0.3 2 0.7 0.2 0.3 0.5 0.8 0.7 0.7 0.2 0.1 2.6 0.3 2.6-0.4 3.6-0.7 0.4-0.2 0.2-0.2 0.2-0.2 0.4-0.1 1 0 0.4-0.2 0.3-0.2 0.6-0.5 0.2-0.1 0.5-0.1 0.2-0.1 0.2-0.2 0.6-0.4 0.6-0.6 0.3-0.2 1-0.2 0.2-0.2 0.1-0.2 0.2-0.4 0.3-0.3 0.4-0.2 0.5-0.1 0.5-0.1 0.2-0.2 0.3-0.5 0.5-1.6 0.3-1.9 0.2-0.9 0.1-0.2 0.5-0.5 0.1-0.7 0.1-0.2 0.2-0.3 0.2-1.5-0.1-0.4-0.1-0.4-0.1-0.4 0.2-0.4 2.1-2.6 0.7-2 0.1 0 0.4-0.1 0.2 0 0.1-0.2 0.5-0.6 1.2-1.3 0.1-0.3 0.1-0.4 0.3-0.7 0.2-1.5 0.2-0.4 0.4 0.1 0.5-0.9 0.2-0.5 0.1-0.5 0.1-0.5 0-0.3-0.1-0.1-0.1-0.1-0.1-0.2 0-0.4 0.1-0.4 0.5-0.6 0.2-0.4 0-0.4 0.4-0.9 0.1-0.4 0-1 0.1-0.2 0.2-0.3 0.1-0.5 1.2-2.2 0.2-0.4-0.4-0.5-0.8-2.3 0-0.2 0.2-0.3 0.3-0.3 0.1-0.2 0-1 0.8-4.5 1-3.8 1.8-4.3 0.1-0.4 0-0.8 0.1-0.4 0.2-0.2 0.3-0.1-0.1-0.5 0.2-0.3 0.4-0.2 0.3-0.4-0.1-0.4-0.1-0.4 0.1-0.3 0.5 0.1-0.1-0.5 0.1-0.4 0.1-0.5 0-0.5 0-0.5-0.2-0.4-0.2-0.4-0.3-0.2 0-0.2 0.1-0.2-0.5-0.7-0.2-0.4-1.2-5.7-0.1-1.5-0.1-0.3-0.3-0.8-0.1-0.5 0.1-1 0.2-0.9 1.3-3.4 0.1-0.9 0.1-1-0.1-1-0.3-0.9-0.5-0.7-0.6-0.6-1.1-1.5-0.3-1.9 0.1-2 1.1-4.5 0.6-1.1 0.1-0.5 0.1-0.2 0.6-0.8 0.2-0.4 0.6-1.5 0.1-0.5 0.3 0.1 0.2 0 0.2 0 0.2-0.1-0.3-0.4 0.1-0.3 0.2-0.3 0.2-0.5 0.2-0.5 0-0.2 0-0.2-0.1-0.2 0-0.3-0.1-0.2-0.1-0.1-0.3-0.1-0.3-0.4-0.1-0.2-0.2-0.3-0.2-0.6-0.1-0.3-0.1-1.5-0.3-1-0.4-0.2 0-0.2 0-0.2 0.4-0.8 0.3-0.3 0.2-0.4 0.1-0.4 0.3 0.3 0.4-0.2 0.3-0.3 0.8-0.4 0.5-0.5 0.4-0.6 0.1-0.3 0.1-0.4 0.5-1.4 0.1-0.6 0.2-0.4 0.2-0.2 0.2 0 0 0.2-0.1 0.6 0.1 0 0.3-0.5 0.4 0.1 0.3 0.3 0.3 0.4 0.3 1.3-0.1 1 0.1 0.5 0.2 0.2 0.2 0.2 0.5 1 0-0.3 0.1-0.5-0.1-0.5-0.3-0.8-0.2-0.9-0.2-0.3 1.8-0.6 0.4-0.3-0.5 0-0.7 0-0.5-0.2-0.5-0.1-0.3-0.5-0.2-0.2-1.1-0.3-0.2-0.1 0.3-0.3 0.8-0.5 0.6-0.3 0.4-0.2 0.2-0.1 0.2-0.1 0.3-0.1 0.5 0.1-0.6-0.2-0.3-0.3-0.3 0-0.4 0.5-0.3-0.2-0.3 0.1-0.7 0.1-0.6 0-0.3-0.1-0.3-0.2-0.3-0.3-0.3-0.5-0.2-0.3-0.2-0.2-1-0.2 0.9-0.7 0.4-0.3-0.1-0.1-1 0.1-0.4-0.1-0.4-0.3-0.1 0.1 0 0.4 0 1.4 0.1 0 0.5 0 0.2 0.1 0.1 0.3-0.3 0-0.5 0-0.9 0.4-0.5 0-0.2-0.5 0.1-0.3 2.1-4.8 0.4-1.4 0.2-0.3 0.3-0.1 0.8 0.3 0.4 0 0.5-0.1-0.3-0.2-0.1-0.1-0.1-0.2 0-0.3-0.1 0-0.2 0.3-0.2 0.1-0.2 0-0.1-0.3 0.1-0.3 0.2-0.9 0.4-0.8 0.4-1.4 0.6-1 0.9-0.9 0.9-0.3-0.2 0.5-0.1 0.3 0 0.4 0.4 1.3 0 0.4 0 0.5 0.7-1.4 0.3-0.1 0.2 0 1 0.7 0.3-0.7-0.1-0.2-0.4-0.2-0.3-0.6-0.1-0.2-0.3-0.1-0.4 0-0.1-0.1-0.2-0.7 0-1.1 0.5-1.8 0.9-1.2 0-0.3-0.1-0.4 0.1-0.5 2.6-8.1 0.1-0.5-0.1-1.2 0.1-0.5 0.1-0.4 0.3-0.7 0.1-0.8 0-1.9-0.3-1.8 0.1-0.7 0.5-0.5 1-0.2 0.2 0.2 0.2-0.3 0.4-0.1 0.5-0.1 0.4 0 0.6-0.1 0.3-0.3 0.5-0.7 0.8-0.8 0.1-0.3 0.1-0.3 0.3-1.1 0.2-0.3 0.4-0.3 0.3-0.1 0.9 0.1 0.1-0.1 0.4-0.3 0.2-0.2 0.3 0-0.1 0.3 0 0.1 0.3 0.2 0.8 0.4 0.4 0.3 0 0.1-0.1 0.2-0.2 0.4-0.2 0.2-0.4 0.1-0.1 0.1-0.1 0.2-0.2 0.5-0.2 0.2-0.1 0.1-0.5 0.1-0.1 0.1-0.1 0.5 0.1 0.6 0 0.5-0.3 0.5 0.5-0.1 0.3-0.4 0.3-0.5 0.1-0.4 0.2-0.3 0.5-0.1 0.5 0.1 0.3 0.3 0.2 1 0.1 0.1 0.2-0.1 0.2 0.1 0.2 0.4-0.2 0.7 0.2 0.4 0.2-0.4 0.5-0.3 0.5-0.1 0.4 0.2 0.1 0.2 0.1 0.7 0.2 0.2 0.2 0.3 0.2 0.3 0.2 0.7 0.1 0.6 0.1 0.7 0.2 0.6 0.1 0-0.1 0.2-0.2 0.4-0.1 0.5 0 0.6 0.2 0.7 0.3 0.4 0.3 0 0.2 0.2 0.2 0.5 0.1 0.5 0.3 0.5 0.1 0.2 0 0.2-0.2 0.2-0.2 0.3-0.5 0.8-0.2 0.6 0.2 0.2 0.2 0.3 0 0.4 0 1 0.1 0.2 0.2 0.5 0.1 0.2 0.2 2.9-0.2 1.9 0.1 0.3 0.2 0.3 1.2 1 0.3 0 0.7 0.7 0.4 0.2 0.6-0.1 0.4-0.1 0.8-0.4 0.6-0.1 0.4 0.1 1.2 1.2 0.1 0 0.4 0 0.6-0.2 0.3 0.1 0.2 0.2-0.3 0.2-0.2 0.1-0.5 0-2.1 3.4-0.1 0.1-0.3 0.1-0.1 0.1 0 0.4 0 0.1 0.1 0.6 0 0.5-0.1 0.2-0.2 0.2 0.3 0.3-0.1 0.4-0.1 0.4-0.1 0.9 0.2 0.2 0.4 0.1 0.8 0.1 0.8-0.2 0.2 0.1 0.4 0.3 0.1 0.1 0.9 0.6 0.2 0.3 0.2 0.4 0.1 0.3 0.1 1.4 0.1 0.4 0.2 0.5 0.4 0.3 0.3 0.2 0.8 0.2 0.3 0.1 0.3 0.1 0.4 0.2 0.6 0.6 0 0.1-0.5 0.7-0.2 0.4 0.1 0.2 0.1 0.1-0.7 1.1-0.1 0.4-0.2 1.2-0.1 1.3-0.1 0.4 0.5-0.6 0.2 0.2 0.2 0.1 0.3 0 0.2-0.1 0.3-0.2 0.3 0 0.2 0.1 0.3 0.1 0.5-0.1 0.3-0.2 0.3-0.2 0.4-0.1-1 1.9 0.3 0.8 0 0.9-0.2 1.7 0.6 2.8 0 2.9 0.1 0.4 0.8 0.7 0.1 0.2 0.2 0.4 0.1 0.2 0.1 0.3 0 0.2-0.3 1.4 0.1 0.4 0.3 0.1-0.2 0.5-0.5 1.2-0.2 0.7-0.2 1.4-0.3 0.8-0.1 0.4 0.1 0.4 0.4 0.8 0.1 0.5 0.1 0.2 0.7 1 0.1 0.2 0 0.6 0.1 0.3 0.2 0.4 0.1 0.2 1.3 1.1 0.2 0.2 0.2 1.4 0 0.4 0.2 0.5 0.1 2.1 0.9 2.9 0.7 1.4 0.5 0.6 0.5 0.6 0.4 0.2 0.3 0.2 0.3 0.1 0.4 0.1 0.7 0.1 0.2 0.1 0.1 0.4 0.2-0.3 0.3-0.1 0.5 0 0.9-0.6 0.8-0.3 1-1 0.4-0.3 0.3-0.1 0.4-0.4 0.2-0.4 0.2-0.3 0-0.6 0-0.6 0.1-0.5 0.3-0.3 0.3 0.5 0.3-0.2 0-0.1 0.2 0 0.3 0.7 0.1 0.2 0.3 0.1 0.5 0 0.2 0.2 3-1.4 0.2-0.2 0.4-1 0.2-0.2 0-0.5 0-0.1 0.2 0 0.3 0.2 0.3 0.1 0.2 0.2 0.1 0.2 0.3 0.3 0.9 1.3-0.2 0.4 0 0.5-0.1 0.9 0.2 0.4 0.4 0.1 0.5-0.3 0.3-0.3 0.1 0.4-0.1 0.4-0.2 0.4-0.2 0.2-0.1 0.2 0.1 1.2 0.1 0.4 0.1 0.2 0.6 0.4 0.1 0.2 0.3 0.6 0.1 0.2 0.5 0.2 0.9-0.3 0.3 0 0.3 0.3 0.3 0.5 0.3 0.3 0.5 0.2 1.4 0 0.3 0.1 0.2 0.2 0.1 0.4 0 0.2 0.2 0.2 0.4 0.3-0.1 0.1 0.1 1.1 0.1 0.2 0.2 0.2 1.3 0.9 0.4 0.5 0.5-0.3 0.5 0.2 0.4 0.4 0.5 0.2 0.3 0 0.4 0.2 0.3 0.1 0.3-0.1 0.6-0.1 0.3 0-0.2 0.6 0.1 0.5 1.3 1.5 0.3 0 0.5-0.1 0.7 0-0.3 0.6-1.6 2.3-0.3 0.5-0.2 1.6 0.1 0.3 0.3 0.7 0.1 0.6 0.2 0.2 0.3 0.2 0.2 0 0.4 0 0.2-0.3 0.1-0.6 0.4 0.3 0.1 0.5-0.1 0.4-0.9 0.3-0.3 0.4-0.1 0.4 0.3 0.3-0.2 0.2 0 0.3 0 0.2-0.1 0.2-0.1 0.1-0.3 0.2-0.2 0.1-0.1 0.3-0.1 0.6 0 0.3 0.2-0.2 0.2 0 0.3 0.9 0 0.5-0.2 0.2-0.1 0.1 0 0.2 0.1 0.2 0.1 0.2 0.8 0.6 0.1 0.1 0.1 0.5 0.1 0.2-0.1 0.2-0.3 0.4 0.1 0.2 0.1 0.1 0.8 1.9 0.2 0.2 0.1 0.4-0.1 1 0 0.4 0.1 0.2 0.2 0.2 0 0.2-0.1 0.3-0.3 0.4-0.1 0.3 0.1 0.4 0.2 0.3 0.4 0.5 1 1.2 0.4 0.8 0.3 0.8 0 0.8-0.5 1.5-0.1 0.8 0.5 0.3 0.1 0.1 0.1 0.6 0 0.4-0.1 0.2-0.7 0.7-0.4 0.7 0 1.7-0.3 0.8 0.1 0.2 0.1 0.3 0.2 0.2 0.2 0.1 0.5-0.2 0.3 0.2 0.2 0.5 0.1 0.4 0.1 0.3 0.8 0.8 0.3 0.7 0.4 0.5 0 0.1 0.1 0.3 0.2 0.4 0.3 0.3 1 0.9 0.3 0.2 0.5 0.2 0.2 0.2 0.1 0.1 0.1 0.5 0.1 0.3 0.2 0.2 0.4 0.2 0.2 0.1 0.5 1.1 0.3 0.3 0.3 0.4 0.1 0.2-0.1 0.2-0.2 0.1-0.2 0.1-0.2 0.1-0.1 0.3 0.1 0.2 0.3 0.3 0.2 0.3 0.1 0.1-0.1 0.4 0.1 0.2 0.2 0.1 0.2-0.1 0.1-0.1-0.2-0.5 0-0.4 0-0.3 0.2-0.2 0.1-0.1 0.6-0.6 0.2-0.2 0.4 0.2 0.2 0.3 0.3 0 0.5-0.4 0.3-0.4 0.2 0 0.3 0 0.3 0.1 0.1 0.2-0.1 0.3-0.4 0.4 0 0.2 0.1 0 0 0.2-0.2 0.4-0.1 0.2-0.3 0.3-0.4 0.8-0.1 0.3-0.1 0.4-0.1 0.5 0.2 0.3 0.3 0.2 0.2 0.2 0.9 1.6 0.1 0.5 0.1 0.5 0 0.5 0.1 0.3 0.8 1.2 0.5 1.4 0.3 0.4 0.4 0.3 0.2 0.1 0.1 0.3 0 0.9 0 1.4-0.1 0.2 0.2 0.6 0.6 0.8 0.6 0.5 0.2 0.3 0.1 0.5-0.1 0.3-0.6 0.5-0.2 0.3-0.1 0.5 0.1 1.5-0.1 0.1-0.2 0.2-0.2 0.3 0.3 0.2 0 0.2-0.1 0.5 0.3 0.4 0.2 0.2-0.2 0.3-0.2 0.8 0 0.1 0 0.4-0.6 1.5-1 2-0.2 0.7-0.2 0.5 0 0.4 0 0.3 0 0.3 0.1 0.3 0.2 0.3-0.2 0.6 0.3 0.6 1.7 2 0.4 0.3 0.3 0 0.6 0 0.3 0.1 0.2 0.3 0 0.3 0.1 0.7 0.5 1.5-0.1 0.5 0.5-0.1 0.4 0.1 0.4 0.1 0.1 0.1 0.3-0.1 0.4 0 0.7 0.2 0 1.1-0.1 0.9-0.3 0.8-0.6 1.4-0.3 2.7-0.2 0.5 0.1 0.3 0.1 0.2 0.4 0.6 0.1 0.3 0.3 0.3 0.1 0.2 0.3 0.6 1.7 1.2 0.3 0.3 0.4 0.8 0.4 0.3 0.4 0.2 0.8 0.3 0.4 0.2 0.4 0.6 0.1 0.2 0.6 0.1 1.4 0.9 0.9 0.2 1.1-0.4 0.3 0.2 0.4 0.7 0.6 0.6 0.3 0.2 0.2 0.1 0.5 0.3 0.5 0.5 0.7 0.4 0.8-0.2 0.3 0 0.4-0.3 0.7-0.7 0.2-0.4 0.1-0.4 0-0.5-0.1-0.4 0.1 0 0.1 0.3 0.4 0.4 0.2 0.6 0.2 0.2 0 0.1-0.1 0.2-0.2 0.8 0 0.2 0.2 0.4 0.5 0.6 0.1 0.2 1 1.3 0.3-0.3 0.4 0.1 1.2 0.3 0.5 0.2 0.2 0 0.2 0 0.5-0.3 2.9 0.1 0.6-0.4 0-0.4-0.2-0.5-0.2-0.3-0.5-0.4-0.2-0.3 0.1-0.2 0.4 0.2 0.5 0.6 1 2.6 1.3 1.6 0.2 0.3 0 0.6 0.2 0.6 0.2 0.6 0.3 0.5-0.1 0.6 0.3 0.6 0 0.3-0.8 0.1 0.3 0.1 0.3 0.3 0.5 0.7 1.5 1.7 0.8 0.1 1.4 0.1-0.6-1.4-0.1-0.2 0-0.2-0.1-1.5 1.6 0.5 0.5 0.5 0.3 2 0.3 0.7 0.5 0.5 0.7 0.5 0.4 0.2 0.4 0.1 1 0 0.1-0.1 0.1-0.4 0.1-0.1 0.5 0.1 0.1 0 0.4-0.3 0.2 0.2 0.7 0.7 0.1 0.3 0.2 0.2 1.5 0.2 1.2 0.4 0.5 0.1-0.1 0.4 0.1 0.4 0.6 0.7-0.4 0.2-0.5 0.2 0.3 0.1 0 0.3 0 0.2-0.3 0.2 0.6 0.2 0.2 0.1 0.6 0.8 0.1 0.1 0.1 0.1 0.8 0.6 0.6 0.2 0.1 0.2-0.1 0.3 0.3 0.1 0.4 0 0.4-0.2 0.2-0.2 0.1-0.2-0.2-0.1-0.4 0-0.4-0.1 0.3-0.3 0.3-0.1 0.2 0 0.3-0.1 0.1-0.3-0.1-0.3-0.1-0.1-0.3-0.1-0.2-0.1-0.1-0.4 0-0.3 0.1-0.3 0.3-0.1 0.3 0.2 0.2 0.2 0.3 0.2 0.6 0 0.2-0.1 0.2-0.3 0.4-0.3 0.2 0.1 0 1.3 0.1 0.8 0.4 0.5 0.5 0.2-0.2 0.3 0 0.3 0.1 0.2 0.4-0.1 0.2-0.2 0.1-0.2 0-0.3 0.1-0.3 0.2 0.1 0.1 0.2 0 0.2-0.1 0.2 0.4-0.2 0.2-0.1 0 0.3-0.1 0.3-0.2 0.2-0.2 0.2 0.6 0.3-0.1 0.1 0 0.2 0 0.5 0.8-0.4 0.4-0.2 0.4 0.1 0-0.6 0.5 0.3 0.5 0.6-0.3 0.5 0.1 0.2 0.3 0.2 0.2 0.4 0.1 0 0.2 0 0.2 0.1 0.2 0.5-0.1 0.3-0.1 0.3 0 0.4 0.2 0.7 0.4 0.4 1.2 0.8-0.6 0.1 0.2 0.4 0.4 0.5 0.3 0.4-0.2-0.1-0.2 0-0.2 0-0.2 0.1-0.1-0.3-0.2-0.1-0.3 0.1-0.1 0.1-0.2-0.3-0.2-0.2-0.2-0.2-0.3-0.1 0.1-0.2 0-0.3 0-0.3-0.1-0.3-0.1-0.1-0.3-0.2-0.1 0-0.3 0.1 0 0.1 0 0.1-0.1 0.3-0.1 0.2-0.1 0.1-0.4 0.1-0.3-0.1-0.1-0.2-0.1-0.2-0.2-0.2-0.5-0.1 0 0.4 0.3 0.5 0.2 0.5-0.2 0.5-0.4 0.5-0.5 0.3-0.4 0 0.1 0.4 0.2 0.3 0.4 0.5 0.2 0.5 0.1 0.1 0.3 0 0.1 0 0.2 0.3-0.1 0.2-0.3 0.5 0.3 0.2 0.3 0.7 0.5 0.2 0.1 0.1 0.3 0.6 0.1 0.2 0.1 0.1 0.2-0.1 0.4-0.1 0.3 0.1 0.1 0.1 0.2 0.4 0.2 1.1-0.1 0.1-0.2 0.3 0 0.4-0.1 0.2-0.2 0.3 0.4-0.1 0.3-0.3 0.3-0.7 0.3 0.3 0.2 0.2 0.3 0.2 0.3 0.1 0.7-0.2 0.3 0 0.1 0.3 0.6 0.5 0.2 0.1 0.1 0 0.2-0.2 0.3 0 0.3 0 0.3 0.2 0.1 0.4-0.4-0.1-0.4-0.1-0.2 0.1 0.2 0.3 0.1 0.4-0.2 0.4-0.1 0.2 0.4 0.1 0.7-0.2 0.4-0.1 0.1 0.4 0.2 0.2 0.9 0.1 0.2 0.2 0.1 0.4 0.2 0.3 0.3 0.2 0.2 0.1 0.1 0.1 0.6 0.8 0 0.9-0.7 1.2 0 1 0.6 1.2 0.2 0.2 0.2-0.1 0.1-0.5 0.1-0.1 0.2 0 0.1 0.2 0.1 0.2 0 0.2 0.1 0.1 0.3 0 0.2 0.3 0 0.2-0.1 0.1 0 0.3 0.1 0.5 0.4 0.8-0.1 0.2-0.2 0.1-0.2 0.1-0.2 0.1 0.2 0.2 0.7 0.2 0.3 0.2-0.4 0.3-0.3 0.2-0.4 0.3-0.1 0.6 0.1 0.6 0.3 0 0.9-0.7 0.2 0.3 0.4 0.2 0.3 0 0.2 0-0.1 0.7 0.1 0.4 0.3 0.1 0.1 0.2 0 0.3 0.3 0.2 0.5-0.2 0.1-0.2 0.3-0.7 0.2-0.2 0.1 0.2 0.1 0.2 0.2 0.6-1.1 1.1-0.1 0.4 0.1 0.6 0.4 0.9 0.2 0.3 0.1 0.1 0 0.2-0.2 0.3-0.4 0.1-0.3 0.2-0.1 0.4 0 0.5 0.2 0.5 0.3 0.4 0.4 0.5 0.1 0.3-0.1 0.2-0.1 0.6 0 0.3 0.1 0.4 0.2 0.6 0.8 1.4 0.1 0.4 0 1.1 0.2 0.4 0.8 1.5-0.3 0.3-0.1 0.1 0 0.2 0.4 0.2 0.2 0.4 0 0.2 0.6 0.6-0.1 0.2-0.3 0.5-0.1 0.2 0.1 0.1 1 0.4 0.3 0.2 0.2 0.3 0.2 0.4 0.2 0.2 0.4-0.2 0.1 0.5 0.1 0.5-0.1 0.9-0.1 0.5-0.2 0.4-0.3 0.3-0.2 0.4 0.6-0.1 0.8-0.4 0.8-0.6 0.4-0.5 0.3-0.8 0.3-0.3 0.4 0.3 0.6 0.7 0.2 0.5 0.2 0.4 0.1 0.2 1.8 1.6 0.1 0.2 0.2 0.8 0.4 0.7 0.6 0.6 0.4 0.3-0.5-2.2-1.4-3.5-0.4-0.5-0.2-0.6 0-0.4 0.5 0.1-0.2-0.3-0.3-0.4-0.1-0.3 0.2-0.5 0.2-0.3 0.4-1.1 0.1-0.7 0.3-0.4 0.2-0.2 0.3-0.1 0.3-0.1 0.8-0.3 0.1 0.2 0.4 0.2 0.1 0.1 0 0.2 0.4 1.1 0.2 0.3 0.2 0.3 0.2 0.2 0.4 0.2 0.2 0.1 0 0.3 0 0.2 0.1 0.4 0.1 0.1 0.5 0.4 0.1 0.3-0.3 0.3 0.3 0.6 0.5 0.4 1.8 0.6 0.3 0.1 0.6 0.5 0.3 0.2 0.7 0.3 0.3 0.2 0.2 0.2 0.4 0.4 0.3 0.3 0.4 0.2 1.1 0.3 0.5 0.3 1.6 1.5 0.1-0.2-0.3-0.4-0.4-0.6-0.1-0.7 0.1-0.4 0-0.1-0.8-0.7-0.2-1.2 0.2-1.4 0.5-1.1 0.2 0.2 0.5 0.3 0.4-0.2 0.4 0.2 0.1 0.3-0.3 0.2 0.1 0.2 0.1 0.2-0.1 0.1-0.2 0.1 0.2 0.1 0.3 0.2 0.2 0.2 0.2 0.2 0.1-0.2-0.1-0.3-0.1-0.3 0.1-0.4 0.3-0.3 0 0.6 0.1 0.5 0.2 0.5 0.3 0.4 0.1 0.1 0.6 0.2 0.2 0 0.2 0.1 0 0.3 0 0.3-0.2 0.1-0.5 0.7-0.4 0.2-0.2-0.5-0.2-0.1-0.3 0.1-0.1 0.4 0.5 0.3-0.3 0.6 0.5-0.1 0.3 0.1 0.1 0.4 0 0.7 0 0.4 0.2 0.1 0.3-0.2 0.2-0.2 0.1-0.3 0-0.3 0-0.6 0.1-0.6 0.2-0.1 0.2 0.3 0.1 0.6-0.1 1.3 0.1 0.7 0.5-0.1 0.1 0.5 0.3 0.6 0 0.4-0.1 0.4-0.3 0.9-0.1 1-0.2 0.8-0.1 1.2-0.1 0.3 0.1 0.3-0.2 0.1-0.3-0.1-0.5 0.1-0.2 0.1 0.2 0.3 0.2 0.1 0.3 0.3 0.1 0.1 0.1 0.3-0.2 0.4 0.1 0.2 0.1 0.2 0.1 0.1 0 0.5-0.4 1.9 0 0.9 0.8 0.5-0.1 0.4 0 0.4 0.2 0.3 0.2 0.4 0.2-0.4 0.4 0.5-0.2 0.7-0.4 0.5-0.6 0.3 0.6 2.4 0.6 0.5 0.8 1 0.1 0.3-0.2 0.3-0.4 0.1-0.9-0.1 0 0.2 0.5 0.1 0.4 0.1 0.3 0.3 0.1 0.5 0.3 0.5 0.5-0.2 0.4-0.3 0.2-0.2 0.4 0 0.6 0.5 0.6 0 0.3 0.3 0.3 0.8 0.6 0.3 0.8 0.7 0.2 0.3 0.3 0.2 0.3 0.8 0.2 0.4 0.1 0.6 0 0.2 0.1 0.3 0.3 0.4 0.3 0.3 0.5 0.3 0.9 0.2 0.5 0 0.1 0.1 0.1 0.4 0.2 0.3 0.2 0 0.3 0 0.2 0.1 0.1 0.2 0.2 0.4 0.1 0.2 1.3 1.3 0.4 0.6 0.3 0.5 0.1 0.2 0.1 0.1 0.2-0.4 0.2-0.1 0.3 0 0.4 0.1 0.3 0.2 0.4 0.4 0.3 0.2 0.1 0.2-0.1 0.2-0.2 0.1 0 0.1 0 0.5 0.1 0.3 0.2 0.1 0.4 0.2 0.1-0.3 0-0.2 0.2-0.5 0-0.3 0.3 0.3 0.6-0.1 0.5 0.3 0.4 0.5 0.6 0.3-0.2-0.8-0.2-0.4-0.2-0.4-0.3-0.2-0.6-0.4-0.2-0.2 0.2-0.3 0.4-0.1 0.4-0.1 0.4 0.1 0.3 0.3 0.2 0.2 0.2 0.3 0.5 0.1 0 0.1-0.5 0.5 0.2 0.4 0.4 0.1 0-0.3 0.2-0.1 0.7-0.6 0 0.7 0.1 0.9 0.3 0.7 0.3 0.5 0.5 0.5 0.3 0.2 0.6 0.1 0.1-0.2 0.1-0.1 0.1-0.3 0.1-0.1 0.1 0.3 0 0.5 0.1 0.2 0.2 0.2 0.4 0.4 0.1 0.1 0.1 0.5 1.3 4.1 1.2 2.5 0.6 0.4 0.8 1.4 0.6 0.7 3.4 2.5 0.4 0.1 0.4 0 1.3 0.4 0.7 0.6 0.7 0.8 0.5 1 0.1 1.1 0 2 0.2 0.5 1.5 2.4 0.1 0.2 0.2 0.3 0.9 0.5 0.1 0.5-0.1 0.2-0.1 0.1-0.5 0-0.4-0.1-0.2-0.1-0.1 0.1-0.1 0.1 0.1 0.2 0.5 0 0.5 0.2 0.4 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.4 0.3 1.1 0.1 0.5 0.2 0.6 0.2 0.4 0.2 0-0.3 0-0.3 0-0.2 0.3-0.2 0.1 0.1 0.2 0.6 0.2 0.1 1 0.2 0.3 0.1 0.1 0.2 0 0.7 0.3 2.2-0.1 0.2-0.9 0.5-0.1 0.2-0.2 0.5 0.4-0.2 1.1-0.7 0.4 0 0.2 0.4-0.2 0.2-0.3 0.2-0.2 0.1 0.2 0.3 0.3 0.1 0.1 0.1-0.2 0.4-0.8 0.7-0.3 0.4-0.2 0.6 0.3 1.5 0 0.6-0.6 0.1 0.3 0.3 0.3 0.3 0.6 0.4-0.3 0.1-0.1 0 0.2 0.5 0.3 0.3 0.4 0.2 0.5 0 0.8 1.5 0.2 0.5 0.1 0.9 0 0.5-0.2 0.4-0.1 0.2 0 0.2 0 0.8 0.2 0 0.6-1.3 0.1-0.3 0-0.8 0-0.4 0.3-0.4-0.2-0.4 0.2 0.1 0.2 0.3 0.1 0.7 0.4 1.2 0.3 0.4 0.6 0.2 0.7 0.1 0.5-0.3-0.1 0.4-0.4 0.6-0.2 0.6-0.4 0.8-0.2 0.3-0.1 0.4-0.2 1-0.1 0.2-0.4 1.3 0 0.3-0.7 2.5 0 0.8 0 0.5 0.1 0.4 0.2 0.3 0.3 0.2 0.3 0 0.2 0.1 0.2 0.4-0.3 0.7-0.2 0.8-0.1 4.6 0.1 0.4 0.1 0.3 0.7 0.2-0.1 1.2 0 0.4 0.1 0.8 0.1 0.3 0.1 0.1-0.2 0.2-0.1 0.4 0 0.5 0 1.1 0.1 0.8 1.2 3 0.1 0.7-0.4 0.6-0.8-0.4-0.8 0.1-0.8 0.5-0.6 0.8-0.1 0.3-0.2 0.5 0 0.5 0.4 0.2 0.5 0 0.2 0 0.5-0.3 0.1 0.1-0.1 1.1-0.2 0.3-0.3 0.2-0.4 0.3-0.2 0.5 0.1 0.4 0.2 0.3 0.3 0.2 0.4 0.2 0.9 0.3 0.4 0.3 0.2 0.5 0.1 1.1 0.2 0.5 0.3 0.4 0.4 0 0.3 0 0.3 0.2 0.2 0.2 0.2 0.3 0.2 0.7 0.1 0.6 0.4 0.5 0.1 0.2 0.1 1.5 0.1 0.4 0.2 0.3 0.4 0.5 0.1 0.3 0.2 0.6 0.1 0.2 0.2 0.2 0.6 0.6 0.2 0.4 0 0.3-0.2 0.4 0.2 0.1 0.4-0.1 0.2-0.5 0.2 0 0 0.5-0.3 1.2-0.1 0.5 0.1 1.4-0.3-0.7-0.2 0.2-0.2 0.4 0 0.5 0.1 0.4 0.2 0.2 0.2-0.2 0.1-0.3 0.2-0.2 0.2 0.8 0.1 2.2 0.3 0.5 0.4 0.4 0.5 1z m-234.5-403.1l-0.1 0.1-0.2-0.5-0.1-0.1 0-0.1 0.2-0.1 0.1 0.1 0.4 0.1-0.1 0.3-0.1 0-0.1 0.2z m-8 1.4l-0.1 0.1-0.3-0.1-0.3 0-0.5 0.2-0.2 0.1-0.3 0.1-0.2 0.2-0.1 0.3-0.1 0.3-0.7-0.3-0.2-0.2-0.2-0.4-0.3-0.4-0.2-0.6 0.1-0.7 0.1-0.2 0.1 0 0.4-0.1 0.3-0.3 0.4-0.2 0.1-0.1 0.2-0.4 0.5 0.1 0.3 0.5 0.6 1 0.5 0.5 0.1 0.3 0 0.3z m0.4-1.8l-0.6 0.2-0.5-0.4-0.1-0.6 0.3-0.4 0.7-0.1 0.6 0.3 0.1 0.5-0.5 0.5z m-1.8-1.5l-0.4 0.2-0.3-0.1-0.1-0.1 0-0.2 0.1-0.2 0.3-0.1 0.3-0.3 0.2-0.1 0.1 0.1 0 0.2-0.2 0.6z m2.2-0.7l-0.3 0.2-0.3-0.1-0.1-0.3 0.2 0 0.4-0.4 0.1 0.3 0 0.3z m-0.1-7l-0.6 1-0.3-0.1-0.2-0.2-0.4-0.2-0.3 0-0.3 0.1-0.2-0.2-0.2-0.3-0.1-0.3-0.1-0.3 0.3-0.1 0.1-0.1 0.1-0.2 0-0.4 0-0.1 0.4-0.2 0.5-0.1 0.8 0 0.5 0.2 0.3 0.5 0.2 0.5-0.1 0.2-0.4 0.3z m-3.2-0.7l-0.3 0.1-0.2-0.1-0.1-0.2-0.3-0.4-0.4-0.2-0.2-0.3 0-0.3 0.9-1.5 0.4 0 0.2 0.2 0.5 0.4 0.1 0.3 0 0.2-0.1 0.9-0.3 0.4-0.2 0.5z m14.7-3.6l0.2 0 0.2 0.4-0.1 0.1-0.2 0.3-0.4-0.4-0.1-0.4 0.4 0z m-14.3-1.6l0.3 0-0.1 0.2-0.3 0.2-0.1 0.2-0.2-0.3-0.1-0.2 0.3-0.2 0.2 0.1z m16.1-1.8l-0.4 0.1-0.2 0-0.2-0.3 0.4-0.2 0.4 0.1 0.3 0.2-0.3 0.1z m-6.1-2l-0.5 0.1 0-0.3 0.4 0 0.1 0.2z m24.1-3.8l-0.2-0.4 0.3 0 0.2-0.2 0.1 0.2-0.2 0.4-0.2 0z m-31.4-0.6l-0.2 0-0.4 0-0.4-0.2-0.1-0.2 0.6 0 0.5 0.2 0 0.2z m9.9-4.4l0.3 0.3-0.3 0.3-0.4 0.2-0.2 0.2-0.2 0.1-0.4 0.1-1.6 0-0.3 0-0.3-0.2-0.2-0.4 0.2-0.4 0.5-0.2 0.6 0 0.7 0.2 0.5-0.1 0.8-0.2 0.3 0.1z m-11-1.8l-0.8 0-0.9-0.1-0.7-0.3 0.3-0.5 0.9-0.2 1.6 0.5 0.1 0.3-0.1 0.2-0.4 0.1z" id="AUS2657" data-name="Queensland">
 </path>
 <text fontSize="25" data-name="Queensland" fontFamily="Verdana" x="600" y="300">QLD</text>
 </svg>
  );
};

export default QLD;
