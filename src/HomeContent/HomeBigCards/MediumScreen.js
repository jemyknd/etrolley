import React from "react";
import "./css/LargeScreeen.css";


const MediumScreen = () => (
  <div className="flex flex-row justify-between ">
      <div className = "w-50 vh-75 flex  items-center">
      <div
      style={{ backgroundColor: "papayawhip" }}
      className="flex justify-center items-center h-75 wLL ">
      <div className=" flex flex-column w-70 ">
        <div className=" black-70 f5 tc">NEW ARRIVALS</div>
        <div className=" fw4 black f4 mt1 tc">TOUCH OF FASHION</div>
        <div className=" flex tc justify-center ma1 ">
          <div className="ba pointer hover-bg-white hover-black bg-animate b--black bg-black white  pa1 pl2 pr2">
            DISCOVER MORE!
          </div>
        </div>
      </div>
    </div>
      </div>
    

    <div className="w-50 vh-75 flex justify-end items-center">
    <div
      style={{ backgroundColor: "papayawhip" }}
      className="flex justify-center items-center h-75 wLL ">
      <div className=" flex flex-column w-70 ">
        <div className=" black-70 f5 tc">DISCOVER THEM ALL</div>
        <div className=" fw4 black f4 mt1 tc">THIS SEASON'S BOMBER JACKETS</div>
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

export default MediumScreen;
