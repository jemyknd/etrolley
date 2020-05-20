import React from 'react';
import coverImage from '../images/coverImage.jpg';
import './css/homecovercontainer.css';

const ContentPhoneSmall = () => (
    <div className=" coverHeight flex justify-center items-center" style={{backgroundImage:`url(${coverImage})`}}>
    <div className=" w-90 flex flex-column justify-center items-center innerheight ">

        <div>Purchase with 10% discounts </div>
        <div className="f3 fw5 black">FINAL CLEARANCE</div>
        <div className = "black f5 pb1">Take 20% Off ‘Sale Must-Haves'</div>
        <div className="  justify-center w-100   tc flex flex-column "> 
           <div className="pointer mb3 mt1 ind w-100 shadow-hover  hover-bg-black ba b--black pa1 hover-white f5 tc">WOMEN' SHOP</div>
           <div className="pointer  ind w-100 shadow-hover hover-bg-black   ba pa1 hover-white f5 tc b--black">MEN'S SHOP</div>
           </div>

    </div>
</div>
)

export default ContentPhoneSmall;
