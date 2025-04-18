import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from "./Components/About";
import Faculty from "./Components/Faculty";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
//import FirstYear from "./Components/FirstYear";

import FirstYear from './Components/FirstYear';
import SecondYear from './Components/SecondYear';
import ThirdYear from './Components/ThirdYear';
import FourthYear from './Components/FourthYear'


const App = () => {
  return (
   <>
    
      <Navbar />
     
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/notes/first-year" element={<FirstYear />} />
  <Route path="/notes/second-year" element={<SecondYear />} />
  <Route path="/notes/third-year" element={<ThirdYear />} />
  <Route path="/notes/final-year" element={<FourthYear />} />
</Routes>

   </>
  );
};

export default App;
