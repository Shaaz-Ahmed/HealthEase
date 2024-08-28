import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = (props) => {
  return (
    <div className='container'>
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text"><strong>${props.price}</strong></p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    </div>
  );
};

export default Cards;
