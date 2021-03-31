import React from "react";
import walletIcon from "../assets/wallet-icon.png";

export const Header = () => {
  return (
    <header className="header">
      <img className="header__icon" src={walletIcon} alt="wallet-icon" />
      <h1 className="header__title">e-wallet</h1>
    </header>
  );
};
