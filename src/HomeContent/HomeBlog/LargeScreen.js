import React from "react";
import { Carousel } from "antd";
import { connect } from "react-redux";
import { Motion, spring, presets } from "react-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./css/largescreen.css";
import {
seeArrow,
notArrow
} from "../../Redux/Actions/HomeContent/HomeBlog/Actions";

const mapStateToProps = (state) => ({
  blogs: state.homeBlog.blogs,
  bArrow: state.homeBlog.bArrow
});
const mapDispatchToProps = (dispatch) => ({
seeArrow : () => dispatch(seeArrow()),
notArrow : () => dispatch(notArrow())
})
const LargeScreen = ({ blogs,seeArrow,notArrow,bArrow }) => {
  const customSlider = React.createRef()
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    className: " leftright",
    dots: false,
    swipeToSlide: true,
    autoplaySpeed: 9000,
  };
  const next = ()  => {
    customSlider.current.next();
  }
  const previous = ()=> {
    customSlider.current.prev();
  }
  return (
    <div className="mt4">
      <div className="flex justify-center black f4">World of eTrolley</div>
      <div className="mt3 relative" onMouseEnter={()=>seeArrow()} onMouseLeave={()=>notArrow()}>
        <Carousel ref={customSlider} {...settings}>
          {blogs.map((blog) => (
           <div>
              <div className=" w-100 flex flex-row " key={blog.id}>
              <div className="w-50 itH pointer  bg-purple"></div>
              <div className="flex  w-50 justify-center  items-center">
                <div className="flex flex-column content-start">
                  <div className=" black f4 fw5 pointer">{blog.title}</div>
                  <div className="pointer"><i>{blog.date}</i></div>
                  <div className="pointer "><i>Posted by <span className="underline-hover">{blog.author.toUpperCase()}</span></i></div>
                </div>
              </div>
            </div>
           </div>
          ))}
        </Carousel>
        <Motion
      defaultStyle={{ translateX: -38, opacity: 0 }}
      style={{
        translateX: spring(bArrow?-23:-38, presets.gentle),
        opacity: spring(bArrow?1:0, presets.gentle),
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
                      className="absolute bg-white  arrowB pointer"
                      onClick={()=>previous()}
                      >
                        <BsChevronLeft />
                      </div>
                    </IconContext.Provider>

                      )}
      
      </Motion>

      <Motion
      defaultStyle={{ translateX: 38, opacity: 0 }}
      style={{
        translateX: spring(bArrow?23:38, presets.gentle),
        opacity: spring(bArrow?1:0, presets.gentle),
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
                         className="absolute bg-white  arrowB right-0 pointer"
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

export default connect(mapStateToProps,mapDispatchToProps)(LargeScreen);
