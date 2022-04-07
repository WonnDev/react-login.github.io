import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components//Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {



  return (
    <BrowserRouter>
      <header className='wrapper'>
        <Nav />
        <Routes>
          <Route path="/" exact
            element={<Home />} />
          <Route path="/login"
            element={<Login />} />
          <Route path="/signin"
            element={<Preferences />} />
        </Routes>
      </header>
    </BrowserRouter>
  );
}

export default App;
