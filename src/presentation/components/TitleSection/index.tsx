import { motion } from "framer-motion";
import React from "react";
import { animation } from "utils/animations";

// STYLES
import { ContainerTitleSection } from "./style";

interface TitleSectionProps {
  title: string;
}
export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <ContainerTitleSection
      as={motion.section}
      viewport={{ once: true }}
      initial={animation.fadeY.initial}
      whileInView={animation.fadeY.whileInView}
      transition={animation.fadeY.transition05}
    >
      <h2 className="title__h2">
        {title}
        <div className="title__infinite"></div>
      </h2>
    </ContainerTitleSection>
  );
}
