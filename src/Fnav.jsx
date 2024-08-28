import React from 'react';


const Fnav = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Flipkart</a>
          <img src="images/flipkart-logo-C9E637A758-seeklogo.com.png" width="30" height="30" className="d-inline-block align-top" alt="" />
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
      
      {/* CAROUSEL */}
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="images/qqq.jpg" alt="First slide" id="c_images" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/c1.jpg" id="c_images" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/qqqq.jpg" id="c_images" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/c3.jpg" id="c_images" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/c4.png" id="c_images" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      
      {/* GRID ITEMS */}
      <div id="carousel_items">
        <div className="row">
          <div className="col-sm-2" id="c_i_1">
            <h4>Deals Of The Day</h4>
            <p><i className="far fa-clock"></i>  20 : 25 : 18</p>
            <button type="button" className="btn btn-primary">View All</button>
          </div>
          <div></div>
          <div className="col-sm-8" id="c_i_2">
            <div id="carousel_items_grid" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card" style={{ width: '18rem' }} id="card1">
                        <img className="card-img-top" src="images/as114as115-9-andrew-scott-brown-original-imaepy6mxxpugtmx.jpeg" alt="Card image cap" id="g_images" />
                        <div className="card-body">
                          <h5 className="card-title">Premium Shoes</h5>
                          <p className="card-text">Buy these calvin klein shoes and add some style to your daily life at a discounted price</p>
                          <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                      </div>  
                    </div>
                    <div className="col-sm-4">
                      <div className="card" style={{ width: '18rem' }} id="card1">
                        <img className="card-img-top" src="images/doubledin-with-bluetooth-usb-full-hd-woodman-original-imaemyapjdyhvday.jpeg" alt="Card image cap" id="g_images" />
                        <div className="card-body">
                          <h5 className="card-title">Bluetooth usb</h5>
                          <p className="card-text">Buy this bluetooth USB with best range only on flipkart and at 205 off on MRP</p>
                          <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card" style={{ width: '18rem' }} id="card1">
                        <img className="card-img-top" src="images/extra-large-wall-stickers-wallpaper-wardrobe-office-table-original-imaf2hgnnyfafzxu.jpeg" alt="Card image cap" id="g_images" />
                        <div className="card-body">
                          <h5 className="card-title">Wall Stickers</h5>
                          <p className="card-text">Decorate your walls with some awesome wallpapers and you can buy them at a discount</p>
                          <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card" style={{ width: '18rem' }} id="card1">
                        <img className="card-img-top" src="images/one-size-fits-all-p358bk4p-fastrack-original-imaey5tvyjttfdza.jpeg" alt="Card image cap" id="g_images" />
                        <div className="card-body">
                          <h5 className="card-title">Fastrack glasses</h5>
                          <p className="card-text">Add Some style to yourself with these latest styled fastrack glasses only on Flipkart</p>
                          <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card" style={{ width: '18rem' }} id="card1">
                        <img className="card-img-top" src="images/xiaomi-redmi-9-power-blazing-blue-original-imafzwgcmsh8gufq.jpeg" alt="Card image cap" id="g_images" />
                        <div className="card-body">
                          <h5 className="card-title">Xiaomi phone</h5>
                          <p className="card-text">Buy latest xiaomi mobile and get exciting offers on your next purchase</p>
                          <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card" style={{ width: '18rem' }} id="card1">
                        <img className="card-img-top" src="images/redmi-note-10s-navy-blue-128-gb-original-imafz78yufv4jtbx.jpeg" alt="Card image cap" id="g_images" />
                        <div className="card-body">
                          <h5 className="card-title">Redmi Note 10</h5>
                          <p className="card-text">Get a discount on Redmi Note 10 only on Flipkart with a special offer</p>
                          <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carousel_items_grid" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel_items_grid" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* FOOTER */}
      <footer className="footer bg-dark text-white text-center">
        <div className="container">
          <span>© 2024 Flipkart. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Fnav;
