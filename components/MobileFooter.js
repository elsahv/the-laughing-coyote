import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";

const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    position: relative;
    padding-top: 800px;
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
  }
`;

const mobileFooterSection = () => {
  return (
    <Wrapper>
      <AboutFooter>
        <About />
      </AboutFooter>
      <ContactSection id="contact-mobile">
        <Contact />
      </ContactSection>
      Elsa Hovey- Copyright @2022
    </Wrapper>
  );
};

export default mobileFooterSection;
