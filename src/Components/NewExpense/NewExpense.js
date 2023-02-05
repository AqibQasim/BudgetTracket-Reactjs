import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props){
    const[form,setform] = useState(false);
    const saveExpenseHandler = (expenses) => {
        const expenseData = {
            ...expenses,
            id : Math.random.toString()
        }
        props.onAddExpense(expenseData);
        setform(false);
    }
    function addNewExpenseHandler(){
        setform(true);
    }
    function cancelHandler(){
        setform(false);
    }
    return(
        <div className="new-expense">
            {!form && <button onClick={addNewExpenseHandler}>Add new Expense</button>}
            {form && <ExpenseForm onSaveExpense = {saveExpenseHandler} onCancel = {cancelHandler}></ExpenseForm>}           
        </div>
    )
}
export default NewExpense;