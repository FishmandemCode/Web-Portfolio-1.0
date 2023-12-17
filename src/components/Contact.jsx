import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, delay } from "framer-motion";
import MouseCursor from "../MouseCursor";
import emailjs from "emailjs-com";
import ContactSVG from "./CPE/Contact";
import PhoneSVG from "./CPE/Phone";
import EmailSVG from "./CPE/Email";

const Section = styled.div`
  font-family: "Neue-Montreal-light";
  color: white;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  .alert{
    font-family: "Neue-Montreal-light";
    background: rgba(121, 122, 121, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
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
const MobileContent = styled(motion.div)`
  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 92vw;
    height: 80vh;

  }
  @media screen and (max-width: 1400px) and (orientation: landscape) {
    display: flex;
    flex-direction: column;
    width: 92vw;
    height: min-content;
  }
  @media screen and (min-width: 1400px){
    display: none;
  }
`;
const ContactContent = styled(motion.div)`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
const LeftContainer = styled(motion.div)`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 1vw;
`;
const RightContainer = styled(motion.div)`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IMGContainer = styled(motion.div)`
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  border: 4px rgba(121, 122, 121, 0.2) solid;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  @media (min-width: 0px) and (max-width: 1400px) {
    border: 2px rgba(121, 122, 121, 0.2) solid;
    width: 50%;
    height: 60%;
    display: flex;
    justify-content: center;
    margin-left: 2vw;
  }
`;
const BilInfo = styled(motion.div)`
  width: 80%;
  height: 10%;
  display: flex;
  background: rgba(121, 122, 121, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  @media (min-width: 0px) and (max-width: 1400px) {
    background: transparent;
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    display: flex;
    flex-direction: column;
    gap: 2vw;
  }
`;
const IMGAvator = styled(motion.img)`
  object-fit: cover;
`;
const Location = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 0.8vw;
  @media (min-width: 0px) and (max-width: 1400px) {
    width: 80%;
    background: rgba(121, 122, 121, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    font-size: 2vw;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    font-size: 2vw;
  }
`;
const PhoneNumber = styled(motion.div)`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 0.8vw;
  @media (min-width: 0px) and (max-width: 1400px) {
    background: rgba(121, 122, 121, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    font-size: 2vw;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    font-size: 2vw;
  }
`;
const Email = styled(motion.div)`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1.4;
  font-size: 0.8vw;
  @media (min-width: 0px) and (max-width: 1400px) {
    flex: 1;
    background: rgba(121, 122, 121, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    font-size: 2vw;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    flex: 1;
    font-size: 2vw;
  }
`;
const FormContent = styled(motion.div)`
  margin-top: 0.3vw;
  height: 74%;
  width: 80%;
  @media (min-width: 0px) and (max-width: 1400px) {
    height: 80%;
    width: 95%;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    height: 90%;
    width: 95%;
  }
`;
const Formbox = styled(motion.form)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  @media (min-width: 0px) and (max-width: 1400px) {
    gap: 1vw;
  }
  @media (orientation: landscape) and (max-width: 1400px){

  }
`;
const Label = styled(motion.label)`
  display: flex;
  flex: 1;

  &.Message{
    flex: 8;
  }
`;
const Input = styled(motion.input)`
  font-family: "Neue-Montreal-light";
  font-size: 1vw;
  background: rgba(121, 122, 121, 0.2);
  border: 1px rgba(121, 121, 121, 0.2) solid;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  flex: 1;
  padding-left: 0.4vw;
  @media (min-width: 0px) and (max-width: 1400px) {
    font-size: 2.5vw;
    color: white;

  }
  @media (orientation: landscape) and (max-width: 1400px){
    font-size: 2.5vw;
  }
`;
const TextArea = styled(motion.textarea)`
  font-family: "Neue-Montreal-light";
  color: white;
  font-size: 1vw;
  background: rgba(121, 122, 121, 0.2);
  border: 1px rgba(121, 121, 121, 0.2) solid;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  flex: 1;
  padding-left: 0.4vw;
  padding-top: 0.5vw; 
  overflow: auto;
  @media (min-width: 0px) and (max-width: 1400px) {
    padding-left: 0.4vw;
    padding-top: 2vw; 
    font-size: 2.5vw;

  }
  @media (orientation: landscape) and (max-width: 1400px){
    padding-left: 0.4vw;
    padding-top: 1vw; 
    font-size: 2.5vw;

  }
`;
const Button = styled(motion.button)`
  background: rgba(121, 122, 121, 0.2);
  border: 1px rgba(121, 121, 121, 0.2) solid;
  border-radius: 5px;
  color: white;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  font-size: 0.9vw;
  @media (min-width: 0px) and (max-width: 1400px) {
    height: 8vw;
    font-size:3vw;
  }
  @media (orientation: landscape) and (max-width: 1400px){
    height: 6vw;
    font-size:2.5vw;
  }

`;
const SVGdiv = styled(motion.div)`
  height: 1.5vw;
  width: 1.5vw;
  padding-bottom: 0.5vw;
  padding-right: 0.2vw;
  
  &.Phone{
    width: 1.05vw;
    padding-top: 0.4vw;
    padding-right: 0.4vw;
  }
    
  &.Email{
    width: 1.15vw;
    padding-right: 0.4vw;
  }

  @media (min-width: 0px) and (max-width: 1400px) {
    display: none;
  }
  @media (orientation: landscape) and (max-width: 1400px){
  }
`;
const MUpper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 20%;
  @media (orientation: landscape) and (max-width: 1400px){
    height: 30%;
  }
`;
const MLower = styled(motion.div)`
  width: 90%;
  height: 65%;
  display: flex;
  justify-content: center;
  @media (orientation: landscape) and (max-width: 1400px){
    height: fit-content;
  }
`;
const Contact = () => {
  const Formref = useRef();
  const [CursorState, setCursorState] = useState("visible");
  const [Form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setForm({ ...Form, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_u2fgyl9", //Service ID from emailjs
        "template_vowfcyc", //Template ID from emailjs
        {
          from_name: Form.name,
          to_name: "Bilal",
          from_email: Form.email,
          to_email: "bilalnasir2712work@gmail.com", //Email from emailjs
          message: Form.message,
        },
        "1URQ4AoPhX6ozPGmD" //API Key from emailjs
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
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
          CONTACT<C>.</C>
        </Page_info>
        <MobileContent>
          <MUpper>
            <IMGContainer
              variants={{
                hidden: { opacity: 0, x: -55 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.2 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <IMGAvator src="./img/avator.png" />
            </IMGContainer>
            <BilInfo
              variants={{
                hidden: { opacity: 0, x: -55 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.4 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Location>
                <SVGdiv>
                  <ContactSVG />
                </SVGdiv>
                Toronto, Canada
              </Location>
              <PhoneNumber>
                <SVGdiv className="Phone">
                  <PhoneSVG />
                </SVGdiv>
                {"("}437{")"} 256-5536
              </PhoneNumber>
              <Email>
                <SVGdiv className="Email">
                  <EmailSVG />
                </SVGdiv>
                Bilalnasir2712@gmail.com
              </Email>
            </BilInfo>
          </MUpper>
          <MLower>
            <FormContent>
              <Formbox ref={Formref} onSubmit={handlesubmit}>
                <Label
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.5 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Input
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    type="text"
                    name="name"
                    value={Form.name}
                    onChange={handlechange}
                    placeholder="Enter Your Name"
                    required 
                  ></Input>
                </Label>
                <Label
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.7 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Input
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    type="email"
                    name="email"
                    value={Form.email}
                    onChange={handlechange}
                    placeholder="Enter Your Email"
                    required 
                  ></Input>
                </Label>
                <Label
                  className="Message"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { type: "linear", delay: 0.9 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <TextArea
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    rows="7"
                    className="MessageText"
                    name="message"
                    value={Form.message}
                    onChange={handlechange}
                    placeholder="Enter Your Message"
                    required 
                  ></TextArea>
                </Label>
                <Button
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 1.1 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  type="submit"
                >
                  {loading ? "Sending...." : "Send"}
                </Button>
              </Formbox>
            </FormContent>
          </MLower>
        </MobileContent>
        <ContactContent>
          <LeftContainer>
            <IMGContainer
              variants={{
                hidden: { opacity: 0, x: -55 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.2 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <IMGAvator src="./img/avator.png" />
            </IMGContainer>
            <BilInfo
              variants={{
                hidden: { opacity: 0, x: -55 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.4 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Location>
                <SVGdiv>
                  <ContactSVG />
                </SVGdiv>
                Toronto, Canada
              </Location>
              <PhoneNumber>
                <SVGdiv className="Phone">
                  <PhoneSVG />
                </SVGdiv>
                {"("}437{")"} 256-5536
              </PhoneNumber>
              <Email>
                <SVGdiv className="Email">
                  <EmailSVG />
                </SVGdiv>
                Bilalnasir2712@gmail.com
              </Email>
            </BilInfo>
          </LeftContainer>
          <RightContainer>
            <FormContent>
              <Formbox ref={Formref} onSubmit={handlesubmit}>
                <Label
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.5 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Input
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    type="text"
                    name="name"
                    value={Form.name}
                    onChange={handlechange}
                    placeholder="Enter Your Name"
                    required 
                  ></Input>
                </Label>
                <Label
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.7 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Input
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    type="email"
                    name="email"
                    value={Form.email}
                    onChange={handlechange}
                    placeholder="Enter Your Email"
                    required 
                  ></Input>
                </Label>
                <Label
                  className="Message"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { type: "linear", delay: 0.9 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <TextArea
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    rows="7"
                    className="MessageText"
                    name="message"
                    value={Form.message}
                    onChange={handlechange}
                    placeholder="Enter Your Message"
                    required 
                  ></TextArea>
                </Label>
                <Button
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 1.1 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  type="submit"
                >
                  {loading ? "Sending...." : "Send"}
                </Button>
              </Formbox>
            </FormContent>
          </RightContainer>
        </ContactContent>
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

export default Contact;
