import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/landingPage/LandingPage';
import SearchResult from "./Pages/searchResult/SearchResult";
import "./style.css"
import Home from "./Pages/home/Home";
import ProductDetail from "./Pages/productDetail/ProductDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/HomePage' element={<LandingPage/>}/>
        <Route path='/SearchResult' element={<SearchResult/>}/>
        <Route path='/productdetail' element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
