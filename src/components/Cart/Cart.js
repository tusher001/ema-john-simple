import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total+product.price, 0);
    let shippingCost = 0;
    if(total>100){
        // console.log(shippingCost);
        shippingCost = 0;
    }
    else if(total>50){
        shippingCost = 9.99;
    }
    else if(total>0){
        shippingCost = 19.99;
    }
    const tax = total/10;
    const formatNumber = num =>{
        const precision = num.toFixed();
        return Number(precision);
    }
    const grandTotal = total + shippingCost + tax;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shippingCost}</p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;