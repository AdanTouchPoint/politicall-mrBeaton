// components/MapaAustralia.js
"use client"
import React from 'react';
import "./css/map.css"

const ACT = ({setShowModal, setStates, setModalText}) => {
  const click = (e) => {
    e.preventDefault();
    setStates(e.target.dataset.name)
    setModalText({
      title: 'Attention',
      message:`Based on ${e.target.dataset.name}'s decision to not impose a state tax on health services in the next 2 years\n-Your chance to get a bulk billed GP is unchanged\n-Your gap fee to see a private GP is unchanged`,
      button: 'Close'
    })
    setShowModal(true)
  };
return (
<svg className='green' version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" cursor={"pointer"} onMouseOver={click} onClick={click}>
<path d="M788.9 618.4l-0.3 0.2-0.4 0.1-1.6-0.3-0.3 0.1-0.3 0.4-0.1 0.2-0.2 0.2-0.2-0.1-0.3-0.2-0.1 0-0.3 0.1-0.1 0.1-0.1 0.2-0.4 0.6-0.2 0.4-0.2 0.2-0.1 0.2 0.1 0.1 0 0.3-0.2 0.4 0 0.2 0.1 0.3 0.1 0.3 0.1 0.3 0 0.2-0.1 0.3-0.3 0.7 0 0.3 0 0.1-0.1 0.3-0.7 0.2-0.1 0.3-0.1 0.2 0 0.6 0.3 1.4 0.1 0.8 0 0.5-0.2 0.7 0 0.2 0 0.3 0.2 1 0 0.3 0 0.3-0.1 0.4-0.1 0.2-0.4 0.4-0.1 0.2-0.2 0.2-0.1 0.4-0.1 0.3-0.3 0.1-0.2-0.1-0.5-0.3-1.3-0.5-0.2-0.1-0.2-0.2-0.1-0.2-0.4-0.8-0.1-0.5-0.2-1.5 0-0.5-0.1-0.3-0.1-0.1-0.3 0-0.1 0.2-0.2 0.2-0.2 0.2-0.1-0.1-0.2-0.1-0.7-0.7-0.2-0.3 0-0.2 0-0.5-0.1-0.3-0.2-0.2-0.1-0.3 0-0.3 0.2-0.9 0-0.6-0.2-0.9-0.1-1.1 0.1-0.4 0.3-1.2 0-0.7 0.1-0.2 0.3-0.7 0-0.3 0-0.2-0.1-0.3 0-0.3 0.2-0.4 0.2-0.3 0.2-0.1 2.4-1.8 3.5-2.7 0.6-0.2 1.1 0.9 0.2 0.2 0.1 0.3 0 0.3 0 0.4 0.1 0.1 0.2 0.1 0.3 0.1 0.3 0.1 0.2 0 0 0.2 0 0.5 0.1 0.1 0.2 0.2 1.1 0.5 0.4 0.1 0.5 0.2 1 0.6 0.1 0 0.1 0.2-0.3 0.3-0.2 0.2z" id="AUS2653" data-name="Australian Capital Territory">
 </path>
 <text data-name="Australian Capital Territory" fontSize="25" fontFamily="Verdana" x="820" y="640">ACT</text>
 </svg>
  );
};

export default ACT;
