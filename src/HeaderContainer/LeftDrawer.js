import React from "react";
import { Drawer, Divider, Collapse } from "antd";
import ListComponent from "../Universal/ListComponent";
import "./css/leftdrawer.css";
import { connect } from "react-redux";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { hideLeftDrawer,topDrawerSearchField } from "../Redux/Actions/HeaderComponts/LargeScreen/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    hideLeftDrawer: () => dispatch(hideLeftDrawer()),
    searchInput: (event) => dispatch(topDrawerSearchField(event.target.value)),

  };
};

const mapStateToProps = (state) =>{
  return({
    searchField : state.header.topDrawerSearchField
  })
}
const customPanelStyle = {
  background: '#ffffff',
  border: 0,
};
const {Panel} = Collapse;
const LeftDrawer = ({ onClose, visible, hideLeftDrawer,searchField,searchInput }) => {
 
  return (
    <div className="only ">
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={300}>
        <div className="flex flex-column ds h-100 ">
          <div className="pointer  w-10 pl3" onClick={hideLeftDrawer}>
            <CloseOutlined style={{ fontSize: " 17px" }} />
          </div>
          <div className="topu">
            <div className=" w-90 flex flex-row ">
              <input
              onChange = {searchInput}
                value = {searchField}
                placeholder="Search Products..."
                type="text"
                spellcheck="false"
                className="wow  black fw4 f4  w-100 bb-1 bl-0 br-0 bt-0  "
                style={{ outline: "none", textDecoration: "none" }}
              />
              <div className="pointer mr-auto s hover-black pt4">
                <SearchOutlined
                  style={{ fontSize: "20px", marginLeft: "2px" }}
                />
              </div>
            </div>
            <div className=" mt3">
            {
              searchField ? (<div className="pb2">
                <div>Searching for {`${searchField}`}...</div>
              </div>) : (
                <Collapse
                            accordion
                            bordered={false}
                            key="1"
                            >
                            <Panel header="CATERGORIES" key="1" style={customPanelStyle}>
                                <Collapse
                                accordion
                                bordered={false}
                                key="2"
                                >
                            <Panel header="WOMEN'S" key="2" style={customPanelStyle}>
                                <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>
                            </Panel>
                            <Panel header="MEN'S" key="3" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="ELECTRONICS" key="4" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="OTHERS" key="5" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>

                                </Collapse>
                            </Panel>
                            <Panel header="WOMEN'S" key="6" style={customPanelStyle}>
                            <Collapse
                                accordion
                                bordered={false}
                                key="3"
                                >
                            <Panel header="CLOTHING" key="7" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="SHOES" key="8" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="ACCESSORIES" key="9" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>

                                </Collapse>
                            </Panel>
                            <Panel header="MEN'S" key="10" style={customPanelStyle}>
                            <Collapse
                                accordion
                                bordered={false}
                                key="4"
                                >
                            <Panel header="CLOTHING" key="11" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="SHOES" key="12" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="ACCESSORIES" key="13" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>

                                </Collapse>
                            </Panel>
                            <Collapse bordered={false} className="dotclps">
                            <Panel style={customPanelStyle} showArrow={false} header="BEST SELLERS" />
                           
                            <Panel style={customPanelStyle} showArrow={false} header="SELL" />
                           
                          </Collapse>
                            </Collapse>
              )
            }
            </div>
          </div>
          <Divider className="it" />
          <div className="down">
            <div className="mt3">
              <ListComponent
                listData={[
                  "UGX (Shs)",
                  "USD ($)",
                  "KSH (Shs)",
                  "EUR (€)",
                  "SGD ($)",
                  "GBP (£)",
                  "JPY (¥)",
                ]}
              />
            </div>
            <div className="mt4 mb3">
              <ListComponent
                listData={[
                  "English",
                  "Arabic",
                  "German",
                  "French",
                  "Russian",
                  "Swahili",
                  "Japanese",
                  "Spanish",
                ]}
              />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
