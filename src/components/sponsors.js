import React from 'react';
import sponsors from '../content/previous_sponsors.json';
import './sponsors.css';

const Sponsors = (props) => (
   <section>
      <h2>Previous Sponsors</h2>
      <p style={{ textAlign: 'center', fontSize: '1.4em' }}>Interested in <a href='/2020_Sponsorship_Doc.pdf' style={{ color: 'rgb(49, 199, 69)', textDecoration: 'underline' }}>sponsoring</a> 2020?</p>
      <div className='logos'>
         {
            sponsors.map(sponsor => (
               <a href={sponsor.link}>
                  <div className='sponsorlogo' style={{ backgroundImage: `url(${sponsor.image})` }} alt={sponsor.name} />
               </a>
            ))
         }
      </div>
   </section>
)

export default Sponsors;
