import React, { Component } from 'react';
import sponsors from '../content/previous_sponsors.json';
import './sponsors.css';

class Sponsors extends Component {
   constructor (props) {
      super(props)
      this.state = {
         loaded: false
      }
   }

   loadImages () {
      if (!this.state.loaded) {
         this.setState({ loaded: true });
      }
   }

   componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll);
   }
   
   componentWillUnmount = () => {
         window.removeEventListener('scroll', this.handleScroll);
   }
   
   handleScroll = (event) => {
      if (window.scrollY > 1600) {
         this.loadImages();
      }
   }

   render = () => (
      <section>
         <h2>Previous Sponsors</h2>
         <p style={{ textAlign: 'center', fontSize: '1.4em' }}>Interested in <a href='/2020_Sponsorship_Doc.pdf' style={{ color: 'rgb(49, 199, 69)', textDecoration: 'underline' }}>sponsoring</a> 2020?</p>
         <div className='logos'>
            {
               this.state.loaded ?
               sponsors.map(sponsor => (
                  <a href={sponsor.link}>
                     <div className='sponsorlogo' style={{ backgroundImage: `url(${sponsor.image})` }} alt={sponsor.name} />
                  </a>
               ))
               : null
            }
         </div>
      </section>
   )
}

export default Sponsors;
