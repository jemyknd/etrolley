import React from "react";
import "./css/footercontainer.css";
import ListComponent from "../Universal/ListComponent";
import {MdLocalPhone,MdDateRange,MdMailOutline} from "react-icons/md";
import {FaCcMastercard,FaCcVisa,FaStripe,FaCcPaypal,FaShopify,FaAmazonPay,FaAmazon} from "react-icons/fa";
import {AiOutlineAlibaba} from "react-icons/ai";
import { IconContext } from "react-icons";
import { Divider } from "antd";


const LargeScreen = () => {
  return (
<div>
  <Divider className="fnos "/>
  
<div className="fH w-100 justify-center flex mt4 ">
      <div className="fW fH mb4 ">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-column w-50">
            <div className="f5 black"> NEWSLETTER SUBSCRIPTION</div>
            <div className="black-40">
              Sign up for Grabit updates to receive information about new
              arrivals, future events and specials. Sign up for Grabit updates
              to receive information about new arrivals, future events and
              specials. Sign up for Grabit updates to receive information about
              new arrivals, future events and specials.
            </div>
          </div>
          <div className="w-40  flex flex-row justify-between mt2 ">
            <div className="ba w-75   bcc">
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
            <div className="pointer pt2 pb2 bgc hover-bg-black hover-white bg-animate ba subtn b--black  tc justify-center items-center flex  ">
              SUBSCRIBE!
            </div>
          </div>
        </div>
        <div className=" w-100   flex flex-row  justify-between mt3">
          <div >
            <div className="black pointer mb2">SHOP</div>
            <ListComponent
              listData={[
                "New In",
                "Sales & Special Offers",
                "women's",
                "men's",
                "shoes",
                "Accessories",
              ]}
            />
          </div>
          <div >
            <div className="black pointer mb2">STORE</div>
            <ListComponent
              listData={[
                "Check Store",
                "Create Store",
                "Add To Store",
                "Store Activity",
                "How To Start",
              ]}
            />
          </div>
          <div >
            <div className="black pointer  mb2">INFORMATION</div>
            <ListComponent
              listData={[
                "About Us",
                "Customer Service",
                "Blog",
                "FAQs",
                "Contact Us",
              ]}
            />
          </div>
          <div >
            <div className="black pointer  mb2">ORDER</div>
            <ListComponent
              listData={[
                "My Account",
                "View Cart",
                "Privacy Policy",
                "Cookies Policy",
              ]}
            />
          </div>
          <div >
            <div className="black pointer  mb2">HERE TO HELP</div>
            <div className=" pointer black-40">
              Have a question?You may also check our FAQs
            </div>
            <div className="black pointer mt1 mb1">Customer Services</div>
            <div className="flex flex-row items-center pointer">
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
            <div className="flex flex-row mt1  pointer">
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
            <div className="flex flex-row mt1 items-center pointer">
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
        </div>
        
      </div>

    </div>
    <Divider className="fnos" />
<div className="flex justify-center mt1 mb1">
   
<div className="fW fH  flex flex-row justify-between">
       <div className=" flex flex-row pointer">
         <div className="h-100 flex items-center mr2 black">LOGO</div>
        <div className="f7 black">
        © 2020 eTrolley Fashion Store . All Rights Reserved. Ecommerce Software by Jemba Tony. 
         <br/>
         Not Yet Ready For Release
        </div>
         </div>
       <div className="ml-auto flex flex-row">
         <IconContext.Provider
                  value={{
                    color: "black",
                    size: "25px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer h-100 flex items-center mr2">
                    <FaCcMastercard />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "25px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer h-100 flex items-center mr2">
                    <FaCcVisa />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "25px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer h-100 flex items-center mr2">
                    <FaStripe/>
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "25px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer h-100 flex items-center mr2">
                    <FaCcPaypal />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "25px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer h-100 flex items-center mr2">
                    <FaShopify />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "25px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer h-100 flex items-center mr2">
                    < FaAmazonPay />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "25px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer h-100 flex items-center mr2">
                    <AiOutlineAlibaba />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "black",
                    size: "25px",
                    className: "global-class-name",
                  }}>
                  <div className="pointer h-100 flex items-center mr2">
                    <FaAmazon/>
                  </div>
                </IconContext.Provider>
                
                
       </div>
 </div>
 </div> 
</div>
  );
};
export default LargeScreen;
