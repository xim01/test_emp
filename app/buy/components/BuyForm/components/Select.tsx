import { useState } from "react";
import styles from "./Select.module.css";

export default function Select() {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Выберите тип системы");

  const options = ["CRM система", "Сайт-визитка", "Интернет-магазин", "Мобильное приложение", "Корпоративный портал"];

  return (
    <div className={styles.select}>
      <div
        className={`${styles.selectHeader} ${selectOpen ? styles.open : ""}`}
        onClick={() => setSelectOpen(!selectOpen)}
      >
        {selectedOption}
        <span className={styles.selectArrow}></span>
      </div>

      {selectOpen && (
        <ul className={styles.selectOptions}>
          {options.map((opt, i) => (
            <li
              key={i}
              onClick={() => {
                setSelectedOption(opt);
                setSelectOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
