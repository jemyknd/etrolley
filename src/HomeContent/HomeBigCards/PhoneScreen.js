import React from "react";
import "./css/phonescreen.css";


const PhoneScreen = () => (
  <div className="flex w-100 flex-column justify-between HH mt4 ">
     <div className = "w-100 Pv  flex  items-center">
      <div
      style={{ backgroundColor: "papayawhip" }}
      className="flex justify-center items-center h-100 w-100  ">
      <div className=" flex flex-column w-70 ">
        <div className=" black-70 f6 tc">NEW ARRIVALS</div>
        <div className=" fw5 black f5 mt1 tc">TOUCH OF FASHION</div>
        <div className=" flex tc justify-center ma1 ">
          <div className="ba pointer hover-bg-white hover-black bg-animate b--black bg-black white  pa1 pl2 pr2">
            DISCOVER MORE!
          </div>
        </div>
      </div>
    </div>
      </div>
      <div className="w-100  Pv flex justify-end items-center mt2">
    <div
      style={{ backgroundColor: "papayawhip" }}
      className="flex justify-center items-center h-100 w-100 ">
      <div className=" flex flex-column w-70 ">
        <div className=" black-70 f6 tc">DISCOVER THEM ALL</div>
        <div className=" fw5 black f5 mt1 tc">THIS SEASON'S BOMBER JACKETS</div>
        <div className=" flex tc justify-center ma1 ">
          <div className="ba pointer hover-bg-white hover-black bg-animate b--black bg-black white  pa1 pl2 pr2">
            DISCOVER MORE!
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
);

export default PhoneScreen;
 