import React from "react";
import HomeCoverContainer from "../HomeCoverContainer/HomeCoverContainer";
import "./css/largescreen.css";
import Sticky from 'react-sticky-el';
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import HomeContentContainer from "../HomeContent/HomeContentContainer";
import FooterContainer from "../FooterContainer/FooterContainer";
const LargeScreen = () => (
  <div  >
    <HeaderContainer />
    <div className="scrollover">
    <HomeCoverContainer/>
    <HomeContentContainer/>
    </div>
    <Sticky mode="bottom" stickyClassName={"customClassName"}>
    <FooterContainer/>
    </Sticky>
  </div>
);

export default LargeScreen;
