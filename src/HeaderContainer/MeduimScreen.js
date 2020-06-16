import React from "react";
import Sticky from "react-sticky-el";
import "./css/meduim.css";
import { connect } from "react-redux";
import LeftDrawer from "./LeftDrawer";
import { FiMenu } from "react-icons/fi";
import {BsSearch} from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";

import {
  showLeftDrawer,
  hideLeftDrawer,
} from "../Redux/Actions/HeaderComponts/LargeScreen/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    showLeftDrawer: () => dispatch(showLeftDrawer()),
    hideLeftDrawer: () => dispatch(hideLeftDrawer()),
  };
};
const mapStateToProps = (state) => {
  return {
    leftDrawerState: state.header.leftDrawerState,
  };
};

    const MeduimScreen =  ({leftDrawerState,showLeftDrawer,hideLeftDrawer} ) => (
      <Sticky topOffset={50} stickyClassName={"animated fadeIn z-2"}>
        <div className="mvh w-100 bg-white  flex justify-center shadowcon">
          <div className=" w-90 flex flex-column">
            <div className="w-100 mb2 mt3   flex flex-row justify-center justify-between mt2 mb1">
              <div className=" lwid flex flex-row justify-between ">
              <div>
            <LeftDrawer onClose={hideLeftDrawer} visible={leftDrawerState} hideLeftDrawer={hideLeftDrawer}/>
            </div>
                <div>
                  <IconContext.Provider
                    value={{
                      color: "black",
                      size: "20px",
                      className: "global-class-name",
                    }}>
                    <div className="pointer pt1  pb1" onClick={showLeftDrawer}>
                      <FiMenu />
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="black pt1  pb1">LOGO</div>
              </div>
              <div className="w-70  flex flex-row justify-center">
             
                <div className="w-90 ba bcc flex flex-row justify-between items-center">
                  <input
                    placeholder="Search Product, Brand, Category "
                    type="text"
                    style={{
                      outline: "none",
                      border: "none",
                      paddingLeft: "5px",
                      textDecoration: "none",
                      height: "100%",
                      width: "100%",
                      fontSize: "16px",
                      color: "black",
                    }}
                    //   onChange={this.handleEmailInput}
                    spellCheck="false"
                  />
                  <div className="pointer mr2 mt1 ">
                  <IconContext.Provider
                    value={{
                      color: "black",
                      size: "18px",
                      className: "global-class-name",
                    }}>
                    <div className="pointer">
                      <BsSearch />
                    </div>
                  </IconContext.Provider>
                  </div>
                </div>
              </div>
              <div className=" w-10 flex flex-row justify-between">
                <div>
                  <IconContext.Provider
                    value={{
                      color: "black",
                      size: "18px",
                      className: "global-class-name",
                    }}>
                    <div className="pointer pt1  pb1">
                      <FaRegUser />
                    </div>
                  </IconContext.Provider>
                </div>

                <div>
                  <IconContext.Provider
                    value={{
                      color: "black",
                      size: "18px",
                      className: "global-class-name",
                    }}>
                    <div className="pointer pt1  pb1">
                      <MdShoppingCart />
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sticky>
    );
export default connect(mapStateToProps, mapDispatchToProps)(MeduimScreen);
