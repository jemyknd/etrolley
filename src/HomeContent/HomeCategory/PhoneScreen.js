import React from 'react';
import "./css/phonescreen.css";
import Content from './Content';

const PhoneScreen = ({category}) => (
    <div className="bg-purple PCgrid-Container" >
        <div className="PCgrid-item">
        <Content  category="WOMEN'S" links={[]} />
        </div>
        <div className="PCgrid-item">
        <Content  category="MEN'S" links={[]} />

        </div>
        <div className="PCgrid-item">
        <Content  category="CATEGORIES"  links={[]}/>

        </div>
    </div>
)

export default PhoneScreen;