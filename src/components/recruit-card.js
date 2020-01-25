import React from 'react';

const RecruitCard = (props) => (
   <div style={{ border: '7px black solid', width: 300, maxWidth: '90vw', margin: 10, background: 'white' }}>
      <div style={{ height: 100, width: '90%', margin: '-20px auto', backgroundImage: `url(${props.logo})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      {
         props.description
         ? <p style={{ width: '90%', margin: '0 auto', lineHeight: 1.5 }}>{props.description}</p>
         : null
      }
      <a href={props.link} style={{ display: 'block', border: '3px black solid', background: 'rgb(49, 199, 69)', padding: 4, width: '90%', margin: '10px auto', textAlign: 'center' }}>
         See Available Jobs
      </a>
   </div>
);

export default RecruitCard;
