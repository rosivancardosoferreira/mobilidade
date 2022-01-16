import React from "react";

// ASSETS
import Materiais from "utils/materiais";

// COMPONENTS
import TitleSection from "presentation/components/TitleSection";
import ItemDownload from "./ItemDownload";

// STYLES
import { ContainerMaterialDownload, ContainerItemsMap } from "./style";

export function MaterialDownload() {
  return (
    <ContainerMaterialDownload>
      <TitleSection title="Materiais disponíveis" />
      <ContainerItemsMap>
        {Materiais.map((elem, id) => {
          return (
            <ItemDownload
              title={elem.title}
              link={elem.src}
              description={elem.description}
              key={id}
            />
          );
        })}
      </ContainerItemsMap>
    </ContainerMaterialDownload>
  );
}
