import React from "react";

// ASSETS

// STYLES
import { PresentationPage } from "./style";

// COMPONENTS
import Footer from "presentation/components/Footer";
import BannerInfo from "presentation/components/BannerInfo";
import AboutEvent from "presentation/components/AboutEvent";
import Subscription from "presentation/components/Subscription";
import Schedule from "presentation/components/Schedule";

export default function Home() {
  return (
    <>
      {/* <PresentationPage></PresentationPage> */}
      <BannerInfo />
      <AboutEvent />
      <Subscription />
      <Schedule />
      <Footer />
    </>
  );
}
