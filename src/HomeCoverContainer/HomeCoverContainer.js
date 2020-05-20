import React from 'react';
import Media from 'react-media';
import ContentLarge from './ContentLarge';
import ContentMedium from './ContentMedium';
import ContentSmall from './ContentSmall';
import ContentPhone from './ContentPhone';
import ContentPhoneSmall from './ContentPhoneSmall';
import {Large,medium,small,smallest,Smallest} from '../Universal/mediaConstants';


const HomeCoverContainer = () => (
<div>
    <Media queries = {{ Large:Large , medium:medium, small:small,smallest : smallest, Smallest:Smallest}}>
      {
        matches => (
          <div>
            {matches.Large && <ContentLarge/>}
            {matches.medium && <ContentMedium/>}
            {matches.small && <ContentSmall/>}
            {matches.smallest && <ContentPhone/>}
            {matches.Smallest && <ContentPhoneSmall/>}
          </div>
        )
      }
    </Media>
  </div>

)

export default HomeCoverContainer;


