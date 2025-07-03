import React from 'react';
import Buttons from '../components/Buttons';
import './Recommended.css'
const Recommended = () => {
    return (
        <div>
            <h3 className='recommended-title'>Recommended</h3>

            <div className='recomended-flex'>
                <Buttons title="All"/>
                <Buttons title="Nike"/>
                <Buttons title="Adidas"/>
                <Buttons title="Vans"/>
            </div>
        </div>
    );
};

export default Recommended;