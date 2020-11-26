import React, { Component } from 'react';
import sponsors from '../content/sponsors.json';
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
      <div className="wrap">
         <section>
            <h1>2020 Sponsors</h1>
            <div style={{ width: 100, height: 20 }} className="bg-green"></div>
            
            {/* <p>Interested in <a href='/2020_Sponsorship_Doc.pdf' style={{ color: 'rgb(49, 199, 69)', textDecoration: 'underline' }}>sponsoring</a> 2020?</p> */}
            <div className='bigger'>
               <div className='logos'>
                  {
                     this.state.loaded ?
                     sponsors.slice(0, 2).map(sponsor => (
                        <a href={sponsor.link}>
                           <div className='sponsorlogo' style={{ backgroundImage: `url(${sponsor.image})` }} alt={sponsor.name} />
                        </a>
                     ))
                     : null
                  }
               </div>
            </div>

            <h2 className='subheading' style={{ fontSize: '2em', marginBottom: 20 }}>Other Sponsors</h2>
            <div className='logos' style={{ marginTop: 0 }}>
               {
                  this.state.loaded ?
                  sponsors.slice(2).map(sponsor => (
                     <a href={sponsor.link}>
                        <div className='sponsorlogo' style={{ backgroundImage: `url(${sponsor.image})` }} alt={sponsor.name} />
                     </a>
                  ))
                  : null
               }
            </div>
            
            {/* <div className='smaller'>
               <h2 className='subheading smaller' style={{ marginTop: 10 }}>Previous Sponsors</h2>
               <div className='logos'>
                  {
                     this.state.loaded ?
                     previous_sponsors.map(sponsor => (
                        <a href={sponsor.link}>
                           <div className='sponsorlogo smaller' style={{ backgroundImage: `url(${sponsor.image})` }} alt={sponsor.name} />
                        </a>
                     ))
                     : null
                  }
               </div>
            </div> */}

            {/* <h2 className='subheading' style={{ fontSize: '2em', marginBottom: 20 }}>Looking for a job</h2> */}
            {/* <div className='smaller'>
               <h2 className='subheading smaller' style={{ marginTop: 10 }}>Previous Sponsors</h2>
               <div className='logos'>
                  {
                     this.state.loaded ?
                     previous_sponsors.map(sponsor => (
                        <a href={sponsor.link}>
                           <div className='sponsorlogo smaller' style={{ backgroundImage: `url(${sponsor.image})` }} alt={sponsor.name} />
                        </a>
                     ))
                     : null
                  }
               </div>
            </div> */}
         </section>
      </div>
   )
}

export default Sponsors;
