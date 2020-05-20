import React from "react";
import LargeScreen from "./LargeScreen";
import MeduimScreen from './MeduimScreen';
import SmallScreen from './SmallScreen';
import PhoneScreen from './PhoneScreen';
import Media from 'react-media';
import {Large,medium,small,smaller} from '../Universal/mediaConstants'

const HeaderContainer = () => (
  <div>
    <Media queries = {{ Large:Large , medium:medium, small:small,smaller : smaller}}>
      {
        matches => (
          <div>
            {matches.Large && <LargeScreen/>}
            {matches.medium && <MeduimScreen/>}
            {matches.small && <SmallScreen/>}
            {matches.smaller && <PhoneScreen/>}
          </div>
        )
      }
    </Media>
  </div>
);
export default HeaderContainer;
