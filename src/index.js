import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './element/Navbar/navbar.jsx';
import Footer from './element/Footer/footer.jsx';
import Home from "./element/Home/home.jsx";
import Skill from './element/Skills/skill.jsx';
import About from './element/About/about.jsx';
import Contact from './element/Contact/contact.jsx';
import Resume from './element/Resume/resume.jsx';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/skill' element={<Skill/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/resume' element={<Resume/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
