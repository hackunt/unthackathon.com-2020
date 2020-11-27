import React, { Component } from 'react';
import './faq-box.css';

class FAQBox extends Component { 
   constructor (props) {
      super(props);

      this.state = {
         open: false
      }
   }

   render = () => (
      <div className={'faqbox' + (this.state.open ? ' open' : '')} onClick={() => this.setState({ open: !this.state.open })}>
         <p className='question' style={{ margin: 0 }}>{ this.props.question }</p>
         { this.state.open
            ? <p className='answer' dangerouslySetInnerHTML={{__html: this.props.answer}} style={{ lineHeight: '1.4em', fontSize: '1.2em' }}></p>
            : null
         }
      </div>
   )
}

export default FAQBox;
