import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';

const Section = styled(motion.main)`
  *{
    cursor: none !important;
  }
  height: 100vh;
  width: 100vw;
  background: url("./img/BGL.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;

  @media (min-width: 0px) and (max-width: 1400px) and (orientation: portrait) {
    background-image: url("./img/PBGL.jpeg");

  }

  &::-webkit-scrollbar{
    width: 4px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #4472C4;
  }
`;
function App() {
  return (
    <Section>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Section>
  );
}

export default App;