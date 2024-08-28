// import React from 'react';
// import { FaRegHeart } from "react-icons/fa";
// import { RiLogoutCircleLine } from "react-icons/ri";
// import { BiSolidOffer } from "react-icons/bi";
// import img from './Assets/small-banner1.png';

// const Shopnow = () =>{
//     return(
//         <>
//             <div className='container'>
//             <div class="container">
//         <div class="row">
//             <div class="col-6">
//             <h3>Navigating the Healthcare Landscape: Maximizing Revenue Streams and Sustainability</h3>
//             <br></br>
//             <FaRegHeart/> <span>Market Demand</span> <br></br>
//             <RiLogoutCircleLine /> <span>Healthcare Reimbursement</span>  <br></br>
//             <BiSolidOffer /><span>Long-Term Sustainability</span> <br></br>
//             <br></br>
//             <button>Shop Now</button>
//             </div>
//             {/* <div class="col-1">
           
//             </div> */}
//             <div class="col-2">
//            <img src={img} alt='side-banner'/>
//             </div>
            
//         </div>
// </div>
//             </div>
//         </>
//     )
// };
// export default Shopnow;

import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import img from './Assets/small-banner1.png';
import './index.css';

const Shopnow = () => {
  return (
    <div className="container my-4">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h3 className="mb-4">
            Navigating the Healthcare Landscape: Maximizing Revenue Streams and Sustainability
          </h3>
          <div className="d-flex align-items-center mb-3">
            <FaRegHeart className="me-2" /> 
            <span>Market Demand</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <RiLogoutCircleLine className="me-2" /> 
            <span>Healthcare Reimbursement</span>
          </div>
          <div className="d-flex align-items-center mb-4">
            <BiSolidOffer className="me-2" /> 
            <span>Long-Term Sustainability</span>
          </div>
          <button className="btn btn-primary">Shop Now</button>
        </div>

        <div className="col-md-6">
          <img src={img} alt='side-banner' className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Shopnow;
