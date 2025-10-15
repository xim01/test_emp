import { useState } from "react";

export default function Select() {
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Выберите тип системы");

  const options: string[] = [
    "CRM система",
    "Сайт-визитка",
    "Интернет-магазин",
    "Мобильное приложение",
    "Корпоративный портал",
  ];

  return (
    <div className="select">
      <div className={`select_header ${selectOpen ? "open" : ""}`} onClick={() => setSelectOpen(!selectOpen)}>
        {selectedOption}
        <span className="select_arrow"></span>
      </div>

      {selectOpen && (
        <ul className="select_options">
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
