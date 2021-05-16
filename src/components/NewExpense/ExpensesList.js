import React from 'react'
import ExpenseItems from "../ExpenseItems"
import './ExpensesList.css'
function ExpensesList(props) {

    if (props.list.length === 0) {
        return <p className="expenses-list__fallback">No Coin found</p>

    }

    return props.list.map(expense => {
        return <ExpenseItems key={expense.id} title={expense.title}
            amount={expense.amount}
            date={expense.date} />
    })
}
export default ExpensesList;