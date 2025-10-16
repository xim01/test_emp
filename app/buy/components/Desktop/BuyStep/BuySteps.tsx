import React, { FC } from "react";
import styles from "./BuySteps.module.css";
import BuyStep from "./BuyStep";

type StepIconType = "search" | "money" | "file" | "percent" | "message";

interface Step {
  type?: string;
  text: string;
  icon: StepIconType;
}

const BuySteps: FC = () => {
  const steps: Step[] = [
    { text: "Lorem ipsum dolorsit amet", icon: "search" },
    { text: "Сonsecteturadipiscing elit", icon: "percent" },
    { text: "Sed do eiusmod tempor", icon: "file" },
    { text: "Esse cillum dolore eu fugiat", icon: "message" },
    { text: "Excepteur sint occaecat cupidatat non proident", icon: "money" },
  ];

  return (
    <div className={styles.buySteps}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <BuyStep text={step.text} icon={step.icon} />
          {index < steps.length - 1 && (
            <div className={styles.betweenDots}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={styles.dot}></span>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BuySteps;
