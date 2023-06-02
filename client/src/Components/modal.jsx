import React, { useState } from "react";

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

  // Función para abrir el modal al hacer clic en el input
  const handleInputClick = () => {
    setIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
  }; 

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>Modal Content</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <InputComponent handleInputClick={handleInputClick} />
    </>
  );

};

export default Modal;