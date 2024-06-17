import React, { useState } from 'react'
import TransactionItem from './TransactionItem'
import "../TransactionTable.css"
import Filter from './Filter';

function TransactionTable({ items, handleDelete }) {
  
  const [filterText, setFilterText] = useState("");

  const transactionsDisplayed = items.filter((item) => item.description.toLowerCase().includes(filterText.toLocaleLowerCase()));

  const transactions = transactionsDisplayed.map((item) => {
    return (
      <TransactionItem key={item.id} identify={item.id} description={item.description} category={item.category} amount={item.amount} date={item.date} handleDelete={handleDelete} />
    );
  });



  return (
    <div>
      <Filter filterText={filterText} setFilterText={setFilterText} />
      <table>
        <thead>
          <tr>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
            <th>DATE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {transactions}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable
