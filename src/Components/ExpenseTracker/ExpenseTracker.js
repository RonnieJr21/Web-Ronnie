import React from "react";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import './ExpenseTracker.css'
import Expenses from "./Components/Expenses/Expenses";
import Card from "../DesignComponents/Card/Card";

const ExpenseTracker = () =>{
    const expenses = [
    {id: '1',
        title: 'vape juice',
        amount: 17.34 ,
        date: new Date()
    },
    {id: '2',
        title:'car payment' ,
        amount: 500.00 ,
        date: new Date()    },
    {id: '3' ,
        title:'gaming' ,
        amount: 30.00 ,
        date: new Date()    },
    {id:'4' ,
        title:'food' ,
        amount: 127.00 ,
        date: new Date()    },
        {id: '5' ,
            title:'gamingg' ,
            amount: 30.00 ,
            date: new Date()    }
    ]

return(
    <div className={'expense-tracker'}>
        <Expenses expenses={expenses}/>
    </div>

)
}
export default ExpenseTracker