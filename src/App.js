import React from "react";
import'./App.css'
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutMe from "./Components/pages/AboutMe/AboutMe";
import ExpenseTracker from "./Components/ExpenseTracker/ExpenseTracker";
import Projects from "./Components/pages/Projects/Projects";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path={'/'} element={<LandingPage/>}/>
            <Route path={'/about-me'} element={<AboutMe/>}/>
            <Route path={'/projects'} element={<Projects/>}/>
            <Route path={'/projects/expense-tracker'} element={<ExpenseTracker/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
