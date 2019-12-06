import React from 'react';
import Panel from './panel';

const Who = (props) => (
   <a href='https://register.weareasterisk.com/hackathons/hackunt20/'>
      <Panel>
         <div className='text'>Who...?</div>
         <p style={{
            textAlign: 'center', 
            width: '100%', 
            right: 0, 
            top: 10, 
            color: 'rgb(49, 199, 69)', 
            fontSize: 70,
            textShadow: `4px 0 0 #000, -4px 0 0 #000, 0 4px 0 #000, 0 -4px 0 #000, 
                        2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000,
                        1px 3px 0 #000, -1px 3px 0 #000, 1px -3px 0 #000, -1px -3px 0 #000,
                        3px 1px 0 #000, -3px 1px 0 #000, 3px -1px 0 #000, -3px -1px 0 #000,
                        -4px -4px 0 #fff, -7px -7px 0 #000`
         }}>YO<span style={{ letterSpacing: '0.1em' }}>U</span><span className='yellow'>!!</span></p>
      </Panel>
   </a>
)

export default Who;
