import React, { FC, ReactNode, useState } from "react";
import styles from "./Wallet.module.css";
import { useResponsive } from "@/app/components/ResponsiveContext";

interface WalletItemProps {
  text: string;
  icon: ReactNode;
}

const WalletItem: FC<WalletItemProps> = ({ text, icon }) => {
  const { isDesktop, isMobile, mounted } = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!mounted) return <div />;

  return (
    <>
      {isDesktop && (
        <div className={styles.item}>
          <div className={styles.icon}>
            <a href="#">{icon}</a>
          </div>
          <div className={styles.text}>
            <a href="#">{text}</a>
          </div>
        </div>
      )}

      {isMobile && (
        <div className={styles.itemM}>
          <div className={styles.icon}>
            <a href="#">{icon}</a>
          </div>
          <div className={styles.text}>
            <a href="#">{text}</a>
          </div>
        </div>
      )}
    </>
  );
};

export default WalletItem;
