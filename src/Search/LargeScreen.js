import React from "react";
import "./css/search.css";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import FooterContainer from "../FooterContainer/FooterContainer";

const LargeScreen = () => (
  <div>
    <HeaderContainer />
    <div className="flex flex-column">
      <div className="w-100 flex justify-center mt4">
        <div className="black f4">WHAT ARE YOU LOOKING FOR?</div>
      </div>
      <div className="w-100 flex flex-row justify-center items-center mt6 mb6">
        <div className=" w-40 ba bcc pt2 pb2 pointer mr3">
          <input
            placeholder="Search Product, Brand and Category"
            type="text"
            style={{
              outline: "none",
              border: "none",
              paddingLeft: "5px",
              textDecoration: "none",
              height: "100%",
              width: "100%",
              fontSize: "15px",
              color: "black",
            }}
            //   onChange={this.handleEmailInput}
            spellCheck="false"
          />
        </div>
        <div className="pointer bwidth pt2 pb2  hover-bg-black hover-white bg-animate ba  b--black  tc justify-center items-center flex  ">
          SEARCH
        </div>
      </div>
    </div>
    <FooterContainer />
  </div>
);
export default LargeScreen;
