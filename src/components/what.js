import React from 'react';
import ReactWebMediaPlayer from 'react-web-media-player'
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
            {[...new Array(16)].map((_, i) => (
               <div data-src={`/images/2019Photos/${i + 1}.jpg`} />
            ))}
         </AwesomeSlider>
      </div>
      <p>
         <br />
         Our team has been working tirelessly to make HackUNT 2021 a fun and rewarding event, so come by if you want to learn, get free food, and maybe win some prizes! 
         HackUNT will take place from March 15th to the 16th at <a style={{ textDecoration: 'underline', color: 'rgb(49, 199, 69)' }} href='https://goo.gl/maps/fYCFEUMP1Us'>Discovery Park</a> in Denton, TX.
      </p>
   </div>
)

export default What;
