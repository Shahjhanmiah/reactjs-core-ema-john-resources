import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product..css';
const Product = (props) => {
    // console.log(props);
    const  {handleClick,product} = props;  
    const {name,img, seller,price,rating} = props.product
    
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>Name:{name}</p>
            <p>Price:${price}</p>
            <p> Seller:{seller}</p>
            <p>Rating:{rating} start</p>
            </div>
            <button onClick= {()=>props.handleClick(props.product)}className='btn-card'>
                <p className='btn-text'>Add to cart </p>
                <FontAwesomeIcon icon={ faShoppingCart}></FontAwesomeIcon>

            </button>
  
        </div>
    );
};

export default Product;

  