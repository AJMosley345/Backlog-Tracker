import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddGame from './components/game_info/AddGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Home />
      <Routes>
        <Route path='/' element={<Home />}>
        <Route path="add_game" element={<AddGame />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);