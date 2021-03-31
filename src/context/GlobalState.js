import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  editTransaction: undefined,
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function addTransaction(transaction) {
    dispatch({
      type: "add",
      payload: transaction,
    });
  }

  function updateTransaction(id) {
    dispatch({
      type: "update",
      payload: id,
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "delete",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        editTransaction: state.editTransaction,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
