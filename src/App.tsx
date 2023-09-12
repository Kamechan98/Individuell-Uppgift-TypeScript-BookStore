import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Create from './pages/Create';
import { DetailPage } from './pages/DetailPage';

function App() {
  const { id } = useParams();
  return (
    
    <div>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
