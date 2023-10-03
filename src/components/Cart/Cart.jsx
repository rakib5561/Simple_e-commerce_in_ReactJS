import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    // calculate tax
    const tax = total*7/100;

    // grand total
    const ganrdTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
             <h4>Order summery</h4>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price: ${total}</p>
            <p>Total Shiping Price: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${ganrdTotal}</h5>
        </div>
    );
};

export default Cart;