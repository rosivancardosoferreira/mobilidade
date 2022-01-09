import React from "react";
import { LinkContainer } from "../style";

// ASSETS

interface PropsBtn {
  link: string;
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
  blank?: boolean;
}

export function LinkPrimary({ link, title, onClick, blank }: PropsBtn) {
  return (
    <LinkContainer
      href={link}
      target={blank ? "_blank" : "_self"}
      onClick={onClick}
      typeBtn="primary"
      className="down link__primary"
    >
      {title}
    </LinkContainer>
  );
}

export function BtnSecondary({ title, onClick, type }: PropsBtn) {
  return (
    <LinkContainer
      type={type || "button"}
      onClick={onClick}
      typeBtn="secondary"
      className="down btn__secondary"
    >
      {title}
    </LinkContainer>
  );
}
