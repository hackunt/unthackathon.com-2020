import React, { Component } from 'react';
import './logo.css';
import Sparks from './sparks';

const NUMBER_OF_SPARKS = 30;
const TEXT_LOGO = false;

class Logo extends Component {
   render = () => (
      <div>
         <Sparks numSparks={NUMBER_OF_SPARKS} />
         { TEXT_LOGO ?
            <h1>
               <span className='pop'>
                  H
                  <span className='small'>ACK</span>
                  UNT&nbsp;
                  <span className='yellow'>2020</span>
               </span>
            </h1>
            :
            <div className='pop'>
               <img src='/images/logo.svg' style={{ display: 'block', width: '400px', maxWidth: '95%', height: 329, maxHeight: '78vw', margin: '40px auto' }} />
            </div>
         }
      </div>
   )
}

export default Logo;
