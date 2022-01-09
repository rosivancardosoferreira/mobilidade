import React from "react";
import { LinkContainer } from "../style";

// ASSETS

interface PropsBtn {
  link: string;
  title: string;
  type?: "button" | "submit";
  blank?: boolean;
}

export function LinkPrimary({ link, title, blank }: PropsBtn) {
  return (
    <LinkContainer
      href={link}
      target={blank ? "_blank" : "_self"}
      typeBtn="primary"
      className="down link__primary"
      rel="noreferrer"
    >
      {title}
    </LinkContainer>
  );
}

export function LinkSecondary({ link, title, blank }: PropsBtn) {
  return (
    <LinkContainer
      href={link}
      target={blank ? "_blank" : "_self"}
      typeBtn="secondary"
      className="down btn__secondary"
      rel="noreferrer"
    >
      {title}
    </LinkContainer>
  );
}
