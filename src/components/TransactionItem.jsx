import React from 'react';
import TRANSACTION_URL from './url';

function TransactionItem( { identify, description, category, amount, date, handleDelete } ) {

  const onDeleteTransaction = () => {
    // fetch(`${TRANSACTION_URL}/${id}`
    fetch(`${TRANSACTION_URL}/${identify}`, {
      method: "DELETE",
    })

    handleDelete(identify);
  }

  return (
    <tr>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>{date}</td>
        <td>
          <button onClick={onDeleteTransaction}>x</button>
        </td>
    </tr>
  )
}

export default TransactionItem
