import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import MouseCursor from "../MouseCursor";
import React, { useState, useRef } from "react";

const Section = styled.nav`
  font-family: "Neue-Montreal-light";
  height: 10vh;
  width: 100vw;
  position: fixed;
  display: flex;
  z-index: 999;
  overflow: none;

  @media (max-width: 1400px)
  {
    height: 9vh;
  }
  @media (orientation: landscape) and (max-width: 1400px)
  {
    height: 10vw;
  }
`;
const NavContainer = styled.div`

  @media screen and (max-width: 1400px) {
    display: none;
  }
  @media screen and (min-width: 1400px){
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;
const Mobile_Nav = styled(motion.div)`
  @media screen and (max-width: 1400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
  @media screen and (min-width: 1400px){
    display: none;
  }
`;
const Logo = styled(motion(NavLink))`
  padding-left: 2vw;
  padding-right: 10px;
  border-radius: 16px;
`;
const Nav1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  gap: 2vw;
  font-size: 2.7vw;

  &.MobileNavItem{
    flex-direction: column;
  }
`;
const Navtext = styled(motion(NavLink))`
  font-family: "Neue-Montreal-light";
  padding-left: 10px;
  padding-right: 10px;
  color: #f1f1f1;

  &:hover {
    color: #4472C4; /* Add the hover color */
  }
`;
const IMG = styled.img`
  padding-top: 2.3vh;
  height: 3vw;
  border-radius: 100%;

  @media (min-width: 0px) and (max-width: 800px) {
    height: 3vw;
    font-size: 3.5vw;
  }

`;
const BG = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 100;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Navitem = styled(motion(NavLink))`
    width: 70%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    a{
        color: white;
        font-size: 9vw;
        text-decoration: none;
    }
  @media (max-width: 1400px){
    gap: 4vw;
    a{
        color: white;
        font-size: 8vw;
        text-decoration: none;
    }

  @media (orientation: landscape) and (max-width: 1400px){
    gap: 2vw;
    a{
        color: white;
        font-size: 5vw;
        text-decoration: none;
    }
  }
  }
`;
const Button = styled.button`
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    position: absolute;
    width: fit-content;
    top: 2.4vw;
    right: 1.6vw;
    border: none;
    background-color: transparent;
    outline: none;

    &:focus{
      outline: 0 !important;
    }

    @media (max-width: 600px){
      top: 2.8vw;
      right: 0vw;
    }
    @media (orientation: landscape) and (max-width: 1400px){
      top: 2.1vw;
      right: 1.2vw;
    }
`;
const SVG = styled(motion.svg)`
  width: 3vw;
  @media (orientation: landscape) and (max-width: 1400px){
    width: 4vw;
  }
  @media (max-width: 600px){
    width: 8vw;
  }
  @media (orientation: landscape) and (max-width: 600px){
    width: 3.4vw;
  }
`;
const MobileLogo = styled.div`
  position: absolute;
  width: fit-content;
  top: 3vh;
  left: 3vw;

  @media (orientation: landscape) and (max-width: 1400px){
    top: 4vh;
    left: 3vw;
  }
  @media (orientation: landscape) and (max-width: 960px){
    top: 8.5vh;
    left: 3vw;
  }
`;
const MobileIMG = styled.img`
  width: 15vw;
  @media (max-width: 1400px){
    width: 9vw;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    width: 7vw;
  }
  @media (max-width: 600px){
    width: 15vw;
  }
`;

function Navbar() {
  
  const Navlinks = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemvarrients = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 20,
      opacity: 0,
    },
  };

  const sidebar = {
    open: {
      clipPath: `circle(2000px at 110vw 0vh)`,
      transition: {
        type: "spring",
        stiffness: 100,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(30px at 110vw 0vh)",
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const [Lightmode, setLightmode] = useState(false);

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
      <Mobile_Nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <MobileLogo>
          <MobileIMG src="/img/LogoW.png" />
        </MobileLogo>
        <BG variants={sidebar}>
          <Navitem variants={Navlinks}>
            <Nav1 className="MobileNavItem">
              <Navtext
                onClick={() => toggleOpen((isOpen) => !isOpen)}
                variants={itemvarrients}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                to="/"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Home
              </Navtext>

              <Navtext
                onClick={() => toggleOpen((isOpen) => !isOpen)}
                variants={itemvarrients}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                to="/about"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                About
              </Navtext>

              <Navtext
                onClick={() => toggleOpen((isOpen) => !isOpen)}
                variants={itemvarrients}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                to="/projects"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Projects
              </Navtext>

              <Navtext
                onClick={() => toggleOpen((isOpen) => !isOpen)}
                variants={itemvarrients}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                to="/contact"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Contact
              </Navtext>
            </Nav1>
          </Navitem>
        </BG>
        <Button onClick={() => toggleOpen((isOpen) => !isOpen)}>
          <SVG viewBox="0 0 20 20">
            <motion.path
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              d="M 2 9.423 L 20 9.423"
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              strokeWidth="3"
              stroke="#4472C4"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </SVG>
        </Button>
      </Mobile_Nav>
      <NavContainer className="LargeScreen">
        <Logo
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          as={NavLink}
          to="/"
        >
          <IMG
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
            src="./img/LogoW.png"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          />
        </Logo>

        <Nav1>
          <Navtext
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.4 }}
            to="/"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Home
          </Navtext>

          <Navtext
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.6 }}
            to="/about"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            About
          </Navtext>

          <Navtext
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.8 }}
            to="/projects"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Projects
          </Navtext>

          <Navtext
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 1 }}
            to="/contact"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Contact
          </Navtext>
        </Nav1>
      </NavContainer>
    </Section>
  );
}

export default Navbar;
