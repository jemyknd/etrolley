import React from "react";
import Sticky from "react-sticky-el";
import { Divider } from "antd";
import {connect} from 'react-redux'
import LeftDrawer from './LeftDrawer';
import "./css/smallScreen.css";
import {
  BarsOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MergeCellsOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  showLeftDrawer,
  hideLeftDrawer,
  } from "../Redux/Actions/HeaderComponts/LargeScreen/Actions";
  
  const mapStateToProps = (state) => {
    return({
      leftDrawerState : state.header.leftDrawerState
    })
  }
  const mapDispatchToProps = (dispatch) => {
   return ({
     showLeftDrawer: () => dispatch(showLeftDrawer()),
     hideLeftDrawer: () => dispatch(hideLeftDrawer()),
   })
  }


const SmallScreen = ({onClose,leftDrawerState,showLeftDrawer,hideLeftDrawer}) => (
  <Sticky topOffset={50} stickyClassName={"animated fadeIn z-2"}>
    <div className="wat mvh w-100 bg-white-80 transparent">
      <div className="h-100 w-100  flex flex-row justify-center">
        <div className="h-100 w-80  flex flex-row">
          <div className="h-100  flex flex-row items-center  justify-around wee">
            <div>
            <LeftDrawer onClose={hideLeftDrawer} visible={leftDrawerState}/>
            </div>
            <div className="pointer" onClick={showLeftDrawer}>
              <BarsOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="pointer">LOGO</div>
          </div>
          <div className="h-100  flex flex-row items-center  justify-around ml-auto pee">
            <div className="pointer ">
              <QuestionCircleOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="pointer ">
              <UserOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="pointer">
              <HeartOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="pointer">
              <MergeCellsOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="pointer">
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
            </div>
          </div>
        </div>
      </div>
      <Divider className="mMar" />
    </div>
  </Sticky>
);

export default connect(mapStateToProps ,mapDispatchToProps)(SmallScreen);
