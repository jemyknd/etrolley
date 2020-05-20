import React from "react";
import ListComponent from "../../Universal/ListComponent";
import "./css/content.css";
import { Motion, spring, presets } from "react-motion";

const Content = ({ selectedState,imageURL,links,category }) => (
  <div className="size pointer ">
    {/* passing image as prop */}
    <img src={imageURL} alt="commodity" />
    <Motion
    defaultStyle={{scale:0, opacity:-100}}
      style={{
        scale: spring(selectedState?1:0,presets.noWobble),
        opacity: spring(selectedState?1:0,presets.noWobble)
      }}
      >
      {

       interpolatedStyles => (
         
        <div
        style={{transform:`scale3d(${interpolatedStyles.scale}, ${interpolatedStyles.scale}, ${interpolatedStyles.scale})`,opacity:interpolatedStyles.opacity}}
        className=" bg-white-80  transparent ba b--black-30 justify-center flex  cat-selection">
        <div className=" flex tc w-80 flex-column justify-center">
          <div>{category}</div>w
          <ListComponent listData={links} />
        </div>
       
      </div>
       )
            }
    </Motion>
   <Motion
       defaultStyle={{scale2:1, opacity2:1}}
       style={{
         scale2: spring(selectedState?0:1,presets.noWobble),
         opacity2: spring(selectedState?0:1,presets.noWobble)
       }}
   >
     {
       style => (
        <div 
        style={{transform:`scale3d(${style.scale2}, ${style.scale2}, ${style.scale2})`,opacity:style.opacity2}}
       className=" cat-name  flex items-center justify-center f5 pointer tc bg-white-80 transparent  ">
     {category}
     </div>
       )
     }
   </Motion>
  </div>
);

export default Content;

