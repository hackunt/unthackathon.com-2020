import React from 'react';
import schedule from '../content/schedule.json';
import './schedule.css';

const Schedule = (props) => (
   <div className='wrap schedule'>
      <h2>Schedule</h2>
      <h3>Saturday</h3>
      <ul>
         {
            schedule.slice(0, 5).map(v => <li><span className='time'>{v.start}</span>{v.title}</li>)
         }
      </ul>
      <h3>Sunday</h3>
      <ul>
         {
            schedule.slice(5).map(v => <li><span className='time'>{v.start}</span>{v.title}</li>)
         }
      </ul>
   </div> 
);

export default Schedule;
