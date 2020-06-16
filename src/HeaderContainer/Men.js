import React from 'react';
import './css/men.css';
import ListComponent from '../Universal/ListComponent';
import { Motion, spring, presets } from "react-motion";


const Men = ({showMen,hideMen}) => (
    
       showMen ? (

        <div className ="Mtop z w-100 shadowcon slider"

        >
        <div className="flex flex-row justify-center  men_ct animated fadeIn faster bg-white" onMouseLeave={hideMen} onMouseEnter={showMen}>
        <div>
        <div className="w-100 mt3 h-75 bp">
        img
        </div>
        <div className="flex flex-column tc">
        <div className="black f5">NEW IN </div>
        <div>right this season</div>
        </div>
        </div>
        <div className=" flex flex-column ">
        <div className="f5 mt3 black mb2">CLOTHING</div>
        <div className="w-100 h-25 bp mb3"> img</div>
          <ListComponent listData={['Coats','Blazers','jackets','Trousers','Jeans','T-shirts','Shirts','Shorts']}/>
        </div>
         <div className=" flex flex-column ">
        <div className="f5 mt3 black mb2">SHOES</div>
        <div className="w-100 h-25 bp mb3"> img</div>
          <ListComponent listData={['Trainers','Shoes','Boots & Ankle Boots','Sandals','Pushins','clarks']}/>
        </div>
         <div className=" flex flex-column ">
        <div className="f5 mt3 black mb2">ACCESSORIES</div>
        <div className="w-100 h-25 mb3 bp"> img</div>
          <ListComponent listData={['Caps','Glasses','Belts','Socks','Gadjets']}/>
        </div>
        <div>
        <div className="w-100 mt3 h-75 bp">
        img
        </div>
        <div className="flex flex-column tc">
        <div className="black f5">SALE & SPECIAL OFFERS </div>
        <div>get up to 20.20% off</div>
        </div>
        </div>
        </div>
        </div>
     
       
       ):(
     
            <div className ="Mtop z w-100 shadowcon slider closed "
            >
            <div className="flex flex-row justify-center  men_ct animated fadeIn faster bg-white" onMouseLeave={hideMen} onMouseEnter={showMen}>
            <div>
            <div className="w-100 mt3 h-75 bp">
            img
            </div>
            <div className="flex flex-column tc">
            <div className="black f5">NEW IN </div>
            <div>right this season</div>
            </div>
            </div>
            <div className=" flex flex-column ">
            <div className="f5 mt3 black mb2">CLOTHING</div>
            <div className="w-100 h-25 bp mb3"> img</div>
              <ListComponent listData={['Coats','Blazers','jackets','Trousers','Jeans','T-shirts','Shirts','Shorts']}/>
            </div>
             <div className=" flex flex-column ">
            <div className="f5 mt3 black mb2">SHOES</div>
            <div className="w-100 h-25 bp mb3"> img</div>
              <ListComponent listData={['Trainers','Shoes','Boots & Ankle Boots','Sandals','Pushins','clarks']}/>
            </div>
             <div className=" flex flex-column ">
            <div className="f5 mt3 black mb2">ACCESSORIES</div>
            <div className="w-100 h-25 mb3 bp"> img</div>
              <ListComponent listData={['Caps','Glasses','Belts','Socks','Gadjets']}/>
            </div>
            <div>
            <div className="w-100 mt3 h-75 bp">
            img
            </div>
            <div className="flex flex-column tc">
            <div className="black f5">SALE & SPECIAL OFFERS </div>
            <div>get up to 20.20% off</div>
            </div>
            </div>
            </div>
            </div>
         
     
       )
    
)
export default Men;
