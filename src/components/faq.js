import React from 'react';
import faqs from '../content/faq.json';
import FAQBox from './faq-box';

const FAQ = (props) => (
   <div className="wrap">
      <section>
         <h1>FAQ</h1>
         <div style={{ width: 100, height: 20 }} className="bg-green"></div>
         {faqs.map(faq => (
            <div>
               <h2>{faq.question}</h2>
               <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            </div>
         ))}
         {/* {
            faqs.map(v => (
               <FAQBox question={v.question} answer={v.answer} />
            ))
         } */}
      </section>
   </div>
)

export default FAQ;
