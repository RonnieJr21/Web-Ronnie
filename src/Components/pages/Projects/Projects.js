import React from "react";
import Card from "../../DesignComponents/Card/Card";
import './Projects.css'

const Projects = () =>{
    const ExpenseTrackerWebpage = () =>{
        window.location.replace('http://localhost:3000/projects/expense-tracker')
    }
    return(
        <Card className={'projects'}>
            <button className={'expense-tracker-link'} onClick={ExpenseTrackerWebpage}
            >Expense Tracker</button>
        </Card>
    )
}
export default Projects