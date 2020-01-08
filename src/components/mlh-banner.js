import React from 'react';

const MLHBanner = (props) => (
   <a 
      href='https://mlh.io/seasons/na-2020/events'
      style={{
         position: 'fixed',
         top: 0,
         right: '10vw',
         width: 'calc(5vw + 50px)',
         zIndex: 1000
      }}
   >
      <img src='/images/mlh-banner.svg' alt='Major League Hacking 2020 Season Official Event' />
   </a>
)

export default MLHBanner;
