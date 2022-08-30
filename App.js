import React from 'react'
import './App.css';
import Nav from'./Component/Nav';
import Home from './Component/Home';

import Contact from './Component/Contact';
import Products from './Component/Products';



function App() {
  return (
    <div className="App">
    <Nav/>
    <Home/>
   <Products/>
    <Contact/>
    </div>
  );
}

export default App;
