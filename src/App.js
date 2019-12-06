import React from 'react';
import './App.css';
import Landing from './components/landing';
import FAQ from './components/faq';
import Team from './components/team';
import What from './components/what';
import Footer from './components/footer';
import Sponsors from './components/sponsors';

function App() {
  return (
    <div className="App">
      <Landing />
      <What />
      <FAQ />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
