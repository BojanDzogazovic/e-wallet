import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

export const NewTransaction = () => {
  const [exists, setExists] = useState(false);
  const [id, setId] = useState(0);
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { transactions, addTransaction, editTransaction } = useContext(
    GlobalContext
  );

  let radios = document.querySelectorAll("input[type=radio]");

  useEffect(() => {
    if (editTransaction !== undefined) {
      radios.forEach((radio) => {
        if (radio.value == editTransaction.currency) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
      });

      setId(editTransaction.id);
      setExists(true);
      setCurrency(editTransaction.currency);
      setAmount(editTransaction.amount);
      setDescription(editTransaction.description);
    }
  }, [editTransaction]);

  const onSubmit = (e) => {
    e.preventDefault();

    let today = new Date();
    let currentTime =
      today.getDate() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();

    const newTransaction = {
      id: exists ? editTransaction.id : transactions.length,
      date: currentTime,
      description: description,
      amount: amount,
      currency: currency ? currency : "BAM",
    };

    addTransaction(newTransaction);

    setCurrency("BAM");
    setAmount("");
    setDescription("");
    setExists(false);

    radios.forEach((radio) => {
      radio.checked = false;
    });
  };

  return (
    <div className="box transaction">
      <h3 className="box__title transaction__title">Add new transaction:</h3>
      <form onSubmit={onSubmit}>
        <p className="transaction__currency-title">
          Currency*: <small>BAM is default currency.</small>
        </p>
        <div className="transaction__currency-box">
          <input
            type="radio"
            id="eur"
            name="currency"
            value="EUR"
            onChange={(e) => setCurrency(e.target.value)}
          />
          <label htmlFor="eur">EUR</label>
          <br />
          <input
            type="radio"
            id="usd"
            name="currency"
            value="USD"
            onChange={(e) => setCurrency(e.target.value)}
          />
          <label htmlFor="usd">USD</label>
        </div>
        <div className="transaction__info-box">
          <div>
            <label htmlFor="amount">Amount:</label>
            <br />
            <input
              type="text"
              name="amount"
              className="transaction__input"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <br />
            <input
              type="text"
              name="description"
              className="transaction__input"
              placeholder="Enter description of transfer..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button className="transaction__submit">Add New Transaction</button>
      </form>
    </div>
  );
};
