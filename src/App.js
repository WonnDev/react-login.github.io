import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components//Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';


function App() {
  


  return (
    <BrowserRouter>

      <div className="wrapper">
        <Routes>
          <Route path="/"
            element={<Login /> } />
          <Route path="/dashboard"
            element={<Dashboard />} />
          <Route path="/preferences"
            element={<Preferences />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
