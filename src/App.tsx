import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
function App() {
  return (
    
    <div>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        {/* <Route path='/About' element={<About/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
