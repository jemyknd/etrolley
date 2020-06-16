import React, { Component } from "react";
import "./css/LargeScreen.css";
import Sticky from "react-sticky-el";
import { Divider, Select, Popover } from "antd";
import NavCategory from "./NavCategory";
import Men from "./Men";
import Women from "./Women";
import { connect } from "react-redux";
import {
  hideCategory,
  showCategory,
  hideMen,
  showMen,
  hideWomen,
  showWomen,
  showTopDrawer,
  hideTopDrawer,
} from "../Redux//Actions/HeaderComponts/LargeScreen/Actions";
import {BsSearch} from "react-icons/bs";
import { FaRegUser,FaRegHeart, FaBalanceScale } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";
import {
  DownOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const help = (
  <div>
    <div className=" pointer">My Account</div>
    <div className=" pointer">Agent</div>
    <div className=" pointer">Customer Care</div>
    <div className=" pointer">Business</div>
    <div className=" pointer">FAQs</div>
  </div>
);
const mapDispatchToProps = (dispatch) => {
  return {
    onMouseEnterCategory: () => dispatch(showCategory()),
    onMouseLeaveCategory: () => dispatch(hideCategory()),
    onMouseEnterMen: () => dispatch(showMen()),
    onMouseLeaveMen: () => dispatch(hideMen()),
    onMouseEnterWomen: () => dispatch(showWomen()),
    onMouseLeaveWomen: () => dispatch(hideWomen()),
    onOpenSearch: () => dispatch(showTopDrawer()),
    onCloseSearch: () => dispatch(hideTopDrawer()),
  };
};
const mapStateToProps = (state) => ({
  categoryState: state.header.categoryState,
  menState: state.header.menState,
  womenState: state.header.womenState,
  topDrawerState: state.header.topDrawerState,
  searchInputValue: state.header.topDrawerSearchField,
});
class LargeScreen extends Component {
  render() {
    const {
      onMouseEnterCategory,
      onMouseLeaveCategory,
      categoryState,
      onMouseEnterMen,
      onMouseLeaveMen,
      menState,
      onMouseEnterWomen,
      onMouseLeaveWomen,
      womenState,
      onOpenSearch,
    } = this.props;
    return (
      <nav className="ontop shadowcon">
        <div className="Lvh  flex flex-row justify-center">
          <div className="h-100 w-90 flex flex-row">
            <div className="h-100 black  w-10 flex  items-center">
              <div >LOGO</div>
            </div>
            <div className="h-100  ml-auto w-33 flex flex-row justify-between items-center">
            <div>
                  <IconContext.Provider
                    value={{
                      color: "black",
                      size: "18px",
                      className: "global-class-name",
                    }}>
                    <div className="pointer pt1 ">
                      <FaRegUser />
                    </div>
                  </IconContext.Provider>
                </div>
                <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "18px",
                    className: "global-class-name  pointer",
                  }}>
                  <div className="pointer pt1">
                    <FaRegHeart/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "18px",
                    className: "global-class-name  pointer",
                  }}>
                  <div className="pointer pt1">
                    <FaBalanceScale/>
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
                    <div className="pointer pt1  ">
                      <MdShoppingCart />
                    </div>
                  </IconContext.Provider>
                </div>
              <div className="black">
                <Select
                  defaultValue="English"
                  style={{ width: 100,color:"black" }}
                  bordered={false}
                  loading={false}>
                  <Option value="English">English</Option>
                  <Option value="Arabic">Arabic</Option>
                  <Option value="Germany">Germany</Option>
                  <Option value="French">French</Option>
                  <Option value="Swahili">Swahili</Option>
                  <Option value="japanese">japanese</Option>
                  <Option value="Spanish">Spanish</Option>
                </Select>
              </div>
              <div clasName="black">
                <Select
                  defaultValue="UGX"
                  style={{ width: 100 ,color:"black"}}
                  bordered={false}
                  loading={false}>
                  <Option value="UGX">UGX (Shs)</Option>
                  <Option value="USD">USD ($)</Option>
                  <Option value="KSH">KSH (Shs)</Option>
                  <Option value="EUR">EUR (€)</Option>
                  <Option value="SGD">SGD ($)</Option>
                  <Option value="GBP">GBP (£)</Option>
                  <Option value="JPY">JPY (¥)</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <Divider className="Lmar" />
        <Sticky topOffset={50} stickyClassName={" z-2"}>
          <div className="Lvh2 flex flex-row justify-center bg-white-90 transparent ">
            <div className="h-100 w-90 flex flex-row">
              <div className="h-100 cwid flex flex-row black items-center justify-between">
                <div className="flex flex-row pointer">
                  <div>HOME</div>
                </div>

                <div
                  className="flex flex-row pointer h-100  items-center"
                  onMouseEnter={onMouseEnterCategory}
                  onMouseLeave={onMouseLeaveCategory}>
                  <div>CATEGORIES</div>
                  <div>
                    <DownOutlined
                      style={{ fontSize: "10px", marginLeft: "5px" }}
                    />
                  </div>
                </div>

                <div className="flex flex-row pointer">
                  <div>BEST SELLERS</div>
                </div>

                <div
                  className="flex flex-row pointer h-100  items-center"
                  onMouseEnter={onMouseEnterMen}
                  onMouseLeave={onMouseLeaveMen}>
                  <div>MEN'S</div>
                  <div>
                    <DownOutlined
                      style={{ fontSize: "10px", marginLeft: "5px" }}
                    />
                  </div>
                </div>

                <div
                  className="flex flex-row pointer h-100 items-center"
                  onMouseEnter={onMouseEnterWomen}
                  onMouseLeave={onMouseLeaveWomen}>
                  <div>WOMEN'S</div>
                  <div>
                    <DownOutlined
                      style={{ fontSize: "10px", marginLeft: "5px" }}
                    />
                  </div>
                </div>
                <div className="pointer">
                  <div>SELL</div>
                </div>

                <Popover placement="bottom" content={help}>
                  <div className="flex flex-row pointer">
                    <div>HELP</div>
                    <div>
                      <DownOutlined
                        style={{ fontSize: "10px", marginLeft: "5px" }}
                      />
                    </div>
                  </div>
                </Popover>
              </div>
              <div
                className="h-100 Lwid ml-auto  flex flex-row justify-around items-center pointer"
                >
                <div className="hover-black">SEARCH</div>
                <div className="pointer  ">
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
          </div>
          <Divider className="Lmar" />
          <NavCategory
            show={categoryState}
            onMouseLeave={onMouseLeaveCategory}
          />
          <Men showMen={menState} hideMen={onMouseLeaveMen} />
          <Women show={womenState} hide={onMouseLeaveWomen} />
        </Sticky>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LargeScreen);
