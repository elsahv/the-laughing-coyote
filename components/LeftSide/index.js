import Image from "next/image";
import Header from "../Header";
import ContactForm from "../ContactForm";
import PortfolioPic from "../../public/images/portfolio-pic.jpg";
import { Wrapper, ImageWrapper, ContactSection } from "./styled";

const LeftSideWrapper = () => {
  return (
    <Wrapper>
      <Header />
      {/* //*ABOUT */}
      <section id="about">
        <h2>About</h2>
        <p>
          Hi there and welcome! My names Elsa, Ive created The Running Quail to
          build landing pages for small business owners and creatives.
        </p>
      </section>
      <ImageWrapper>
        <Image src={PortfolioPic} alt="elsa hovey" layout="responsive" />
      </ImageWrapper>
      {/* //TODO SERVICES */}
      <section>
        <h2 id="services">Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem
          aspernatur quidem reprehenderit, error recusandae reiciendis odio
          dignissimos quo facere eveniet perspiciatis veritatis unde excepturi,
          eaque dolorem provident. Sed, veritatis!
        </p>
      </section>
      {/* //TODO RATES */}
      <section>
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
      </section>
      {/* //*CONTACT */}
      <ContactSection id="contact">
        <ContactForm />
      </ContactSection>
      <section>footer</section>
    </Wrapper>
  );
};

export default LeftSideWrapper;
