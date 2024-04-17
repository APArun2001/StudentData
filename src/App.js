import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './component/Home'
import create from './component/create'
function App() {
  return (
    <div className="App">
     <h1 > StudentInformation</h1> 
     <Router>
        <Routes>
          <Route path='/' element={<Home/> }/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;

