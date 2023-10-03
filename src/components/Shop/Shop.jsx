import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {

    const [products,setProducts] = useState([]);
    useEffect( ()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <div className='Shop-page-wrapper'>

                {/* Display all product */}
                <div className='Products-contaier'>
                    {
                        products.map(product => <Products
                            key={product.id}
                            product = {product}
                        ></Products>)
                    }
                </div>

                {/* Shopping Cart */}
                <div className='shop-cart-wrapper'>
                    <h4>Order summery</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;