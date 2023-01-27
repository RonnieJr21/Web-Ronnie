import React, {useState} from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../../DesignComponents/Card/Card";
import './Expenses.css'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
const Expenses = (props) =>{
    const [year, filteredYear] = useState('2023');
    const getFilteredSelection = (data) =>{
        console.log(data);
        filteredYear(data);
    }
    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === year;
        })

    ;
    return(
        <div>
            <Card className={'expenses'}>
                <ExpenseFilter yearFiltered={year} getFilteredYear={getFilteredSelection}/>
                {filteredExpenses.map(expense => <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id}/>)
                }

            </Card>
        </div>
    )
}

export default Expenses