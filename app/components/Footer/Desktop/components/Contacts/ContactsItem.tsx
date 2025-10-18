import React, { FC, ReactNode } from "react";
import styles from "./Contacts.module.css";
import { useResponsive } from "@/app/components/ResponsiveContext";
import LinkCustom from "../LinkCustom";

interface ContactsItemProps {
  text: string;
  icon: ReactNode;
  classTag?: string;
  type?: string;
  link: string;
  title: string;
}

const ContactsItem: FC<ContactsItemProps> = ({ text, icon, classTag, type = "default", link, title }) => {
  const { isDesktop, isMobile, mounted } = useResponsive();

  if (!mounted) return <div />;
  const hrefIcon = (
    <LinkCustom link={link} title={title} type={type}>
      {icon}
    </LinkCustom>
  );
  const hrefA = (
    <LinkCustom link={link} title={title} type={type}>
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
      {isDesktop && <div className={`${styles.item} ${classTag ? styles[classTag] : ""}`}>{blockLink}</div>}
      {isMobile && <div className={`${styles.itemM} ${classTag ? styles[classTag] : ""}`}>{blockLink}</div>}
    </>
  );
};

export default ContactsItem;
