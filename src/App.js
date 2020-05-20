import React from "react";
import "antd/dist/antd.less";
import HomeCoverContainer from "./HomeCoverContainer/HomeCoverContainer";
import "./App.css";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import HomeContentContainer from "./HomeContent/HomeContentContainer"
const App = () => (
  <div className="main flex flex-column">
    
    <HeaderContainer />
    <HomeCoverContainer/>
    <HomeContentContainer/>

  
  </div>
);

export default App;
