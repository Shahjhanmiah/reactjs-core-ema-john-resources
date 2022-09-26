import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import'./Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])

    useEffect( ()=>{
        console.log('Local Storage first line',products);
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            console.log('product load')
        })
           
         
    },[])
    useEffect(()=>{
        const storedCart = getStoredCard();
        const savedCart =[];
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id===id)
            if(addedProduct){
                const qunatity = storedCart[id];
                addedProduct.qunatity = qunatity
             savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        
    },[products])
    const handleClick = (selectedproduct) =>{
        console.log(selectedproduct);
      let newCart = [];
        const exists   = cart.find(product=>product.id===selectedproduct.id)
        if(!exists){
            selectedproduct.qunatity = 1; 
             newCart = [...cart,selectedproduct]

        }
        else{
            const rest = cart .filter(product => product.id!== selectedproduct.id);
            exists.qunatity= exists.qunatity+1;
            newCart = [...rest,exists];
        }
        // cart.push(product)
        // const newCart = [...cart,selectedproduct];
        setCart(newCart);
        addToDb(selectedproduct.id);
        
        

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