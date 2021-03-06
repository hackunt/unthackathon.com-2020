import React from 'react';
import './App.css';
import Landing from './components/landing';
import Footer from './components/footer';
import Sponsors from './components/sponsors';
import Schedule from './components/schedule';
import Challenges from './components/challenges';
import Logo from './components/logo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stats from './components/stats';
import BackgroundImage from './components/background-image';
import Winners from './components/winners';
import FAQ from './components/faq'

const Home = () => (
  <div>
    <BackgroundImage />
    <div className="App">
      {/* <MLHBanner /> */}
      <Landing />
      <FAQ />
      {/* <Image /> */}
      <Stats />
      {/* <Image /> */}
      <Winners />
      {/* <Image /> */}
      <Sponsors />
      {/* <Schedule /> */}
      {/* <Recruiting /> */}
      <Footer />
    </div>
  </div>
)

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path='/live/'>
          <Logo />
          <p style={{ textAlign: 'center', fontSize: '3em', margin: '180px auto' }}>
            <a href='https://forms.gle/jUbruHkq1kSPY9ZW8'>Interested in joining the HackUNT Team?</a>
          </p>
          <Schedule />
          <Challenges />
          <Footer />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App;
