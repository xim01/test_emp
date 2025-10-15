import React, { FC, ReactNode } from "react";
import styles from "./Wallet.module.css";

interface WalletItemProps {
  text: string;
  icon: ReactNode;
}

const WalletItem: FC<WalletItemProps> = ({ text, icon }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <a href="#">{icon}</a>
      </div>
      <div className={styles.text}>
        <a href="#">{text}</a>
      </div>
    </div>
  );
};

export default WalletItem;
