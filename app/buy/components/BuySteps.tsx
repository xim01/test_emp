import React from "react";
import BuyStep from "./BuyStep";

export default function BuySteps() {
  const steps = [
    { type: "buy_step_first", text: "Lorem ipsum dolorsit amet", icon: `search` },
    { text: "Сonsecteturadipiscing elit", icon: `percent` },
    { text: "Sed do eiusmod tempor", icon: `file` },
    { text: "Esse cillum dolore eu fugiat", icon: `message` },
    { type: "buy_step_last", text: "Excepteur sint occaecat cupidatat non proident", icon: `money` },
  ];
  return (
    <div id="buy_steps">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <BuyStep {...step} />
          {index >= 0 && index < steps.length - 1 && (
            <div className="buy_step_between_dots">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="buy_step_dot"></span>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
