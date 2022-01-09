import React from "react";

// COMPONENTS
import TitleSection from "../TitleSection";
import { BtnSecondary } from "../Buttons";

// STYLES
import { ContainerSubscription } from "./style";

export default function Subscription() {
  return (
    <ContainerSubscription>
      <TitleSection title="Inscrição" />
      <p className="sub__description">
        A inscrição ficará disponível até o dia
        <strong className="sub__strong"> 10 de janeiro de 2022</strong>, clique
        no botão abaixo para realizar sua inscrição.
      </p>
      <BtnSecondary title="IR PARA INSCRIÇÃO" />
    </ContainerSubscription>
  );
}
