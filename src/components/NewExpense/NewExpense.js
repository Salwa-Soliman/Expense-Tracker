import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [formOpened, setFormOpened] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const openFormHandler = (_) => setFormOpened(true);
  const closeFormHandler = (_) => setFormOpened(false);

  return (
    <div className="new-expense">
      {!formOpened && (
        <button onClick={openFormHandler}>Add New Expense</button>
      )}
      {formOpened && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
