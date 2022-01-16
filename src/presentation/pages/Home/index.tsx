import React from "react";

import { Header, Footer } from "presentation/sections";
import {
  AboutEvent,
  BannerInfo,
  MaterialDownload,
  Schedule,
  Subscription
} from "presentation/sections/home";
import { Form } from "presentation/sections/home/Form";

export default function Home() {
  return (
    <>
      <Header />
      <BannerInfo />
      <Form />
      <AboutEvent />
      <Subscription />
      <Schedule />
      <MaterialDownload />
      <Footer />
    </>
  );
}
