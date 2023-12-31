import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Section = styled(motion.main)`
  /* * {
    cursor: none !important;
  } */
  min-height: 100vh;
  width: 100vw;
  background: url("./img/BGL.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  color: white;

  @media (min-width: 0px) and (max-width: 1400px) and (orientation: portrait) {
    background-image: url("./img/PBGL.jpeg");
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4472C4;
  }
`;

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Section>
    </HashRouter>
  );
}

export default App;
