import React from "react";

import {
  Header,
  AboutEvent,
  BannerInfo,
  MaterialDownload,
  Schedule,
  Subscription,
  Footer
} from "presentation/sections";

export default function Home() {
  return (
    <>
      <Header />
      <BannerInfo />
      <AboutEvent />
      <Subscription />
      <Schedule />
      <MaterialDownload />
      <Footer />
    </>
  );
}
