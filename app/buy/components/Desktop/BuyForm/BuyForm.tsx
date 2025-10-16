import styles from "./BuyForm.module.css";
import FileUpload from "./components/FileUpload";
import RangeSlider from "./components/RangeSlider";
import Select from "./components/Select";

export default function BuyForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Отправлено");
  };

  return (
    <div className={styles.buyFormWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.buyFormRow}>
          <Select />
          <input type="email" name="email" placeholder="Ваш e-mail" required className={styles.input} />
          <input type="text" name="name" placeholder="Ваше имя" required className={styles.input} />
        </div>

        <div className={styles.buyFormRow2}>
          <RangeSlider />
          <FileUpload />
        </div>

        <div className={styles.buyFormButtonWrapper}>
          <button className={styles.blueButton} type="submit">
            ОТПРАВИТЬ
          </button>
        </div>
      </form>
    </div>
  );
}
