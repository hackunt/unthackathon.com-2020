import React from 'react';
import "./winners.css"

// const paths = [
//   "/images/brayden.png",
//   "/images/gabe.png"
// ]

const Winners = (props) => (
  <div className="wrap">
    <section>
      <h1>2020 Winners</h1>
      <div style={{ width: 100, height: 20, marginBottom: '2rem' }} className="bg-green"></div>
      <div className="winners">
        <a className="winner" target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/road-focus">1. RoadFocus</a>
        <a className="winner" target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/respec-slack-lunch-bot">2. Respec Slack Lunchbot</a>
        <a className="winner" target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/optistate">3. OptiState</a>
      </div>
      {/* <Carousel /> */}
    </section>
  </div>
)

export default Winners;

// const Carousel = () => {
//   const [index, setIndex] = useState(0)

//   return (
//     <div className="carousel">
//       <div className="carousel-img">
//         <img src={paths[index]} />
//       </div>
//       <div className="carousel-step">
//         {paths.map((_path, i) => (
//           <button className="bg-green"></button>
//         ))}
//       </div>
//     </div>
//   )
// }
