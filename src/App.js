import React, {useState} from "react";
import'./App.css'
import './App.css';

import LandingPage from "./Components/pages/LandingPage/LandingPage";
import {HashRouter, BrowserRouter, Routes, Route, } from "react-router-dom";
import AboutMe from "./Components/pages/AboutMe/AboutMe";
import ExpenseTracker from "./Components/pages/Projects/ExpenseTracker/ExpenseTracker";
import Projects from "./Components/pages/Projects/Projects";
import Forum from "./Components/pages/Projects/Forum/Forum";
import ContactMe from "./Components/pages/Contact-Me/ContactMe";
import axios from "axios";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path={'/'} element={<LandingPage/>}/>
            <Route path={'/about-me'} element={<AboutMe/>}/>
            <Route path={'/projects'} element={<Projects/>}/>
            <Route path={'/projects/expense-tracker'} element={<ExpenseTracker/>}/>
            <Route path={'/projects/forum'} element={<Forum/>}/>
            <Route path={'/contact-me'} element={<ContactMe/>}/>

        </Routes>
    </HashRouter>
  );
}

export default App;
