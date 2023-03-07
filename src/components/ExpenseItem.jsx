import React from 'react';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = ({ id, title, amount, date }) => {
  return (
    <div className="expense-item" id={id}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
