import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState('');

  const expenseTitleHandler = (e) => {
    setExpenseTitle(e.target.value);
  };

  const expenseAmountHandler = (e) => {
    setExpenseAmount(e.target.value);
  };

  const expenseDateHandler = (e) => {
    setExpenseDate(e.target.value);
  };

  const expenseFormHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };
    console.log(expenseData);
    setExpenseTitle('');
    setExpenseAmount('');
    setExpenseDate('');
  };

  return (
    <form onSubmit={expenseFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseTitle}
            onChange={expenseTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseAmount}
            onChange={expenseAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={expenseDate}
            onChange={expenseDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
