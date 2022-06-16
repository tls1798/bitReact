import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./page/Home";
import Emp from './page/Emp';
import Dept from './page/Dept';
import Login from './page/Login';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">me1</Link>
        <Link to="/emp">me2</Link>
        <Link to="/dept">me3</Link>
        <Link to="/login">me4</Link>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/emp" element={<Emp/>}/>
          <Route path="/dept" element={<Dept/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
