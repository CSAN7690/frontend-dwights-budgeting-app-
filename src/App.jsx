import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Show from './Components/Show';
import New from './Components/New';
import Edit from './Components/Edit'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/transactions" replace />} />
        <Route path="/transactions" element={<Home />} />
        <Route path="/transactions/:id" element={<Show />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
