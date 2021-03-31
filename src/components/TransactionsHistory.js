import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { SingleTransaction } from "./SingleTransaction";

export const TransactionsHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="box transactions-history">
      <h3 className="box__title transactions-history__title">
        Transaction history:
      </h3>

      <ul className="transactions-history__list" id="transactions-list">
        {transactions.map((transaction) => (
          <SingleTransaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
