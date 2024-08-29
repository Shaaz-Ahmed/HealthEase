// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import img1 from './Assets/img1.jpg';
// import img2 from './Assets/img2.jpeg';
// import img4 from './Assets/img4.png';
// import img5 from './Assets/img5.jpg';
// import img6 from './Assets/img6.jpg';
// import img7 from './Assets/img7.jpeg';
// import AYURDEVIC from './Assets/AYURDEVIC.png';

// const Categories = () => {
//   return (
//     <>
//       <div className="text-center mb-4">
//         <h4 id="cat" className="mb-4">Shop Our Top Categories</h4>
//       </div>
//       <div className="container">
//         <div className="row">
//           {/* Card 1 */}
//           <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
//             <div className="card border-0 shadow-sm">
//               <img src={AYURDEVIC} className="card-img-top" alt="AYURDEVIC" />
//               <div className="card-body text-center">
//                 <p className="card-text">AYURDEVIC</p>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
//             <div className="card border-0 shadow-sm">
//               <img src={img2} className="card-img-top" alt="BABY CARE" />
//               <div className="card-body text-center">
//                 <p className="card-text">BABY CARE</p>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
//             <div className="card border-0 shadow-sm">
//               <img src={img4} className="card-img-top" alt="FITNESS" />
//               <div className="card-body text-center">
//                 <p className="card-text">FITNESS</p>
//               </div>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
//             <div className="card border-0 shadow-sm">
//               <img src={img6} className="card-img-top" alt="Personal Care" />
//               <div className="card-body text-center">
//                 <p className="card-text">Personal Care</p>
//               </div>
//             </div>
//           </div>

//           {/* Card 5 */}
//           <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
//             <div className="card border-0 shadow-sm">
//               <img src={img7} className="card-img-top" alt="Health Care" />
//               <div className="card-body text-center">
//                 <p className="card-text">Health Care</p>
//               </div>
//             </div>
//           </div>

//           {/* Card 6 */}
//           <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
//             <div className="card border-0 shadow-sm">
//               <img src={img5} className="card-img-top" alt="OIL" />
//               <div className="card-body text-center">
//                 <p className="card-text">OIL</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mb-4">
//       <h4 id="cat" className="mb-4">
 
//   <span style="background-color: red;">Best Fitness Product</span>

// </h4>
//       </div>

//       <style jsx>{`
//         .card-img-top {
//           object-fit: cover;
//           height: 150px; /* Adjust the height as needed */
//         }

//         .card-body {
//           background-color: #f8f9fa; /* Optional: light background for the card body */
//         }

//         .card-text {
//           font-family: 'Roboto', sans-serif; /* Apply the Roboto font */
//           font-size: 1rem;
//           font-weight: 500;
//           transition: color 0.3s ease;
//         }

//         .card-text:hover {
//           color: #007bff; /* Hover color for text */
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Categories;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpeg';
import img4 from './Assets/img4.png';
import img5 from './Assets/img5.jpg';
import img6 from './Assets/img6.jpg';
import img7 from './Assets/img7.jpeg';
import AYURDEVIC from './Assets/AYURDEVIC.png';

const Categories = () => {
  return (
    <>
      <div className="text-center mb-4">
        <h4 id="cat" className="mb-4">Shop Our Top Categories</h4>
      </div>
      <div className="container">
        <div className="row">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card border-0 shadow-sm">
              <img src={AYURDEVIC} className="card-img-top" alt="AYURDEVIC" />
              <div className="card-body text-center">
                <p className="card-text">AYURDEVIC</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card border-0 shadow-sm">
              <img src={img2} className="card-img-top" alt="BABY CARE" />
              <div className="card-body text-center">
                <p className="card-text">BABY CARE</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card border-0 shadow-sm">
              <img src={img4} className="card-img-top" alt="FITNESS" />
              <div className="card-body text-center">
                <p className="card-text">FITNESS</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card border-0 shadow-sm">
              <img src={img6} className="card-img-top" alt="Personal Care" />
              <div className="card-body text-center">
                <p className="card-text">Personal Care</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card border-0 shadow-sm">
              <img src={img7} className="card-img-top" alt="Health Care" />
              <div className="card-body text-center">
                <p className="card-text">Health Care</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card border-0 shadow-sm">
              <img src={img5} className="card-img-top" alt="OIL" />
              <div className="card-body text-center">
                <p className="card-text">OIL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-4">
        <h4 id="cat" className="mb-4">
          <span style={{ backgroundColor: 'yellow' }}>Best Fitness Product</span>
        </h4>
      </div>

      <style jsx>{`
        .card-img-top {
          object-fit: cover;
          height: 150px; /* Adjust the height as needed */
        }

        .card-body {
          background-color: #f8f9fa; /* Optional: light background for the card body */
        }

        .card-text {
          font-family: 'Roboto', sans-serif; /* Apply the Roboto font */
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .card-text:hover {
          color: #007bff; /* Hover color for text */
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Categories;
