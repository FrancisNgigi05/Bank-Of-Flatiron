import React, { useState } from 'react';
import TRANSACTION_URL from './url';
import { v4 as uuidv4 } from 'uuid';
// import Categories from './Categories';

function TransactionForm( { onTaskFormSubmit, categories } ) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Income");
  const [amount, setAmount] = useState("0");
  const[date, setDate] = useState("2020-01-01");

  const categoriesDisplayed = categories.map((category, index) => {
        return (
            <option key={index} value={category}>{category}</option>
        )
    })

  const handleSubmit = ((e) => {
    e.preventDefault();

    const newTransactionObj = {
      id: uuidv4(),
      description: description,
      category: category,
      amount: amount,
      date: date,
    };

    fetch(TRANSACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransactionObj)
    })
      .then((r) => r.json())
      .then((data) => onTaskFormSubmit(data))
  })

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input name='description' type='text' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Category:
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categoriesDisplayed}
        </select>
      </label>
      <label>
        Amount:
        <input name='amount' type='text' value={amount} onChange={(e) => setAmount(e.target.value)}/>
      </label>
      <label>
        Date:
        <input name='date' type='text' value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <input type="submit" value="Add Transaction" />
    </form>
  )
}

export default TransactionForm
