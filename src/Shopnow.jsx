import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import img from './Assets/small-banner1.png';

const Shopnow = () =>{
    return(
        <>
            <div className='container'>
            <div class="container">
        <div class="row">
            <div class="col-6">
            <h3>Navigating the Healthcare Landscape: Maximizing Revenue Streams and Sustainability</h3>
            <br></br>
            <FaRegHeart/> <span>Market Demand</span> <br></br>
            <RiLogoutCircleLine /> <span>Healthcare Reimbursement</span>  <br></br>
            <BiSolidOffer /><span>Long-Term Sustainability</span> <br></br>
            <br></br>
            <button>Shop Now</button>
            </div>
            {/* <div class="col-1">
           
            </div> */}
            <div class="col-2">
           <img src={img} alt='side-banner'/>
            </div>
            
        </div>
</div>
            </div>
        </>
    )
};
export default Shopnow;