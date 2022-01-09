import React from "react";
import Icons from "utils/icons";

// COMPONENTS
import { LinkPrimary } from "../../Buttons/Links";

// STYLES
import { ContainerItem } from "./style";

// COMPONENTS
export default function ItemDownload() {
  return (
    <ContainerItem>
      {Icons.materialDownload}
      <p className="item__material__title">Pedalando na cidade</p>
      <p className="item__material__description">
        Brede descriçãodo material para download de no maximo 70 caracteres sas
      </p>
      <a href=""></a>

      <LinkPrimary
        link="https://www.youtube.com/watch?v=fNLvf0AIcRI"
        title="Download"
        blank
      />
    </ContainerItem>
  );
}
