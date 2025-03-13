import Alert from "./Component/Alert";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function AboutPage(){
   const [mode,setdarkMode]=useState('light');//it will be show dark mode is enabled
   const toggleMode=()=>{
    if(mode==='dark'){
      setdarkMode('light');
     document.body.style.backgroundColor='white';
     document.title='Textutil-lightMode';
    }else{
      setdarkMode('dark');
      document.body.style.backgroundColor='grey';
      document.title='Textutil-darkMode';
    }
   } 
   const [alert,setalert]=useState("Please Enter something?");

  return(
    <>
   <Router>
     
        <Navbar title="HareRam" House="Home" mode={mode} toggle={toggleMode}/>
        <Alert mode={alert}/>
    
      <Routes>
       <Route path="/Home" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>

      </Routes>
 
    </Router>
    </>
  );

}
export default AboutPage;