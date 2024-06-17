import React from 'react'
import TransactionItem from './TransactionTable'
import TransactionTable from './TransactionTable'

function TransactionList({ items }) {

  return (
    <div>
      
      <TransactionTable items={items}/>
    </div>
  )
}

export default TransactionList
