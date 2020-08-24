import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (props) => {
        const newCart = [...cart, props];
        setCart(newCart);
    }
    return (
        <div className="shopContainer">
            <div className="productContainer">

                {
                    products.map(pd => <Product
                        handleAddProduct={handleAddProduct}
                        product={pd}>{pd.name}</Product>)
                }

            </div>
            <div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>

            </div>

        </div>
    );
};

export default Shop;