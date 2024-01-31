// Modal.js
import React from "react";
import "./modal.css"; // Importa tus estilos CSS
const TAC = ({ showTAC, setShowTAC,states}) => {
  const closeModal = () => {
    setShowTAC(false);
  };
  let tittle = 'tittle'
  let button = 'close'
  let message = `message`
  const text = message.split('\n')
  return (
    <div>
        <div className={`modal-overlay ${showTAC ? 'active' : ''}`} onClick={closeModal}>
          <div
            className={`modal-content-own ${showTAC ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{tittle}</h2>
                <p> { text.map((el,index)=> (
                   <div key={index}> {el} <br/> </div>
                ))}</p>
            <button onClick={closeModal}>{button}</button>
          </div>
        </div>
    </div>
  );
};

export default TAC;
