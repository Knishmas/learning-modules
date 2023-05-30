import React from 'react'
import ExpenseForm from './ExpenseForm'
import './Styles/NewExpenses.css'
const NewExpense = () => {
  return (
   <div className='new-expense'>
        <ExpenseForm/>
   </div>
  )
}

export default NewExpense