import Image from "next/image";
import Header from "../Header";
import PkgRate from "../PkgRate";
import ContactForm from "../ContactForm";
import PortfolioPic from "../../public/images/portfolio-pic.jpg";
import { Wrapper, Section, ImageWrapper, ContactSection } from "./styled";

const LeftSideWrapper = () => {
  return (
    <Wrapper>
      <Header />

      {/* //*SERVICES */}
      <Section id="services">
        <h2>Services</h2>
        <p>
          Are you a small business starting out? Or perhaps {"you're"} so busy
          running your business, you have no time or need to create a website/
          online presence.
        </p>
        <p>This is where Laughing Coyote Dev can help you.</p>

        <div>
          <PkgRate />
        </div>
      </Section>

      {/* //*ABOUT */}
      <Section id="about">
        <h2>About Laughing Coyote Dev</h2>
        <p>
          Welcome! This site is currently a work in progress, a web design
          content blog for small businesses.
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
