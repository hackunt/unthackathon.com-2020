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

function App() {
  return (
    <div className="App">
      <MLHBanner />
      <Landing />
      <What />
      <FAQ />
      <Team />
      <Sponsors />
      <Recruiting />
      <Footer />
    </div>
  );
}

export default App;
