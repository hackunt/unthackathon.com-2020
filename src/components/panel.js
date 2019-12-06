import React from 'react';
import './panel.css';

const Panel = (props) => (
   <div className='panel'>
      <div className='top'></div>
      <div className='left'></div>
      <div className='bottom'></div>
      <div className='right'></div>
      <div className='content' style={{ background: 'url(' + props.image + ')'}}>
         { props.children }
      </div>
   </div>
)

export default Panel;
