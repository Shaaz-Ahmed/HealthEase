import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const MnavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {/* Add your logo or brand name here if needed */}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link nav-link-spacing" href="#" id='seven'>
                <h6 className="m-0">Home</h6>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-link-spacing" href="#">
                <h6 className="m-0">About Us</h6>
                <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-link-spacing" href="#">
                <h6 className="m-0">Shop</h6>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-link-spacing" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Category 1</a>
                <a className="dropdown-item" href="#">Category 2</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Category 3</a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <h6 className="m-0">Contact Us</h6>
                <span className="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          font-family: 'Roboto', sans-serif; /* Apply Roboto font */
          font-size: 1rem; /* Base font size */
          transition: color 0.3s ease, text-decoration 0.3s ease;
        }

        @media (min-width: 576px) {
          .nav-link h6 {
            font-size: 1.1rem; /* Adjust font size for small devices */
          }
        }

        @media (min-width: 768px) {
          .nav-link h6 {
            font-size: 1.2rem; /* Adjust font size for medium devices */
          }
        }

        @media (min-width: 992px) {
          .nav-link h6 {
            font-size: 1.3rem; /* Adjust font size for large devices */
          }
        }

        .nav-link:hover {
          text-decoration: underline;
          color: #007bff; /* Add desired hover color */
        }

        .dropdown-menu {
          font-family: 'Roboto', sans-serif; /* Apply Roboto font */
        }

        .dropdown-item:hover {
          background-color: #f8f9fa; /* Background color on hover */
        }

        h3 {
          font-size: 1.75rem; /* Font size for h3 */
          font-weight: 600; /* Font weight for h3 */
        }
      `}</style>
    </>
  );
};

export default MnavBar;
