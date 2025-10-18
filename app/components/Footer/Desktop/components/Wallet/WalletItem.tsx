import React, { FC, ReactNode, useState } from "react";
import styles from "./Wallet.module.css";
import { useResponsive } from "@/app/components/ResponsiveContext";
import LinkCustom from "../LinkCustom";

interface WalletItemProps {
  text: string;
  icon: ReactNode;
  link: string;
  title: string;
}

const WalletItem: FC<WalletItemProps> = ({ text, icon, link, title }) => {
  const { isDesktop, isMobile, mounted } = useResponsive();

  if (!mounted) return <div />;

  const hrefIcon = (
    <LinkCustom link={link} title={title}>
      {icon}
    </LinkCustom>
  );
  const hrefA = (
    <LinkCustom link={link} title={title}>
      {text}
    </LinkCustom>
  );
  const blockLink = (
    <>
      <div className={styles.icon}>{hrefIcon}</div>
      <div className={styles.text}>{hrefA}</div>
    </>
  );
  return (
    <>
      {isDesktop && <div className={styles.item}>{blockLink}</div>}
      {isMobile && <div className={styles.itemM}>{blockLink}</div>}
    </>
  );
};

export default WalletItem;
