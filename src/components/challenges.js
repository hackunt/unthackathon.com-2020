import React from 'react';
import challenges from '../content/challenges.json';
import './challenges.css';

const Schedule = (props) => (
   <div className='wrap'>
      <h2>Challenges</h2>
      <br />
      <br />
      <div className='grid'>
         {
            challenges.map(challenge => (
               <div style={{
                  width: 'calc(100% - 32px)',
                  border: '6px solid black',
                  background: '#fff',
                  padding: 10
               }}>
                  <h3 style={{ margin: 0 }}>{ challenge.title }</h3>
                  <p>{ challenge.description }</p>
               </div>
            ))
         }
      </div>
      <br />
   </div> 
);

export default Schedule;
