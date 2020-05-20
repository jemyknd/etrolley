import React from 'react';
import LargeScreen from './LargeScreen';
import MediumScreen from './MediumScreen';
import SmallScreen from './SmallScreen';
import PhoneScreen from './PhoneScreen';
import Media from 'react-media';
import {Large,medium,small,smaller} from '../../Universal/mediaConstants';


const ContentNav = () => (
   
<div>
    <Media queries = {{ Large:Large , medium:medium,smaller : smaller, small:small}}>
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

export default ContentNav;