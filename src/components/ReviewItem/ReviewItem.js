import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import './ReviewItem.css'

const ReviewItem = ({product,handleRemoveItem}) => {
    const {id,name, img,price,quantity,shipping} = product
    return (
        <div className='review-item'>
          <div>
          <img src={img} alt=""></img>
          </div>
            <div className='review-details-container'>
                <div className='review-details'>
                <p>{name}</p>
                <p>price:{price}</p>
                <p>quantity:{quantity}</p>
                <p>Shipping:{shipping}</p>

                </div>
                <div className='delete-container'>
                    
                    <button onClick={()=>handleRemoveItem(id)} className='delete-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faShoppingCart}></FontAwesomeIcon>
                    </button>

                </div>

            </div>
            
        
        </div>
    );
};

export default ReviewItem;