import ContactsItems from "./components/ContactsItems";
import WalletItems from "./components/WalletItems";

export default function Footer() {
  return (
    <footer>
      <div className="copyright footer_item">© 2018 «LoremIpsum.net» Все права защищены.</div>
      <div className="wallets footer_item">
        <WalletItems />
      </div>
      <div className="contacts footer_item">
        <ContactsItems />
      </div>
    </footer>
  );
}
