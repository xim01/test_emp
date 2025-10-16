"use client";
import React from "react";

import { useResponsive } from "../components/ResponsiveContext";
import BuyText from "./components/Desktop/BuyText/BuyText";
import BuySteps from "./components/Desktop/BuyStep/BuySteps";
import BuyForm from "./components/Desktop/BuyForm/BuyForm";

import BuyTextM from "./components/Mobile/BuyText/BuyText";
// import BuyStepsM from "./components/Mobile/BuyStep/BuySteps";
import BuyFormM from "./components/Mobile/BuyForm/BuyForm";

const Buy: React.FC = () => {
  const { isDesktop, isMobile, mounted } = useResponsive();

  if (!mounted) return <section id="buy" />;

  return (
    <>
      {isDesktop && (
        <section id="buy">
          <BuyText />
          <BuySteps />
          <BuyForm />
        </section>
      )}

      {isMobile && (
        <section id="buy">
          <BuyTextM />
          {/* <BuyStepsM /> */}
          <BuyFormM />
        </section>
      )}
    </>
  );
};

export default Buy;
