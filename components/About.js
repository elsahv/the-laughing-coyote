import Image from "next/image";
import PortfolioPic from "../public/images/portfolio-pic.jpg";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  grid-area: left;
  border: solid 2px #000;
  margin-top: 25px;

  @media only screen and (max-width: 1024px) {
    // width: 210px;
    // margin-right: 20px;
  }
`;

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Welcome to Laughing Coyote Dev! This site is currently a work in
        progress, a web design content blog for small businesses.
        {"I'm"} Elsa, a web developer {"who's"} built websites about
        <a href="https://writingtobetterhealth.com">food</a>, and
        <a href="https://elsahovey.com">web design</a> and
        <a href="https://theindoorjungleproject.com">plants</a>
      </p>
      <ImageWrapper>
        <Image src={PortfolioPic} alt="elsa hovey" layout="responsive" />
      </ImageWrapper>
    </div>
  );
};

export default About;
