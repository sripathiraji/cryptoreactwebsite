import React, { useState } from "react"
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const TitleChangeHandler = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value);
    }
    const AmountChangeHandler = (event) => {
        // console.log(event.target.value);
        setAmount(event.target.value);
    }
    const DateChangeHandler = (event) => {
        // console.log(event.target.value);
        setDate(event.target.value);
    }
    const SubmitHandler = (event) => {
        event.preventDefault();
        const Expense = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        console.log(Expense);
        props.onExpenseData(Expense);

        setTitle("");
        setAmount("");
        setDate('');
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>title</label>
                    <input type="text" onChange={TitleChangeHandler} value={title} />
                </div>
                <div className='new-expense__control'>
                    <label>amount</label>
                    <input type="number" onChange={AmountChangeHandler} value={amount} min='1' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>date</label>
                    <input type="date" onChange={DateChangeHandler} value={date} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onHandlingCancel}>Cancel</button>
                <button type='submit'>Submit</button>

            </div>


        </form>)

}

export default ExpenseForm;
// const [userInput, setUserInput] = useState({
//     title: '',
//     amount: '',
//     date: ''
// });
// const TitleChangeHandler = (event) => {
    //     console.log(event.target.value);
    //     setUserInput({
        //         ...userInput,
        //         title: event.target.value
        //     });
        // }
        // const AmountChangeHandler = (event) => {
            //     console.log(event.target.value);
//     setUserInput({
//         ...userInput,
//         amount: event.target.value
//     });
// }
// const DateChangeHandler = (event) => {
//     console.log(event.target.value);
//     setUserInput({
//         ...userInput,
//         date: event.target.value
//     });
// }