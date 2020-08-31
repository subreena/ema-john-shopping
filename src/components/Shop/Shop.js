import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const firstTen = fakeData.slice(0, 12);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( existingKey => {
            const product = fakeData.find( pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            // console.log(existingKey , savedCart[existingKey]);
          return product;
        
        })

        // console.log(previousCart);
        setCart(previousCart);
       

    } , [])

    // HANDLE ADD PRODUCT
    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key)
        let count = 1;
        let newCart;
        if (sameProduct){
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter( pd => pd.key !== toBeAddedKey )
           newCart = [...others , sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart , product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key , count);
        // console.log(count);
        
    }
    return (
        <div className="twinContainer">
            <div className="productContainer">

                {
                    products.map(pd => <Product
                       key = {pd.key}
                        showAddToCart = {true}
                        handleAddProduct={handleAddProduct}
                        product={pd}>{pd.name}</Product>)
                }

            </div>
            <div>
                {/* CART */}
            <div className="cartContainer">
                <Cart cart={cart}>
                <Link to="/review">
           <button className="button-cart">Review Order</button>
           </Link>
                </Cart>
            </div>


            </div>

        </div>
    );
};

export default Shop;