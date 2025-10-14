export default function ContactsItem({ text, icon, classTag = `` }) {
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
}
