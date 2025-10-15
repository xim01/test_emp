import React, { FC, ReactNode } from "react";
import styles from "./Contacts.module.css";

interface ContactsItemProps {
  text: string;
  icon: ReactNode;
  classTag?: string;
}

const ContactsItem: FC<ContactsItemProps> = ({ text, icon, classTag }) => {
  return (
    <div className={`${styles.item} ${classTag ? styles[classTag] : ""}`}>
      <div className={styles.icon}>
        <a href="#">{icon}</a>
      </div>
      <div className={styles.text}>
        <a href="#">{text}</a>
      </div>
    </div>
  );
};

export default ContactsItem;
