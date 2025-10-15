"use client";
import React, { FC } from "react";
import BuyText from "./components/BuyText/BuyText";
import BuySteps from "./components/BuyStep/BuySteps";
import BuyForm from "./components/BuyForm/BuyForm";

const Buy: FC = () => {
  return (
    <section id="buy">
      <BuyText />
      <BuySteps />
      <BuyForm />
    </section>
  );
};

export default Buy;
