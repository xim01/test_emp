import styles from "./BuyText.module.css";

export default function BuyText() {
  return (
    <div className={styles.buyHeaderText}>
      <h1>
        Оформление <span className="blue_text">Заказа</span>
      </h1>
      <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
    </div>
  );
}
