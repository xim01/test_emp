import { ChangeEvent, useState } from "react";

export default function RangeSlider() {
  const [percent, setPercent] = useState<number>(86);
  const handlePercentChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPercent(Number(e.target.value));
  };

  return (
    <div className="slider-row">
      <div className="slider-text-wrapper">
        <div className="slider-text">Sed ut perspiciatis, unde omnis iste natus</div>
        <div id="percentValue">{percent}%</div>
      </div>

      <input type="range" min="0" max="100" value={percent} onChange={handlePercentChange} id="percentRange" />
    </div>
  );
}
