import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
              <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <Link to={"/" + key}>{name}</Link>
                <br/>
                <p>By: {seller}</p>
                <p>Price${price}</p>
                
                <p>Only {stock} left in stock order soon</p>
                <button className="main-button" 
                onClick={() => props.handleAddProduct(props.product)}>
                <FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;