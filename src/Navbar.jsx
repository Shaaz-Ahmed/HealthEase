import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './Assets/logo.svg';
import './index.css';
import { FaBeer } from "react-icons/fa";
import * as Icon from 'react-bootstrap-icons';
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";


const NavBar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ffffff'}}>
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
                placeholder="Search for Product, Brands and More "
                aria-label="Search"
                aria-describedby="search-addon" id='four'
                style={{
                  borderRadius: '50px 0 0 50px',
                  width: '500px',
                  backgroundColor: '#f0f0f0', // Off-white background color
                }}
              />
              <span
                className="input-group-text border-0"
                id="search-addon"
                style={{
                  borderRadius: '0 50px 50px 0',
                  backgroundColor: '#f0f0f0', // Off-white background color
                }}
              >
                <i className="fas fa-search fa-lg"></i>
              </span>
            </div>
          </form>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" id='six'>
                <div className="d-flex align-items-center">
                <MdAccountCircle style={{ marginRight: '5px' }} size={35} />

                  <h5 className="mb-0">Login</h5>
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" id='six'><i class="bi bi-people"></i></a> 
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" id='six'><FaRegHeart size={20}/><span id='eight'>Like</span></a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id='two'><FaCartPlus size={20}/><span id='eight'>Cart</span></a>
            </li>
            
          </ul>
        </div>
      </nav>
    
    </div>
  );
};

export default NavBar;
