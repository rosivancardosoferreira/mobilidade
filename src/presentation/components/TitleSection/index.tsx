import React from "react";

// STYLES
import { ContainerTitleSection } from "./style";

interface TitleSectionProps {
  title: string;
}
export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <ContainerTitleSection>
      <h1 className="title__h1">
        {title}
        <div className="title__infinite"></div>
      </h1>
    </ContainerTitleSection>
  );
}
