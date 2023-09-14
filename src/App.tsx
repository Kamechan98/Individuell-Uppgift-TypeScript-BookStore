import React from 'react';
// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Create from './pages/Create';
import DetailPage from './pages/DetailPage';
import Shop from './pages/Shop';
// import DetailPage from './components/DetailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create />} />
        <Route path='/book/:id' element={<DetailPage/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes>
    </div>
  );
}

export default App;