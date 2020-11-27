import React from 'react';
import faqs from '../content/faq.json';
import FAQBox from './faq-box';

const FAQ = (props) => (
   <section>
      <div className="wrap">
         <h2>FAQ</h2>
         {
            faqs.map(v => (
               <FAQBox question={v.question} answer={v.answer} />
            ))
         }
      </div>
   </section>
)

export default FAQ;
