import React from 'react';
import './css/navcategory.css';
// import {Divider} from 'antd';
import ListComponent from '../Universal/ListComponent'

const NavCategory = ({show,onMouseLeave}) => {
   if(show){
    return(
        <div className="Ntop w-100 " >
            <div className="flex flex-row justify-center navcat animated fadeIn faster bg-white" onMouseLeave={onMouseLeave} onMouseEnter={show}>
            <div className = " pl2">
                <div className="f5 mt3 black mb2">MEN COLLECTION</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuits','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
            </div>
            <div >
                <div className="f5 mt3 black mb2">WOMEN COLLECTION</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuits','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
            </div>
            <div >
                <div className="f5 mt3 black mb2">ACCESSORIES</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuits','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
            </div>
            <div >
                <div className="f5 mt3 black mb2">ELECTRONICS</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuits','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
            </div>
            <div > 
                <div className="f5 mt3 black mb2">OTHERS</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuitsdijwdoiwjeiodji','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
            </div>
            
        </div>
        {/* <Divider className="Cmar"/> */}
        </div>
    )
   }
   else{
       return null;
   }
}

export default NavCategory;