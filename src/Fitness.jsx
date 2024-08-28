import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { FaCartPlus } from "react-icons/fa";
import ayu from './Assets/ayu.png'; // Ensure the path is correct
import './index.css'; // Ensure you have your custom CSS if needed
import { MdNavigateNext } from "react-icons/md";

const Fitness = () => {
  return (
    <div className='container'>
      <div className="text-center mb-4">
        <h4 id="cat" className="mb-4">Best Fitness Product</h4>
      </div>

      <div className='row'>

        <div className="col-md-3 mb-4">
          <div className="card" style={{ width: '15rem' }}>
            <img src={ayu} className="card-img-top" alt="Product" style={{ fontSize: '1rem' }}/>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1rem' }}>COQ 300mg softgel</h5>
              <h6 style={{ fontSize: '0.70rem' }}>MKT: VLCC Personal Care Ltd</h6>
              <a href="#" className="btn btn-primary" style={{ fontSize: '0.875rem', width:'200px' }}>
                <FaCartPlus /> Add to Cart
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card" style={{ width: '15rem' }}>
            <img src={ayu} className="card-img-top" alt="Product" />
            <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1rem' }}>COQ 300mg softgel</h5>
            <h6 style={{ fontSize: '0.70rem' }}>MKT: VLCC Personal Care Ltd</h6>
              <a href="#" className="btn btn-primary" style={{ fontSize: '0.875rem', width:'200px' }}>
                <FaCartPlus /> Add to Cart
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card" style={{ width: '15rem' }}>
            <img src={ayu} className="card-img-top" alt="Product" />
            <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1rem' }}>COQ 300mg softgel</h5>
            <h6 style={{ fontSize: '0.70rem' }}>MKT: VLCC Personal Care Ltd</h6>
              <a href="#" className="btn btn-primary" style={{ fontSize: '0.875rem', width:'200px' }}>
                <FaCartPlus /> Add to Cart
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card" style={{ width: '15rem' }}>
            <img src={ayu} className="card-img-top" alt="Product" />
            <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1rem' }}>COQ 300mg softgel</h5>
            <h6 style={{ fontSize: '0.70rem' }}>MKT: VLCC Personal Care Ltd</h6>
              <a href="#" className="btn btn-primary" style={{ fontSize: '0.875rem', width:'200px' }}>
                <FaCartPlus /> Add to Cart
              </a>
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-primary btn-sm" style={{ width: '200px', marginLeft:'480px' , marginTop:'20px'}}>
                       More Product<MdNavigateNext />
          </button>

      </div>
    </div>
  );
};

export default Fitness;
