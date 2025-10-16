import React, { FC, ReactNode } from "react";
import styles from "./Contacts.module.css";
import { useResponsive } from "@/app/components/ResponsiveContext";

interface ContactsItemProps {
  text: string;
  icon: ReactNode;
  classTag?: string;
}

const ContactsItem: FC<ContactsItemProps> = ({ text, icon, classTag }) => {
  const { isDesktop, isMobile, mounted } = useResponsive();

  if (!mounted) return <div />;

  return (
    <>
      {isDesktop && (
        <div className={`${styles.item} ${classTag ? styles[classTag] : ""}`}>
          <div className={styles.icon}>
            <a href="#">{icon}</a>
          </div>
          <div className={styles.text}>
            <a href="#">{text}</a>
          </div>
        </div>
      )}

      {isMobile && (
        <div className={`${styles.itemM} ${classTag ? styles[classTag] : ""}`}>
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

export default ContactsItem;
