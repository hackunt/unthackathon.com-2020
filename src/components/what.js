import React from 'react';
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import './what.css'

const What = (props) => (
   <div>
      {/* <h2>What is HackUNT?</h2> */}
      <div className="what">
         <p>
            HackUNT is the University of North Texas' annual hackathon. 
            A hackathon is a 24-hour development competition for coders, designers, and anyone with a good idea! 
            Don't worry if you aren't experienced either, HackUNT is a great place to learn! 
            We will have mentors and professionals from the industry to help along the way. 
            <br />
         </p>
         <AwesomeSlider>
            {[...new Array(15)].map((_, i) => (
               <div data-src={`/images/2019Photos/${i + 1}.jpg`} />
            ))}
         </AwesomeSlider>
      </div>
   </div>
)

export default What;
