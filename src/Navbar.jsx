import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './Assets/logo.svg';
import './index.css';
import { FaBeer } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ffffff' , marginLeft:'20px'}}>
        <a className="navbar-brand" href="#"><img src={logo} alt='logo' style={{ height: '40px' }}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <div className="input-group" style={{ borderRadius: '50px', overflow: 'hidden' }}>
              <input
                type="search"
                className="form-control"
                placeholder="Search Product"
                aria-label="Search"
                aria-describedby="search-addon" id='four'
                style={{
                  borderRadius: '50px 0 0 50px',
                  width: '500px',
                  backgroundColor: '#f0f0f0', // Off-white background color
                  // Optional: Adds a border for better visibility
                }}
              />
              <span
                className="input-group-text border-0"
                id="search-addon"
                style={{
                  borderRadius: '0 50px 50px 0',
                  backgroundColor: '#f0f0f0', // Off-white background color
                  // Optional: Adds a border for better visibility
                }}
              >
                <i className="fas fa-search fa-lg"></i>
              </span>
            </div>
          </form>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" id='three'><h6>Login Signup</h6><span className="sr-only"></span></a>
            </li>

            <li className="nav-item">
               <a className="nav-link" href="#" id='six'><i class="bi bi-people"></i></a> 
            </li>


            <li className="nav-item">
               <a className="nav-link" href="#" id='six'><i className="fas fa-heart fa-2x" style={{ fontSize: '1.5rem', marginTop:'5px' }}></i></a> {/* Heart icon */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id='two'><i className="fas fa-shopping-cart" style={{ fontSize: '1.5rem' , marginTop:'5px'}}></i></a>
             
            </li>
          </ul>
        </div>
      </nav>
    
    </div>
  );
};

export default NavBar;
