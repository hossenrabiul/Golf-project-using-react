import React from 'react';
import '../Slidber/Slidber.css'
const Input = ({title, name, value, handlechange}) => {
    return (
        <div>
            <label className='slidber-label-container'>
                <input type="radio" onChange={handlechange} value={value} name={name} id="" />
                <span className='checkout'></span>{title}
            </label>
        </div>
    );
};

export default Input;