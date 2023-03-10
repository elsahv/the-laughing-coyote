import Header from "../Header";
import PkgRate from "../PkgRate";
import ContactForm from "../ContactForm";
import { Wrapper, Section, ContactSection } from "./styled";
import About from "../About";

const LeftSideWrapper = () => {
  return (
    <Wrapper>
      <Header />

      {/* //*ABOUT */}
      <Section id="about">
        <About />
      </Section>

      {/* //*SERVICES */}
      <Section id="services">
        <PkgRate />
      </Section>

      {/* //*CONTACT */}
      <Section id="contact">
        <ContactForm />
      </Section>
    </Wrapper>
  );
};

export default LeftSideWrapper;
