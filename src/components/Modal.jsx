import React from "react";
import { useState } from "react";
import * as S from "../styles/ModalStyle";
import ModalWindow from "./modal/ModalWindow";
import MiniModalWindow from "./modal/MiniModalWindow";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMiniModal, setOpenMiniModal] = useState(false);

  const openModalHandler = () => {
      setOpenModal(!openModal);
  }

  const openMiniModalHandler = () => {
      setOpenMiniModal(!openMiniModal);
  }

  return (
      <div>
          <h1>Modal</h1>
          <S.ModalComponents>
              <div>
                  <S.OpenModalButton onClick={openModalHandler}>Open Modal</S.OpenModalButton>
              </div>
              {
                  setOpenModal ? openModal && <ModalWindow openModalHandler={openModalHandler} /> : null
              }
              <div>
                  <S.LargeOpenModalButton onClick={openMiniModalHandler}>Open Modal</S.LargeOpenModalButton>
              </div>
              {
                  setOpenMiniModal ? openMiniModal && <MiniModalWindow openMiniModalHandler={openMiniModalHandler} /> : null
              }
          </S.ModalComponents>
      </div>
  )
}

export default Modal;
