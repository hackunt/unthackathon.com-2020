import React from 'react';
import social from '../content/social.json';
import './footer.css';

const Footer = (props) => (
   <div className="wrap">
      <section>
         <footer style={{ textAlign: 'center' }}>
            <p>
               {
                  social.map(v =>
                     <a href={v.link}><i class={v.icon}></i></a>
                  )
               }
            </p>
            <p>&copy; Copyright 2021 HackUNT</p>
         </footer>
      </section>
   </div>
);

export default Footer;
