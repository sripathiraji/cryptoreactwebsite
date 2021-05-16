import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

function NewExpense(props) {
    const [click, setClick] = useState(false)
    const expenseData = (data) => {
        console.log(data);
        props.onData(data);
    }

    const HandlingClick = () => {
        console.log('click');
        setClick(true);
    }
    function HandlingCancel() {
        console.log('cancel');
        setClick(false);
    }
    if (click === true) {
        return (<div className='new-expense'>
            <ExpenseForm onExpenseData={expenseData} onHandlingCancel={HandlingCancel} />
            {/* <button onClick={HandlingCancel}>Cancel</button> */}

        </div>)
    }

    return (<div className='new-expense'>
        <button onClick={HandlingClick}>Add new Coin</button>

    </div>)
}

export default NewExpense;