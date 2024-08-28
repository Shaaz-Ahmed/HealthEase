import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is included
import '@fortawesome/fontawesome-free/css/all.min.css'; // Include Font Awesome for icons

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Health Ease
              </h6>
              <p>
              At HealthEase, we are dedicated to revolutionizing the way you access healthcare. With a steadfast commitment to your well-being, we offer a comprehensive range of high-quality medications, wellness products, and healthcare services..

</p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">About Company</h6>
              <p>
              <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>About us</a>
              </p>
              <p>
              <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Contact us</a>
              </p>
              
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
              <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Home</a>
              </p>
              <p>
              <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Wishlist</a>
              </p>
              <p>
              <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Carts</a>
              </p>
              <p>
              <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Shop</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Sacred world, office #707, Wanwadi, Pune</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                <a href="mailto:info@example.com"  className="text-reset" style={{ textDecoration: 'none' }}>sales@consociatesolutions.com</a>
              
              </p>
              <p><i className="fas fa-phone me-3"></i> +91 9004991455</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      All rights reserved © 2024 ShopEase Pvt. Ltd.
        <a className="text-reset fw-bold" href="/"></a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;

