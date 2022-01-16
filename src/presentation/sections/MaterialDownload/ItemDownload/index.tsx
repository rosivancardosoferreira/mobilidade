import React from "react";
import Icons from "utils/icons";

// COMPONENTS
import { LinkPrimary } from "../../../components/Buttons/Links";

// STYLES
import { ContainerItem } from "./style";

interface ItemDownloadProps {
  title: string;
  description: string;
  link: string;
}

// COMPONENTS
export default function ItemDownload({
  title,
  description,
  link
}: ItemDownloadProps) {
  return (
    <ContainerItem>
      <article className="download__item">
        {Icons.materialDownload}
        <p className="item__material__title">{title}</p>
        <p className="item__material__description">{description}</p>
      </article>
      <LinkPrimary link={link} title="Download" download />
    </ContainerItem>
  );
}
