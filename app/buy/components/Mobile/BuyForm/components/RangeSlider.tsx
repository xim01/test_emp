import { ChangeEvent, useState } from "react";
import styles from "./RangeSlider.module.css";

export default function RangeSlider() {
  const [percent, setPercent] = useState(86);
  const handlePercentChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPercent(Number(e.target.value));
  };

  return (
    <div className={styles.sliderRow}>
      <div className={styles.sliderTextWrapper}>
        <div className={styles.sliderText}>Sed ut perspiciatis, unde omnis iste natus</div>
        <div className={styles.percentValue}>{percent}%</div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={percent}
        onChange={handlePercentChange}
        className={styles.percentRange}
      />
    </div>
  );
}
