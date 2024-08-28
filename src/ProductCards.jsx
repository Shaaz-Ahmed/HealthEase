import React from 'react';
import img from './Assets/img1.jpg';
import './index.css';

const ProductCards = (props) =>{
    return(
        <>
         <div className='product_box'>
                <img src= {props.image} alt='img' />
                <div className='description'>
                    <h2></h2>
                    <p className='para'>{props.para}<span></span></p>
                    <p className='para'> </p>
                    <button className='btn'></button>
                </div>
         </div>   
        </>
    )
};

export default ProductCards;