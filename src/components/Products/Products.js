import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    // console.log(props);
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className="cart-btn" onClick={()=>props.handleClicked(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Buy now</button>
            </div>
        </div>
    );
};

export default Products;