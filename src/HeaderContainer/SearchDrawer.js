import React from "react";
import { Drawer, Divider } from "antd";
import "./css/Animate.css";
import "./css/searchdrawer.css"
import { connect } from "react-redux";
import { topDrawerSearchField } from "../Redux/Actions/HeaderComponts/LargeScreen/Actions";
import { SearchOutlined } from "@ant-design/icons";

const height = global.window.innerHeight / 2;

const mapDispatchToProps = (dispatch) => {
  return {
    searchInput: (event) => dispatch(topDrawerSearchField(event.target.value)),
  };
};

const SearchDrawer = ({ onClose, visible,searchInput,value }) => {

    const searching = value?(<div className=" black fw2 f4-ns h3 animated fadeIn fast">Searching for {`${value}`}</div>):null;
  return (
    <div>
      <Drawer
        bodyStyle ={{margin:"20px"}}
        height={height}
        placement="top"
        closable={true}
        onClose={onClose}
        visible={visible}>
        <p>WHAT ARE YOUR LOOKING FOR?</p>
        <div className=" w-90 flex flex-row ">
          <input
            placeholder="Search Products..."
            type="text"
            spellcheck="false"
            className="  black fw4 f3-ns h3 w-100 bb-0 bl-0 br-0 bt-0 pt4 pb4"
            style={{ outline: "none", textDecoration: "none" }}
            onChange={searchInput}
          />
          <div className="pointer mr-auto self-center">
            <SearchOutlined type="search" style={{ fontSize: "23px" }} />
          </div>
        </div>
        <Divider className="ma0" />
            <div >{searching}</div>
      </Drawer>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SearchDrawer);
