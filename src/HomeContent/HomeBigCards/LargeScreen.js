import React from "react";
import "./css/LargeScreeen.css";


const LargeScreen = () => (
  <div className="flex flex-row justify-between mt4 mb4 ">
      <div className = "w-50 tsvh flex  items-center ">
      <div
      style={{ backgroundColor: "papayawhip" }}
      className="flex justify-center items-center h-100 wLL ">
      <div className=" flex flex-column w-70 ">
        <div className=" black-70 f4 tc">NEW ARRIVALS</div>
        <div className=" fw4 black f2 mt1 tc">TOUCH OF FASHION</div>
        <div className=" flex tc justify-center ma1 ">
          <div className="ba pointer hover-bg-white hover-black bg-animate bg-black b--black white  pa1 pl2 pr2">
            DISCOVER MORE!
          </div>
        </div>
      </div>
    </div>
      </div>
    

    <div className="w-50 tsvh flex justify-end items-center">
    <div
      style={{ backgroundColor: "papayawhip" }}
      className="flex justify-center items-center h-100 wLL ">
      <div className=" flex flex-column w-70 ">
        <div className=" black-70 f4 tc">DISCOVER THEM ALL</div>
        <div className=" fw4 black f2 mt1 tc">THIS SEASON'S BOMBER JACKETS</div>
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
{/* <div className="pointer bgc hover-bg-black hover-white bg-animate ba w-20 h-75 tc justify-center items-center flex  ">
SUBSCRIBE!
</div> */}
export default LargeScreen;
