import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddGamesPage from './Add_Games_Page';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/add_game" element={<AddGamesPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);