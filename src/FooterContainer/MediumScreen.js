import React from "react";
import "./css/footercontainer.css";
import ListComponent from "../Universal/ListComponent";
import { MdLocalPhone, MdDateRange, MdMailOutline } from "react-icons/md";
import Content from "../HomeContent/HomeInstagram/Content";
import {
  FaCcMastercard,
  FaCcVisa,
  FaStripe,
  FaCcPaypal,
  FaShopify,
  FaAmazonPay,
  FaAmazon,
} from "react-icons/fa";
import { AiOutlineAlibaba } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Divider } from "antd";
import { Collapse } from 'antd';
import { PlusOutlined  } from '@ant-design/icons';

const { Panel } = Collapse;

const MediumScreen = () => {
     

  return (
    <div className="mt4">
      <Divider className="fnos " />
      <div className=" w-100 flex justify-center fH">
        <div className=" fW flex items-center flex-column mt4 mb3">
          <div className="  tc f5 black pointer  ">NEWSLETTER SUBSCRIPTION</div>
          <div className=" w-90  tc black-40 pointer">
            Sign up for Grabit updates to receive information about new
            arrivals, future events and specials. Sign up for Grabit updates to
            receive information about new arrivals, future events and specials.
            Sign up for Grabit updates to receive information about new
            arrivals, future events and specials.
          </div>
          <div className="ba w-100 pt2 pb2 bg-white mt2 bcc ">
            <input
              placeholder="Enter Your Email Address "
              type="email"
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
          <div className="pointer pt2 pb2  hover-bg-black hover-white bg-animate ba w-100 b--black  tc mt2   ">
            SUBSCRIBE!
          </div>
        </div>
      </div>
   <div className="mt4">

   <Divider className="fnos " />
  <Collapse
  bordered={false}
  className="colcon "
  style={{backgroundColor:"white"}}
  expandIconPosition="right"
  expandIcon={({ isActive }) => <PlusOutlined  rotate={isActive ? 50 : 0} style={{color:"black",padding:"0px",margin:"0px"}} />}
  >
    <Panel  header="SHOP" key="1">
    <ListComponent
              listData={[
                
                "Sales & Special Offers",
                "New In",
                "women's",
                "men's",
                "shoes",
                "Accessories",
              ]}
            />
    </Panel>
    <Panel  header="STORE" key="2">
    <ListComponent
              listData={[
                "Check Store",
                "Create Store",
                "Add To Store",
                "Store Activity",
                "How To Start",
              ]}
            />
    </Panel>
    <Panel  header="INFORMATION" key="3">
    <ListComponent
              listData={[
                "About Us",
                "Customer Service",
                "Blog",
                "FAQs",
                "Contact Us",
              ]}
            />
    </Panel>
    <Panel header="ORDER" key="4">
    <ListComponent
              listData={[
                "My Account",
                "View Cart",
                "Privacy Policy",
                "Cookies Policy",
              ]}
            />
    </Panel>
    <Panel  header="HERE TO HELP" key="5">
  <div>
            <div className="black pointer  mb2">HERE TO HELP</div>
            <div className=" pointer black-40">
              Have a question?You may also check our FAQs
            </div>
            <div className="black pointer mt1 mb1">Customer Services</div>
            <div className="flex flex-row items-center justify-center pointer">
              <div>
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer">
                    <MdLocalPhone />
                  </div>
                </IconContext.Provider>
              </div>
              <div className="ma0 ">Call Us: +256 754579213</div>
            </div>
            <div className="flex flex-row mt1 justify-center  pointer">
            <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer">
                    <MdDateRange />
                  </div>
                </IconContext.Provider>
              <div className="flex ma0 flex-column">
                <div className="balck-40">Mon-Fri: 8:00 am - 7:00 pm</div>
                <div className="balck-40">Sat: 9:00 am - 6:00 pm</div>
                <div className="balck-40">Sun: 9:00 am - 1:00 pm</div>
              </div>
            </div>
            <div className="flex flex-row mt1 items-center justify-center pointer">
            <IconContext.Provider
                  value={{
                    color: "black",
                    size: "20px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer">
                    <MdMailOutline />
                  </div>
                </IconContext.Provider>
              <div className="balck-40 underline hover-black">
                Send us an Email
              </div>
            </div>
  </div>
    </Panel>
  </Collapse>,
   </div>
   <div className=" flex justify-center mt4 mb3">
     <div className=" fW flex flex-column justify-center items-center">
       <div className="black f4 fw4">LOGO</div>
       <div className="f6 tc">
              © 2020 eTrolley Fashion Store . All Rights Reserved. Ecommerce
              Software by Jemba Tony.<br/>
              Not Yet Ready For Release
            </div>
            <div className="w-50">
            <Content width={100} size={18}
            color1="black"
            color2="black"
            color3="black"
            color4="black"
            color5="black"
            color6="black"
            color7="black"
            color8="black"
            />
            </div>
     </div>
   </div>
      <Divider className="fnos" />

         <div className="w-100  flex justify-center pt2 pb2">
           <div className="fH w-50  flex justify-between flex-row  ">
            <IconContext.Provider
              value={{
                color: "black",
                size: "24px",
                className: "global-class-name",
              }}>
              <div className="pointer h-100 flex items-center ">
                <FaCcMastercard />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "black",
                size: "24px",
                className: "global-class-name",
              }}>
              <div className="pointer h-100 flex items-center ">
                <FaCcVisa />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "black",
                size: "24px",
                className: "global-class-name",
              }}>
              <div className="pointer h-100 flex items-center ">
                <FaStripe />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "black",
                size: "24px",
                className: "global-class-name",
              }}>
              <div className="pointer h-100 flex items-center ">
                <FaCcPaypal />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "black",
                size: "24px",
                className: "global-class-name",
              }}>
              <div className="pointer h-100 flex items-center ">
                <FaShopify />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "black",
                size: "24px",
                className: "global-class-name",
              }}>
              <div className="pointer h-100 flex items-center ">
                <FaAmazonPay />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "black",
                size: "24px",
                className: "global-class-name",
              }}>
              <div className="pointer h-100 flex items-center ">
                <AiOutlineAlibaba />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "black",
                size: "24px",
                className: "global-class-name",
              }}>
              <div className="pointer h-100 flex items-center ">
                <FaAmazon />
              </div>
            </IconContext.Provider>
          </div>
           </div>
        </div>
  );
};
export default MediumScreen;
