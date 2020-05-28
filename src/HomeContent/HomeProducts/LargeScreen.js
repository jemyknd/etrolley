import React from "react";
import "./css/largescreen.css";
import { connect } from "react-redux";
import { Motion, spring, presets } from "react-motion";
import { Rate } from "antd";
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
}) => (
  <div class="gridcontainer mt3">
    {newProductsData.map((item, index) => (
      <div class="cell flex flex-column" key={item.id}>
        <div class="imageContainerL">{item.heartFill.toString()}</div>
        {/* middle Part */}
        <div class="optionsL flex flex-column">
          <div className="mt2">label</div>
          <div>product name</div>
          <div className="flex flex-row">
            <div className="">oldPrice</div>
            <div className="ml1">newPrice</div>
          </div>
          <div className="flex flex-row pointer">
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
          <div className="flex flex-row pointer">
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
                  color: `${size.selected ? "black" : "#778899"}`,
                  borderColor: `${size.selected ? "black" : "#778899"}`,
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
                className="b--black hover-white hover-bg-black pointer ba items-center justify-center flex flex-row pl1 pr1 w-60 pt1 pb1 overflow-hidden   ">
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
                    <HeartOutlined
                      style={{ fontSize: "20px", color: "black" }}
                    />
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
