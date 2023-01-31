import React from "react";
import Card from "../../DesignComponents/Card/Card";
import './Projects.css'
import Forum from "../../Forum/Forum";

const Projects = () =>{
    const ExpenseTrackerWebpage = () =>{
        window.location.replace('http://localhost:3000/projects/expense-tracker')
    }
    const ForumWebpage = () =>{
        window.location.replace(process.env.PUBLIC_URL+'/projects/Forum')

    }
    return(
        <div className={'projects'}>
            <div>
                <button className={'expense-tracker-link'} onClick={ExpenseTrackerWebpage}
                >💵 Expense Tracker</button>
            </div>

            <div>
                <button onClick={ForumWebpage}>
                    Forum
                </button>
            </div>

        </div>
    )
}
export default Projects