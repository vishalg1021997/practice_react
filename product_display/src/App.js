import logo from './logo.svg';
import './App.css';
import { ProductForm } from './components/ProductForm';
import { ProductListing } from './components/ProductListing';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='div1'>
        <ProductForm />
      </div>
      <div className='div2'>
        
        <ProductListing />
      </div>
    </div>
  );
}

export default App;
