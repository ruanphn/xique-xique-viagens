import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import CarneSection from './components/CarneSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Packages />
        <CarneSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
