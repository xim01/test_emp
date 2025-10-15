import Contacts from "./components/Contacts/Contacts";
import Wallet from "./components/Wallet/Wallet";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="copyright footer_item">© 2018 «LoremIpsum.net» Все права защищены.</div>
      <Wallet />
      <Contacts />
    </footer>
  );
}
