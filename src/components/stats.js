import React from "react"

const Stats = () => {
  return (
    <div className="wrap">
      <section>
        <h1>HackUNT Recap</h1>
        <div style={{ width: 100, height: 20 }} className="bg-green"></div>
        <p>Over <span className="number green">500</span> students applied</p>
        <p>Over <span className="number green">200</span> students competed</p>
        <p>Over <span className="number green">300</span> resumes delivered to sponsors</p>
        <p><span className="number green">600</span> Insomnia Cookies eaten</p>
        <p><span className="number green">69</span> pizzas consumed</p>
        <p><span className="number green">11</span> workshops hosted</p>
        <p><span className="number green">28</span> projects submitted</p>
        <p>Over <span className="number green">$6,000</span> worth of prizes awarded</p>
      </section>
    </div>
  )
}
export default Stats
