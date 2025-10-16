"use client";
import { useResponsive } from "../../ResponsiveContext";
import styles from "./Footer.module.css";
import Contacts from "./components/Contacts/Contacts";
import Wallet from "./components/Wallet/Wallet";

export default function Footer() {
  const { isDesktop, isMobile, mounted } = useResponsive();
  if (!mounted) return <footer />;

  return (
    <>
      {isDesktop && (
        <footer className={styles.footer}>
          <div className={`${styles.copyright} ${styles.footerItem}`}>© 2018 «LoremIpsum.net» Все права защищены.</div>
          <div className={styles.footerItem}>
            <Wallet />
          </div>
          <div className={styles.footerItem}>
            <Contacts />
          </div>
        </footer>
      )}
      {isMobile && (
        <footer>
          <div className={`${styles.copyrightM} `}>© 2018 «LoremIpsum.net» Все права защищены.</div>
          <div className={`${styles.footerMobileItem} `}>
            <Wallet />
          </div>
          <div className={`${styles.footerMobileItem} `}>
            <Contacts />
          </div>
        </footer>
      )}
    </>
  );
}
