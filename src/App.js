import './App.css';
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import ProductPage from './ProductPage';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productpage' element={<ProductPage />}/>
        <Route path='/singleproduct/:id' element={<SingleProduct />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
