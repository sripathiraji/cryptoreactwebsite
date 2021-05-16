import React, { useState } from 'react';
import './index.css'

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense'


const expenses = [
  {
    id: 'e1',
    title: 'ETH',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'DOGE', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'CORDANO',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'USDT',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [addexpenses, setAddExpense] = useState(expenses)


  const Expensedata = (data) => {
    console.log(data)
    setAddExpense(prevExpense => {
      return [data, ...prevExpense];
    })
  }


  return (
    <div>
      <h2 className='title'>CRYPTOCURRENCY</h2>
      <NewExpense onData={Expensedata} />
      <Expenses items={addexpenses} />
    </div>
  );
}

export default App;