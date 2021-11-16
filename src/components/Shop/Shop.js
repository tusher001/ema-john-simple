import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData/products';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleClicked = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Products product={product} handleClicked={handleClicked}></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;