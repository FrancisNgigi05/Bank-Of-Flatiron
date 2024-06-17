import React from 'react'
import TransactionItem from './TransactionTable'
import TransactionTable from './TransactionTable'

function TransactionList({ items, handleDelete }) {

  return (
    <div>
      <TransactionTable items={items} handleDelete={handleDelete} />
    </div>
  )
}

export default TransactionList
