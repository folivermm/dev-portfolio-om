import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
import Work from './components/work/work';
import Contact from './components/contact/contact'
import Intro from './components/intro/intro'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
