import React, { FC, ReactNode } from "react";

interface WalletItemProps {
  text: string;
  icon: ReactNode;
}

const WalletItem: FC<WalletItemProps> = ({ text, icon }) => {
  return (
    <div className="wallets_item">
      <div className="wallets_item_icon">
        <a href="#">{icon}</a>
      </div>
      <div className="wallets_item_text">
        <a href="#">{text}</a>
      </div>
    </div>
  );
};

export default WalletItem;
