
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Noutfound from './Components/Notfound/Noutfound';
import ProductDetail from './Components/Productdetail/ProductDetail';


function App() {
  
  return (
    <div>
      <Header></Header>
      <Router>
       <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/review" element={<Review/>}></Route>
        <Route path="/inventory" element={<Inventory/>}></Route>
        <Route path="/:productKey" element={<ProductDetail/>}></Route>
        <Route path="*" element={<Noutfound/>}></Route>
       </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
