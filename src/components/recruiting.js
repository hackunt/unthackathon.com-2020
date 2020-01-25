import React, { Component } from 'react';
import RecruitCard from './recruit-card.js';
import recruiting from '../content/recruiting.json';

class Recruiting extends Component {
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
      if (window.scrollY > 2400) {
         this.loadImages();
      }
   }

   render = () => (
   <div>
      <h2>Looking for jobs?</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
         {
            this.state.loaded ? (
               recruiting.slice(0, 2).map(v => <RecruitCard { ...v } />)
            ) : null
         }
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
         {
            this.state.loaded ? (
               recruiting.slice(2).map(v => <RecruitCard { ...v } />)
            ) : null
         }
      </div>
   </div>)
}

export default Recruiting;
