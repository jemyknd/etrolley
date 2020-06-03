import React from 'react';
import "./HomeContentContainer.css";
import ContentNav from './HomeNavigation/ContentNav';
import HomeCategory from "./HomeCategory/HomeCategory";
import HomeProduct from "./HomeProducts/HomeProduct";
import HomeBigCards from "./HomeBigCards/HomeBigCards"
import HomeProductScroll from "./HomeProductScroll/HomeProductScroll"

const HomeContentContainer = () => (
<div className="w-100 H bg-red flex justify-center">
    <div className="W H bg-yellow flex flex-column">
        <HomeCategory/>
        <ContentNav/>
        <HomeProduct/>
        <HomeBigCards/>
        <HomeProductScroll/>
    </div>
</div>
)

export default HomeContentContainer;