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
          functioning as a blog for web design content for small businesses.{" "}
          {"I'm"} Elsa, a web developer {"who's"} built websites about food, and
          web design, and plants.
        </p>
      </Section>
      <ImageWrapper>
        <Image src={PortfolioPic} alt="elsa hovey" layout="responsive" />
      </ImageWrapper>
      {/* //TODO SERVICES */}
      {/* <section>
        <h2 id="services">Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem
          aspernatur quidem reprehenderit, error recusandae reiciendis odio
          dignissimos quo facere eveniet perspiciatis veritatis unde excepturi,
          eaque dolorem provident. Sed, veritatis!
        </p>
      </section> */}
      {/* //TODO RATES */}
      {/* <section>
        <h2 id="rates">Rates</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem
          aspernatur quidem reprehenderit, error recusandae reiciendis odio
          dignissimos quo facere eveniet perspiciatis veritatis unde excepturi,
          eaque dolorem provident. Sed, veritatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem
          aspernatur quidem reprehenderit, error recusandae reiciendis odio
          dignissimos quo facere eveniet perspiciatis veritatis unde excepturi,
          eaque dolorem provident. Sed, veritatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem
          aspernatur quidem reprehenderit, error recusandae reiciendis odio
          dignissimos quo facere eveniet perspiciatis veritatis unde excepturi,
          eaque dolorem provident. Sed, veritatis!
        </p>
      </section> */}
      {/* //*CONTACT */}
      <ContactSection id="contact">
        <ContactForm />
      </ContactSection>
      <footer style={{ padding: "15px 25px" }}>
        Laughing Coyote- Copyright @ 2023
      </footer>
    </Wrapper>
  );
};

export default LeftSideWrapper;
