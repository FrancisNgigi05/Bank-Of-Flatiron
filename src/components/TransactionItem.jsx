import React from 'react'

function TransactionItem( { description, category, amount, date } ) {
  return (
    <tr>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>{date}</td>
    </tr>
  )
}

export default TransactionItem
