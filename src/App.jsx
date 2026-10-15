import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './home';
import About from './about';
import Skills from './skills';
import Contact from './contact';
import Footer from './footer'; // Capitalized variable name to follow React component convention

const App = () => {
  return (
    <Router>
      {/* Wrapper to force the footer to stay at the bottom of short pages */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Navbar />
        
        {/* Main Content wrapper takes up remaining vertical space */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer placed outside Routes so it renders on every single page */}
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;
