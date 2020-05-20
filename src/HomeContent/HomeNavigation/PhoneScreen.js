import React from 'react';
import './css/phonescreen.css';

const PhoneScreen = () => (
    <div className="w-100 flex flex-row justify-center mt4 ">
        <div className="w-90 justify-around flex flex-row flex-wrap mfs">
            <div className="pointer hover-black-90">New Products</div>
            <div  className="pointer hover-black-90">Special Products</div>
            <div  className="pointer hover-black-90">Featured Products</div>
        </div>
    </div>
);
export default PhoneScreen;


