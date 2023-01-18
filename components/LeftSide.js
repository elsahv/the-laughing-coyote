import Image from "next/image";
import Header from "./Header";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import PortfolioPic from "../public/images/portfolio-pic.jpg";

const Wrapper = styled.div`
  // background: teal;
  overflow-y: scroll;
  height: 100vh;
  width: 45%;
  position: absolute;
  left: 0;
  z-index: 700;
  .section {
    padding: 25px;
  @media only screen and (max-width: 600px) {
  padding: 10px;
  }
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    bottom: 0;
    height: 100%;
    width: 100%;
`;

const AboutSection = styled.section`
  // background: orange;
  grid-area: b;
  margin-top: 400px;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    margin-top: 50px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  grid-area: left;
  border: solid 2px #000;
  margin-left: 15px;
  margin-top: 15px;

  @media only screen and (max-width: 1024px) {
    width: 210px;
    margin-right: 20px;
  }
  @media only screen and (max-width: 834px) {
    // width: 200px;
  }
`;

const ContactSection = styled.section`
  margin-top: 200px;
`;

const LeftSideWrapper = () => {
  return (
    <Wrapper>
      <Header />

      <AboutSection id="about" className="section">
        <h2>About</h2>
        <p style={{ padding: "10px 0" }}>
          Hi there and welcome! My names Elsa, Ive created The Indoor Jungle
          Project to learn more about growing houseplants, and to further my
          skills in website development and design. Im excited for what is to
          come, join me as this website grows!
        </p>
      </AboutSection>
      <ImageWrapper>
        <Image src={PortfolioPic} alt="elsa hovey" layout="responsive" />
      </ImageWrapper>
      <ContactSection id="contact" className="section">
        <ContactForm />
      </ContactSection>
    </Wrapper>
  );
};

export default LeftSideWrapper;
