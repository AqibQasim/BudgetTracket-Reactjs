import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
function ExpenseList(props){
    let expensesContent = <p className="paragraph">No expenses Found fuck you</p>
    if(props.items.length > 0){
        expensesContent = props.items.map(expense => 
            <ExpenseItem 
            key = {expense.id}
            title = {expense.title} 
            amount = {expense.amount} 
            date = {expense.date} />
            )
        }
    return(
        <div>
            {expensesContent}
        </div>
    )
}
export default ExpenseList;