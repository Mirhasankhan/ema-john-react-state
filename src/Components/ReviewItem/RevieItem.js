
import React from 'react';

const RevieItem = (props) => {
    
    const {name, quantity, key, price} = props.product;
   
    return (
        <div style={{borderBottom: '1px solid lightgray', padding: '10px'}} className="product-name">
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Price: {price}</p>
            <br/>
            <button className="main-button"
             onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default RevieItem;