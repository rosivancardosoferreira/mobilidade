import React from "react";
import { ButtonContainer } from "./style";

interface PropsBtn {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function BtnPrimary({ title, onClick, type }: PropsBtn) {
  return (
    <ButtonContainer
      type={type || "button"}
      onClick={onClick}
      typeBtn="primary"
      className="down btn__primary"
    >
      {title}
    </ButtonContainer>
  );
}

export function BtnSecondary({ title, onClick, type }: PropsBtn) {
  return (
    <ButtonContainer
      type={type || "button"}
      onClick={onClick}
      typeBtn="secondary"
      className="down btn__secondary"
    >
      {title}
    </ButtonContainer>
  );
}
