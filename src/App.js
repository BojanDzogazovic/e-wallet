import "./App.scss";
import { Header } from "./components/Header";
import { BalanceSheet } from "./components/BalanceSheet";
import { TransactionsHistory } from "./components/TransactionsHistory";
import { NewTransaction } from "./components/NewTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="container__box">
          <BalanceSheet />
          <NewTransaction />
        </div>
        <TransactionsHistory />
      </div>
    </GlobalProvider>
  );
}

export default App;
