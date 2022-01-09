import React from "react";

// COMPONENTS
import TitleSection from "../TitleSection";
import { LinkSecondary } from "../Buttons/Links";

// STYLES
import { ContainerSubscription } from "./style";

export default function Subscription() {
  return (
    <ContainerSubscription>
      <TitleSection title="Inscrição" />
      <p className="sub__description">
        A inscrição ficará disponível de
        <strong className="sub__strong"> 06/01/2022</strong> a{" "}
        <strong className="sub__strong">18/01/2022</strong>, clique no botão
        abaixo para realizar sua inscrição.
      </p>
      <LinkSecondary
        link="https://www.even3.com.br/iiseminariodemobilidade/"
        blank
        title="IR PARA INSCRIÇÃO"
      />
    </ContainerSubscription>
  );
}
