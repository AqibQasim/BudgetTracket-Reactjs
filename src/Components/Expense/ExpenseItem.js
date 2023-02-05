import React from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
import Cards from "../UI/Cards";
function ExpenseItem(props){
    return(
        <Cards className="expense-item">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Cards>
    );
}
export default ExpenseItem;