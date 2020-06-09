import React from "react";
import { Divider } from "antd";
import { connect } from "react-redux";
import { Carousel } from "antd";
import "./css/largescreen.css";
import {
  showBorder,
  hideBorder,
  arrow,
  noArrow,
} from "../../Redux/Actions/HomeContent/HomeBrands/Action";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";

const mapDispatchToProps = (dispatch) => ({
  showBorder: (id) => dispatch(showBorder(id)),
  hideBorder: (id) => dispatch(hideBorder(id)),
  arrow: () => dispatch(arrow()),
  noArrow: () => dispatch(noArrow()),
});
const mapStateToProps = (state) => ({
  brands: state.homeBrands.brands,
});
const PhoneScreen = ({
  brands,
  showBorder,
  hideBorder,
  arrow,
  noArrow,
}) => {
  const customSlider = React.createRef();

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    className: " leftright",
    dots: false,
    swipeToSlide: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          className: " leftright",
        },
      },
    ],
  };
  const next = () => {
    customSlider.current.next();
  };
  const previous = () => {
    customSlider.current.prev();
  };
  return (
    <div>
      <Divider className="nos resdivider" />
      <div
        className="mt3 relative"
        onMouseEnter={() => arrow()}
        onMouseLeave={() => noArrow()}>
        <Carousel ref={customSlider} autoplay {...settings}>
          {brands.map((name, index) => (
            <div
              key={index}
              onMouseEnter={() => showBorder(index)}
              onMouseLeave={() => hideBorder(index)}>
              {name.border ? (
                <div className=" ba b--black flex pt1 pb1 tc items-center pointer justify-center">
                  <div
                    className="black pointer f5 i-l"
                    style={{ fontFamily: `${name.fontStyle}` }}>
                    {name.name}
                  </div>
                </div>
              ) : (
                <div className=" flex pt1 pb1 tc items-center pointer justify-center">
                  <div
                    className="black pointer f5 i-l"
                    style={{ fontFamily: `${name.fontStyle}` }}>
                    {name.name}
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>

        <IconContext.Provider
          value={{
            color: "black",
            size: "18px",
            className: "global-class-name",
          }}>
          <div
            className="absolute bg-white-10  arrowcont pointer"
            onClick={() => previous()}>
            <BsChevronLeft />
          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            color: "black",
            size: "18px",
            className: "global-class-name",
          }}>
          <div
            className="absolute bg-white-10  arrowcont right-0 pointer"
            onClick={() => next()}>
            <BsChevronRight />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneScreen);
