import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const BalanceSheet = () => {
  const { transactions } = useContext(GlobalContext);
  const eurToBamRate = 1.96;
  const usdToBamRate = 1.66;
  let balance = 0;
  let incomes = 0;
  let expenses = 0;

  transactions.forEach((transaction) => {
    if (transaction.currency === "EUR") {
      balance += parseFloat(transaction.amount) * eurToBamRate;

      if (transaction.amount > 0) {
        incomes += parseFloat(transaction.amount) * eurToBamRate;
      } else {
        expenses += parseFloat(transaction.amount) * eurToBamRate;
      }
    } else if (transaction.currency === "USD") {
      balance += parseFloat(transaction.amount) * usdToBamRate;

      if (transaction.amount > 0) {
        incomes += parseFloat(transaction.amount) * usdToBamRate;
      } else {
        expenses += parseFloat(transaction.amount) * usdToBamRate;
      }
    } else if (transaction.currency === "BAM") {
      balance += parseFloat(transaction.amount);

      if (transaction.amount > 0) {
        incomes += parseFloat(transaction.amount);
      } else {
        expenses += parseFloat(transaction.amount);
      }
    }
  });

  return (
    <div className="box balance-sheet">
      <div className="balance-sheet__main">
        <h3 className="box__title balance-sheet__title">Account balance:</h3>
        <h2 className="balance-sheet__amount">{balance.toFixed(2)} BAM</h2>
      </div>
      <div className="balance-sheet__info">
        <div className="balance-sheet__box">
          <p className="balance-sheet__subtitle">INCOMES</p>
          <p className="incomes">{incomes.toFixed(2)} BAM</p>
        </div>
        <div className="balance-sheet__border"></div>
        <div className="balance-sheet__box">
          <p className="balance-sheet__subtitle">EXPENSES</p>
          <p className="expenses">{expenses.toFixed(2)} BAM</p>
        </div>
      </div>
    </div>
  );
};
