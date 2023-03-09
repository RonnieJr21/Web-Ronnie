import React from "react";
import Card from "../../DesignComponents/Card/Card";
import './Projects.css'
import Forum from "./Forum/Forum";

const Projects = () =>{
    const ExpenseTrackerWebpage = () =>{
        window.location.href=process.env.PUBLIC_URL+'/expense-tracker'
    }
    const ForumWebpage = () =>{
        window.location.href=process.env.PUBLIC_URL+'/Forum'

    }
    return(
        <div className={'projects'}>
            <div>
                <button  className={'expense-tracker-link'} onClick={ExpenseTrackerWebpage}
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