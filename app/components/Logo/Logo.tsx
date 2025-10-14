import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <span id={styles.logo_text}>
      LoremIpsum.<span className="blue">Net</span>
    </span>
  );
}
