import React, { FC, ReactNode } from "react";

interface ContactsItemProps {
  text: string;
  icon: ReactNode;
  classTag?: string;
}

const ContactsItem: FC<ContactsItemProps> = ({ text, icon, classTag = "" }) => {
  return (
    <div className={`contacts_item ${classTag}`}>
      <div className="contacts_item_icon">
        <a href="#">{icon}</a>
      </div>
      <div className="contacts_item_text">
        <a href="#">{text}</a>
      </div>
    </div>
  );
};

export default ContactsItem;
