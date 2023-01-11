import styled from "styled-components";

const Wrapper = styled.div`
  // background: maroon;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const AboutSection = styled.div``;

const ContactFormSection = styled.div``;

const About = () => {
  return (
    <Wrapper>
      <AboutSection id="about">
        About P- Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Beatae, dolore officia, sit ipsa sapiente animi aliquid voluptas ex
        alias reprehenderit iusto laudantium. Officiis minima laudantium
        molestias sunt molestiae, cum debitis!
      </AboutSection>
      <ContactFormSection id="contact">Contact Form</ContactFormSection>
    </Wrapper>
  );
};

export default About;
