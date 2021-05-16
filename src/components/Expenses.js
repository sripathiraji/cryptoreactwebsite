import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './NewExpense/ExpensesList';
import Card from './Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [enteredYear, setEnteredYear] = useState('2021')

  const yearHandler = (data) => {
    setEnteredYear(data);
  }

  const filterUpdate = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear
  })



  return (
    <div>

      <Card className="expenses">
        <ExpenseFilter defaultYear={enteredYear} onYearHandler={yearHandler} />

        <ExpensesChart expenses={filterUpdate} />
        <ExpensesList list={filterUpdate} />

      </Card>
    </div>
  );
}

export default Expenses;



















// // import Card from "./Card";
// import ExpenseItems from "./ExpenseItems"
// import React from 'react'
// import './Card.css'





// function Expenses(){
//     const expensedate=new Date().toLocaleDateString();;
//     console.log(expensedate);

//     const expenselist=[
//       {
//         date:expensedate,
//         name:'DOGE',
//         price:'$0.49',
//         sentiment:'bullish'
//       },
//       {
//         date:expensedate,
//         name:'ETH',
//         price:'$4399',
//         sentiment:'bullish'
//       },
//       {
//         date:expensedate,
//         name:'DOGE',
//         price:'$0.49',
//         sentiment:'bullish'
//       }
//     ]
// return  <div>


//     {expenselist.map(currency=> <ExpenseItems 
//         date={currency.date}
//         name={currency.name} 
//         price={currency.price}
//         sentiment={currency.sentiment}/>)}
//         </div>
// }
// export default Expenses;