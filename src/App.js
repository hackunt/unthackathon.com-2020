import React from 'react';
import './App.css';
import Landing from './components/landing';
import FAQ from './components/faq';
import Team from './components/team';
import What from './components/what';
import Footer from './components/footer';
import Sponsors from './components/sponsors';
import MLHBanner from './components/mlh-banner';
import Recruiting from './components/recruiting';
import Schedule from './components/schedule';
import Challenges from './components/challenges';
import Logo from './components/logo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => (
  <div className="App">
    <MLHBanner />
    <Landing />
    <What />
    <FAQ />
    <Schedule />
    <Team />
    <Sponsors />
    <Recruiting />
    <Footer />
  </div>
)

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path='/live/'>
          <Logo />
          <p style={{ textAlign: 'center', fontSize: '3em', margin: '180px auto' }}>
            <a href='https://forms.gle/jUbruHkq1kSPY9ZW8'>Interested in joining the HackUNT Team?!</a>
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
