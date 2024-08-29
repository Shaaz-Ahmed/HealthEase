// import React from 'react';
// import { FaShoppingCart } from 'react-icons/fa';

// const Personalc = (props) => {
//   return (
//     <div className='container' style={{ padding: '5px' }}>
//       <div className="card" style={{ width: '15rem', position: 'relative', backgroundColor: 'white', margin: '0 auto', padding: '10px' }}>
//         {/* Cart Icon */}
//         <a 
//           href="/cart" 
//           style={{
//             position: 'absolute',
//             bottom: '10px',
//             right: '10px',
//             backgroundColor: '#E1EEF2',
//             width: '35px', // Slightly smaller circle
//             height: '35px', // Slightly smaller circle
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '1.3rem', // Slightly smaller icon
//             color: 'black'
//           }}
//         >
//           <FaShoppingCart />
//         </a>

//         <img 
//           src={props.image} 
//           className="card-img-top" 
//           alt="Card image" 
//           style={{ height: '150px', objectFit: 'cover' }} // Slightly smaller image
//         />

//         <div className="card-body" style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>
//           <h5 className="card-title" style={{ marginBottom: '5px' }}>{props.title}</h5>
//           <p className="card-text" style={{ fontSize: '0.7rem', marginBottom: '5px' }}>
//             {props.content}
//           </p>
//           <p className="card-text" style={{ fontSize: '0.8rem', marginBottom: '' }}>
//             {props.price}
//           </p>
//           <a href="#" className="btn btn-primary" style={{ padding: '5px 10px' }}>Buy Now</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Personalc;

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { LuIndianRupee } from "react-icons/lu";

const Personalc = (props) => {
  return (
    
    <div className='container' style={{ padding: '5px', maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
    
      <div className="card" style={{ width: '100%', maxWidth: '15rem', position: 'relative', backgroundColor: 'white', padding: '10px' }}>
        {/* Cart Icon */}
        
        <a 
          href="/cart" 
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            backgroundColor: '#E1EEF2',
            width: '35px', // Slightly smaller circle
            height: '35px', // Slightly smaller circle
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem', // Slightly smaller icon
            color: 'black'
          }}
        >
          <FaShoppingCart />
        </a>

        <img 
          src={props.image} 
          className="card-img-top" 
          alt="Card image" 
          style={{ height: '150px', objectFit: 'cover' }} // Slightly smaller image
        />

        <div className="card-body" style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>
        <h6 className="card-title" style={{ marginBottom: '5px', fontSize: '1rem', fontWeight: 'lighter' }}>
  {props.title}
</h6>

          <p className="card-text" style={{ fontSize: '0.7rem', marginBottom: '5px', fontWeight: 'lighter' }}>
            {props.content}
          </p>
          <p className="card-text" style={{ fontSize: '0.8rem', marginBottom: '', fontWeight: 'lighter' }}>
          <LuIndianRupee />{props.price}
          </p>
          <a href="#" className="btn btn-primary" style={{ padding: '5px 10px' }}>Buy Now</a>
        </div>
      </div>

          
    </div>
    
  );
}

export default Personalc;

