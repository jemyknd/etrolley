import React from 'react';
import coverImage from '../images/coverImage.jpg';
import './css/homecovercontainer.css';


const ContentLarge = () => (
    <div className=" coverHeight flex justify-center items-center" style={{backgroundImage:`url(${coverImage})`}}>
    <div className=" w-90 flex flex-column justify-center items-center innerheight ">

        <div>Purchase with 10% discounts </div>
        <div className="f1 fw5 black">FINAL CLEARANCE</div>
        <div className = "black f4">Take 20% Off ‘Sale Must-Haves'</div>
        <div className="  justify-around w-50   tc flex flex-row "> 
           <div className="pointer   w-40 ba tc  pa1 f5 hover-bg-black hover-white bg-animate b--black black">WOMEN' SHOP</div>
           <div className="pointer   w-40  ba pa1 f5 tc hover-bg-black hover-white bg-animate b--black black">MEN'S SHOP</div>
           </div>

    </div>
</div>
);

export default ContentLarge;