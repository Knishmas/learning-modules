import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import './Styles/Expenses.css'
import Card from './Card';

const Expenses = (props) => {
    const expenses = [
        {title: 'Banana', amount: 294.67, date: new Date(2023, 5, 27)}, 
        {title: 'Toy', amount: 294.67, date: new Date(2023, 5, 27)}, 
        {title: 'Apple', amount: 294.67, date: new Date(2023, 5, 27)}, 
        {title: '2007 LTE rusty bucket', amount: 294.67, date: new Date(2023, 5, 27)}, 
    
      ];

  return (
    <Card>
        <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  )
}

export default Expenses