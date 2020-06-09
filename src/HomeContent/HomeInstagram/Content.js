import React from "react";
import {GrFacebook,GrInstagram,GrTwitter,GrGooglePlus,GrGithub,GrPinterest,GrYoutube} from "react-icons/gr";
import {RiSlackLine} from "react-icons/ri";
import { IconContext } from "react-icons";



const Content = ({width,size}) => {
    return(
        <div>
            <div className="black f4 flex justify-center mt4">@eTrolley follow us on </div>

            <div className="flex justify-center items-center w-100 mt3 mb4">
              <div className=" flex-row flex justify-between" style={{width:`${width}%`}}>
              <IconContext.Provider
                        value={{
                          color: "#3b5998",
                          size: `${size}px`,
                          className: "global-class-name",
                        }}>
                        <div
                        className="pointer"
                          >
                          <GrFacebook />
                        </div>
                      </IconContext.Provider>

                      <IconContext.Provider
                        value={{
                          color: "#fb3958",
                          size: `${size}px`,
                          className: "global-class-name",
                        }}>
                        <div
                        className="pointer"
                          >
                          <GrInstagram />
                        </div>
                      </IconContext.Provider>

                      <IconContext.Provider
                        value={{
                          color: "#00acee",
                          size: `${size}px`,
                          className: "global-class-name",
                        }}>
                        <div
                        className="pointer"
                          >
                          <GrTwitter />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{
                          color: "#db4a39 ",
                          size: `${size}px`,
                          className: "global-class-name",
                        }}>
                        <div
                        className="pointer"
                          >
                          <GrGooglePlus />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{
                          color: "#7DBBE6",
                          size: `${size}px`,
                          className: "global-class-name",
                        }}>
                        <div
                        className="pointer"
                          >
                          <GrGithub />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{
                          color: "#c8232c",
                          size: `${size}px`,
                          className: "global-class-name",
                        }}>
                        <div
                        className="pointer"
                          >
                          <GrPinterest />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{
                          color: "#E2A52E",
                          size: `${size}px`,
                          className: "global-class-name",
                        }}>
                        <div
                        className="pointer"
                          >
                          <RiSlackLine />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{
                          color: "#c4302b",
                          size: `${size}px`,
                          className: "global-class-name",
                        }}>
                        <div
                        className="pointer"
                          >
                          <GrYoutube />
                        </div>
                      </IconContext.Provider>
              </div>
                      
            </div>
        </div>
    )
}
export default Content;