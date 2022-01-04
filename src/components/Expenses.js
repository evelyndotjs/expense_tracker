import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
    </Card>
  );
}

export default Expenses;
