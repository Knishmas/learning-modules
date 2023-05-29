import React from 'react'
import './Expense.css'
import ExpenseDate from './ExpenseDate'

export const ExpenseItem = (props) => {
    
  return (
    <div className='expense-item'>
       <ExpenseDate date={props.date}/>
       <div className='ecxpense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
       </div>
    </div>
  )
}
