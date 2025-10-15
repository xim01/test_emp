import styles from "./Footer.module.css";
import Contacts from "./components/Contacts/Contacts";
import Wallet from "./components/Wallet/Wallet";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.copyright} ${styles.footerItem}`}>© 2018 «LoremIpsum.net» Все права защищены.</div>
      <div className={styles.footerItem}>
        <Wallet />
      </div>
      <div className={styles.footerItem}>
        <Contacts />
      </div>
    </footer>
  );
}
