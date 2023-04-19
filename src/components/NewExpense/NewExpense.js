import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import {useState} from 'react';
function NewExpense(props){
    const [showAdd,setShowAdd] = useState(true);
    function addHandler(event){
        event.preventDefault();

        setShowAdd(false)
    }
    function cancelHandler(event){
        event.preventDefault();

        setShowAdd(true)

    }
    function saveExpenseDataHandler(enteredExpenseData){
        const newExpenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        setShowAdd(true);
        props.onSaveExpenseData(newExpenseData);
    }

    return <div className='new-expense'>
        {showAdd ? <button onClick={addHandler}>Add New Expense</button> :
       <ExpenseForm  onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
    </div>
}

export default NewExpense;