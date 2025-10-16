// Header.tsx
"use client";
import { useState } from "react";
import { useResponsive } from "../ResponsiveContext";
import styles from "./Header.module.css";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import Slider from "./components/Slider/Slider";

export default function Header() {
  const { isDesktop, isMobile, mounted } = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!mounted) return <header />;

  return (
    <>
      {isDesktop && (
        <>
          <header className={styles.header}>
            <div className={styles.menu}>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.navWrapper}>
                <Nav />
              </div>
            </div>
          </header>
          <Slider />
        </>
      )}

      {isMobile && (
        <>
          {/* фиксированная панель хедера */}
          <div className={styles.mobileHeader}>
            <Logo />
            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`}></span>
              <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`}></span>
              <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`}></span>
            </button>
          </div>

          {/* меню фиксированное */}
          {menuOpen && (
            <div className={styles.mobileNavWrapper}>
              <Nav />
            </div>
          )}
        </>
      )}
    </>
  );
}
