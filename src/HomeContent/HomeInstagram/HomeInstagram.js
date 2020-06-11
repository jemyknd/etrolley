import React from 'react';
import {LargeScreen} from './LargeScreen';
import Media from 'react-media';
import {Large} from '../../Universal/mediaConstants';


const HomeInstagram = () => (
   
<div>
    <Media queries = {{ Large:Large  }}>
      {
        matches => (
          <div>
            {matches.Large && <LargeScreen/>}
          </div>
        )
      }
    </Media>
  </div>
)

export default HomeInstagram;