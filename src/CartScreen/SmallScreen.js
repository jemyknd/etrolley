import React from "react";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Divider, Input } from "antd";
import "./css/cartscreen.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { IconContext } from "react-icons";
import FooterContainer from "../FooterContainer/FooterContainer";
import { connect } from "react-redux";
import {
  selectCountry,
  selectRegion,
  zipCode,
  description,
} from "../Redux/Actions/Cart/Actions";
const { TextArea } = Input;

const mapDispatchToProps = (dispatch) => ({
  selectCountry: (country) => dispatch(selectCountry(country)),
  selectRegion: (region) => dispatch(selectRegion(region)),
  zip: (zip) => dispatch(zipCode(zip)),
  descriptn: (desc) => dispatch(description(desc)),
});

const mapStateToProps = (state) => ({
  country: state.cart.country,
  region: state.cart.region,
});

const SmallScreen = ({
  country,
  region,
  selectCountry,
  selectRegion,
  zip,
  descriptn,
}) => {
  return (
    <div>
      <HeaderContainer />
      <div className="w-100 flex justify-center">
        <div className=" innerCont">
          <div className="f7 mt3 ">
            <span className="pointer hover-black">Home</span>/ Inside your
            trolley
          </div>
          <div className="f3 fw4 mt3 black w-100 tc">Shopping Cart</div>
          <div className=" mt3 w-100 mb4 flex items-baseline justify-between flex-column">
            <div className="w-100 ">
              <div>
                <div className="w-100 flex flex-row mb1">
                  <div className="w-30">PRODUCT</div>
                  <div className="w-30 tc ">PRICE</div>
                  <div className="w-10 tc ">QUANTITY</div>
                  <div className="w-30 tr">TOTAL</div>
                </div>
                <Divider className="mo" />
              </div>
              <div>
                <div className="w-100 flex flex-row items-center mb2 mt2">
                  <div className="w-30 flex flex-column">
                    <div className="flex flex-row">
                      <div>
                        <IconContext.Provider
                          value={{
                            color: "black",
                            size: "20px",
                            className: "global-class-name pointer",
                          }}>
                          <div className=" h-100 flex items-center mr2">
                            <RiDeleteBin5Line />
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div className="w-90 sivh pointer bg-orange mr3">img</div>
                    </div>
                    <div>
                      <div className="flex flex-column mb1 tc   justify-center">
                        <div className="black pointer">Name</div>
                        <div className="pointer">lable/size</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-30 tc black f5 pointer ">UGX 70000</div>
                  <div className="w-10 tc">
                    <div className="w-100 bcc pointer  pt1 pb1 ba">
                      <input
                        type="number"
                        min="1"
                        style={{
                          outline: "none",
                          border: "none",
                          textDecoration: "none",
                          textAlign: "center",
                          height: "100%",
                          width: "90%",
                          fontSize: "15px",
                          color: "black",
                        }}
                        //   onChange={this.handleEmailInput}
                        spellCheck="false"
                      />
                    </div>
                  </div>
                  <div className="w-30 tr black pointer f5">UGX 70000</div>
                </div>
                <Divider className="mo" />
              </div>
              <div className="w-100 flex flex-row items-center justify-between mt4">
                <div className="flex flex-row">
                  <IconContext.Provider
                    value={{
                      color: "black",
                      size: "20px",
                      className: "global-class-name pointer",
                    }}>
                    <div className=" mr2 ">
                      <BsArrowLeft />
                    </div>
                  </IconContext.Provider>
                  <div className="black pointer">CONTINUE SHOPPING</div>
                </div>
                <div className="flex flex-row">
                  <IconContext.Provider
                    value={{
                      color: "black",
                      size: "20px",
                      className: "global-class-name pointer",
                    }}>
                    <div className="mr2 ">
                      <FiRefreshCcw />
                    </div>
                  </IconContext.Provider>
                  <div className="black pointer">UPDATE CART</div>
                </div>
              </div>
            </div>
            <div className=" autoh w-100 items-center flex flex-column ba reciptbg b--black-10 mt4">
              <div className="w-90">
                <div className="flex flex-column contbg justify-center tc">
                  <div className="black f5 mt2 mb2 ">CART TOTAL</div>
                  <div className="black  ">Estimate Shipping and TAX</div>
                  <div className="black-50  f8">
                    Enter your destination to get a shipping estimate.
                  </div>
                  <div className="black mt3 self-start ">COUNTRY*</div>
                  <div className="flex flex-column">
                    <div className="w-100 justify-center flex flex-column  ">
                      <CountryDropdown
                        value={country}
                        onChange={(val) => selectCountry(val)}
                        className="pa1"
                      />

                      <div className="black mt3 self-start">REGION*</div>

                      <RegionDropdown
                        country={country}
                        value={region}
                        onChange={(val) => selectRegion(val)}
                        className="pa1"
                      />
                    </div>
                  </div>
                  <div className="black mt3 self-start ">ZIP/POSTAL CODE*</div>
                  <div className="flex justify-center  w-100">
                    <div className=" ba w-100 bcc ">
                      <input
                        placeholder="ZIP/POSTAL CODE "
                        type="text"
                        onChange={(event) => zip(event.target.value)}
                        required
                        spellCheck="false"
                        className="outline-0 no-underline pt1 pb1 pl1 b--none fieldheight ba w-100"
                      />
                    </div>
                  </div>
                  <Divider dashed />
                  <div className="black">Special instructions for seller</div>
                  <div>Add special instructions for your order...</div>
                  <div className="flex w-100 justify-center ">
                    <TextArea
                      onChange={(event) => descriptn(event.target.value)}
                      placeholder="My order..."
                      autoSize={{ minRows: 3, maxRows: 5 }}
                      spellCheck="false"
                      className="outline-0 no-underline mt2 b--none ba w-90"
                    />
                  </div>
                  <Divider dashed />
                  <div className="black f4">SUBTOTAL</div>
                  <div className="black f5">$100.54</div>
                  <div className="underline">
                    Shipping calculated at checkout
                  </div>
                  <div className=" flex tc justify-center ma1 mt2 mb3 ">
                    <div className="ba pointer bg-animate b--black bg-black white pa1 pl2 pr2 hover-bg-white hover-black">
                      PROCEED TO CHECKOUT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallScreen);
