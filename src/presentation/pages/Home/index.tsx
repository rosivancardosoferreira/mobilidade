import React from "react";

// ASSETS

// STYLES

// COMPONENTS
import Footer from "presentation/components/Footer";
import BannerInfo from "presentation/components/BannerInfo";
import AboutEvent from "presentation/components/AboutEvent";
import Subscription from "presentation/components/Subscription";
import Schedule from "presentation/components/Schedule";
import MaterialDownload from "presentation/components/MaterialDownload";

export default function Home() {
  return (
    <>
      <BannerInfo />
      <AboutEvent />
      <Subscription />
      <Schedule />
      <MaterialDownload />
      <Footer />
    </>
  );
}
