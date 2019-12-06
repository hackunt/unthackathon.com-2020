import React, { Component } from 'react';
import './mailing-list-signup.css';

class MailingListSignup extends Component {
   constructor (props) {
      super(props);

      this.state = {
         email: ''
      }
   }

   updateEmail = (e) => {
      this.setState({
         email: e.target.value
      })
   }

   render = () => (
      <div id="mc_embed_signup">
         <form action="https://unthackathon.us17.list-manage.com/subscribe/post?u=3d491615432e4e14e065b3c81&amp;id=8f2d08fc4d" className="validate" id="mc-embedded-subscribe-form" method="POST" name="mc-embedded-subscribe-form">
            <div id="mc_embed_signup_scroll">
               <input className="required email" id="mce-EMAIL" name="EMAIL" placeholder="stan.lee@gmail.com" type="email" value={this.state.email} onChange={this.updateEmail} />
               <input className="button" id="mc-embedded-subscribe" name="subscribe" type="submit" value="Get Updates" readOnly />
               <div className="clear" id="mce-responses">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
               </div>

               <div aria-hidden="true" style={{position: 'absolute', left: -5000}}>
                  <input name="b_3d491615432e4e14e065b3c81_8f2d08fc4d" tabIndex="-1" type="text" value="" readOnly />
               </div>
            </div>
         </form>
      </div>
   )
}

export default MailingListSignup;
