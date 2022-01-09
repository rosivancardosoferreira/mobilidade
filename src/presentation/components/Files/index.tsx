import React from "react";

// ASSETS
import Images from "utils/images";

// STYLES
import { ContainerPartners } from "./style";

// COMPONENTS
import TitleSection from "../TitleSection";

export default function Partners() {
  const fakePartners = [
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    }
  ];

  return (
    <ContainerPartners>
      <TitleSection title="Parceiros" />
    </ContainerPartners>
  );
}
