import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 5px;
  margin-top: 100px;
  // opacity: 0.8;
`;

const Wrapper = styled.div``;

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

const FooterSection = () => {
  return (
    <Footer>
      <Wrapper>
        <AboutFooter>
          <About />
        </AboutFooter>
        <ContactSection>
          <div id="contact-mobile">
            <Contact />
          </div>
        </ContactSection>
        Elsa Hovey- Copyright @2022
      </Wrapper>
    </Footer>
  );
};

export default FooterSection;
