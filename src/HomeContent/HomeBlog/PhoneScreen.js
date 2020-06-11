import React from "react";
import { Carousel } from "antd";
import { connect } from "react-redux";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./css/largescreen.css";
import {
seeArrow,
notArrow
} from "../../Redux/Actions/HomeContent/HomeBlog/Actions";

const mapStateToProps = (state) => ({
  blogs: state.homeBlog.blogs,
});
const mapDispatchToProps = (dispatch) => ({
seeArrow : () => dispatch(seeArrow()),
notArrow : () => dispatch(notArrow())
})
const PhoneScreen = ({ blogs,seeArrow,notArrow }) => {
  const customSlider = React.createRef()
  const settings = {
    slidesToShow: 1,
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
              <div className=" w-100 flex flex-column " key={blog.id}>
              <div className="w-100 itH  bg-purple"></div>
              <div className="flex  w-100 flex-column justify-center  items-center">
                  <div className=" black f5 fw5">{blog.title}</div>
                  <div className=""><i>{blog.date}</i></div>
                  <div className=""><i>Posted by {blog.author.toUpperCase()}</i></div>
              </div>
            </div>
           </div>
          ))}
        </Carousel>


<IconContext.Provider
                      value={{
                        color: "black",
                        size: "20px",
                        className: "global-class-name",
                      }}>
                      <div

                      className="absolute bg-white-50 flex pt1 pb1 items-center  arrowB pointer"
                      onClick={()=>previous()}
                      >
                        <BsChevronLeft />
                      </div>
                    </IconContext.Provider>


<IconContext.Provider
                      value={{
                        color: "black",
                        size: "20px",
                        className: "global-class-name",
                      }}>
                      <div

                         className="absolute bg-white-50 flex pt1 pb1 items-center  arrowB right-0 pointer"
                         onClick={()=>next()}
                         >
                        <BsChevronRight />
                      </div>
                    </IconContext.Provider>
 
      </div>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(PhoneScreen);
