import React from "react";
import { Divider } from "antd";
import { connect } from "react-redux";
import { Carousel } from "antd";
import "./css/largescreen.css";
import {
  showBorder,
  hideBorder,
  arrow,
  noArrow
} from "../../Redux/Actions/HomeContent/HomeBrands/Action";
import { Motion, spring, presets } from "react-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";

const mapDispatchToProps = (dispatch) => ({
  showBorder: (id) => dispatch(showBorder(id)),
  hideBorder: (id) => dispatch(hideBorder(id)),
  arrow : () => dispatch(arrow()),
  noArrow: () => dispatch(noArrow())
});
const mapStateToProps = (state) => ({
  brands: state.homeBrands.brands,
  arrows: state.homeBrands.arrows
});
const SmallScreen = ({ brands, showBorder, hideBorder,arrows,arrow,noArrow }) => {
  const customSlider = React.createRef()

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    className: " leftright",
    dots: false,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 600,
          settings:{
           slidesToShow:3,
           slidesToScroll:1,
           autoplay:true,
           className:' leftright'
          }
        }
      ]
  };
  const next = ()  => {
    customSlider.current.next();
  }
  const previous = ()=> {
    customSlider.current.prev();
  }
  return (
    <div>
      <Divider className="nos resdivider" />
      <div className="mt3 relative" onMouseEnter={()=>arrow()} onMouseLeave={()=>noArrow()}>
        <Carousel ref={customSlider} autoplay {...settings}>
          {brands.map((name, index) => (
            <div
              key={index}
              onMouseEnter={() => showBorder(index)}
              onMouseLeave={() => hideBorder(index)}>
              {name.border ? (
                <div className=" ba b--black flex pt2 pb2 tc items-center pointer justify-center">
                  <div
                    className="black pointer f3 i-l"
                    style={{ fontFamily: `${name.fontStyle}` }}>
                    {name.name}
                  </div>
                </div>
              ) : (
                <div className=" flex pt2 pb2 tc items-center pointer justify-center">
                  <div
                    className="black pointer f3 i-l"
                    style={{ fontFamily: `${name.fontStyle}` }}>
                    {name.name}
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>
        <Motion
      defaultStyle={{ translateX: -18, opacity: 0 }}
      style={{
        translateX: spring(arrows?-0:-18, presets.gentle),
        opacity: spring(arrows?1:0, presets.gentle),
      }}>
        {(style) => (

<IconContext.Provider
                      value={{
                        color: "black",
                        size: "20px",
                        className: "global-class-name",
                      }}>
                      <div
                       style={{
                        transform: `translateX(${style.translateX}px)`,
                        opacity: style.opacity,
                      }}
                      className="absolute bg-white flex pt1 pb1 items-center arrowcont pointer"
                      onClick={()=>previous()}
                      >
                        <BsChevronLeft />
                      </div>
                    </IconContext.Provider>

                      )}
      
      </Motion>

      <Motion
      defaultStyle={{ translateX: 18, opacity: 0 }}
      style={{
        translateX: spring(arrows?0:18, presets.gentle),
        opacity: spring(arrows?1:0, presets.gentle),
      }}>
        {(style) => (


<IconContext.Provider
                      value={{
                        color: "black",
                        size: "20px",
                        className: "global-class-name",
                      }}>
                      <div
                        style={{
                          transform: `translateX(${style.translateX}px)`,
                          opacity: style.opacity,
                        }}
                         className="absolute bg-white flex pt1 pb1 items-center arrowcont right-0 pointer"
                         onClick={()=>next()}
                         >
                        <BsChevronRight />
                      </div>
                    </IconContext.Provider>
                      )}
      
      </Motion>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallScreen);
