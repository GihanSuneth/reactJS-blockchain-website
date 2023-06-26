import React from 'react'
import About from './components/About';
import Developer from './components/Developer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div>
      <div>
          <Navbar />
          <Hero />
          <About />
          <Developer />
          <Subscribe />
          <Footer />
      </div>
    </div>
  );
}

export default App;
