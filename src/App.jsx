import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Home from './Components/Home';
import New from './Components/New';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/transactions" replace />} />
        <Route path="/transactions" element={<Home />} />
        <Route path="/transactions/:id" element={<Show />} />
        <Route path="/transactions/new" element={<New />} />
      </Routes>
    </div>
  )
}

export default App
