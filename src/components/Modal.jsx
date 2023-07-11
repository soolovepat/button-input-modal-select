import React from "react";
import { useState } from "react";
import ModalWindow from "./modal/ModalWindow";
import MiniModalWindow from "./modal/MiniModalWindow";
import { StButtonContainer } from "../styles/ButtonStyle";
import { StModalBox } from "../styles/ModalStyle";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMiniModal, setOpenMiniModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  const openMiniModalHandler = () => {
    setOpenMiniModal(!openMiniModal);
  };

  return (
    <div>
      <h1>Modal</h1>
      <StModalBox>
        <StButtonContainer backgroundColor="#55efc4">
          <button className="small-button" onClick={openModalHandler}>
            Open Modal
          </button>
        </StButtonContainer>
        {setOpenModal
          ? openModal && <ModalWindow openModalHandler={openModalHandler} />
          : null}
        <StButtonContainer borderColor="#fab1a0">
          <button className="large-button" onClick={openMiniModalHandler}>
            Open Modal
          </button>
        </StButtonContainer>
        {setOpenMiniModal
          ? openMiniModal && (
              <MiniModalWindow openMiniModalHandler={openMiniModalHandler} />
            )
          : null}
      </StModalBox>
    </div>
  );
};

export default Modal;
