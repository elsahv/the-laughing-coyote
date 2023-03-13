import Image from "next/image";
import Header from "../Header";
import ContactForm from "../ContactForm";
import PortfolioPic from "../../public/images/portfolio-pic.jpg";
import { Wrapper, Section, ImageWrapper, ContactSection } from "./styled";

//TODO: IMPLEMENT SERVICES AND RATES WHEN READY

const LeftSideWrapper = () => {
  return (
    <Wrapper>
      <Header />
      {/* //*ABOUT */}
      <Section id="about">
        <h2>About</h2>
        <p>
          Welcome to Laughing Coyote! This site is currently a work in progress,
          a web design content blog for small businesses.
          {"I'm"} Elsa, a web developer {"who's"} built websites about
          <a href="https://writingtobetterhealth.com">food</a>, and
          <a href="https://elsahovey.com">web design</a> and
          <a href="https://theindoorjungleproject.com">plants</a>
        </p>
      </Section>
      <ImageWrapper>
        <Image src={PortfolioPic} alt="elsa hovey" layout="responsive" />
      </ImageWrapper>

      {/* //*CONTACT */}
      <ContactSection id="contact">
        <ContactForm />
      </ContactSection>
      <footer style={{ padding: "15px 25px" }}>
        Laughing Coyote- Copyright @2023
      </footer>
    </Wrapper>
  );
};

export default LeftSideWrapper;
