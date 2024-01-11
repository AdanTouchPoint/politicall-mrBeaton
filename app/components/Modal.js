// Modal.js
import React from "react";
import "./modal.css"; // Importa tus estilos CSS
const Modal = ({ modalText, showModal, setShowModal,states}) => {
  const closeModal = () => {
    setShowModal(false);
  };
    modalText.message= `Based on ${states}'s decision to not impose a state tax on health services in the next 2 years\n-Your chance to get a bulk billed GP is unchanged\n-Your gap fee to see a private GP is unchanged`
  const text = modalText.message.split('\n')
  console.log(text);
  return (
    <div>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content-own"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{modalText.title}</h2>
                <p> { text.map((el,index)=> (
                   <div key={index}> {el} <br/> </div>
                ))}</p>
            <button onClick={closeModal}>{modalText.button}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
