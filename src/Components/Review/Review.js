import { getStoredCart, deleteFromDb, clearTheCart} from '../../utilities/fakedb'
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.JSON'
import RevieItem from '../ReviewItem/RevieItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([])
    const [ids, setIds] = useState([])
    const [orderPlaced, setOrderplaced] = useState(false)

const handlePlaceOrder = () => {
    setCart([])
    setOrderplaced(true)
    clearTheCart()
}

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        deleteFromDb(productKey)
    }
    useEffect(() => {
        const url = fakeData
        fetch(url)
        .then(res => res.json())
        .then(data => setCart(data))
    }, []);
    useEffect(() => {
        const savedCart = getStoredCart();
        
        const productKeys = Object.keys(savedCart)

        const cartProducts = productKeys.map(key => {
            const product = cart.find(pd => pd.key === key)
            return product;
        })
        setIds(cartProducts)
    })

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }

    // useEffect(() =>{
    //     const savedCart = getStoredCart();
    //     const productKeys = Object.keys(savedCart)

    //     const cartProducts  = productKeys.map(key => {
    //         const product = fakeData.find(pd => pd.key === key)
    //         product.quantity = savedCart
    //         return product;
    //     })
    //     console.log(cartProducts)
        
    // }, [])
       
    return (
        <div className="twin-container">
          <div className="product-container">
          {
                cart.map(pd => <RevieItem removeProduct={removeProduct}
                                 product={pd}></RevieItem>)
          }
          {
            thankYou
         }
        
         </div> 
         <div className="cart-container">
            <Cart cart={cart}>
                <button className="main-button" onClick={handlePlaceOrder}
                >Place Order</button>
            </Cart>
         </div>
         
         
        </div>
    );
};

export default Review;