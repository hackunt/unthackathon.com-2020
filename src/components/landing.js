import React, { Component } from 'react';
import './landing.css';
import DiscoveryPark from './discovery-park';
import Calendar from './calendar';
import Logo from './logo';
import Who from './who';
import MailingListSignup from './mailing-list-signup';
import RegisterButton from './register-button';

const panels = [
   <DiscoveryPark />,
   <Calendar />,
   // <Who />,
   <RegisterButton />,
   // <MailingListSignup />
   <p style={{ textAlign: 'center', fontSize: '1.4em' }}>Interested in <a href='/2020_Sponsorship_Doc.pdf' style={{ color: 'rgb(49, 199, 69)', textDecoration: 'underline' }}>sponsoring</a>?</p>
]

class Landing extends Component {
   constructor (props) {
      super(props);

      this.state = {
         numberToShow: 0
      }

      let interval;
      interval = setInterval(() => { 
         this.setState({ numberToShow: this.state.numberToShow + 1 }, () => {
            if (this.state.numberToShow >= panels.length) {
               clearInterval(interval);
            }
         });
      }, 250)
   }

   render = () => (
      <section>
         <Logo />
         <div className='wrap'>
            {
               panels.filter((v, i) => parseInt(i) <= this.state.numberToShow)
            }
         </div>
      </section>
   )
}

export default Landing;
