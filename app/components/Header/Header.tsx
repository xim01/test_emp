import styles from "./Header.module.css";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import Slider from "./components/Slider/Slider";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.navWrapper}>
          <Nav />
        </div>
      </div>
      <Slider />
    </header>
  );
}
