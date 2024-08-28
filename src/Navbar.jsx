
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './Assets/logo.svg';
import { FaRegHeart, FaCartPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ height: '50px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 mx-auto">
            <div className="input-group" style={{ borderRadius: '50px', overflow: 'hidden' }}>
              <input
                type="search"
                className="form-control"
                placeholder="Search for Product, Brands and More"
                aria-label="Search"
                aria-describedby="search-addon"
                style={{
                  borderRadius: '50px 0 0 50px',
                  width: '500px',
                  backgroundColor: '#f0f0f0', // Off-white background color
                  transition: 'background-color 0.3s ease',
                }}
                onFocus={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                onBlur={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              />
              <span
                className="input-group-text border-0"
                id="search-addon"
                style={{
                  borderRadius: '0 50px 50px 0',
                  backgroundColor: '#f0f0f0', // Off-white background color
                  color: '#007bff', // Matching text color
                  transition: 'color 0.3s ease',
                }}
              >
                <i className="fas fa-search fa-lg"></i>
              </span>
            </div>
          </form>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="btn btn-primary" href="#" style={{
                backgroundColor: '#FF6347',
                borderColor: '#FF6347',
                color: '#fff',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                textTransform: 'uppercase',
                marginLeft:'-100px'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e55347'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#FF6347'}
              >
                Login
              </a>
            </li>

            <li className="nav-item d-flex align-items-center">
              <a className="nav-link d-flex align-items-center" href="#" style={{
                color: '#007bff',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
              }}
                onMouseOver={(e) => e.target.style.color = '#0056b3'}
                onMouseOut={(e) => e.target.style.color = '#007bff'}
              >
                <FaRegHeart size={20} />
                <span style={{ fontFamily: 'Roboto, sans-serif', marginLeft: '5px' }}>Like</span>
              </a>
            </li>

            <li className="nav-item d-flex align-items-center">
              <a className="nav-link d-flex align-items-center" href="#" style={{
                color: '#007bff',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
              }}
                onMouseOver={(e) => e.target.style.color = '#0056b3'}
                onMouseOut={(e) => e.target.style.color = '#007bff'}
              >
                <FaCartPlus size={20} />
                <span style={{ fontFamily: 'Roboto, sans-serif', marginLeft: '5px' }}>Cart</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
