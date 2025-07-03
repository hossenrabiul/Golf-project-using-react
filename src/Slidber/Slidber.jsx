import React from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import './Slidber.css'
const Slidber = ({category, handlechange}) => {
    return (
        <div className='slidber'>
            <div>
                <Category category={category} handlechange={handlechange}/>
                <Price/>
            </div>
        </div>
    );
};

export default Slidber;