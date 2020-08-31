import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import gifImg from '../../images/giphy.gif';

const Review = () => {
    const [cart , setCart] = useState([]);
    const [orderPlaced , setOrderPlaced] = useState(false);
    

    // HANDLE PLACE ORDER

   const handlePlaceOrder = () => {
       setCart([]);
       setOrderPlaced(true);
       processOrder();

   }

    const removeProduct = (productKey) => {
    //  console.log(productKey);
     const newCart = cart.filter( pd => pd.key !== productKey)
    setCart(newCart);
    removeFromDatabaseCart(productKey);

    }

    useEffect(()=> {
        //cart
        const savedCart = getDatabaseCart ();
        const productKeys = Object.keys(savedCart);
  
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProduct);
        setCart(cartProduct);
    }, []);

    let thanks;
    
    if(orderPlaced) {
        thanks = <img src={gifImg} alt=""/>
    }
    return (
        <div className="twinContainer">
        <div className="productContainer">
        
      {
          cart.map(pd => <ReviewItem
           removeProduct = {removeProduct}
            key = {pd.key}
            product={pd}></ReviewItem>)
      }
      {
          thanks
      }
        </div>
        {/* CART */}
        <div className="cartContainer">
            <Cart cart={cart}>
                <button  onClick ={handlePlaceOrder} className="button-cart">Place Order</button>
            </Cart>
        </div>

        </div>
    );
};

export default Review;