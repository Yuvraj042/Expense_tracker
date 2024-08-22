import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transacton }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transacton.amount < 0 ? "-" : "+";
  return (
    <li className={transacton.amount < 0 ? "minus" : "plus"}>
      {transacton.text}
      <span>
        {sign}${Math.abs(transacton.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transacton.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
