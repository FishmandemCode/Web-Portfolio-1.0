import styled from "styled-components";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import MouseCursor from "../MouseCursor";

const Section = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 0;
  overflow: hidden;
`;
const Container = styled(motion.div)`
  font-family: "Neue-Montreal-light";
  min-height: 60%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 18vh;

  @media (min-width: 0px) and (max-width: 600px) {
    min-height: 60%;
    max-width: 80%;
  }
`;
const Intro1 = styled(motion.div)`
  width: 100%;
  height: 4vw;
  font-size: 3.3vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1vw;

  
  @media (min-width: 0px) and (max-width: 600px) {
    height: 5.5vw;
    font-size: 5.5vw;
    padding-left: 1vw;
  }

`;
const Intro2 = styled(motion.div)`
  width: 100%;
  height: 4vw;
  font-size: 3.3vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1vw;

  
  @media (min-width: 0px) and (max-width: 600px) {
    height: 5.5vw;
    font-size: 5.5vw;
  }

`;
const MidText = styled(motion.div)`
  width: 100%;
  height: 11.5vw;
  font-size: 12.5vw;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const SubText = styled(motion.div)`
  width: 100%;
  height: 3.5vw;
  font-size: 3.3vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: -0.2vw;
  
  @media (min-width: 0px) and (max-width: 600px) {
    height: 5.5vw;
    font-size: 5.5vw;
  }

`;
const Color = styled.span`
  color: #4472C4;
`;
const Footer = styled(motion.div)`
  height: 10vh;
  width: 95vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Neue-Montreal-light";
  gap: 2vw;

  @media (min-width: 0px) and (max-width: 1400px) {
    justify-content: center;
    align-items: center;
    padding-top: 2vw;
    padding-bottom: 5vw;
  }
`;
const Link = styled(motion.a)`
  font-size: 2.0vw;
  padding-right: 10px;
  color: white;

  &:hover {
    color: #4472C4; /* Add the hover color */
  }

  @media (min-width: 0px) and (max-width: 1400px) {
    height: 3.5vw;
    font-size: 3.5vw;
  }
  
  @media (orientation: landscape) and (max-width: 1400px){
    height: 2.5vw;
    font-size: 2.5vw;
  }
`;
const Hero = () => {
  const [CursorState, setCursorState] = useState("visible");

  const textEnter = () => {
    setCursorState("text");
  };

  const textLeave = () => {
    setCursorState("visible");
  };

  return (
    <Section>
      <MouseCursor CursorState={CursorState} />
      <Container>
        <Intro1
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "linear", stiffness: 70, delay: 0.2 }}
        >
          Hello<Color>,</Color>
        </Intro1>

        <Intro2
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "linear", stiffness: 70, delay: 0.4 }}
        >
          I<Color>'</Color>m BILAL NASIR
        </Intro2>

        <MidText
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "linear", stiffness: 70, delay: 0.6 }}
        >
          S<Color>O</Color>FTWARE
        </MidText>

        <SubText
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "linear", stiffness: 70, delay: 0.8 }}
        >
          ENGINEER
        </SubText>
      </Container>

      <Footer>
        <Link
          variants={{
            hidden: { opacity: 0, x: 55 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 60, delay: 0.6 }}
          href="https://github.com/FishmandemCode"
          target="_blank"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Resume
        </Link>

        <Link
          variants={{
            hidden: { opacity: 0, x: 55 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 60, delay: 0.8 }}
          href="https://github.com/FishmandemCode"
          target="_blank"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Github
        </Link>

        <Link
          variants={{
            hidden: { opacity: 0, x: 55 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 60, delay: 1 }}
          href="https://linkedin.com/in/bilal2712"
          target="_blank"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Linkedin
        </Link>
      </Footer>
    </Section>
  );
};

export default Hero;
