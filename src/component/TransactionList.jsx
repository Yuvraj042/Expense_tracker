import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transacton) => (
          <Transaction key={transacton.id} transacton={transacton} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
