// components/MapaAustralia.js
"use client"
import React from 'react';
import "./css/map.css"

const VIC = () => {
  const click = (e) => {
    e.preventDefault();
    console.log("VIC");
  };

return (
<svg version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" cursor={"pointer"} onClick={click}>

 <path d="M726.4 710.5l1 0.2 0.9-0.2 0.5 0 0.5 0.2 0.2 0 0.2-0.1 0.4 0.1-0.1 0.3-0.1 0.1-0.2 0-1.3 0-0.2 0.1-0.2 0.5-0.1 0.2-0.5 0-0.4-0.2-0.5-0.4-0.3-0.3-0.2-0.5 0.4 0z m-24.8-6.4l0.1 0.2 0.2 0.3 0.1 0.4 0 0.4-0.2 0.1-0.1-0.3-0.6-0.5-0.6-0.3-0.6-0.2-0.8 0.1-0.3 0.3-0.2 0.1-0.1-0.1-0.4-0.2-0.1-0.1-0.4 0-0.6 0.2-0.4 0 0.2-0.3 0.7-0.7 0.5-0.5 0.2-0.3 0.4-0.1 1.3-0.2 0.3-0.1 0.2 0 0.2 0.1 0.5 0.4-0.3 0.2 0.2 0.4 0.1 0.1-0.1 0.3 0 0.1 0.2 0 0.4 0 0 0.2z m0.5-5.3l0.3 0 1-0.3 0.3 0.1 0.3 0.1 0.2 0.2 0.7 1-0.1 0.1-0.5 0.1-0.9 0.1-0.3 0.1-0.8 1-0.5 0.4-0.6-0.2-0.2-0.2-0.7-0.3 0-0.4-0.1-0.3-0.2-0.6 0.6-0.9-0.1-0.2 0-0.2 0-0.2 0.1-0.2 0.2 0 0.2 0.1 0.2 0.3 0.9 0.4z m99.5-22.3l-0.4 0.6-1.2 0.4-2.6 0.2 0.2-0.1 0.1-0.1 0-0.1-0.1-0.2 0.3-0.5-0.1-0.2-0.3 0.1-0.2 0.4-0.3-0.1-0.9-0.3 1 1.4 0.1 0.5-0.2 0.4-0.7 0.6-0.3 0.8-0.7 1.1-0.3 0.3-1.1 0.3-0.2 0.4-0.2 0.2-0.5 0.2-0.9 0.1-0.4 0.3-0.1 0.1-0.2 0.5-0.2 0.1-0.2 0.1-3 0-0.9 0.4-0.6 0.6-0.1-0.1-0.1-0.2-0.1-0.5-0.1-0.1-1.7 0-0.5-0.1-0.3-0.3-1 0.4-3.2 0-0.9 0.2-2.5 0.1-0.5 0.1-0.6 0.5-0.2 0-2.6-0.3-6.5 0.3-3.8 1-4.6 1.6-3.4 1.9-3.7 2.6-4.1 3.8-4.7 4.9-2.1 2.1-2.1 2.7-2 1.8-0.2 0.1-0.1 0.1-0.7 1.2-0.2-0.1-0.1-0.3 0.3-0.3-0.4-0.2-3 0.7-1-0.1-0.6 0.1-0.9 0.7-0.4 0-0.5-0.1-0.6 0-1 0.3-0.6 0.2-0.2 0.4-0.2 0.2-0.5-0.4-0.4-0.5-0.1-0.2-0.3-0.2-2.1 0.2-0.4 0.1-0.3 0.3-0.9 1.1 0.8 0.8 0.1 0.2 0.2 0.5 0.1 0.3 0.1 0 0.4 0 0.1 0 0 0.4 0.1 0.5 0 0.3 0 0.3 0.4 0.2-0.2 0.5 0.2 0.3 0.3 0.1 0.4-0.2 0.3-0.3 0.5-0.7 0.4-0.3 0.2-0.1 0.4 0.1 0.2-0.1 0.1-0.2 0.1-0.6 0-0.2 0.2-0.5 0.4-0.3 0.3 0 0.3 0.5-0.1 0.4-0.1 0.5 0 0.8 0.1 0.3 0.2 0.3 0 0.2 0.1 0.2-0.1 0.5-0.1 0.2-0.2 0.2-0.3 0.3-0.1 0.4-0.1 0.3-0.2 0.9 0 0.4 0.1 0.2 0.1 0.1 0.2 0 0.3-0.2 0.1 0.1 0.2 1-0.1 0.2-0.3 0.1-0.3 0.1-0.3 0.3 0 0.2 0.1 0.3-0.1 0.5-0.2 0.3-0.3 0.2-0.4 0.1-0.3-0.2-0.6-0.3-0.3-0.3-0.3-0.3 0-0.5 0.1-0.2 0.3-0.1 0.1-0.4-0.1-0.2-1-0.5-0.2-0.3-0.5-0.9-0.3-1.6-1.5-1.9-1.9-1.4-1.6 0.3-0.2 0.5-0.1 0.5 0 0.8-0.3 0.1-1.1 0.3-0.4-0.1-0.1-0.3-0.4-1.8-0.9-2-0.8-1.1-1.1-1.2-0.2-0.4 0.6 0.2 0.8 0.8 0.6 0.1-0.4-0.9-0.5-0.5-0.7-0.3-1 0-0.7 0.2-1.3 0.9-0.9 0-0.6-0.5-0.9-1.9-0.3-0.4-0.3-0.1-1.1-0.7-1.2-0.2-0.4-0.1 0-0.2 0.4-0.1 0.6-0.3 0.3-0.4-0.3-0.4 0.2-0.3 0.1-0.5-0.1-0.4-0.2-0.5 0.7-0.3 0.2 0 0.4 0.3 0.5 0 0.4-0.4 0.2-0.3 0.2-0.2 0.3-0.2 0-0.5-0.3-0.4-0.5-0.2-0.1-0.2 0.1-0.3 0.1-0.5-0.1-0.2-0.3-0.5-0.6-1.1-0.3-0.3-0.3-0.1-0.4-0.1-1 0.2-0.8 0-0.2 0.1-0.1 0.2-0.1 0.1-0.3-0.3-0.4-0.1-0.5 0-0.4 0.2 0.2 0.4-0.2 0.3-0.2 0.2-0.1 0.2-0.2 0.7-0.5 0.2-0.1 0.3 0 0.3 0.3 0.4 0.1 0.3 0 0.7 0.1 0.8-2-0.4-0.5 0.2-0.1 0.2-0.1 0.3-0.2 0.3-0.7 0.2-0.2 0.3-0.3 0.8 0.2 0.1-0.5 0.2-1.5 0.1-0.2 0.3-0.5-0.2-0.8-0.5-3.4-3.7-0.4-0.2-0.4-0.1-0.3-0.2-0.1-0.2 0.1-0.2 0.4 0.3 0.7 0.1 0.4 0.3 0.8 0.8 0.5 0.2 0.9 0 1-0.2 1.3-0.6 0.6-0.2 0.2-0.2 0.1-0.3-0.1-0.3 0-0.2 0.2-0.3 0.5-0.3 0.1-0.2 0.1-0.5 0.1-0.3 0.2-0.2 0.3-0.5 0.3-0.4 1-1.3 0.2-1-0.1-1-0.3-1-0.6-0.8-0.2-0.1-0.6-0.3-0.3-0.2-0.1-0.1-0.6-1-0.2-1.1-0.2-0.6-0.4-0.5-0.6-0.3-0.5 0-0.1 0.8-1.4-0.1-0.4 0.1-0.2 0.4-0.1 0.4-0.1 0.4-0.3 0.1-0.3 0.2-0.4 0.2-0.3 0-0.3 0.2-0.8 0.8-0.2 0.2-0.3 0.4-2.5 0.8-0.3 0.3-0.2 0.3-0.2 0.4 0 0.2 0.1 0.2 0 0.2-0.2 0.1-0.2 0.1-0.3-0.1-0.2-0.2-0.1-0.1-0.6 0.2-1.3 0-0.5 0.3-0.2 0.8 0.4 0.3 1.2 0.1 1.9 0.5 0.7-0.2 0.6-0.2 1.5-1.1 1.1 0.6 0.5 0.5-0.2 0.7 0 0.2 0 0.3-0.1 0.2-0.1 0.1-0.3 0-0.2 0.1-0.3 0.4-0.2 0.3-0.2 0.4 0 0.6-0.9 0.2-1.8 0-0.6 0.3-0.2 0-0.3 0-0.5-0.3-0.2 0-0.5 0.1-0.4 0.2-2 1.5-1.1 1.1-0.2 0.1-0.5 0.1-0.3 0.1-0.1 0.1-0.3 0.5-0.2 0.1-1.1 0.4-0.1 0.1-0.2 0.4-0.1 0.1-1 0.2-0.4 0.3-1.1 1.3-0.1 0.2 0.1 0.2 0 0.2-0.2 0.3-0.3 0.2-0.5 0.2-0.3 0.1-0.3 0.4-0.5 1.2-0.3 0.3-0.2 0.1-0.2 0.2-0.3 0.5-0.3 0.2-2.1 0.8-0.5 0.1-0.4 0.2-0.3 0.4-0.2 0.5-0.2 0.5 0 0.2-0.2 0.1-0.3 0-0.1 0-0.7 0.4-0.2 0.3-0.6 0.8-0.4 0.3-0.4 0.1-0.4-0.2-0.8-0.8-0.3-0.2-0.3-0.4-0.1-0.1-0.8-0.4-0.8-0.5-0.4-0.2-0.5-0.1-2 0.2-0.4-0.2-0.4-0.3-0.4-0.5-0.2-0.4-1.3-1.2-0.8-0.6-0.4-0.3-2.5-0.5-1-0.5-0.6-0.1-0.4-0.2-0.1-0.1-0.8-0.2-1.1-1.1-0.5-0.3-1.8-1.5-1.4-0.8-0.8-0.7-0.3-0.1-0.2-0.2-0.3 0-0.2-0.6 0-0.2-0.1-0.1-0.3-0.1-0.2 0.1-0.1 0.3-0.1 0.6-0.5-0.3-0.3-0.2-0.5-0.5-0.2-0.1-1.9 0-0.6 0.2-0.3 0.5-1 0.3-1-0.1-1.9-1-2.3-1.8-0.8-0.4-0.2-0.1-0.8 0.1-0.3-0.1-0.5-0.3-2.2-0.2-0.9 0.1-1 0.5-0.9 0.7-0.3 0.8 0.1 0.4 0.5 0.5 0.1 0.4 0.1 0.4-0.1 0.1-0.6-0.1-0.3-0.2-0.1 0-0.2 0.1-0.5 0.5-0.1 0.1 0 0.4-0.2 0.2-0.3-0.2-0.2-0.3-0.3-0.7-0.3-0.3-0.2-0.1-0.3-0.2-0.3 0-0.4-0.1-0.4 0.1-0.1 0.2 0 0.2-0.1 0.4-0.3 0.1-0.3-0.2-0.3-0.2-0.2-0.2 0.1-0.2 0.3-0.6 0.2-0.3 0-0.3 0-0.4-0.2-0.4-0.3-0.4-3.5-3.3-1.7-1.2-3.2-1.6-0.4-0.3 0-40.6 0-13.4 0-13.4-0.1-39.4 0-2.1 0.5 0.3 0.3 0.5 0.5 0.9 0.4 0.2 2 0.1 0.5 0.1 0.3 0.2 0.2 0.2 0.2 0.2 0.3 0 0.2-0.1 0.3-0.3 0.1 0 0.2 0 0.5 0.3 0.2 0.2 0.2 0.3 0.3 0.1 0.2 0.1 0.3 0.6 0.2 0.2 0.3 0 0.5-0.2 0.5-0.1 0.4 0.2 0.1 0.1 0.7 0.5 0.3 0.1 1.1 0.1 0.2 0.1 0.1 0.6 0.1 0.3 0.2 0.2 0.2 0 0.4-0.1 0.3-0.3 0.5-0.8 0.6-0.6 0.7-0.6 0.9-0.4 0.9-0.2 0.5 0.1 1 0.5 0.5 0.1 1 0 0.4-0.1 0.5-0.2 0.2 0.1 0.3 0.1 0.4 0 1.2-0.3 0.6 0.1 0.5 0.5 0.4 0.9 0.2-0.1 0.4-0.2 0.1-0.1 0.5 0.1 0.3 0.1 0.3 0.2 0.3 0.4 0.2 0.2 0.5-0.1 0.2 0 0.1 0.1 0.2 0.6 0.2 0.6 0 0.6 0.1 0.3 0.3 0.2 0.2 0.4 0.5 0.5 0.5 0.5 0.3 0.2 0.5-0.1 0.3-0.1 0.3 0.1 0.2 0.4-0.1 0.5-0.5 0.8-0.1 0.5 0 0.6 0.3 2.3 0.2 0.3 1.4 1.2 0.2 0.3 0 0.2 0 0.6 0.1 0.3 0.5 0.6 0.6 1.4 0 0.2 0 0.6 0 0.2 0.3 0.2 0.4 0.2 0.5 0.1 0.3 0 0.3 0.1 0.4 0.4 0.4-0.2 0-0.3-0.3-0.4 0-0.5 0-0.2 0.2 0 0.4-0.1 0.4 0.1 0.2 0 0.2-0.1 0.1-0.5-0.1-0.2 0-0.4 0-0.2 0.3-0.4 0.2-1.2 0.2-0.5 0.4-0.2 0.2 0 0.5-0.3 0.2 0 0.2 0 0.2 0.2 0.2 0.3 0.7 0.3 0.1 0.2 0.2 0.2 0 0.6 0.1 0.3 0.3 0.3 0 0.1 0.6-0.3 0.3-0.2 0.2 0 0.7 0.6 0.4 0.2 0.1-0.2 0.2-0.4 0.3 0.1 0.9 0.6 2 0.1 0.3 0.1 1.4 0.8 0.2 0.3 0.4 0.1 0.4 0.2 0.2 0.4 0.1 0.6 0.3 0 0.4-0.3 0.3 0.1 0.6 0.4 0.1 0.2-0.1 0.2-0.1 0.5 0 0.3 0.1 0.3 0 0.2 0 0.3-0.4 0.4 0 0.3 0.1 0.4 0 0.2 0 0.3-0.2 0.5-0.1 0.2 0.1 0.4 0.2 0.7 0.1 1.6 0.3 1.1 0.5 1 0.5 0.9 0.2 0.2 0.4 0.3 0.5 0.3 1.9 0.4 0.4 0.2 0.3 0.5 0.2 0.4 0.1 0.5 0 0.5-0.1 0.3-0.2 0.2-0.1 0.2 0.1 0.3 0.1 0.3 0.2 0.2 1.2 0.8 1.8 0.3 1 0.4 0.1 0.2 0.1 0.2 0.1 0.1 0.5 0.1 0.4 0.3 0.5 0.5 0.9 0.6 1.3 0.6 0.5 0.2 0.3 0.9 0.5 0.2 1 0.1 0.7 0.5 1.1 1.7 0.7 0.8 0.2 0.1 0.4 0.2 0.2 0.2 0.4 0.5 0.4 0.2 0.3 0.4 0.2 0.2 0.2 0.1 0.5 0 0.3 0.1 0.6 0.6 0.5 1 1 2.6 0.3 0.5 0.4 0.4 0.8 0.3 2.4 2.9 0.4 0.2 0.9 0.1 0.4 0.2 0.4 0.3 0.1 0.3 0 0.1 0.4 0 0.1 0.1 0 0.3 0.3 0.2 0.6 0.1 0.9-0.2 0.4-0.3 0.9-0.9 0.4-0.2 0.5 0.1 0.9 0.5 0.5-0.1 0.2-0.4-0.2-0.6-0.4-0.5-0.3-0.4-0.2-0.5 0.1-0.5 0.5-0.9 0.2-1.6 0.1-0.2 0.3-0.3 0.4-0.2 2.4-0.4 2.1 0 0.7 0.1 0.9 0.3 0.9 0.2 0.9-0.1 1.6-0.9 1-0.2 0.9 0 0.8 0.3 3.7 3.3 0.9 0.4 0.9 0.1 1.5-0.5 0.4 0 0.5 0 0.4 0.3 0.2 0.3 0.1 0.5 0.2 0.2 0.2 0.1 0.9-0.1 0.6 0.1 0.3 0.2 0.5 0.2 1.3 0.1 0.5 0.2 0.4 0.2 0.4 0.1 0.1-0.4 0.5-0.1 0.5 0 0.7 0.3 1.5 0.1 0.3-0.1 1-1.7 0.3-0.1 0.2 0 0.4 0.2 0.3-0.1 0.2-0.2 0.2-0.1 0.2 0.1 0.5 0.4 0.2 0.1 1.7 0 0.3 0.1 0.7 0.9 0.4 0.3 0.5 0 0.5 0 0.4 0.1 0.4 0.5 0.3 0.1 0.6 0 0.1 0.1 0.2 0.2 0.4 0.4 0.7-0.2 0.6 0.3 0.5 0.4 0.6 0.1 0.1-0.2 0.1-0.2 0.1-0.2 0.4-0.2 0.3 0 0.3 0.1 0.6 0.4-0.2 0.8 0.1 1 0.2 0.6 0.9 1 0.3 0.2 1.9-0.6-0.1-0.3-0.3 0-0.6 0-0.3-0.1-0.3-0.2-0.2-0.2-0.2-0.3-0.2-0.3 0-0.3-0.1-0.7-0.2-0.5 0-0.2 0.1-0.2 0.2-0.3 0.1-0.3 0.6-0.8 0.2-0.1 0.2 0 0.2 0.2 0.3 0.3 0.4 0.1 0.7 0 1.2-0.4 0.3 0 0.4 0.1 0.4 0.3 0.4 0.4 0.1-0.4 0.3-1.5 0.2-0.3 0.3-0.4 0.3-0.4 0.2-0.2 0.3 0 0.6 0 0.2 0 0.4-0.3 0.2 0 0.4 0.1 0.3 0.2 0.3 0.4 0.2 0.5 0.3 0.1 2.5-1 0.2 0 0.3-0.4 0.2-0.1 0.2 0 0.4 0.1 0.2 0.1 2.8 1.4 0.6 0.1 0.3 0.1 0.1 0.2 0.1 0.3 0.2 0.3 0.2 0.2 0.2 0 0.5 0.1 0.5 0.3 0.1 0.3-0.1 0.5-0.1 0.7 0.2 0.4 0.8 0.6 0.2 0.5-0.2 1.1-0.1 0.7 0.2 0.3 0.1 0.2 0.4 1.6 0.2 0.4 0.1 0.3 0 0.3 0 0.2-0.3 0.4-0.1 0.3 0.2 0.6 0.4 0.4 0.7 0.6 0.2 0.3 0.1 0.2 0.1 0.6 0.2 0.3 0 0.1 0 1.2 0.1 0.4 0.1 0.2 0.1 0.2 0.2 0.1 0.3 0 0.3 0.1 0.4 0.9 0 0.3-0.1 0.6-0.1 0.6-0.3 0.5-1.5 2.5 0 0.1 0.2 0.1 0.6 0.2 1.2 0.1 0.6 0.2 4.6 2.4 9.4 4.8 4.7 2.3 4.7 2.4 9.4 4.8 4.5 2.3z" id="AUS2656" name="Victoria">
 </path>
 <text fill="#ffffff" fontSize="25" fontFamily="Verdana" x="610" y="670">VIC</text>
 </svg>
  );
};

export default VIC;
