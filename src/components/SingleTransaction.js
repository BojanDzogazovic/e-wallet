import React, { useContext } from "react";
import arrowPlus from "../assets/arrow-plus.svg";
import arrowMinus from "../assets/arrow-minus.svg";
import { GlobalContext } from "../context/GlobalState";

export const SingleTransaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const accountAction = transaction.amount < 0 ? "expenses" : "incomes";
  const amountClasses = `transactions-history__amount ${accountAction}`;
  const arrow = transaction.amount < 0 ? arrowMinus : arrowPlus;

  const { deleteTransaction } = useContext(GlobalContext);
  const { editTransaction, updateTransaction, transactions } = useContext(
    GlobalContext
  );

  return (
    <li className="transactions-history__item">
      <span className="transactions-history__date">{transaction.date}</span>
      <span className="transactions-history__description">
        {transaction.description}
      </span>
      <span className={amountClasses}>
        {sign}
        {Math.abs(transaction.amount)}
        {" " + transaction.currency}
        <img className="transactions-history__img" src={arrow} alt="arrow" />
      </span>
      <div className="transactions-history__btn-box">
        <button
          className="transactions-history__btn transactions-history__btn--update"
          id="updateBtn"
          onClick={() => {
            updateTransaction(transaction.id);
          }}
        >
          UPDATE
        </button>
        <button
          className="transactions-history__btn transactions-history__btn--delete"
          id="deleteBtn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          DELETE
        </button>
      </div>
    </li>
  );
};
