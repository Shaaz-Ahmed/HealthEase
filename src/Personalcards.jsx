import React from 'react';
import Personalc from './Personalc';
import image1 from './Assets/fashwash.png';
import './index.css';

const Personalcards = () => {
    return (
        <div className='product'>
            <Personalc
                image={image1}
                title='COQ 300mg Soft Gel'
                content='Mkt: VLLC Personal Care ltd'
                price='100'
            />
            <Personalc
               image={image1}
                title='COQ 300mg Soft Gel'
                content='Mkt: VLLC Personal Care ltd'
                price='100'
            />

<Personalc
                image={image1}
                title='COQ 300mg Soft Gel'
                content='Mkt: VLLC Personal Care ltd'
                price='100'
            />

<Personalc
              image={image1}
                title='COQ 300mg Soft Gel'
                content='Mkt: VLLC Personal Care ltd'
                price='100'
            />

<Personalc
               image={image1}
                title='COQ 300mg Soft Gel'
                content='Mkt: VLLC Personal Care ltd'
                price='100'
            />


            {/* Add more PersonalCard components as needed */}
        </div>
    );
};

export default Personalcards;
