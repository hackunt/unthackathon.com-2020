import React from 'react';
import Panel from './panel';

const DiscoveryPark = (props) => (
   <a href='https://goo.gl/maps/fYCFEUMP1Us'>
      <Panel image='/disco.png'>
         <div className='text'>Where...?</div>
         <p style={{ fontFamily: "'mufferaw'", background: 'black' }}>Discovery Park</p>
      </Panel>
   </a>
)

export default DiscoveryPark;
