import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, delay } from "framer-motion";
import MouseCursor from "../MouseCursor";

const Section = styled.div`
  font-family: "Neue-Montreal-light";
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  color: white;
`;
const Container = styled.div`
  margin-top: 7vw;
  height: 75vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-aspect-ratio: 2/1) {
    height: 65vh;
  }
  @media screen and (max-width: 1400px) {
    margin-top: 7vh;
    width: 92vw;
    height: fit-content;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    margin-top: 20vh;
    width: 92vw;
    height: fit-content;
  }
  @media screen and (max-width: 800px) {
    margin-top: 10vh;
    width: 92vw;
    height: fit-content;
  }
  @media (orientation: landscape) and (max-width: 800px){
    margin-top: 25vh;
    width: 92vw;
    height: fit-content;
  }
`;
const Page_info = styled(motion.div)`
  color: white;
  font-family: "Neue-Montreal-light";
  width: 95%;
  font-size: 1.6vw;
  border-bottom: 1px white solid;
  line-height: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 5vw;
    line-height: 5vw;
    text-align: right;
  }
`;
const C = styled.span`
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

  @media (min-aspect-ratio: 2/1) {
    width: 92vw;
  }

  @media (min-width: 0px) and (max-width: 1400px) {
    justify-content: center;
    align-items: center;
    padding-bottom: 5vw;
    padding-top: 3vw;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    justify-content: center;
    align-items: center;
    padding-bottom: 5vw;
    padding-top: 3vw;
  }
`;
const Link = styled(motion.a)`
  font-size: 2.0vw;
  padding-right: 10px;
  color: white;

  &:hover {
    color: #4472C4; /* Add the hover color */
  }
  @media (min-aspect-ratio: 2/1) {
    height: 1.8vw;
    font-size: 1.8vw;
    padding-top: 2vw;
    padding-bottom: 5vw;
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
const Mobile_Project_Content = styled(motion.div)`
   @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    width: 92vw;
    height: 80vh;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    display: flex;
    flex-direction: column;
    width: 92vw;
    height: 100vh;
  }
  @media screen and (min-width: 1400px){
    display: none;
  }
`;
const Project_Content = styled(motion.div)`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  gap: 0.5vw;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
const Col = styled(motion.div)`
  margin-top: 3vw;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5vw;
  flex-wrap: nowrap;
  @media (min-aspect-ratio: 2/1) {
    margin-top: 1vw;
  }

`;
const Item1Container = styled(motion.div)`
  width: 100%;
  height: 14vw;
  @media (min-aspect-ratio: 2/1) {
    height: 10vw;
  }
`;
const Item1 = styled(motion.div)`
  &.card{
    background: rgba(116, 115, 115, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    height: 14vw;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-aspect-ratio: 2/1) {
    height: 10vw;
    }
  }

  &.opened-card{
    background: rgba(116, 115, 115, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    display: flex;;
    flex-direction: column;
  }
  
`;
const Item2Container = styled(motion.div)`
  height: 14vw;
  width: 100%;
  @media (min-aspect-ratio: 2/1) {
    height: 10vw;
  }
`;
const Item2 = styled(motion.div)`
  &.card{
    z-index: 1;
    background: rgba(116, 115, 115, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    width: 100%;
    height: 14vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-aspect-ratio: 2/1) {
    height: 10vw;
  }
  }
  &.opened-card{
    z-index: 10;
    background: rgba(116, 115, 115, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    display: flex;
    flex-direction: column;
  }

`;
const Item3Container = styled(motion.div)`
  width: 100%;
  height: 14vw;
  @media (min-aspect-ratio: 2/1) {
    height: 10vw;
  }
`;
const Item3 = styled(motion.div)`
  &.card{
    z-index: 1;
    background: rgba(116, 115, 115, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    height: 14vw;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-aspect-ratio: 2/1) {
    height: 10vw;
  }
  }

  &.opened-card{
    z-index: 10;
    background: rgba(116, 115, 115, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);

    display: flex;
    flex-direction: column;
  }


`;
const Item4Container = styled(motion.div)`
    height: 14vw;
    width: 100%;
    @media (min-aspect-ratio: 2/1) {
    height: 10vw;
  }
`;
const Item4 = styled(motion.div)`
  &.card{
    background: rgba(116, 115, 115, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    height: 14vw;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-aspect-ratio: 2/1) {
    height: 10vw;
  }
  }
  &.opened-card{
    background: rgba(116, 115, 115, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    display: flex;
    flex-direction: column;
  }

`;
const ProjTitle = styled(motion.div)`
  &.Title{
    font-size: 2vw;
  }

  &.opened-Title{
    margin-left: 1vw;
    width: 30vw;
    font-size: 2vw;
    text-align: left;
    padding-left: 0.3vw;
    border-bottom: 1px white solid;
  }
`;
const ItemContent = styled(motion.div)`
  display: flex;
  height: 90%;
`;
const Left = styled(motion.div)`
  height: 90%;
  @media (min-aspect-ratio: 2/1) {
    height: 88%;
    }
  div{
    margin-top: -1vw;
  }

  &::-webkit-scrollbar{
    width: 4px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #4472C4;
  }
  flex: 1;
  padding: 1vw;
  overflow: auto;

  ul{
    list-style: none;
  }
  li{
    font-size: 0.8vw;
  }
  p{
    font-size: 0.9vw;
  }

  h2{
    font-size: 1.4vw;
    line-height: 1vw;
  }
  span{
    font-size: 1vw;
    &.ST{
      margin-right: 0.4vw;
      color: #4472C4;
    }
  }

  a{
    font-size: 1.3vw;
    line-height: 1.4vw;
    color: #4472C4;
    &:hover{
      color: #4472C4;
    }
  }
`;
const Right = styled(motion.div)`
  flex: 1;
  margin-top: -2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vw;
`;
const IMGI1 = styled(motion.img)`
  height: 25vh;
  &.webproject{
    height: 30vh;
  }
  &.CalProj{
    height: 50vh;
  }
  &.Covid{
    height: 20vh;
  }
  &.Covid2{
    height: 19vh;
  }
`;
const IMG2I1 = styled(motion.img)`
  height: 30vh;
`;
const MCol = styled(motion.div)`
  height: inherit;
  padding-top: 4vw;
`;
const MItemContainer = styled(motion.div)`
  display: flex;
  width: 400vw;
  height: inherit;
  gap: 5vh;
`;
const MItem1 = styled(motion.div)`
  background: rgba(115, 114, 114, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 100vw;
  height: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MItem2 = styled(motion.div)`
  background: rgba(115, 114, 114, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 100vw;
  height: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MItem3 = styled(motion.div)`
  background: rgba(115, 114, 114, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 100vw;
  height: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MItem4 = styled(motion.div)`
  background: rgba(115, 114, 114, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 100vw;
  height: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const H1 = styled(motion.div)`
  height: fit-content;
  width: 95%;
  font-size: 2.6em;
  color: white;

  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5em;
  }
  @media screen and (max-width: 1400px){
    font-size: 5em;
  }
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    font-size: 3em;
  }
  @media screen and (max-width: 1000px){
    font-size: 2.6em;
  }
`;
const Para = styled(motion.div)`
  height: fit-content;
  width: 95%;
  font-size: 1.2em;
  color: white;

  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 2.7vw;
  }
  @media screen and (max-width: 1400px){
    font-size: 2em;
  }
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 1000px){
    font-size: 1.2em;
  }
`;
const SubT = styled(motion.div)`
  height: fit-content;
  width: 95%;
  font-size: 2.2em;
  color: white;

  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 4vw;
  }
  @media screen and (max-width: 1400px){
    font-size: 3.3em;
  }
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    font-size: 2.2em;
  }
  @media screen and (max-width: 1000px){
    font-size: 2.2em;
  }
`;
const SkillContent = styled(motion.div)`
  width: 95%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    flex-direction: row;
    gap: 1.2vw;
    flex: 0;
    height: fit-content;
  }
`
const Items = styled(motion.div)`
  color: #4472C4;
  height: fit-content;
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 2.7vw;
  }
  @media screen and (max-width: 1400px){
    font-size: 2em;
  }
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 1000px){
    font-size: 1.2em;
  }
`;
const MGit = styled(motion.div)`
  width: 95%;
  &.Web{
    padding-top: 2vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 2.7vw;
  }
  @media screen and (max-width: 1400px){
    font-size: 2em;
  }
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    font-size: 1.2em;
    padding-top: 0vw;
    border: 1px red solid;
  }
  @media screen and (max-width: 1000px){
    font-size: 1.2em;
    padding-top: 0vw;
  }
`;
const Projects = () => {
  const ref = useRef(null);
  const [CursorState, setCursorState] = useState("visible");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    // Toggle selected card
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

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
        <Page_info
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.6, ease: "easeInOut" },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          PROJECTS<C>.</C>
        </Page_info>
        <Mobile_Project_Content ref={ref}>
          <MCol>
            <MItemContainer drag="x" dragConstraints={ref}>
              <MItem1>
                <H1
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                >
                  Web-PortFolio<C>.</C>
                </H1>
                <Para
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                >
                  My personal web portfolio serves as a showcase of my
                  experience, personal projects, and career journey. This is my
                  inaugural project that I am sharing with the world, hoping to
                  inspire fellow developers.
                </Para>
                <SubT
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
                >
                  Key Skills Utilized:
                </SubT>
                <SkillContent
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
                >
                  <Items className="ST">Vite</Items>
                  <Items className="ST">React</Items>
                  <Items className="ST">Styled-Components</Items>
                  <Items className="ST">Framer-Motion</Items>
                  <Items className="ST">HTML, CSS & JavaScript</Items>
                  <Items className="ST">Figma</Items>
                  <Items className="ST">Firebase</Items>
                </SkillContent>
                <MGit
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 1 }}
                >
                  <a href="https://github.com/FishmandemCode/Web-Portfolio-1.0" target="_blank">
                    Github
                  </a>
                </MGit>
              </MItem1>
              <MItem2>
                <H1
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                >
                  FBCS<C>.</C>
                </H1>
                <Para
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                >
                  Developed during my final semester, this check-in system utilizes a 
                  Raspberry Pi and a fingerprint sensor for secure user access. The web 
                  application allows users to register fingerprints and credentials, storing 
                  the data in a SQL database hosted on a Flask server.
                </Para>

                <SubT
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
                >
                  Key Skills Utilized:
                </SubT>
                <SkillContent
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
                  >
                  <Items className="ST">Python</Items>
                  <Items className="ST">HTML, CSS & JavaScript</Items>
                  <Items className="ST">SQL</Items>
                  <Items className="ST">Flask</Items>
                  <Items className="ST">Hardware (Pi & Sensors etc)</Items>
                </SkillContent>
                <MGit
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 1 }}
                >
                  <a href="https://github.com/FishmandemCode/FBCS" target="_blank">
                    Github
                  </a>
                </MGit>
              </MItem2>
              <MItem3>
                <H1
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                >
                  Covid Screening App<C>.</C>
                </H1>
                <Para
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                >
                  This project is a Covid Screening Application allowing users
                  to register their Covid status and symptoms. Users flagged for
                  showing symptoms or confirming Covid can manage their
                  registration, unflag themselves, and print the database stored
                  in SQL.
                </Para>
                <SubT
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
                >
                  Key Skills Utilized:
                </SubT>
                <SkillContent
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
                >
                  <Items className="ST">C#</Items>
                  <Items className="ST">SQL</Items>
                </SkillContent>
                <MGit
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 1 }}
                >
                  <a href="https://github.com/FishmandemCode/Covid-Screening-Application" target="_blank">
                    Github
                  </a>
                </MGit>
              </MItem3>
              <MItem4>
                <H1
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                >
                  Window-Calculator<C>.</C>
                </H1>
                <Para
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                >
                  This project is a Windows 11-inspired calculator, designed for
                  efficient user input handling. The core functionality relies
                  on functions to store information in a storage list. Each user
                  input stacks in the list, enabling data combination triggered
                  by user-initiated functions.
                </Para>

                <SubT
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
                >
                  Key Skills Utilized:
                </SubT>
                <SkillContent
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
                >
                  <Items className="ST">C#:</Items>
                </SkillContent>
                <MGit
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 1 }}
                >
                  <a href="https://github.com/FishmandemCode/Calculator-Project-CALBN-" target="_blank">
                    Github
                  </a>
                </MGit>
              </MItem4>
            </MItemContainer>
          </MCol>
        </Mobile_Project_Content>
        <Project_Content>
          <Col className="First">
            <Item1Container
              onClick={() => handleCardClick("Item1")}
              animate={{
                zIndex: selectedCard === "Item1" ? "11" : "",
              }}
              transition={{ duration: 0.1 }}
            >
              <Item1
                className={selectedCard === "Item1" ? "opened-card" : "card"}
                onClick={() => handleCardClick("Item1")}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.5 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate={{
                  width: selectedCard === "Item1" ? "70vw" : "",
                  height: selectedCard === "Item1" ? "70vh" : "",
                  marginTop: selectedCard === "Item1" ? "-11.3vh" : "0",
                  marginLeft: selectedCard === "Item1" ? "-10.6vw" : "0",
                }}
                transition={{ duration: 0.3, type: "linear" }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <ProjTitle
                  className={
                    selectedCard === "Item1" ? "opened-Title" : "Title"
                  }
                >
                  Web-Portfolio
                </ProjTitle>
                {selectedCard === "Item1" && (
                  <ItemContent>
                    <Left>
                      <div>
                        <motion.p
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                          >
                          My personal web portfolio serves as a showcase of my
                          experience, personal projects, and career journey.
                          This is my inaugural project that I am sharing with
                          the world, hoping to inspire fellow developers.
                        </motion.p>
                        <motion.h2
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                          >
                          Key Skills Utilized:</motion.h2>
                        <motion.ul
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
                          >
                          <li>
                            <span className="ST">Vite:</span> Optimized project
                            build and development workflow for faster
                            performance.
                          </li>
                          <li>
                            <span className="ST">React:</span> Designed
                            interactive user interfaces and components for an
                            engaging experience.
                          </li>
                          <li>
                            <span className="ST">Styled-Components:</span>{" "}
                            Applied dynamic and maintainable styles to enhance
                            visual aesthetics.
                          </li>
                          <li>
                            <span className="ST">Framer-Motion:</span> Infused
                            life into the UI with seamless animations and
                            transitions.
                          </li>
                          <li>
                            <span className="ST">HTML, CSS & JavaScript:</span>{" "}
                            Crafted an intuitive and user-friendly web GUI.
                          </li>
                          <li>
                            <span className="ST">Figma:</span> Utilized for
                            design purposes.
                          </li>
                        </motion.ul>

                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
                        >
                          Technology Stack:</motion.h2>

                        <motion.ul
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 1 }}
                        >
                          <li>
                            <span className="ST">Language:</span> JavaScript
                          </li>
                          <li>
                            <span className="ST">Web Development:</span> React,
                            HTML, CSS
                          </li>
                          <li>
                            <span className="ST">Web Server:</span> Vite
                          </li>
                        </motion.ul>
                      </div>
                      <MGit className="Web"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 1 }}
                        >
                          <a href="https://github.com/FishmandemCode/Web-Portfolio-1.0" target="_blank">

                            Github
                          </a>
                        </MGit>
                    </Left>
                    <Right>
                      <IMGI1
                        className="webproject"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                        src="./img/Projects/WebPortProject.png"
                      />
                    </Right>
                  </ItemContent>
                )}
              </Item1>
            </Item1Container>
            <Item2Container
              onClick={() => handleCardClick("Item2")}
              animate={{
                zIndex: selectedCard === "Item2" ? "11" : "",
              }}
              transition={{ duration: 0.1 }}
            >
              <Item2
                className={selectedCard === "Item2" ? "opened-card" : "card"}
                onClick={() => handleCardClick("Item2")}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 1.4 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate={{
                  width: selectedCard === "Item2" ? "70vw" : "",
                  height: selectedCard === "Item2" ? "70vh" : "",
                  marginTop: selectedCard === "Item2" ? "-40vh" : "0",
                  marginLeft: selectedCard === "Item2" ? "-44%" : "0",
                }}
                transition={{ duration: 0.3, type: "linear" }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <ProjTitle
                  className={
                    selectedCard === "Item2" ? "opened-Title" : "Title"
                  }
                >
                  {selectedCard === "Item2"
                    ? "Fingerprint Based Check-In System"
                    : "FBCS"}
                </ProjTitle>
                {selectedCard === "Item2" && (
                  <ItemContent>
                    <Left>
                      <div>
                        <motion.p
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                        >
                          This project was my final undertaking during my last
                          semester, where we applied the knowledge acquired
                          throughout my college life. The finger-based check-in
                          system allows users to use their fingerprint for
                          secure access. We built everything from scratch,
                          utilizing a Raspberry Pi as the main brain and a
                          fingerprint sensor to collect biometric data. The
                          system registers user fingerprints as well as there
                          creditendial which is required to register from the
                          web application and stores all data in a SQL database,
                          while hosting everything on a Flask server.
                        </motion.p>

                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                        >Key Skills Utilized:</motion.h2>
                        <motion.ul
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
                        >
                          <li>
                            <span className="ST">Python:</span> The primary
                            language orchestrating the system's control logic,
                            ensuring robust functionality and seamless
                            integration.
                          </li>
                          <li>
                            <span className="ST">HTML, CSS & JavaScript:</span>{" "}
                            Crafted an intuitive Web GUI to enhance user
                            interaction, providing a seamless experience for
                            system operation.
                          </li>
                          <li>
                            <span className="ST">SQL:</span> Employed a secure
                            and scalable database for the storage of user login
                            information, ensuring data integrity and access
                            control.
                          </li>
                          <li>
                            <span className="ST">Flask:</span> Hosted the Web
                            Server internally, leveraging Flask's lightweight
                            and powerful capabilities for optimal performance
                            within the network.
                          </li>
                          <li>
                            <span className="ST">Hardware Integration:</span>{" "}
                            Utilized Raspberry Pi as the central hub,
                            demonstrating proficiency in hardware orchestration.
                            Integrated the R307 Finger-based Scanner for
                            reliable biometric data collection, enhancing
                            security measures.
                          </li>
                        </motion.ul>

                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
                        >
                          System Highlights:</motion.h2>
                        <motion.ul
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 1 }}
                        >
                          <li>
                            <span className="ST">Efficiency Optimization:</span>{" "}
                            Streamlined commercial check-in processes for
                            increased operational efficiency.
                          </li>
                          <li>
                            <span className="ST">
                              Enhanced Security Measures:
                            </span>{" "}
                            Implemented biometric authentication using the R307
                            Finger-based Scanner, fortifying the system's
                            security.
                          </li>
                          <li>
                            <span className="ST">Intuitive Web Interface:</span>{" "}
                            Designed a user-friendly Web GUI for effortless
                            interaction, enhancing the overall user experience.
                          </li>
                          <li>
                            <span className="ST">
                              Reliable Database Management:
                            </span>{" "}
                            Utilized SQL for robust and secure storage of user
                            login information, maintaining data integrity.
                          </li>
                        </motion.ul>

                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
                        >Technology Stack:</motion.h2>
                        <motion.ul
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 1 }}
                        >
                          <li>
                            <span className="ST">Language:</span> Python
                          </li>
                          <li>
                            <span className="ST">Web Development:</span> HTML,
                            CSS, JavaScript
                          </li>
                          <li>
                            <span className="ST">Database:</span> SQL
                          </li>
                          <li>
                            <span className="ST">Web Server:</span> Flask
                          </li>
                          <li>
                            <span className="ST">Hardware:</span> Raspberry Pi,
                            R307 Finger-based Scanner, 5v Relay, 12v Solenoid &
                            12V 2A DC Power
                          </li>
                        </motion.ul>
                      </div>
                      <MGit className="Web"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          animate="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 1 }}
                        >
                        <a href="https://github.com/FishmandemCode/FBCS" target="_blank">
                            Github
                          </a>
                        </MGit>
                    </Left>
                    <Right>
                      <IMGI1
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                         src="./img/Projects/FBCS.png" />
                      <IMG2I1
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                         src="./img/Projects/FBCS1.png" />
                    </Right>
                  </ItemContent>
                )}
              </Item2>
            </Item2Container>
          </Col>
          <Col className="Second">
            <Item3Container
              onClick={() => handleCardClick("Item3")}
              animate={{
                zIndex: selectedCard === "Item3" ? "11" : "",
              }}
              transition={{ duration: 0.1 }}
            >
              <Item3
                className={selectedCard === "Item3" ? "opened-card" : "card"}
                onClick={() => handleCardClick("Item3")}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.8 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate={{
                  width: selectedCard === "Item3" ? "70vw" : "",
                  height: selectedCard === "Item3" ? "70vh" : "",
                  marginTop: selectedCard === "Item3" ? "-11.3vh" : "0",
                  marginLeft: selectedCard === "Item3" ? "-146%" : "0",
                }}
                transition={{ duration: 0.3, type: "linear" }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <ProjTitle
                  className={
                    selectedCard === "Item3" ? "opened-Title" : "Title"
                  }
                >
                  Covid-Screening App
                </ProjTitle>
                {selectedCard === "Item3" && (
                  <ItemContent>
                    <Left>
                      <div>
                        <motion.p
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                        >
                          This project is a Covid Screening Application where
                          users can register their Covid status and symptoms. If
                          a user registers themselves as having Covid or shows
                          symptoms during the screening, they are flagged. The
                          application also provides options to remove
                          registration, unflag oneself, and print the database
                          stored in a SQL Database.
                        </motion.p>
                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                        >Key Features:</motion.h2>
                        <motion.ul
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
                        >
                          <li>
                            Utilizes functions to store and stack user inputs.
                          </li>
                          <li>
                            Enables data combination upon user initiation.
                          </li>
                          <li>
                            Register and flag users based on their Covid status
                            and symptoms.
                          </li>
                          <li>
                            Options to remove registration, unflag, and print
                            the database.
                          </li>
                        </motion.ul>
                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
                        >Key Skills Utilized:</motion.h2>
                        <motion.ul
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 1 }}
                        >
                          <li>
                            <span className="ST">C#:</span> The primary language for application development.
                          </li>
                          <li>
                            <span className="ST">mySQL:</span>                           
                            Scalable database for the storage of user information,
                            ensuring data integrity and access control.
                          </li>
                        </motion.ul>

                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 1.2 }}
                        >Technology Stack:</motion.h2>
                        <motion.ul
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 1.4 }}
                        >
                          <li>
                            <span className="ST">Language:</span> C#
                          </li>
                          <li>
                            <span className="ST">Database:</span> mySQL
                          </li>
                        </motion.ul>
                      </div>
                      <MGit className="Web"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 1.6 }}
                        >
                          <a href="https://github.com/FishmandemCode/Covid-Screening-Application" target="_blank">
                            Github
                          </a>
                        </MGit>
                    </Left>
                    <Right>
                      <IMGI1
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                        className="Covid"
                        src="./img/Projects/SenecaCovidScreening.png"
                      />
                      <IMGI1
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                        className="Covid2"
                        src="./img/Projects/SenecaCovidScreening2.png"
                      />
                    </Right>
                  </ItemContent>
                )}
              </Item3>
            </Item3Container>
            <Item4Container
              onClick={() => handleCardClick("Item4")}
              animate={{
                zIndex: selectedCard === "Item4" ? "11" : "",
              }}
              transition={{ duration: 0.1 }}
            >
              <Item4
                className={selectedCard === "Item4" ? "opened-card" : "card"}
                onClick={() => handleCardClick("Item4")}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 1.1 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate={{
                  width: selectedCard === "Item4" ? "70vw" : "",
                  height: selectedCard === "Item4" ? "70vh" : "",
                  marginTop: selectedCard === "Item4" ? "-40vh" : "0",
                  marginLeft: selectedCard === "Item4" ? "-146%" : "0",
                }}
                transition={{ duration: 0.3, type: "linear" }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <ProjTitle
                  className={
                    selectedCard === "Item4" ? "opened-Title" : "Title"
                  }
                >
                  Window-Calculator
                </ProjTitle>
                {selectedCard === "Item4" && (
                  <ItemContent>
                    <Left>
                      <div>
                        <motion.p
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                        >
                          This project is a calculator designed with inspiration
                          from the Windows 11 calculator. The core functionality
                          revolves around user input, leveraging functions to
                          store information in a storage list. Each user input
                          stacks in the list, allowing the combination of data
                          when triggered by another user-initiated function.
                        </motion.p>
                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                        >Key Features:</motion.h2>
                        <motion.ul
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
                        >
                          <li>
                            Mimics the design and functionality of the Windows
                            11 calculator.
                          </li>
                          <li>
                            Utilizes functions to store and stack user inputs.
                          </li>
                          <li>
                            Enables data combination upon user initiation.
                          </li>
                        </motion.ul>
                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
                        >Current Capabilities:</motion.h2>
                        <motion.ul
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 1 }}
                        >
                          <li>
                            Performs standard calculator functions.
                          </li>
                        </motion.ul>
                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 1.2 }}
                        >Key Skills Utilized:</motion.h2>
                        <motion.ul
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 1.4 }}
                        >
                          <li>
                            <span className="ST">C#:</span> The primary language for application development.
                          </li>
                        </motion.ul>

                        <motion.h2
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 1.6 }}
                        >Technology Stack:</motion.h2>
                        <motion.ul
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 1.8 }}
                        >
                          <li>
                            <span className="ST">Language:</span> C#
                          </li>
                        </motion.ul>
                      </div>
                      <MGit className="Web"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 40, delay: 2 }}
                        >
                          <a href="https://github.com/FishmandemCode/Calculator-Project-CALBN-" target="_blank">
                            Github
                          </a>
                        </MGit>
                    </Left>
                    <Right>
                      <IMGI1
                        className="CalProj"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                        src="./img/Projects/calculator.png"
                      />
                    </Right>
                  </ItemContent>
                )}
              </Item4>
            </Item4Container>
          </Col>
        </Project_Content>
      </Container>
      <Footer>
        <Link
          variants={{
            hidden: { opacity: 0, x: 55 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          href="https://resume.io/r/sZ2Qrdb8h"
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
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
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
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, delay: 0.4 }}
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

export default Projects;
