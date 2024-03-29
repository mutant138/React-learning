import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem =(props) =>{
  const [amount,setAmount]= useState(props.amount)
  const clickHandler=()=>{
    setAmount(100)  
    console.log(amount)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date= {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={clickHandler}>Add Expense</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
