import React from 'react';
import Spark from './spark';

const Sparks = (props) => (
   <div style={{ position: 'relative', top: '15vw', zIndex: -1 }}>
      { (new Array(props.numSparks)).fill(0).map(v => (
         <Spark />
      )) }
   </div>
)

export default Sparks;
