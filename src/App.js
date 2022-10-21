
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Noutfound from './Components/Notfound/Noutfound';
import ProductDetail from './Components/Productdetail/ProductDetail';
import Login from './Components/Login/Login';
import Shipment from './Components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoutes from './Components/PrivateRoute/PrivateRoutes';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
      
      <p>email: {loggedInUser.email}</p>
    
      <Header></Header>
      <Router>
       <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/review" element={<Review/>}></Route>        
        {/* <Route path="/inventory" element={<Inventory/>}></Route> */}
        <Route path="/inventory" element={<PrivateRoutes>
          <Inventory></Inventory>
        </PrivateRoutes>} >          
        </Route>
        <Route path="*" element={<Noutfound/>}></Route>
        <Route path="/:productKey" element={<ProductDetail/>}></Route>        
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/shipment" element={<PrivateRoutes>
          <Shipment></Shipment>
        </PrivateRoutes>} >
          
        </Route>           
       </Routes>
      </Router>     
    </UserContext.Provider>
  );
}

export default App;
