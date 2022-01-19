import React from "react";
import { motion } from "framer-motion";

// COMPONENTS
import TitleSection from "presentation/components/TitleSection";
import { LinkSecondary } from "presentation/components/Buttons/Links";

// STYLES
import { ContainerSubscription } from "./style";
import { animation } from "utils/animations";

export function Subscription() {
  return (
    <ContainerSubscription id="subscription">
      <TitleSection title="Inscrição" />
      <motion.p
        className="sub__description"
        viewport={{ once: true }}
        initial={animation.fadeY.initial}
        whileInView={animation.fadeY.whileInView}
        transition={animation.fadeY.transition06}
      >
        A inscrição ficará disponível de
        <strong className="sub__strong">
          {" "}
          06/01/2022 às 00:00h do dia 26/01/2022
        </strong>
        , clique no botão abaixo para realizar sua inscrição.
      </motion.p>
      <LinkSecondary
        link="https://www.even3.com.br/iiseminariodemobilidade/"
        blank
        title="IR PARA INSCRIÇÃO"
      />
    </ContainerSubscription>
  );
}
