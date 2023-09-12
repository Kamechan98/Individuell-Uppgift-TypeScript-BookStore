import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Create from './pages/Create';
import Book from './pages/Book';
import DetailPage from './pages/DetailPage';
// import { DetailPage } from './pages/DetailPage';

function App() {
  const { id } = useParams()
  return (
    
    <div>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/book/:id' element={<DetailPage/>} />
        <Route path='/Create' element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
