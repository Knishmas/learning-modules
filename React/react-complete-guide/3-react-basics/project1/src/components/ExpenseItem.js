import React from 'react'
import './Expense.css'

export const ExpenseItem = () => {
  return (
    <div className='expense-item'>
       <div>May 27th 2023</div>
       <div className='expense-item__description'>
            <h2>Car Insurance</h2>
            <div className='expense-item__price'>$294.67</div>
       </div>
    </div>
  )
}
