import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

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
                   <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;