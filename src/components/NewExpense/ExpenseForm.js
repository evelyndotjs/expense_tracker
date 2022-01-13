import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userTitle, setUserTitle] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const [userDate, setUserDate] = useState("");

  function titleChangeHandler(event) {
    setUserTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setUserAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setUserDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: userTitle,
      amount: userAmount,
      date: new Date(userDate),
    };

    props.onSaveExpenseData();
  }

  setUserTitle("");
  setUserAmount("");
  setUserDate("");

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userTitle}
            onChange={titleChangeHandler}
            type="text"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div classname="new-expense__control">
          <label>Date</label>
          <input
            value={userDate}
            onChange={dateChangeHandler}
            type="date"
            min="2022-01-01"
            max="2025-12-31"
          ></input>
        </div>
      </div>
      <button className="new-expense__actions" type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
