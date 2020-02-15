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
                  <p dangerouslySetInnerHTML={{ __html: challenge.description }}></p>
               </div>
            ))
         }
      </div>
      <h2>Other APIs</h2>
      <p style={{ fontSize: '2em', textAlign: 'center', lineHeight: '1.5em' }}>
         <a href='https://account.wolfram.com/redeem/HackUNTFeb2020'>Wolfram</a><br />
         <a href='https://www.voiceflow.com/hackathon/hackunt'>Voiceflow</a><br />
         <a href=' https://balsamiq.com/wireframes/cloud/sales/promo/'>Balsamiq</a>
      </p>
      <br />
   </div> 
);

export default Schedule;
