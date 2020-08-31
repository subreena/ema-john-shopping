import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock , key } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h2 className="title"><Link to={"/product/" + key}>{name}</Link> </h2>

                <br/>
                <p><small>By {seller}</small></p>
                <h3>${price}</h3>

                <p><small>Stock left - {stock} . Order soon</small></p>

                { props.showAddToCart && <button className="button-cart" 
                onClick= {() => props.handleAddProduct(props.product)}>
                Add To Cart
                </button>}
            </div>

        </div>
    );
};

export default Product;