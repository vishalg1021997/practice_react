import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { AllProducts } from './components/AllProducts';
import { NotFound } from './components/NotFound';
import { ProductDetails } from './components/ProductDetails';
import ProductNotFound from './components/ProductNotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/productdetails/:id' element={<ProductDetails />} />
        <Route path='/productdetails/*' element={<ProductNotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
