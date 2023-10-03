import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {

    // Showing all products dispaly state
    const [products,setProducts] = useState([]);
    // Add to cart product state 
    const [cart, setCart] = useState([]);

    useEffect( ()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // Add to cart Button working function
     const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <div className='Shop-page-wrapper'>

                {/* Display all product */}
                <div className='Products-contaier'>
                    {
                        products.map(product => <Products
                            key={product.id}
                            product = {product}
                            handleAddToCart = {handleAddToCart}
                        ></Products>)
                    }
                </div>

                {/* Shopping Cart */}
                <div className='shop-cart-wrapper'>
                    <h4>Order summery</h4>
                    <p>Selected Items: {cart.length} </p>
                </div>
            </div>
        </div>
    );
};

export default Shop;