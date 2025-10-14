"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css"; // подключаем модуль

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href="/business" className={`${styles.link} ${pathname === "/business" ? styles.active : ""}`}>
            Бизнес
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}>
            O нас
          </Link>
        </li>
        <li>
          <Link href="/price" className={`${styles.link} ${pathname === "/price" ? styles.active : ""}`}>
            Цены
          </Link>
        </li>
        <li>
          <Link href="/buy" className={`${styles.link} ${pathname === "/buy" ? styles.active : ""}`}>
            Оформить заказ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
