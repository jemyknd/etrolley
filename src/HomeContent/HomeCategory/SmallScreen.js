import React from 'react';
import "./css/smallscreen.css";
import Content from './Content';

const PhoneScreen = ({category}) => (
    <div className="bg-purple Sgrid-Container" >
        <div className="Sgrid-item">
        <Content  category="WOMEN'S" links={[]} />
        </div>
        <div className="Sgrid-item">
        <Content  category="MEN'S" links={[]} />

        </div>
        <div className="Sgrid-item">
        <Content  category="CATEGORIES"  links={[]}/>

        </div>
    </div>
)

export default PhoneScreen;