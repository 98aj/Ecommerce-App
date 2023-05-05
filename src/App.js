
import { Route, Routes } from 'react-router';
import './App.css';
import Mainpage from './Component/Mainpage';
import Navbar from './Component/Navbar';
import ProductPage from './Component/ProductPage';
import Cart from './Component/Cart';
import Login from './Component/Login';
import Signin from './Component/Signin';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
{/* 
Routing for pages */}
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/productpage/:id' element={<ProductPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Signin/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
