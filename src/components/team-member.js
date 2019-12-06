import React from 'react';

const TeamMember = (props) => (
   <div className='teammember'>
      <div style={{backgroundImage: `url(${props.image})` }} className='face' />
      <h3 className='name'>{props.name}</h3>
      <p className='title'>{props.title}</p>
   </div>
);

export default TeamMember;