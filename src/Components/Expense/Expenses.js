import React,{useState} from "react";
import "./Expenses.css";
import Cards from "../UI/Cards";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpenseList from "./Expenselist";
import ExpenseChart from "./ExpenseChart";
function Expenses(props){
    const[filteryear,setfilteryear] =  useState("2020");
    function filteryearHandler(selected_year){
        setfilteryear(selected_year);
    };
    let filteredExpenses = props.expense.filter(expense => {
        return expense.date.getFullYear().toString() === filteryear;
    });
    
    return(
        <Cards className="expenses">
            <ExpensesFilter onyearfilter = {filteryearHandler} selected = {filteryear}></ExpensesFilter>
            <ExpenseChart expenses = {filteredExpenses}></ExpenseChart>
            <ExpenseList items = {filteredExpenses}></ExpenseList>
        </Cards>
    );
}
export default Expenses;