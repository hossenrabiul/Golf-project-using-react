import React from 'react';
import Input from '../../components/Input';

const Price = () => {
    return (
        <div>
            <h3 className='slider-title mt-7'>Price</h3>

            <Input
                title="All"
                value=''
                name="test2"
            />
            <Input
                title="$0 - 50"
                value='50'
                name="test2"
            />
            <Input
                title="50 - 100"
                value='100'
                name="test2"
            />
            <Input
                title="$100 - 150"
                value=''
                name="test2"
            />
            <Input
                title="$150  - 200"
                value=''
                name="test2"
            />
        </div>
    );
};

export default Price;