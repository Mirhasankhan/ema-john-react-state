import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.JSON';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {   
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart)

       addToDb(product.key, 1)
    }
    

    useEffect(()=>{
        const url = fakeData;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div className="twin-container">
           <div className="product-container">
                {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd}></Product>)
                }
           
           </div>
           <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/review">
                <button className="main-button">Review Order</button>
                </Link>
                </Cart>
           </div>
        </div>
    );
};

export default Shop;