import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name , quantity , img , key , price} = props.product;
    return (
        <div className="product">
            <img src={img} alt=""/>
            <div>
            <h2 className="title">{name}</h2>
    <p>Quantity: {quantity}</p>
    <p><small>${price}</small></p>
    <br/>
    <button 
    onClick={() => props.removeProduct(key)}
    className="button-cart">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;