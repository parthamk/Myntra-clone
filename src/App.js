import './App.css';
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import Products from './Products';
// import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';
// import SearchPage from './SearchPage';
import Details from './components/DetailsPage/Details';

function App() {
  return (
    <Router>
      <Routes>
      {/*<Route path='/' element={<Home />}/>*/}
      {/*<Route path='/products' element={<Products />}/>*/}
        <Route path='/' element={<Products />}/>
        <Route path='/details/:detailslug' element={<Details />}/>
        {/* <Route path='/SearchPage' element={<SearchPage />}/> */}
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
