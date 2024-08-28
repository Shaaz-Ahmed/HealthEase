import React from 'react';
import './index.css';

const Kupdate = () => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ height: '40vh', backgroundColor: 'rgba(0, 123, 255, 0.7)', color: 'white' }} // Light blue background
      >
        <div className="text-center">
          <h2 id="update">Keep Updated</h2>
          <h5>Stay informed and empowered on all things health-related with our newsletter</h5>
          <h5>subscription, delivering the latest updates, tips, and insights straight to your</h5>
          <h5>inbox!</h5>
          <div className="row justify-content-center mt-4">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Enter your mail" />
            </div>
            <div className="col-md-2 mt-3 mt-md-0">
            <button className="btn w-100" style={{ backgroundColor: 'white', color: '#007bff' }}>Notify Me</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kupdate;
