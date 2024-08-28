import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';

const CardList = () => {
  const products = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 29.99
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 39.99
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 49.99
    }
    // Add more products as needed
  ];

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between">
        {products.map((product, index) => (
          <div className="mx-2" key={index}>
            <Cards
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
