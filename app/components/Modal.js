// Modal.js
import React from "react";
import "./modal.css"; // Importa tus estilos CSS
const Modal = ({ modalText, showModal, setShowModal, states,  setHideMain, setShowMap}) => {
  const closeModal = () => {
    setShowModal(false);
  };
  const next = (e) => {
    e.preventDefault();
    setShowModal(false)
    setShowMap(true)
    setHideMain(false)
  }
  const allowed = ["vics","nsws","sas"]
  const toMainPage = (states,allowed) =>  {
  const obj = allowed.includes(states)
  return obj
  }
  const text = modalText.message.split('\n')
  return (
    <div>
        <div className={`modal-overlay ${showModal ? 'active' : ''}`} onClick={closeModal}>
          <div
            className={`modal-content-own ${showModal ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{modalText.title}</h2>
                <p> { text.map((el,index)=> (
                   <p key={index}> {el} <br/> </p>
                ))}</p>
             <div>
                <button  className="modal-button-red" onClick={closeModal}>{modalText.button}</button>
                {
              toMainPage(states,allowed) && ( 
                <button className="modal-button-green" onClick={next}> Next </button>
              )
             }  
             </div> 
          </div>
        </div>
    </div>
  );
};

export default Modal;
