
import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Show from './Components/Show';
import New from './Components/New';
import Edit from './Components/Edit';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          {/* Redirect to transactions list */}
          <Route path="/" element={<Navigate to="/transactions" replace />} />
          {/* Route to transactions list */}
          <Route path="/transactions" element={<Home />} />
          {/* Route to create new transaction */}
          <Route path="/transactions/new" element={<New />} />
          {/* Route to view single transaction */}
          <Route path="/transactions/:id" element={<Show />} />
          {/* Route to edit transaction */}
          <Route path="/transactions/:id/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
