import React from "react";
import {GrFacebook,GrInstagram,GrTwitter,GrGooglePlus,GrGithub,GrPinterest,GrYoutube} from "react-icons/gr";
import {RiSlackLine} from "react-icons/ri";
import { IconContext } from "react-icons";



const Content = ({width,title,size,color1,color2,color3,color4,color5,color6,color7,color8}) => {
    return(
        <div>
            <div className="black f4 flex justify-center ">{title}</div>

            <div className="flex justify-center items-center w-100 mt3 mb4">
              <div className=" flex-row flex justify-between" style={{width:`${width}%`}}>
              <IconContext.Provider
                        value={{
                          color: `${color1}`,
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
                          color: `${color2}` ,
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
                          color:`${color3}` ,
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
                          color:`${color4}` ,
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
                          color:`${color5}` ,
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
                          color: `${color6}` ,
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
                          color:`${color7}` ,
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
                          color: `${color8}`,
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