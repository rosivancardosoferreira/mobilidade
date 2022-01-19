import React from "react";

// COMPONENTS
import { LinkPrimary } from "presentation/components/Buttons/Links";

// ASSETS
import Icons from "utils/icons";

// STYLES
import { ContainerItem } from "./style";
import { motion } from "framer-motion";

interface ItemDownloadProps {
  title: string;
  description: string;
  link: string;
  i: number;
}

// COMPONENTS
export default function ItemDownload({
  title,
  description,
  link,
  i
}: ItemDownloadProps) {
  return (
    <ContainerItem
      as={motion.section}
      viewport={{ once: true }}
      initial={{
        opacity: 0,
        translateY: i % 2 === 0 ? -60 : 60
      }}
      whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <article className="download__item">
        {Icons.materialDownload}
        <p className="item__material__title">{title}</p>
        <p className="item__material__description">{description}</p>
      </article>
      <LinkPrimary link={link} title="Download" download />
    </ContainerItem>
  );
}
