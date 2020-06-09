import React from 'react';
import {LargeScreen} from './LargeScreen';
import {MediumScreen} from './MediumScreen.js';
import {SmallScreen} from './SmallScreen';
import {PhoneScreen} from './PhoneScreen';
import Media from 'react-media';
import {Large,medium,smaller,small} from '../../Universal/mediaConstants';


const HomeInstagram = () => (
   
<div>
    <Media queries = {{ Large:Large , medium:medium,smaller : smaller,small:small }}>
      {
        matches => (
          <div>
            {matches.Large && <LargeScreen/>}
             {matches.medium && <MediumScreen/>}
            {matches.small && <SmallScreen/>} 
           {matches.smaller && <PhoneScreen/>}
          </div>
        )
      }
    </Media>
  </div>
)

export default HomeInstagram;