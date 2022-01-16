import React from "react";
import { motion } from "framer-motion";

// COMPONENTS
import TitleSection from "../../components/TitleSection";
import { Example } from "./Example";

// STYLES
import { ContainerAboutEvent } from "./style";

export function AboutEvent() {
  return (
    <ContainerAboutEvent id="about" as={motion.section}>
      <TitleSection title="Sobre o evento" />
      <Example />
      <p className="about__description">
        O evento visa debater sobre um tema atual em todas as cidades, que é a
        mobilidade urbana. Essa parece ser uma alternativa para melhorar a
        qualidade de vida das pessoas, através da busca de soluções para os
        problemas de transporte e de políticas públicas voltadas para a
        construção de uma cidade para todos, acessível e justa, que possibilite
        aos moradores se deslocar para o trabalho, a escola e os passeios de
        forma segura, sem ter que passar horas no transporte público devido aos
        engarrafamentos nas grandes e médias cidades. Assim, discutir
        alternativas de mobilidade para a cidade de Itacoatiara-AM, onde ainda
        não há engarrafamentos, mas que já sofre as consequências de ser a
        cidade com a segunda maior frota de motocicletas do Estado, com 18.272
        motocicletas (DENATRAN, 2018) e ser líder em acidentes de trânsito
        fechando o ano de 2016 com 2.296 acidentes com motocicletas, onde o
        traumatismo craniano é a maior causa de mortes conforme dados do
        DATASUS. Diante desse quadro é que se propõe debater política pública de
        mobilidade urbana para esta cidade a fim de se evitar que no futuro ela
        possa vir a ter os mesmos problemas das grandes metrópoles quanto ao
        deslocamento inter e intraurbano, violência no trânsito e tantas outras
        mazelas urbanas.
      </p>
    </ContainerAboutEvent>
  );
}
