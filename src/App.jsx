import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Show from './components/Show';
import New from './components/New';
import Edit from './components/Edit';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/transactions" replace />} />
        <Route path="/transactions" element={<Home />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:id" element={<Show />} />
        <Route path="/transactions/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
