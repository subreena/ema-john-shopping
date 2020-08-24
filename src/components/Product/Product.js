import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h2 className="title">{name}</h2>
                <p><small>By {seller}</small></p>
                <h3>${price}</h3>

                <p><small>Stock left - {stock} . Order soon</small></p>

                <button className="button-cart" 
                onClick= {() => props.handleAddProduct(props.product)}>
                Add To Cart
                </button>
            </div>

        </div>
    );
};

export default Product;