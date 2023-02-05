import React,{useState} from "react";
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const initial_expenses = [
  {
    id : 1,
    title : "An Apple",
    amount : "450",
    date : new Date(2022, 2,19)
  },
  {
    id : 2,
    title : "Aeroplane",
    amount : "8900",
    date : new Date(2021, 5,19)
  },
  {
    id : 3,
    title : "Headphones",
    amount : "210",
    date : new Date(2020, 8,29)
  },
  {
    id: 4,
    title : "Mobile",
    amount :  "500",
    date : new Date(2022, 7,25)
  }
];
function App() {
  const[expense, setexpense] = useState(initial_expenses);
  function AddExpenseHandler(expenses){
    setexpense((prevExpenses) =>{
      return[expenses, ...prevExpenses];
    });
  };
  return(
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense= {AddExpenseHandler}></NewExpense>
      <Expenses expense = {expense}></Expenses>
    </div>
  );
}
export default App;