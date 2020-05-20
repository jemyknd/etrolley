import React from 'react';
import coverImage from '../images/coverImage.jpg';
import './css/homecovercontainer.css';


const ContentMedium = () => (
    <div className=" coverHeight flex justify-center items-center" style={{backgroundImage:`url(${coverImage})`}}>
    <div className=" w-90 flex flex-column justify-center items-center innerheight ">

        <div>Purchase with 10% discounts </div>
        <div className="f1 fw5 black">FINAL CLEARANCE</div>
        <div className = "black f4">Take 20% Off ‘Sale Must-Haves'</div>
        <div className=" btn_alignmt  justify-around w-70  tc flex flex-row "> 
           <div className="pointer bg-animate w-40 shadow-hover  hover-bg-black  wdth ba b--black pa1 hover-white f5 tc">WOMEN' SHOP</div>
           <div className="pointer bg-animate w-40 shadow-hover hover-bg-black style4  wdth ba pa1 hover-white f5 tc b--black">MEN'S SHOP</div>
           </div>

    </div>
</div>
);

export default ContentMedium;