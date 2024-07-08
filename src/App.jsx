import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import NavBar from './Components/Navbar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/transactions" replace />} />
      </Routes>
    </div>
  )
}

export default App
