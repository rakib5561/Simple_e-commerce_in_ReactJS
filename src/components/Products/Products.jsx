import React from 'react';
import './Products.css';

const Products = (props) => {
    const {img, name, ratings, price,seller} = props.product
    console.log(props.product)
    return (
        <div>
            
            <div className='single-producst-box'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h6 className='product-name'>{name}</h6>
                    <p>Price: ${price}</p>
                    <p>Menufacturer: {seller}</p>
                    <p>Rating: {ratings} star</p>
                </div>
                <button className='btn-cart'>Add to Cart</button>
            </div>

        </div>
    );
};

export default Products;