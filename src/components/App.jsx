import React, { useState, useEffect } from 'react'
import TransactionList from './TransactionList'
import TransactionForm from './TransactionForm'
import TRANSACTION_URL from './url'
function App() {
  const [transaction, setTransactions] = useState([]);
  // Array.from(new Set(transactions.map(transaction => transaction.category)))


  useEffect(() => {
    fetch(TRANSACTION_URL)
      .then((r) => r.json())
      .then((data) => setTransactions(data))
  }, []);
  // console.log(transaction);
  const categories = Array.from(new Set(transaction.map((t) => t.category)));
  // console.log(category);

  const onTaskFormSubmit = ((transactionObj) => {
    setTransactions([...transaction, transactionObj]);
  })


  return (
    <div>
      <TransactionForm onTaskFormSubmit={onTaskFormSubmit} categories={categories} />
      <TransactionList items={transaction} />
    </div>
  )
}

export default App;
