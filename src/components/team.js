import React, { Component } from 'react';
import TeamMember from './team-member';
import team from '../content/team.json';
import './team.css';

class Team extends Component {
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
      if (window.scrollY > 800) {
         this.loadImages();
      }
   }

   render = () => (
      <section>
         <h2>Team</h2>
         <div className='teammembers'>
            {
               this.state.loaded ?
               team.map(member => <TeamMember name={member.name} title={member.title} image={member.image} />)
               : null
            }
         </div>
      </section>
   )
}

export default Team;
