import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { RootState } from "./state/reducers";

function App() {
  const state = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="input">{state}</h1>
        <button onClick={() => depositMoney(1000)} className="buttonDeposit">
          Deposit
        </button>
        <button onClick={() => withdrawMoney(1000)} className="buttonWithdraw">
          Withdraw
        </button>
        <button onClick={() => bankrupt()} className="buttonBankrupt">
          Bankrupt
        </button>
      </div>
    </div>
  );
}

export default App;
