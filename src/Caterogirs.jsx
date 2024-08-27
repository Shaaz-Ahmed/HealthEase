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
        <br/>
            <h4 id='cat'>Shop Our Top Categories</h4>
            <br/>
            <div className='container'>
                <div className='row'>
                    {/* Card 1 */}
                    <div className='col-2'>
                        <div className='card' style={{ width: '10rem' }}>
                            <img src={AYURDEVIC} className='card-img-top' alt="..." />
                            <div className='card-body'>
                                <p className='card-text'>
                                AYURDEVIC
                                </p>
                            </div>
                        </div>
                    </div>

                     {/* Card 1 */}
                     <div className='col-2'>
                        <div className='card' style={{ width: '10rem' }}>
                            <img src={img2} className='card-img-top' alt="..." />
                            <div className='card-body'>
                                <p className='card-text'>
                                BABY CARE
                                </p>
                            </div>
                        </div>
                    </div>

                     {/* Card 1 */}
                     <div className='col-2'>
                        <div className='card' style={{ width: '10rem' }}>
                            <img src={img4} className='card-img-top' alt="..." />
                            <div className='card-body'>
                                <p className='card-text'>
                                FITNESS
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-2'>
                        <div className='card' style={{ width: '10rem' }}>
                            <img src={img6} className='card-img-top' alt="..." />
                            <div className='card-body'>
                                <p className='card-text'>
                                Personal Care
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-2'>
                        <div className='card' style={{ width: '10rem' }}>
                            <img src={img7} className='card-img-top' alt="..." />
                            <div className='card-body'>
                                <p className='card-text'>
                                Health Care
                                </p>
                            </div>
                        </div>
                    </div>

                     {/* Card 1 */}
                     <div className='col-2'>
                        <div className='card' style={{ width: '10rem' }}>
                            <img src={img5} className='card-img-top' alt="..." />
                            <div className='card-body'>
                                <p className='card-text'>
                                OIL
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>

                     {/* Card 1 */}
                  
                    {/* Card 7 */}

                </div>
            </div>
        </>
    );
};

export default Categories;
