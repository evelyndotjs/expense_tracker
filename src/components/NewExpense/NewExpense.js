import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {

  function saveExpenseDataHandler(enteredExpenseData){
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
  }
  
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>;
    </div>
  );
}

export default NewExpense;
