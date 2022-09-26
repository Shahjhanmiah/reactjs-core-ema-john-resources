import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import'./Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleClick = (product) =>{
        console.log(product);
        // cart.push(product)
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);
        
        

         


    }
    return (
        <div className='shop-container'>
           <div className='products-container'>
        
            {
                products.map(product=><Product 
                    key={product.id}
                    product={product}
                    handleClick={handleClick}
                    ></Product>)
            }
           </div>
           <div className='cart-container'>
            <Cart cart={cart}></Cart>
            {/* <h4>Order Summary</h4>
            <p>Selected Item:{cart.length}</p> */}
           </div>
            
        </div>
    );
};

export default Shop;