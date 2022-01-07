import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // const [userTitle, setuserTitle] = useState("");
  // const [userAmount, setuserAmount] = useState("");
  // const [userDate, setuserDate] = useState("");

  const [userInput, setUserInput] = useState({
    userTitle: "",
    userAmount: "",
    userDate: "",
  });

  function titleChangeHandler(event) {
    setUserInput = ((prev) => {
      return {
        ...prev,
        userTitle: event.target.value,
      };
    }
    
  function amountChangeHandler(event) {
    setUserInput = ((prev) => {
      return {
        ...prev,
        userAmount: event.target.value,
      };
    }

  function dateChangeHandler(event) {
    setUserInput = ((prev) => {
      return {
        ...prev,
        userDate: event.target.value,
      };
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div classname="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text"></input>
        </div>
        <div classname="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div classname="new-expense__control">
          <label>Date</label>
          <input
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
