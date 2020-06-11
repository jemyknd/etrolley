import React from "react";
import HomeCoverContainer from "../HomeCoverContainer/HomeCoverContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import HomeContentContainer from "../HomeContent/HomeContentContainer";
import FooterContainer from "../FooterContainer/FooterContainer";
const SmallScreen = () => (
  <div  >
    <HeaderContainer />
    <HomeCoverContainer/>
    <HomeContentContainer/>
    <FooterContainer/>
  </div>
);

export default SmallScreen;
