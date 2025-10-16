import { useResponsive } from "@/app/components/ResponsiveContext";
import styles from "./Contacts.module.css";
import ContactsItems from "./ContactsItems";
import { useState } from "react";

export default function Contacts() {
  const { isDesktop, isMobile, mounted } = useResponsive();

  if (!mounted) return <div />;

  return (
    <>
      {isDesktop && (
        <div className={styles.contacts}>
          <ContactsItems />
        </div>
      )}

      {isMobile && (
        <div className={styles.contactsM}>
          <ContactsItems />
        </div>
      )}
    </>
  );
}
