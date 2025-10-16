import { useResponsive } from "@/app/components/ResponsiveContext";
import styles from "./Wallet.module.css";
import WalletItems from "./WalletItems";
import { useState } from "react";

export default function Wallet() {
  const { isDesktop, isMobile, mounted } = useResponsive();

  if (!mounted) return <div />;

  return (
    <>
      {isDesktop && (
        <div className={styles.wallets}>
          <WalletItems />
        </div>
      )}

      {isMobile && (
        <div className={styles.walletsMobile}>
          <WalletItems />
        </div>
      )}
    </>
  );
}
