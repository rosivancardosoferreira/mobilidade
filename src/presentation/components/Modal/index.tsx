import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BackDrop, ContentModal, ContentModalProfile } from "./styles";
import Icons from "utils/icons";

interface Props {
  visible: boolean;
  hiddenModal: () => void;
  peoples: object;
}

export function Modal({ visible, hiddenModal, peoples }: Props) {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };
  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0
    },
    visible: {
      y: "100px",
      opacity: 1,
      transition: { delay: 0.5 }
    },
    exit: {
      y: "100vh",
      opacity: 0
    }
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {visible && (
        <BackDrop
          as={motion.div}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ContentModal as={motion.div} variants={modal}>
            <button className="modal__close" onClick={hiddenModal}>
              {Icons.close}
            </button>
            {Object.values(peoples)
              .filter(e => e.description !== "")
              .map((elem, id) => (
                <ContentModalProfile key={id}>
                  <img
                    src={elem.profilePhoto}
                    alt="Foto palestrante"
                    className="profile__photo__img"
                  />
                  <div className="profile__infos">
                    <strong className="profile__name">{elem.name}</strong>
                    <p className="profile__description">{elem.description}</p>
                  </div>
                </ContentModalProfile>
              ))}
          </ContentModal>
        </BackDrop>
      )}
    </AnimatePresence>
  );
}
