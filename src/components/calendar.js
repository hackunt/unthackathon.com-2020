import React from 'react';
import Panel from './panel';
import './calendar.css';

const Calendar = (props) => (
   <a href='https://calendar.google.com/event?action=TEMPLATE&tmeid=MmYwZWpsNDJicHZjNjd1bTlqaHJnaHM3OXUgZG4zNjc1YmtlcDBpanB1ZmE3OTRpcDRqMmNAZw&tmsrc=dn3675bkep0ijpufa794ip4j2c%40group.calendar.google.com'>
      <Panel  image='/calendar.png'>
         <div className='text'>When...?</div>
         <p className='date' style={{ textAlign: 'center', width: '100%', right: 0, top: 30, fontFamily: "'mufferaw'" }}>February 15 - 16, 2020</p>
      </Panel>
   </a>
)

export default Calendar;
