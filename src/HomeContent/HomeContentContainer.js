import React from 'react';
import "./HomeContentContainer.css";
import ContentNav from './HomeNavigation/ContentNav';
import HomeCategory from "./HomeCategory/HomeCategory";
import HomeProduct from "./HomeProducts/HomeProduct";
import HomeBigCards from "./HomeBigCards/HomeBigCards";
import HomeProductScroll from "./HomeProductScroll/HomeProductScroll";
import HomeBrands from "./HomeBrands/HomeBrands";
import HomeBlog from "./HomeBlog/HomeBlog";
import HomeInstagram from "./HomeInstagram/HomeInstagram"

const HomeContentContainer = () => (
<div className="w-100 H  flex justify-center">
    <div className="W H  flex flex-column">
        <HomeCategory/>
        <ContentNav/>
        <HomeProduct/>
        <HomeBigCards/>
        <HomeProductScroll/>
        <HomeBrands/>
        <HomeBlog/>
        <HomeInstagram/>
    </div>
</div>
)

export default HomeContentContainer;