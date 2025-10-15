import styles from "./Contacts.module.css";
import ContactsItems from "./ContactsItems";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <ContactsItems />
    </div>
  );
}
