import React, {useState} from 'react'
import '../Styles/ExpenseForm.css'

const ExpenseForm = () => {
  const [enteredTitle, setTitle] = useState(''); 
  const [enteredAmount,setAmount] = useState('');
  const [enteredDate,setDate] = useState('');

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
  }
  
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
  }

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
    <div className="new-expenses__controls">
     <div className="new-expense__control">
         <label htmlFor="">Title</label>
         <input type="text" onChange={titleChangeHandler} />
     </div>
    </div>
    <div className="new-expenses__controls">
     <div className="new-expense__control">
         <label htmlFor="">Amount</label>
         <input type="number" min = "0.01" step="0.01"/>
     </div>
    </div>
    <div className="new-expensees__controls">
     <div className="new-expense__control">
         <label htmlFor="">Date</label>
         <input type="dat" min = "2019-01-01" step="2023-12-31"/>
     </div>
    </div>
    <div className="new-expense__actions">
     <button type='submit'>Add Expense</button>
    </div>
 </form>
  )
}

export default ExpenseForm