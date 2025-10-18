import Link from "next/link";
import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Перейти на главную">
      <span id={styles.logo_text}>
        LoremIpsum.<span className="blue_text">Net</span>
      </span>
    </Link>
  );
}
