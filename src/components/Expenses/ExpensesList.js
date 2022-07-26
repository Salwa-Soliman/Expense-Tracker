import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2>Couldn't find any expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <li key={item.id}>
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        </li>
      ))}
    </ul>
  );
}

export default ExpensesList;
