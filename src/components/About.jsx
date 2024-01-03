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
  overflow: hidden;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  @media screen and (max-width: 1400px) {
    overflow: auto;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    overflow: auto;
  }
  @media screen and (max-width: 800px) {
    overflow: auto;
  }
  @media (orientation: landscape) and (max-width: 800px){
    overflow: auto;
  }
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
    height: 62vh;
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

  @media (min-aspect-ratio: 2/1) {
    padding-top: 0vw;
  }


`;
const Mobile = styled(motion.div)`
  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    width: 92vw;

    &.Scroller{
      width: 98vw;
      justify-content: center;
      align-items: center;
      overflow: hidden;
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
    width: 90%;
    height: 22vw;
    background: rgba(116, 115, 115, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    @media (min-aspect-ratio: 2/1) {
      height: 18vw;
    }
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
    background: rgba(255, 255, 255, 0.02);
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
    @media (min-aspect-ratio: 2/1) {
      height: 12vw;
    }
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
    @media (min-aspect-ratio: 2/1) {
      margin-top: 0.4vw;
    }
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
  height: 80%;
  display: flex;
  justify-content: center;
`;
const SubContainer = styled(motion.div)`
  height: 95%;
  width: 95%;
  display: flex;
`;
const Subtext = styled(motion.div)`
  color: white;
  flex: 1.2;
  font-size: 1.2vw;
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
  height: 90%;
  width: 40%;
  display: flex;
  justify-content: center;
  @media (min-aspect-ratio: 2/1) {
    height: 100%;
    }
`;
const IMG = styled(motion.img)`
  object-fit: cover;
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
  font-family: "Neue-Montreal-light";
  @media screen and (min-width: 1400px){
    overflow-y: auto; /* Change from scroll to auto */
    overflow-x: hidden;
    padding-left: 10vw;
    padding-right: 10vw;
  }

  &.vertical-timeline::before {
    border-color: white;
    height: 285%;
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

const ICON = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const IconIMG = styled(motion.img)`
  width: 60%;
  height: 60%;
  object-fit: contain;

`
const VTimelineElement = styled(motion(VerticalTimelineElement))`
  .vertical-timeline-element-icon.bounce-in{
    display: flex;
  }
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
    color: white;
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
  color: white;
`;
const Title = styled(motion.div)`
  color: #fefdfdcc;
  font-size: x-large;
  font-family: "Neue-Montreal-Medium";
`;
const Description = styled(motion.div)`
  font-family: "Neue-Montreal-Medium";
  color: #ffffff;
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

const MBentoContainer = styled(motion.div)`
  height: 60vh;
  width: 150vw;
  gap: 2vw;
  margin-top: 3vw;
  @media screen and (orientation: landscape) and (max-width: 1400px){
    height: 100vh;
    width: 50vw;
  }
`;

const MBento = styled(motion.div)`
  width: 250vw;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2vw;
  @media screen and (orientation: landscape) and (max-width: 1400px){
    width: 200vw;
    height: 95%;
  }
`;

const Bento = styled(motion.div)`
  height: 90%;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  flex-direction: column;
  @media screen and (max-width: 1400px) {
    gap: 2vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    gap: 1vw;
  }
`;


const Clum = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0.3vw;
  @media screen and (max-width: 1400px) {
    gap: 2vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    gap: 1vw;
  }

`
const Item = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.4vw;
  background: rgba(121, 122, 121, 0.1);
  border: 1px rgba(121, 121, 121, 0.2) solid;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  @media screen and (max-width: 1400px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    font-size: 5vw;
  }
`

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
            <MBentoContainer  drag="x" dragConstraints={ref}>
              <MBento>
                    <Clum>
                        <Item
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
                        >Python</Item>
                        <Item
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
                            delay: 0.3,
                          }}
                          >Java</Item>
                        <Item
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
                          >C</Item>
                        <Item
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
                            delay: 0.5,
                          }}
                          >C#</Item>
                        <Item
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
                          >HTML</Item>
                        <Item
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
                          >CSS</Item>
                        <Item
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
                          >JavaScript</Item>

                      </Clum>
                      <Clum>
                        <Item
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
                            delay: 0.3,
                          }}
                          >Reactjs</Item>
                        <Item
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
                            delay: 0.3,
                          }}
                          >Vite</Item>
                        <Item
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
                          >Framer-Motion</Item>
                        <Item
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
                            delay: 0.5,
                          }}
                          >Flask</Item>
                        <Item
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
                          >Pandas</Item>
                        <Item
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
                          >mySQL</Item>
                      </Clum>
                      <Clum>
                        <Item
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
                          >Linux</Item>
                        <Item
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
                            delay: 0.5,
                          }}
                          >Window</Item>
                        <Item
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
                          >IOS</Item>
                        <Item
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
                          }}>Android</Item>
                          
                        <Item
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
                          >Raspbian</Item>
                        <Item
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
                            delay: 0.9,
                          }}
                          >Git</Item>
                        <Item
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
                          >Figma</Item>
                      </Clum>
              </MBento>
            </MBentoContainer>
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
                width: selectedCard === "overview" ? "80vw" : "",
                height: selectedCard === "overview" ? "75vh" : "",
                marginTop: selectedCard === "overview" ? "-20%" : "0",
                marginLeft: selectedCard === "overview" ? "200%" : "0",
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

          <Card_box className="Scroller" ref={ref}>
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
                width: selectedCard === "expertise" ? "80vw" : "",
                height: selectedCard === "expertise" ? "75vh" : "",
                marginTop: selectedCard === "expertise" ? "-20%" : "0",
                marginLeft: selectedCard === "expertise" ? "0%" : "0",
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
                      <Clum>
                        <Item
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
                        >Python</Item>
                        <Item
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
                            delay: 0.3,
                          }}
                          >Java</Item>
                        <Item
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
                          >C</Item>
                        <Item
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
                            delay: 0.5,
                          }}
                          >C++</Item>
                        <Item
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
                          >C#</Item>
                        <Item
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
                          >HTML</Item>
                        <Item
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
                          >CSS</Item>

                      </Clum>
                      <Clum>
                        <Item
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
                            delay: 0.3,
                          }}
                          >JavaScript</Item>
                        <Item
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
                            delay: 0.3,
                          }}
                          >Reactjs</Item>
                        <Item
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
                          >Framer-Motion</Item>
                        <Item
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
                            delay: 0.5,
                          }}
                          >Flask</Item>
                        <Item
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
                          >Pandas</Item>
                        <Item
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
                          >mySQL</Item>
                      </Clum>
                      <Clum>
                        <Item
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
                          >Linux</Item>
                        <Item
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
                            delay: 0.5,
                          }}
                          >Window</Item>
                        <Item
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
                          >IOS</Item>
                        <Item
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
                          }}>Android</Item>
                          
                        <Item
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
                          >Raspbian</Item>
                        <Item
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
                            delay: 0.9,
                          }}
                          >Git</Item>
                        <Item
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
                          >Figma</Item>
                      </Clum>
                      <Clum>
                        <Item
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
                          ></Item>
                        <Item
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
                          ></Item>
                        <Item
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
                          ></Item>
                        <Item
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
                            delay: 0.9,
                          }}
                          ></Item>
                        <Item
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
                          ></Item>
                        <Item
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
                            delay: 1.1,
                          }}
                          ></Item>

                      </Clum>
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
                width: selectedCard === "experience" ? "80vw" : "",
                height: selectedCard === "experience" ? "75vh" : "",
                marginTop: selectedCard === "experience" ? "-20%" : "0",
                marginLeft: selectedCard === "experience" ? "-200%" : "0",
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
                        iconStyle={{ background: experience.iconBg }}
                        icon={<ICON>
                          <IconIMG 
                          src={experience.icon}
                          alt={experience.company_name}/>
                        </ICON>}
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

export default About;
