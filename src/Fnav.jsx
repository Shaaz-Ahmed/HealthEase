import React from 'react';
import img from './Assets/logo.svg'

const Fnav = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <img src={img} width="70" height="40" className="d-inline-block align-top" alt="" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search for Products, Brands and more" aria-label="Search" id="search-bar" />
            <i className="fas fa-search"></i>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <a className="nav-link" href="#" id="nav_i">Login & Sign-up  <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="nav_i">   More    </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#"><i className="fas fa-briefcase"></i>  Sell On Flipkart</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"><i className="fas fa-question"></i>  24X7 Customer Care</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"><i className="fas fa-chart-line"></i>  Advertise</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"><i className="fas fa-download"></i>  Download App</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="nav_i"><i className="fas fa-shopping-cart"></i>Cart<span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          </div>
  );
};

export default Fnav;
