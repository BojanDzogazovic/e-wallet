export default (state, action) => {
  switch (action.type) {
    case "add":
      let finalArr;
      let index;
      let counter = 0;

      state.transactions.forEach((transaction) => {
        if (transaction.id == action.payload.id) {
          index = state.transactions.indexOf(transaction);
          counter++;
        }
      });
      if (counter > 0) {
        state.transactions[index] = action.payload;
        finalArr = [...state.transactions];
        state.editTransaction = undefined;
      } else if (counter == 0) {
        finalArr = [...state.transactions, action.payload];
      }

      return {
        ...state,
        transactions: finalArr,
      };
    case "update":
      return {
        ...state,
        editTransaction: state.transactions[action.payload],
      };
    case "delete":
      let filteredArr = [];

      for (let i = 0; i < state.transactions.length; i++) {
        state.transactions[i].id = i;
      }

      for (let i = 0; i < state.transactions.length; i++) {
        if (state.transactions[i].id !== action.payload) {
          filteredArr.push(state.transactions[i]);
        }
      }

      for (let i = 0; i < filteredArr.length; i++) {
        filteredArr[i].id = i;
      }

      return {
        ...state,
        transactions: filteredArr,
      };
    default:
      return state;
  }
};
