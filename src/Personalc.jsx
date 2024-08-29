import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Personalc = (props) => {
  return (
    <div className='container'>
      <div className="card" style={{ width: '15rem', position: 'relative', backgroundColor: 'white' }}>
        {/* Cart Icon */}
        <a 
          href="/cart" 
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            backgroundColor: '#E1EEF2',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: 'black'
          }}
        >
          <FaShoppingCart />
        </a>

        <img 
          src={props.image} 
          className="card-img-top" 
          alt="Card image" 
          style={{ height: '230px'}} 
        />

        <div className="card-body" style={{ backgroundColor: 'white', color: 'black' }}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text" style={{ fontSize: '0.7rem' }}>
            {props.content}
          </p>
          <p className="card-text" style={{ fontSize: '0.8rem' }}>
            {props.price}
          </p>
          <a href="#" className="btn btn-primary" style={{ marginTop: '0px' }}>Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default Personalc;
