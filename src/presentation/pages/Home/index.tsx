import React from "react";

import { Header, Footer } from "presentation/sections";
import {
  AboutEvent,
  BannerInfo,
  MaterialDownload,
  Schedule,
  Subscription
} from "presentation/sections/home";

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
