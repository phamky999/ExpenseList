import React, {useState} from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
export default function Expenses(props) {

  const [filterYear,setFilterYear] = useState('2021');

  const filterChangeHandler = selectedYear =>{
    setFilterYear(selectedYear);
  }

  const filtredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selectedDefault={filterYear} />
      <ExpensesChart expenses={filtredExpenses} />
      <ExpensesList items={filtredExpenses} />
    </Card>
  );
}
