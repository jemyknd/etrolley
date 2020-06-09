import React from "react";
import "./css/largescreen.css";
import { connect } from "react-redux";
import { Motion, spring, presets } from "react-motion";
import { Rate } from "antd";
import { FaRegEye } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import Timer from "react-compound-timer";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import {
  filledHeart,
  outlinedHeart,
  animateInIcon,
  animateOutIcon,
  selectColor,
  unselectColor,
  selectSize,
  unselectSize,
  animateInButton,
  animateOutButton,
} from "../../Redux/Actions/HomeContent/HomeProducts/Actions";

const mapDispatchToProps = (dispatch) => ({
  filledHeart: (id) => dispatch(filledHeart(id)),
  outlinedHeart: (id) => dispatch(outlinedHeart(id)),
  animateInIcon: (id) => dispatch(animateInIcon(id)),
  animateOutIcon: (id) => dispatch(animateOutIcon(id)),
  selectColor: (itemId, colorId) => dispatch(selectColor(itemId, colorId)),
  unselectColor: (itemId, colorId) => dispatch(unselectColor(itemId, colorId)),
  selectSize: (itemId, sizeId) => dispatch(selectSize(itemId, sizeId)),
  unselectSize: (itemId, sizeId) => dispatch(unselectSize(itemId, sizeId)),
  animateInButton: (id) => dispatch(animateInButton(id)),
  animateOutButton: (id) => dispatch(animateOutButton(id)),
});

const mapStateToProps = (state) => ({
  newProductsData: state.homeProducts.newProductsData,
});

const LargeScreen = ({
  newProductsData,
  filledHeart,
  outlinedHeart,
  animateInIcon,
  animateOutIcon,
  selectColor,
  unselectColor,
  unselectSize,
  selectSize,
  animateOutButton,
  animateInButton,
}) => (
  <div className="gridcontainer mt3">
    {newProductsData.map((item, index) => (
      <div className="cell flex flex-column" key={item.id}>

        <div
          onMouseEnter={() => animateInButton(index)}
          onMouseLeave={() => animateOutButton(index)}
          className="imageContainerL flex flex-column justify-between pointer overflow-hidden">
          <div className="flex flex-row justify-between">
            <div className="ml1 mt2 flex flex-column">
              {item.hot ? (
                <div
                  className=" mb1 tc white pl1 pr1"
                  style={{ backgroundColor: "#FF7143" }}>
                  Hot
                </div>
              ) : null}
              {item.new ? (
                <div
                  className=" mb1 tc white  pl1 pr1"
                  style={{ backgroundColor: "#42A5F6" }}>
                  New
                </div>
              ) : null}
              {item.discounted ? (
                <div
                  className=" mb1 tc white  pl1 pr1"
                  style={{
                    backgroundColor: "#F54337",
                  }}>{`-${item.discountPercentage}%`}</div>
              ) : null}
            </div>
            <div>
              <IconContext.Provider
                value={{
                  color: "black",
                  size: "20px",
                  className: "global-class-name",
                }}>
                <Motion
                  defaultStyle={{ translateX: 30, translateY: -35, opacity: 0 }}
                  style={{
                    translateX: spring(
                      item.imageButtons ? -10 : 30,
                      presets.gentle
                    ),
                    translateY: spring(
                      item.imageButtons ? 8 : -35,
                      presets.gentle
                    ),
                    opacity: spring(item.imageButtons ? 1 : 0, presets.gentle),
                  }}>
                  {(style) => (
                    <div
                      style={{
                        transform: `translateX(${style.translateX}px) translateY(${style.translateY}px)`,
                        opacity: style.opacity,
                      }}>
                      <div
                        style={{
                          height: "32px",
                          width: "32px",
                          borderRadius: "16px",
                          backgroundColor: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <FaRegEye />
                      </div>
                    </div>
                  )}
                </Motion>
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              {item.discounted && item.discountTimer ? (
                <div>
                  <Timer initialTime={item.timerValue} direction="backward">
                    {() => (
                      <div className="flex flex-row timerfont black bg-white-80 ml1 mb2">
                        <div className="tc br b--black-50">
                          <div className="flex flex-column ml1 mr1 ">
                            <div>
                              <Timer.Days />{" "}
                            </div>
                            <div>DAYS</div>
                          </div>
                        </div>
                        <div className=" tc  br b--black-50">
                          <div className="flex flex-column tc  ml1 mr1 ">
                            <div className="pa0">
                              <Timer.Hours />{" "}
                            </div>
                            <div>HRS</div>
                          </div>
                        </div>
                        <div className="tc  br b--black-50 ">
                          <div className="flex flex-column tc ml1 mr1  ">
                            <div>
                              <Timer.Minutes />
                            </div>
                            <div>MIN</div>
                          </div>
                        </div>
                        <div className="flex flex-column tc ml1 mr1 ">
                          <div>
                            <Timer.Seconds />
                          </div>
                          <div>SEC</div>
                        </div>
                      </div>
                    )}
                  </Timer>
                </div>
              ) : null}
            </div>
            <Motion
              defaultStyle={{ translateX: -20, translateY: 10, opacity: 0 }}
              style={{
                translateX: spring(
                  item.imageButtons ? -10 : 70,
                  presets.gentle
                ),
                translateY: spring(item.imageButtons ? -3 : 60, presets.gentle),
                opacity: spring(item.imageButtons ? 1 : 0, presets.gentle),
              }}>
              {(style) => (
                <div
                  style={{
                    transform: `translateX(${style.translateX}px) translateY(${style.translateY}px)`,
                    opacity: style.opacity,
                  }}>
                  <div className="flex flex-row">
                    <div>
                      <IconContext.Provider
                        value={{
                          color: "black",
                          size: "18px",
                          className: "global-class-name",
                        }}>
                        <div
                          style={{
                            height: "32px",
                            width: "32px",
                            borderRadius: "16px",
                            backgroundColor: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}>
                          <BsChevronLeft />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div className="ml2">
                      <IconContext.Provider
                        value={{
                          color: "black",
                          size: "18px",
                          className: "global-class-name",
                        }}>
                        <div
                          style={{
                            height: "32px",
                            width: "32px",
                            borderRadius: "16px",
                            backgroundColor: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}>
                          <BsChevronRight />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              )}
            </Motion>
          </div>
        </div>
        {/* middle Part */}
        <div className="optionsL flex flex-column">
          <div className="mt2 black-50">{item.lable}</div>
          <div className="black">{item.productName}</div>
          <div className="">
            {item.discounted ? (
              <div className="flex flex-row">
                <strike className="f7 black-50 pointer pt1">{`${item.currency}${item.dicountedPrice}`}</strike>
                <div className="ml1 f5 black pointer">{`${item.currency}${item.realPrice}`}</div>
              </div>
            ) : (
              <div className="f5 black pointer">{`${item.currency}${item.realPrice}`}</div>
            )}
          </div>
          <div className="flex flex-row pointer mt1">
            {item.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                onClick={() =>
                  color.selected
                    ? unselectColor(index, colorIndex)
                    : selectColor(index, colorIndex)
                }
                style={{
                  backgroundColor: `${color.color}`,
                  height: "16px",
                  width: "16px",
                  borderRadius: "8px",
                  border: `${color.selected ? "1px solid black" : "0px"}`,
                  padding: "1px",
                  fontSize: "2px",
                  color: `${color}`,
                }}
                className="tc ma1">
                c
              </div>
            ))}
          </div>
          <div className="flex flex-row pointer mb2">
            {item.sizes.map((size, sizeIndex) => (
              <div
                key={sizeIndex}
                onClick={() =>
                  size.selected
                    ? unselectSize(index, sizeIndex)
                    : selectSize(index, sizeIndex)
                }
                style={{
                  border: "1px solid black",
                  fontSize: "12px",
                  color: `${size.selected ? "black" : "#858585"}`,
                  borderColor: `${size.selected ? "black" : "#858585"}`,
                  verticalAlign: "center",
                }}
                className="tc ma1 pl1 pr1">
                {size.size}
              </div>
            ))}
          </div>
          <div>
            <div className="flex flex-row">
              <div
                onMouseEnter={() => animateInIcon(index)}
                onMouseLeave={() => animateOutIcon(index)}
                className="hover-bg-black hover-white bg-animate b--black black pointer ba items-center justify-center flex flex-row pl1 pr1 w-60 pt1 pb1 overflow-hidden   ">
                <Motion
                  defaultStyle={{ translateX: -20, opacity: 0 }}
                  style={{
                    translateX: spring(item.btnIcon ? 1 : -20, presets.gentle),
                    opacity: spring(item.btnIcon ? 1 : 0, presets.gentle),
                  }}>
                  {(style) => (
                    <div
                      style={{
                        transform: `translateX(${style.translateX}px)`,
                        opacity: style.opacity,
                      }}>
                      <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                    </div>
                  )}
                </Motion>
                <div
                  style={{ fontSize: "13px", verticalAlign: "middle" }}
                  className="tc ml1">
                  ADD TO CART
                </div>
              </div>

              <div className=" flex items-center ml3">
              
                <div
                  onClick={() =>
                    item.heartFill ? outlinedHeart(index) : filledHeart(index)
                  }
                  className=" pointer flex items-center">
                  {item.heartFill ? (
                      <HeartFilled style={{ fontSize: "20px", color: "black" }} />
                        
                    
                  ) : (
                        <HeartOutlined style={{ fontSize: "20px", color: "black" }}/>
                      
                  )}
                </div>
                
                
              </div>

            </div>
          </div>
          <div className="mt2">
            {item.rate ? (
              <Rate
                style={{ color: "black" }}
                disabled
                defaultValue={item.rateValue}
              />
            ) : null}{" "}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(LargeScreen);
