import React, { Component } from 'react';
import './landing.css';
import DiscoveryPark from './discovery-park';
import Calendar from './calendar';
import Logo from './logo';
import RegisterButton from './register-button';
import What from './what';
import Stats from './stats';
import MailingListSignup from './mailing-list-signup'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

const panels = [
   <What />
   // <DiscoveryPark />,
   // <Calendar />,
   // <Who />,
   // <RegisterButton />,
   // <MailingListSignup />
   // <p style={{ textAlign: 'center', fontSize: '1.4em' }}>Interested in <a href='/2020_Sponsorship_Doc.pdf' style={{ color: 'rgb(49, 199, 69)', textDecoration: 'underline' }}>sponsoring</a>?</p>,
   // <p style={{ textAlign: 'center', fontSize: '1.4em' }}>Want to <a href='https://forms.gle/94axurayMeEhXgZj7' style={{ color: 'rgb(49, 199, 69)', textDecoration: 'underline' }}>volunteer</a>?</p>,
   // <p style={{ textAlign: 'center', fontSize: '1.4em' }}>Join our <a href='https://join.slack.com/t/hackunt/shared_invite/enQtNTQwODcwNjM0MDA1LTFjZmZjZDY2Yjk0ZDM5NDg4ZTU5NTViODhkM2U2MjdkN2IxZjg5MTU3ZTU1YjUwYTEzZWNkMDE4NTQxYjg1YTU' style={{ color: 'rgb(49, 199, 69)', textDecoration: 'underline' }}>slack</a>!</p>
]

class Landing extends Component {
   // constructor (props) {
   //    super(props);

   //    this.state = {
   //       numberToShow: 0
   //    }

   //    let interval;
   //    interval = setInterval(() => { 
   //       this.setState({ numberToShow: this.state.numberToShow + 1 }, () => {
   //          if (this.state.numberToShow >= panels.length) {
   //             clearInterval(interval);
   //          }
   //       });
   //    }, 250)
   // }

   render = () => (
      <div className="wrap">
         <section>
            {/* <Logo /> */}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
               <h1>HackUNT 2021</h1>
               {/* <p><a href='/2020_Sponsorship_Doc.pdf'>interested in sponsoring?</a></p> */}
            </div>
            <div style={{ width: 100, height: 20 }} className="bg-green"></div>

            {/* {panels.filter((v, i) => parseInt(i) <= this.state.numberToShow)} */}
            <div style={{display: 'flex', flexDirection:'row'}}>
               <div style={{width: '50%'}}>
                  <h3 style={{fontSize: '2rem'}}>March 15 - 16, 2021</h3>
                  <h3 style={{fontSize: '1.5rem'}}>🚧 Under Construction 🚧</h3>
                  <p style={{marginTop: '5rem'}}>
                     HackUNT is the University of North Texas' annual hackathon. 
                     A hackathon is a 24-hour development competition for coders, designers, and anyone with a good idea! 
                     Don't worry if you aren't experienced either, HackUNT is a great place to learn! 
                     We will have mentors and professionals from the industry to help along the way. 
                     <br />
                  </p>
                  <MailingListSignup />
               </div>
               <div style={{width: '50%', padding: '5rem'}}>
                  <AwesomeSlider>
                     {[...new Array(15)].map((_, i) => (
                        <div data-src={`/images/2020/${i + 1}.jpg`} />
                     ))}
                  </AwesomeSlider>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Landing;
