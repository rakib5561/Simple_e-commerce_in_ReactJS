import React from 'react';
import './Products.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {

    const {img, name, ratings, price,seller} = props.product;
    const handleAddToCart = props.handleAddToCart;

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
                <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                    Add to Cart<FontAwesomeIcon icon={faShoppingCart} />
                    </button>
            </div>
        </div>
    );
};

export default Products;