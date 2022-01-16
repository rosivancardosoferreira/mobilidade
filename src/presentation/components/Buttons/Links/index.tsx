import { motion } from "framer-motion";
import React from "react";
import { LinkContainer } from "../style";

interface PropsBtn {
  link: string;
  title: string;
  type?: "button" | "submit";
  blank?: boolean;
  download?: boolean;
}

export function LinkPrimary({ link, title, blank, download }: PropsBtn) {
  return download ? (
    <LinkContainer
      href={link}
      target={blank ? "_blank" : "_self"}
      typeBtn="primary"
      className="down link__primary"
      rel="noreferrer"
      download
    >
      {title}
    </LinkContainer>
  ) : (
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
      as={motion.a}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      {title}
    </LinkContainer>
  );
}
