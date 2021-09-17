import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enterTitle, setEnteredTitle] = useState("");
  const [enterAmount, setEnteredAmount] = useState("");
  const [enterDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const cancelFormHandler = (e)=>{
        e.preventDefault();
        props.onCancelForm();
  }


  const submitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
          title : enterTitle,
          amount: +enterAmount,
          date: new Date(enterDate),
      }
      
      props.onSaveExpenseData(expenseData)
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      props.onCancelForm();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            className=""
            onChange={titleChangeHandler}
            value={enterTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            className=""
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            className=""
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enterDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={cancelFormHandler}>Cancel</button>
      </div>
    </form>
  );
}
