import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense(props) {
  const [isShowForm, setIsShowForm] = useState(false);

  const saveExpenseDataHandler = (data) => {
    const expense = {
      ...data,
      id: Math.random().toString(),
    };

    console.log(expense);
    props.onAddExpense(expense);
  };

  const cancelFormHandler = (e) => {
    setIsShowForm(false);
  };
  const showFormHandler = (e) => {
    setIsShowForm(true);
  };

  return (
    <div className="new-expense">
      {isShowForm === false ? (
        <button onClick={showFormHandler}>Add Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelForm={cancelFormHandler}
        />
      )}
    </div>
  );
}
