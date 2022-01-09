import React from "react";

// COMPONENTS
import TitleSection from "../TitleSection";

// STYLES
import { ContainerAboutEvent } from "./style";

export default function AboutEvent() {
  return (
    <ContainerAboutEvent>
      <TitleSection title="Sobre o evento" />
      <p className="about__description">
        A mobilidade urbana é um tema de maior relevância para as cidades diante
        dos desafios frente ao aumento da motorização individual e falta de
        investimentos pelo poder público em alternativas de incentivo ao
        transporte não motorizado e a precariedade do transporte coletivo. Nas
        pequenas e médias cidades do amazonas a motocicleta é o transporte mais
        usado pela população para os deslocamentos inter e intraurbano e isso
        tem ocasionado inúmeros acidentes de trânsito com óbito e deixado
        vítimas sequeladas que geram altos custos para o Sistema Único de Saúde
        - SUS.
      </p>
    </ContainerAboutEvent>
  );
}
