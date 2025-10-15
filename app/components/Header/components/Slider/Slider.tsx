import styles from "./Slider.module.css";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.content}>
        <p className={styles.title}>
          <span className={styles.blueText}>LOREM IPSUM</span> DOLOR SIT AMETCONSECTETUR{" "}
          <span className={styles.blueText}>ADIPISCING</span>
        </p>

        <div className={styles.body}>
          <span className={styles.bold}>At vero eos et accusamus et odio dignissimos ducimus!</span>
          <ul>
            <li>Totam rem aperiam eaque ipsa</li>
            <li>Sit voluptatem accusantium doloremque laudantium</li>
            <li>Sed ut perspiciatis, unde omnis iste natus error</li>
          </ul>
        </div>

        <div className={styles.buttons}>
          <button className={styles.blueBtn}>заказать</button>
          <button className={styles.whiteBtn}>подробнее</button>
        </div>
      </div>
    </div>
  );
}
