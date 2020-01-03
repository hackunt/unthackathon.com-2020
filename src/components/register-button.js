import React from 'react';
import Panel from './panel';

const RegisterButton = (props) => (
   <a href='https://register.weareasterisk.com/hackathons/hackunt20/application' target="_blank">
      <Panel>
         <div className='text'>How...?</div>
         <p style={{
            textAlign: 'center', 
            width: '100%', 
            right: 0, 
            top: 10,
            height: 'calc(28vh - 160px)', 
            minHeight: 80,
            color: 'rgb(49, 199, 69)', 
            fontSize: 50,
            fontFamily: "'mufferaw'",
            lineHeight: window.innerHeight < 800 ? '80px' : 'calc(28vh - 160px)',
            textShadow: `4px 0 0 #000, -4px 0 0 #000, 0 4px 0 #000, 0 -4px 0 #000, 
                        2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000,
                        1px 3px 0 #000, -1px 3px 0 #000, 1px -3px 0 #000, -1px -3px 0 #000,
                        3px 1px 0 #000, -3px 1px 0 #000, 3px -1px 0 #000, -3px -1px 0 #000,
                        -4px -4px 0 #fff, -7px -7px 0 #000`
         }}>Register</p>
      </Panel>
   </a>
)

export default RegisterButton;
