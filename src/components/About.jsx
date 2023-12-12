import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, delay } from "framer-motion";
import MouseCursor from "../MouseCursor";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./ExpData";
import OverviewPrev from "./Cards/OverviewPrev";
import ExpertisePrev from "./Cards/ExpertisePrev";
import ExperiencePrev from "./Cards/ExperiencePrev";

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
`;
const Container = styled.div`
  margin-top: 7vw;
  height: 75vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
const Card_Cont = styled.div`
  padding-top: 1vw;
  width: 80vw;
  height: 90%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
const Card_box = styled.div`
  padding-top: 2vw;
  width: 33%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const Mobile = styled(motion.div)`
  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    width: 92vw;

    &.Scroller{
      width: 100vw;
      justify-content: center;
      align-items: center;
    }

    &.ExpContent{
      height: fit-content;
    }
  }
  @media screen and (min-width: 1400px){
    display: none;
  }

`;
const SepTitle = styled(motion.div)`
  padding-top: 7vw;
  font-size: 10vw;
  padding-left: 1vw;
  line-height: 9vw;
  color: #4472C4;

  &.ScrollerTitle{
    width: 89vw;
  }
`;
const CardBase = styled(motion.div)`
  &.card{
    height: 22vw;
    width: 90%;
    background: rgba(116, 115, 115, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }
/* 
  &.card::before{
    content: "";
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.2);
  } */


  &.opened-card{
    display: flex;
    flex-direction: column;
    background: rgba(116, 115, 115, 0.2); 
    opacity: 1;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    z-index: 10;
  }
`;
const Card = styled(CardBase)`
`;
const Image = styled.div`
  &.image{
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    margin-top: 2vw;
    width: 19.5vw;
    height: 15vw;
  }

  &.image-open{
      display: none;
    }
`;
const Text = styled.span`
  &.text{
    margin-top: 1vw;
    width: 20vw;
    font-size: 2vw;
    text-align: left;
    padding-left: 0.3vw;
  }

  &.text-open{
    margin-left: 2vw;
    padding-top: 1vw;
    width: 22vw;
    font-size: 2vw;
    text-align: left;
    padding-left: 0.3vw;
    border-bottom: 1px white solid;
  }

`;
const OContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const SubContainer = styled(motion.div)`
  height: 90%;
  width: 95%;
  display: flex;
`;
const Subtext = styled(motion.div)`
  flex: 1.5;
  font-size: 1.3vw;
  opacity: 1;
  overflow: none;
  @media screen and (min-width: 1400px){
    overflow: auto;
  }
  &::-webkit-scrollbar{
    width: 4px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #4472C4;
  }
  @media screen and (max-width: 1400px){
    opacity: 1;
    font-size: 4.4vw;
  }

`;
const DP = styled(motion.div)`
  flex: 1; 
  display: flex;
`;
const IMG = styled(motion.img)`
  height: 27vw;
`;
const C = styled.span`
  color: #4472C4;
`;
const ExpContainer = styled(motion.div)`
  padding-top: 2vw;
  height: 53vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1400px){
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 0vw;
    height: 100%;
  }
`;
const VTimeline = styled(motion(VerticalTimeline))`
  height: 90%;
  @media screen and (min-width: 1400px){
    overflow-y: auto; /* Change from scroll to auto */
    overflow-x: hidden;
    padding-left: 10vw;
    padding-right: 10vw;
  }

  &.vertical-timeline::before {
    border-color: white;
    height: 200%;
    @media screen and (max-width: 1400px){
      display: none;
    }
    @media screen and (max-width: 1900px){
      border-color: white;
      height: 250%;
    }
  }
  &::-webkit-scrollbar{
    width: 6px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #4472C4;
  }
`;
const VTimelineElement = styled(motion(VerticalTimelineElement))`
  @media screen and (max-width: 1400px) {
    .vertical-timeline-element-icon.bounce-in{
      display: none;
    }
    .vertical-timeline-element-content.bounce-in{
      width: 100%;
      margin: 0;
    }
      .vertical-timeline-element-content-arrow {
      display: none;
    }
  }

  .vertical-timeline-element-content {
    border-radius: 0px;
    border-bottom: 1px;
    background: rgba(240, 240, 240, 0.1);
    opacity: 1;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
  }

  .vertical-timeline-element-date {
    margin: 0;
    color:#f1eeee;
    font-size: medium;
  }

`;
const TimelineContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
const Title = styled(motion.div)`
  color: #fefdfdcc;
  font-size: x-large;
  font-family: "Neue-Montreal-Medium";
`;
const Description = styled(motion.div)`
  font-family: "Neue-Montreal-Medium";
  color: #4472C4;
  font-weight: 500;
  font-size: medium;
  margin: 0;
`;
const Work_disc = styled(motion.ul)`
  color: #ffffff;
  list-style: disc;
  font-size: medium;
  width: 100%;
`;
const Work_disc_item = styled(motion.li)`
  width: 100%;
  color: #e8e5e5;
`;
const Bento_Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1400px){
    height: 60vh;
    width: 250vw;
  }
  @media screen and (orientation: landscape) and (max-width: 1400px){
    height: 120vh;
    width: 200vw;
  }
`;
const Bento = styled(motion.div)`
  height: 90%;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8vw;
`;
const C1 = styled(motion.div)`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8vw;
`;
const C2 = styled(motion.div)`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8vw;
`;
const C3 = styled(motion.div)`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8vw;
`;
const C1R1 = styled(motion.div)`
  width: 100%;
  height: 37%;
`;
const C1R2 = styled(motion.div)`
  width: 100%;
  height: 38%;
  display: flex;
  gap: 0.8vw;
`;
const C1R3 = styled(motion.div)`
  width: 100%;
  height: 25%;
`;
const C2R1 = styled(motion.div)`
  width: 100%;
  height: 52%;
  display: flex;
  gap: 0.8vw;
`;
const C2R2 = styled(motion.div)`
  width: 100%;
  height: 48%;
  display: flex;
  gap: 0.8vw;
`;
const C3R1 = styled(motion.div)`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 0.8vw;
`;
const C3R2 = styled(motion.div)`
  width: 100%;
  height: 33%;
  display: flex;
  gap: 0.8vw;
`;
const C3R3 = styled(motion.div)`
  width: 100%;
  height: 37%;
  display: flex;
  gap: 0.8vw;
`;
const Item1 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item2 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 55%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item3 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 45%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item4 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item5 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 60%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item6 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 40%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item7 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 40%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item8 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 60%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item9 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 35%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item10 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 65%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item11 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 60%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item12 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 40%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`;
const Item13 = styled(motion.div)`
  background: rgba(240, 240, 240, 0.1);
  opacity: 1;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
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
const About = () => {
  const ref = useRef(null);
  const [CursorState, setCursorState] = useState("visible");
  const [selectedCard, setSelectedCard] = useState(null);

  const textEnter = () => {
    setCursorState("text");
  };

  const textLeave = () => {
    setCursorState("visible");
  };

  const handleCardClick = (cardId) => {
    // Toggle selected card
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  return (
    <Section>
      <MouseCursor CursorState={CursorState} />
      <Container>
        <Page_info
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: "100%",
              transition: { duration: 0.6, ease: "easeInOut" },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          ABOUT<C>.</C>
        </Page_info>
        <Mobile>
          <SepTitle
            variants={{
              hidden: { opacity: 0, x: -55 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
          >
            Overview.
          </SepTitle>
          <OContainer>
            <SubContainer>
              <Subtext>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -55 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.5 }}
                >
                  Hello, I'm Bilal Nasir, a highly motivated computer science
                  enthusiast with a strong foundation in problem-solving and
                  proficiency in programming languages. I am actively seeking
                  opportunities to apply my technical skills and contribute to
                  innovative projects.
                </motion.p>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -55 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.7 }}
                >
                  As a budding software engineer, my passion lies in continuous
                  learning and skill enhancement. I thrive on embracing new
                  challenges and recognize the pivotal role of teamwork in
                  personal and collective growth. Committed to delivering
                  cutting-edge solutions, I am enthusiastic about collaborating
                  on projects that demand creativity and technical excellence.
                </motion.p>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -55 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 40, delay: 0.9 }}
                >
                  Driven by a commitment to excellence, I am eager to contribute
                  to your team, bringing a proactive approach to problem-solving
                  and a genuine enthusiasm for evolving technologies. Let's
                  connect and explore how I can add value to your projects and
                  contribute to our shared success.
                </motion.p>
              </Subtext>
            </SubContainer>
          </OContainer>
        </Mobile>
        <Mobile className="Scroller" ref={ref}>
          <SepTitle
            className="ScrollerTitle"
            variants={{
              hidden: { opacity: 0, x: -55 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 40, delay: 1 }}
          >
            Expertise.
          </SepTitle>
          <Bento_Container drag="x" dragConstraints={ref}>
            <Bento>
              <C1>
                <C1R1>
                  <Item1
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    Python
                  </Item1>
                </C1R1>
                <C1R2>
                  <Item2
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    Java
                  </Item2>
                  <Item3
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    C#/.Net
                  </Item3>
                </C1R2>
                <C1R3>
                  <Item4
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    MySQL
                  </Item4>
                </C1R3>
              </C1>
              <C2>
                <C2R1>
                  <Item5
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    HTML
                  </Item5>
                  <Item6
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    CSS
                  </Item6>
                </C2R1>
                <C2R2>
                  <Item7
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    JavaScript
                  </Item7>
                  <Item8
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    ReactJS
                  </Item8>
                </C2R2>
              </C2>
              <C3>
                <C3R1>
                  <Item9
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    Figma
                  </Item9>
                  <Item10
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    Styled-Component
                  </Item10>
                </C3R1>
                <C3R2>
                  <Item11
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    Framer-Motion
                  </Item11>
                  <Item12
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    Git
                  </Item12>
                </C3R2>
                <C3R3>
                  <Item13
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
                  >
                    Linux
                  </Item13>
                </C3R3>
              </C3>
            </Bento>
          </Bento_Container>
        </Mobile>
        <Mobile className="ExpContent">
          <SepTitle
            variants={{
              hidden: { opacity: 0, x: -55 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            Experience.
          </SepTitle>
          <ExpContainer>
            <VTimeline>
              {experiences.map((experience) => (
                <VTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                >
                  <TimelineContainer>
                    <Title>{experience.title}</Title>
                    <Description>{experience.company_name}</Description>
                    <Work_disc>
                      {experience.points.map((point, index) => (
                        <Work_disc_item key={`exp-point-${index}`}>
                          {point}
                        </Work_disc_item>
                      ))}
                    </Work_disc>
                  </TimelineContainer>
                </VTimelineElement>
              ))}
            </VTimeline>
          </ExpContainer>
        </Mobile>
        <Card_Cont>
          <Card_box>
            <Card
              className={selectedCard === "overview" ? "opened-card" : "card"}
              onClick={() => handleCardClick("overview")}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              variants={{
                hidden: { opacity: 0, y: 55 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{
                width: selectedCard === "overview" ? "310%" : "",
                height: selectedCard === "overview" ? "60vw" : "22vw",
                marginTop: selectedCard === "overview" ? "-5vw" : "0",
                marginLeft: selectedCard === "overview" ? "53vw" : "0",
              }}
              transition={{ duration: 0.3, type: "linear" }}
            >
              <Image
                className={selectedCard === "overview" ? "image-open" : "image"}
              >
                <OverviewPrev />
              </Image>
              <Text
                className={selectedCard === "overview" ? "text-open" : "text"}
              >
                OVERVIEW<C>.</C>
              </Text>
              {selectedCard === "overview" && (
                <AnimatePresence>
                  <OContainer>
                    <SubContainer>
                      <Subtext>
                        <motion.p
                          variants={{
                            hidden: { opacity: 0, x: -55 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 40,
                            delay: 0.2,
                          }}
                        >
                          Hello, I'm Bilal Nasir, a highly motivated computer
                          science enthusiast with a strong foundation in
                          problem-solving and proficiency in programming
                          languages. I am actively seeking opportunities to
                          apply my technical skills and contribute to innovative
                          projects.
                        </motion.p>

                        <motion.p
                          variants={{
                            hidden: { opacity: 0, x: -55 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 40,
                            delay: 0.3,
                          }}
                        >
                          As a budding software engineer, my passion lies in
                          continuous learning and skill enhancement. I thrive on
                          embracing new challenges and recognize the pivotal
                          role of teamwork in personal and collective growth.
                          Committed to delivering cutting-edge solutions, I am
                          enthusiastic about collaborating on projects that
                          demand creativity and technical excellence.
                        </motion.p>

                        <motion.p
                          variants={{
                            hidden: { opacity: 0, x: -55 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 40,
                            delay: 0.4,
                          }}
                        >
                          Driven by a commitment to excellence, I am eager to
                          contribute to your team, bringing a proactive approach
                          to problem-solving and a genuine enthusiasm for
                          evolving technologies. Let's connect and explore how I
                          can add value to your projects and contribute to our
                          shared success.
                        </motion.p>
                      </Subtext>
                      <DP>
                        <IMG src="./img/dp.png" />
                      </DP>
                    </SubContainer>
                  </OContainer>
                </AnimatePresence>
              )}
            </Card>
          </Card_box>

          <Card_box>
            <Card
              className={selectedCard === "expertise" ? "opened-card" : "card"}
              onClick={() => handleCardClick("expertise")}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              variants={{
                hidden: { opacity: 0, y: 55 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{
                width: selectedCard === "expertise" ? "310%" : "",
                height: selectedCard === "expertise" ? "60vw" : "22vw",
                marginTop: selectedCard === "expertise" ? "-5vw" : "0",
                marginLeft: selectedCard === "expertise" ? "0vw" : "0",
                zIndex: selectedCard === "expertise" ? "11" : "1",
              }}
              transition={{ duration: 0.3, type: "linear" }}
            >
              <Image
                className={
                  selectedCard === "expertise" ? "image-open" : "image"
                }
              >
                <ExpertisePrev />
              </Image>
              <Text
                className={selectedCard === "expertise" ? "text-open" : "text"}
              >
                EXPERTISE<C>.</C>
              </Text>
              {selectedCard === "expertise" && (
                <AnimatePresence>
                  <Bento_Container>
                    <Bento>
                      <C1>
                        <C1R1>
                          <Item1
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 0.2,
                            }}
                          >
                            Python
                          </Item1>
                        </C1R1>
                        <C1R2>
                          <Item2
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 0.4,
                            }}
                          >
                            C#/.Net
                          </Item2>
                          <Item3
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 0.6,
                            }}
                          >
                            Java
                          </Item3>
                        </C1R2>
                        <C1R3>
                          <Item4
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 0.8,
                            }}
                          >
                            MySQL
                          </Item4>
                        </C1R3>
                      </C1>
                      <C2>
                        <C2R1>
                          <Item5
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 0.6,
                            }}
                          >
                            HTML
                          </Item5>
                          <Item6
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 0.8,
                            }}
                          >
                            CSS
                          </Item6>
                        </C2R1>
                        <C2R2>
                          <Item7
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 0.7,
                            }}
                          >
                            JavaScript
                          </Item7>
                          <Item8
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 1,
                            }}
                          >
                            ReactJS
                          </Item8>
                        </C2R2>
                      </C2>
                      <C3>
                        <C3R1>
                          <Item9
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 1,
                            }}
                          >
                            Figma
                          </Item9>
                          <Item10
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 1.2,
                            }}
                          >
                            Styled-Component
                          </Item10>
                        </C3R1>
                        <C3R2>
                          <Item11
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 1.3,
                            }}
                          >
                            Framer-Motion
                          </Item11>
                          <Item12
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 1.5,
                            }}
                          >
                            Git
                          </Item12>
                        </C3R2>
                        <C3R3>
                          <Item13
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 40,
                              delay: 1.7,
                            }}
                          >
                            Linux
                          </Item13>
                        </C3R3>
                      </C3>
                    </Bento>
                  </Bento_Container>
                </AnimatePresence>
              )}
            </Card>
          </Card_box>

          <Card_box>
            <Card
              className={selectedCard === "experience" ? "opened-card" : "card"}
              onClick={() => handleCardClick("experience")}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              variants={{
                hidden: { opacity: 0, y: 55 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{
                width: selectedCard === "experience" ? "310%" : "",
                height: selectedCard === "experience" ? "60vw" : "22vw",
                marginTop: selectedCard === "experience" ? "-5vw" : "0",
                marginLeft: selectedCard === "experience" ? "-53vw" : "0",
              }}
              transition={{ duration: 0.3, type: "linear" }}
            >
              <Image
                className={
                  selectedCard === "experience" ? "image-open" : "image"
                }
              >
                <ExperiencePrev />
              </Image>
              <Text
                className={selectedCard === "experience" ? "text-open" : "text"}
              >
                EXPERIENCE<C>.</C>
              </Text>
              {selectedCard === "experience" && (
                <ExpContainer>
                  <VTimeline>
                    {experiences.map((experience) => (
                      <VTimelineElement
                        key={experience.company_name}
                        date={experience.date}
                      >
                        <TimelineContainer>
                          <Title>{experience.title}</Title>
                          <Description>{experience.company_name}</Description>
                          <Work_disc>
                            {experience.points.map((point, index) => (
                              <Work_disc_item key={`exp-point-${index}`}>
                                {point}
                              </Work_disc_item>
                            ))}
                          </Work_disc>
                        </TimelineContainer>
                      </VTimelineElement>
                    ))}
                  </VTimeline>
                </ExpContainer>
              )}
            </Card>
          </Card_box>
        </Card_Cont>
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

export default About;