import React, { Component } from 'react';
import './spark.css';

const TYPES = ['circle', 'square', 'triangle']
const COLORS = ['rgb(49, 199, 69)', '#FBCA03', '#000']

class Spark extends Component {
   constructor (props) {
      super(props);

      this.state = {
         type: TYPES[Math.floor(Math.random() * TYPES.length)],
         color: COLORS[Math.floor(Math.random() * COLORS.length)],
         rotation: Math.random() * 360,
         animationDelay: Math.random() * 0.3 + 0.2,
         animationDuration: Math.random() * 0.4 + 0.2
      }
   }

   render = () => (
      <div style={{
         transform: `rotate(${this.state.rotation}deg)`
      }}>
         <div style={{
            background: this.state.color,
            width: 10,
            height: 10,
            animationDelay: `${this.state.animationDelay}s`,
            animationDuration: `${this.state.animationDuration}s`
         }} className='spark' />
      </div>
   )
}

export default Spark;
