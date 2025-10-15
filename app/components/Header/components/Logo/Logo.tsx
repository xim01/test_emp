import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <a href="logo">
      <span id={styles.logo_text}>
        LoremIpsum.<span className="blue_text">Net</span>
      </span>
    </a>
  );
}
