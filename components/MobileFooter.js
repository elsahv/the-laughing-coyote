import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";

const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    position: relative;
    padding-top: 800px;
    span {
      padding: 10px 0;
      display: flex;
      justify-content: center;
    }
  }
`;

const AboutFooter = styled.footer`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const ContactSection = styled.footer`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
    background: teal;
    border-bottom: solid 2px black;
  }
`;

const mobileFooterSection = () => {
  return (
    <Wrapper>
      <AboutFooter id="contact-mobile">
        <About />
      </AboutFooter>
      <ContactSection id="contact-mobile">
        <Contact />
      </ContactSection>
      <span>Elsa Hovey- Copyright @2022</span>
    </Wrapper>
  );
};

export default mobileFooterSection;
