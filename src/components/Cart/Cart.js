import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart,clearCart} = props;
    console.log('cart',cart)
    

    let total = 0;
    let  shipping = 0; 
    let qunatity = 0;  
    for(const product of cart ){
        total  = total + product.price*product.qunatity;
         shipping  = shipping + product.shipping
         qunatity = qunatity+product*qunatity.qunatity;
    }
    const tax =parseFloat(total * 0.1).toFixed(2);
    const grandTotal = total + shipping +  tax;
   
    return (
        <div className='cart' >
            <h4>Order Summary</h4>
            <p>Selected Item:{props.cart.length}</p>
            <p>Total price:${total}</p>
            <p> Total shipping:${shipping}</p>
            <p>Tax:{total}</p>
            <h5>Grand Total:.{grandTotal}</h5>
            <button onClick={clearCart}>Clear cart</button>

        </div>
    );
};

export default Cart;