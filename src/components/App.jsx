import React, { useState, useEffect } from 'react'
import TransactionList from './TransactionList'
import TransactionForm from './TransactionForm'
import TRANSACTION_URL from './url'
function App() {
  const [transaction, setTransactions] = useState([]);
  // Array.from(new Set(transactions.map(transaction => transaction.category)))

  const sortTransactions = (transactions) => {
    return transactions.sort((a, b) => a.description.localeCompare(b.description));
  };

  useEffect(() => {
    fetch(TRANSACTION_URL)
      .then((r) => r.json())
      .then((data) => {
        const sortedData = sortTransactions(data);
        setTransactions(sortedData);
      })
  }, []);
  // console.log(transaction);
  const categories = Array.from(new Set(transaction.map((t) => t.category)));
  // console.log(category);



  const onTaskFormSubmit = ((transactionObj) => {
    const updatedTransactions = [...transaction, transactionObj];
    const sortedTransactions = sortTransactions(updatedTransactions)
    setTransactions(sortedTransactions);
  })

  const handleDelete = (id) => {
    const items = transaction.filter((t) => t.id !== id);
    const sortedItems = sortTransactions(items);
    setTransactions(sortedItems);
  }

  return (
    <div>
      <TransactionForm onTaskFormSubmit={onTaskFormSubmit} categories={categories} />
      <TransactionList items={transaction} handleDelete={handleDelete} />
    </div>
  )
}

export default App;
