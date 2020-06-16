import React from "react";
import { Drawer, Divider } from "antd";
import ListComponent from "../Universal/ListComponent";
import "./css/leftdrawer.css";
import {MdKeyboardArrowRight,MdLocalActivity,MdComputer} from "react-icons/md";
import {FaBoxOpen,FaStore,FaRegHeart,FaBaby,FaPeopleCarry,FaStoreAlt,FaGift} from "react-icons/fa";
import {RiWomenLine,RiMenLine} from "react-icons/ri";
import {GiHealthCapsule,GiFruitBowl} from "react-icons/gi";
import {GrCompliance} from "react-icons/gr";
import {FcElectronics,FcSportsMode} from "react-icons/fc";
import {BsPhone} from "react-icons/bs"
import { IconContext } from "react-icons";
import { connect } from "react-redux";
import { hideLeftDrawer } from "../Redux/Actions/HeaderComponts/LargeScreen/Actions";

const mapDispatchToProps = (dispatch) => ({
  hideLeftDrawer: () => dispatch(hideLeftDrawer()),
})
const LeftDrawer = ({ onClose, visible, hideLeftDrawer }) => {
 
  return (
    <div className=" ">
      <Drawer
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        drawerStyle={{margin:"0px",padding:"0px"}}
        bodyStyle={{margin:"0px",padding:"0px"}}
        width={300}>
          <div className=" w-100 ">
            <div className="w-100   flex  justify-center ">
              <div className="w-90  mt3 mb2 flex flex-row">

                <div className="black">LOGO</div>
              </div>
            </div>
            <Divider className="it" />
            <div className="w-100 flex  justify-center ">
              <div className="w-90  mt3 mb2 flex flex-column">
                <div className="flex flex-row justify-between items-center">
                  <div className="pointer">MY TROLLEY ACCOUNT</div>
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mt1 pointer",
                  }}>
                  <div className="pointer ">
                    <MdKeyboardArrowRight />
                  </div>
                </IconContext.Provider>
                  </div>
                </div>
                <div className="flex flex-row black mt1 mb1">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <FaBoxOpen/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Orders</div>
                </div>
                <div className="flex flex-row black mt1 mb1">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <FaStore/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">My Store</div>
                </div>
                <div className="flex flex-row black mt1 mb1">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <MdLocalActivity/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">My Activity</div>
                </div>
                <div className="flex flex-row black mt1 mb1">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <FaRegHeart/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Wishlist</div>
                </div>
              </div>
            </div>
            <Divider className="it" />
            <div className="w-100 flex  justify-center ">
              <div className="w-90  mt3 mb2 flex flex-column">
                <div className="flex flex-row justify-between">
                  <div className="pointer">CATEGORIES</div>
                  <div className="hover-black pointer underline">SeeAll</div>
                </div>
                <div className="flex flex-row black mt2 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <RiWomenLine/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Women Fashion</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <RiMenLine/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Men Fashion</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <GiHealthCapsule/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Health & Beauty</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <FaBaby/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Baby Products</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <GiFruitBowl/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Foods</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <GrCompliance/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Home & Office</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <FcElectronics/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Electronics</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <BsPhone/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Phones & Tablets</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <MdComputer/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Computers</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <FcSportsMode/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Sporting Goods</div>
                </div>
              </div>
            </div>
            <Divider className="it" />
            <div className="w-100 flex  justify-center ">
              <div className="w-90  mt3 mb2 flex flex-column">
                <div className="flex flex-row justify-between">
                  <div className="pointer">CUSTOMER SERVICES</div>
                  <div className="underline pointer hover-black">SeeAll</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <FaPeopleCarry/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Delivery</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <FaStoreAlt/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Our Store</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div>
                  <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name mr3 pointer",
                  }}>
                  <div className="pointer ">
                    <FaGift/>
                  </div>
                </IconContext.Provider>
                  </div>
                  <div className="pointer">Our Offers</div>
                </div>
                
              </div>
            </div>
            <Divider className="it" />
            <div className="w-100 flex  justify-center ">
              <div className="w-90  mt3 mb2 flex flex-column">

                <div className="flex flex-row black mt1 mb2">
                  <div className="pointer">Sell on eTrolley</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div className="pointer">Help Center</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div className="pointer">Contact Us</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div className="pointer">Privacy Policy</div>
                </div>
                <div className="flex flex-row black mt1 mb2">
                  <div className="pointer">Cookies Policy</div>
                </div>
              </div>
            </div>
            <Divider className="it" />
            <div className="w-100 flex down  justify-center ">
              <div className="w-90  mt3 mb2 flex flex-column">
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
            </div>

          </div>

      </Drawer>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(LeftDrawer);
