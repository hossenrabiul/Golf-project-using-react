import React from 'react';
import Input from '../../components/Input';
import './Category.css'
const Category = ({category, handlechange}) => {
    return (
        <div>
            <h3 className='slidber-title'>All Categories</h3>
          
            {
                category.map(category => <Input handlechange={handlechange}  title={category.name} value={category.name.toLowerCase()} name="test1"/>)
            }
            {/* <Input
                title="Shoes"
                value="shoes"
                name="test1"
            />
            <Input
                title="Sendle"
                value="sendle"
                name="test1"
            />
            <Input
                title="Vans"
                value="vans"
                name="test1"
            />
            <Input
                title="Hills"
                value="hills"
                name="test1"
            /> */}
        </div>
    );
};

export default Category;