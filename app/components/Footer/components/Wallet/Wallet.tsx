import styles from "./Wallet.module.css";
import WalletItems from "./WalletItems";

export default function Wallet() {
  return (
    <div className={styles.wallets}>
      <WalletItems />
    </div>
  );
}
