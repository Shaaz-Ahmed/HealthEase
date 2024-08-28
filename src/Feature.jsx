// import React from 'react';
// import  delivery from './Assets/dell.jpeg';

// const Feature = () => {
//   return (
//     <div className="container">
//     <div className='row'>
//     <div className="card" style={{ width: '15rem', marginLeft: '40px' }}>
//         <img 
//           className="card-img-top" 
//           src={delivery}
//           alt="Card image cap" 
//           style={{ borderRadius: '50%', width: '100%', height: 'auto' }}
//         />
//         <div className="card-body">
//           <p className="card-text">
//           <b>Save Big on Medicines</b><br/><br/>
//           "Discounted meds, unbeatable savings for you."
//           </p>
//         </div>
//       </div>

//       <div className="card" style={{ width: '15rem', marginLeft: '20px' }}>
//         <img 
//           className="card-img-top" 
//           src={delivery}
//           alt="Card image cap" 
//         />
//         <div className="card-body">
//           <p className="card-text">
//           <b>"Fast Delivery: Get Meds Quickly"</b><br/><br/>
//           "Swift shipping ensures prompt medication access."
//           </p>
//         </div>
//       </div>

//       <div className="card" style={{ width: '15rem', marginLeft: '20px' }}>
//         <img 
//           className="card-img-top" 
//           src={delivery}
//           alt="Card image cap" 
//         />
//         <div className="card-body">
//           <p className="card-text">
//           <b>Customer Support</b><br/><br/>
//           "Dedicated help for all your queries."
//           </p>
//         </div>
//       </div>

//       <div className="card" style={{ width: '15rem', marginLeft: '20px' }}>
//         <img 
//           className="card-img-top" 
//           src={delivery}
//           alt="Card image cap" 
//         />
//         <div className="card-body">
//           <p className="card-text">
//           <b>Wide Variety</b><br/><br/>"Extensive selection, tailored to your needs."
//           </p>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Feature;

import React from 'react';
import delivery from './Assets/dell.jpeg'; // Ensure this path is correct

const Feature = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img 
              className="card-img-top" 
              src={delivery}
              alt="Card image cap" 
              style={{ borderRadius: '50%', width: '100%', height: 'auto' }}
            />
            <div className="card-body">
              <p className="card-text">
                <b>Save Big on Medicines</b><br/><br/>
                "Discounted meds, unbeatable savings for you."
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img 
              className="card-img-top" 
              src={delivery}
              alt="Card image cap" 
            />
            <div className="card-body">
              <p className="card-text">
                <b>"Fast Delivery: Get Meds Quickly"</b><br/><br/>
                "Swift shipping ensures prompt medication access."
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img 
              className="card-img-top" 
              src={delivery}
              alt="Card image cap" 
            />
            <div className="card-body">
              <p className="card-text">
                <b>Customer Support</b><br/><br/>
                "Dedicated help for all your queries."
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img 
              className="card-img-top" 
              src={delivery}
              alt="Card image cap" 
            />
            <div className="card-body">
              <p className="card-text">
                <b>Wide Variety</b><br/><br/>
                "Extensive selection, tailored to your needs."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
