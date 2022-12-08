import React from "react";
import ReactDOM from "react-dom";
import { MdOutlineCancel } from "react-icons/md";
import Header from "./Header";

const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
  overflowY: "scroll",
};

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  zIndex: 1000,
  padding: "50px",
  overflowY: "scroll",
  height: "90%",
};

const Modal = ({ open, children, onClose, title }) => {
  if (!open) return null;

  const closeModal = (event) => {
    return null;
  };

  return ReactDOM.createPortal(
    <>
      <div style={overlayStyles}>
        <div style={modalStyles}>
          <button
            className="absolute top-4 right-2 text-black"
            onClick={onClose}
          >
            <MdOutlineCancel size={30} />
          </button>
          <Header title={title} />
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
