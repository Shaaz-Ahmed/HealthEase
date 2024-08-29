import React from 'react';
import Personalc from './Personalc';
import image1 from './Assets/fashwash.png';
import './index.css';

const Personalcards = () => {
    return (
        <div className='product'>
            <Personalc
                image={image1}
                title='This is title'
                content='description'
                price='100'
            />
            <Personalc
                image={image1}
                title='Another title'
                content='Another description'
                price='150'
            />

<Personalc
                image={image1}
                title='Another title'
                content='Another description'
                price='150'
            />

<Personalc
                image={image1}
                title='Another title'
                content='Another description'
                price='150'
            />

<Personalc
                image={image1}
                title='Another title'
                content='Another description'
                price='150'
            />

<Personalc
                image={image1}
                title='Another title'
                content='Another description'
                price='150'
            />
            {/* Add more PersonalCard components as needed */}
        </div>
    );
};

export default Personalcards;
