import React from 'react';
import "./HomeContentContainer.css";
import ContentNav from './HomeNavigation/ContentNav';
import HomeCategory from "./HomeCategory/HomeCategory";

const HomeContentContainer = () => (
<div className="w-100 H bg-red flex justify-center">
    <div className="W H bg-yellow flex flex-column">
        <HomeCategory/>

        <ContentNav/>
    </div>
</div>
)

export default HomeContentContainer;