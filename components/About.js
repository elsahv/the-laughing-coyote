import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import SubscribeSection from "../components/SubscribeSection";
import PortfolioPic from "../public/images/portfolio-pic.jpg";

export const Wrapper = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    // background: pink;
  }

  @media only screen and (max-width: 531px) {
    // background: lightgreen;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "a"
    "b";
`;

export const ImageWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  grid-area: a;
  border: solid 2px black;
  margin-top: 50px;

  @media only screen and (max-width: 834px) {
    margin-top: 30px;
    margin-left: 0;
  }

  @media only screen and (max-width: 600px) {
    left: 50%;
    transform: translateX(-50%);
    margin-left: 240px;
    margin-top: 100px;
  }

  @media only screen and (max-width: 531px) {
    margin-left: 410px;
  }

  @media only screen and (max-width: 412px) {
    margin-left: 430px;
  }

  @media only screen and (max-width: 390px) {
    margin-left: 470px;
  }
`;

export const AboutContent = styled.div`
  grid-area: b;
  a {
    color: rgb(0, 123, 165);
    margin: 5px;
    font-weight: 600;
  }
  a:hover {
    color: #000;
    transition: 2s;
  }

  @media only screen and (max-width: 1024px) {
    padding-top: 0;
    padding-left: 25px;
    padding-top: 25px;
    p {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    // background: orange;
    margin-left: 400px;
    padding-left: 195px;
    padding-right: 15px;
  }
  @media only screen and (max-width: 390px) {
    padding-left: 175px;
  }
`;

export const AboutTitle = styled.h4`
  font-size: 30px;
  padding: 20px 0;
  text-decoration: underline;
  text-align: center;
  @media only screen and (max-width: 600px) {
    // background: green;
    padding-left: 200px;
    text-align: left;
  }
  @media only screen and (max-width: 531px) {
    padding: 0 0 10px 380px;
  }
  @media only screen and (max-width: 412px) {
    padding: 0 0 10px 410px;
  }

  @media only screen and (max-width: 360px) {
    padding: 0 0 10px 460px;
  }
`;
export const Paragraph = styled.p`
  padding: 10px 25px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 1.5;

  @media only screen and (max-width: 600px) {
    padding: 0 0 0 200px;
  }

  @media only screen and (max-width: 531px) {
    padding: 0 0 0 400px;
  }

  @media only screen and (max-width: 400px) {
    padding: 0 0 10px 440px;
  }

  @media only screen and (max-width: 360px) {
    padding: 0 0 10px 460px;
  }
`;

const about = () => {
  return (
    <>
      <div id="about">
        <Wrapper>
          <Grid>
            <ImageWrapper>
              <Image
                className="portfolio-img"
                src={PortfolioPic}
                alt="elsa hovey"
                layout="responsive"
              />
            </ImageWrapper>
            <AboutContent>
              <AboutTitle>About Elsa</AboutTitle>
              <Paragraph>
                - Im currently working as a freelance web developer while
                building up my
                <Link href="/featured-websites">own side projects.</Link>I like
                to keep multiple hobbies and small business projects, and have
                created websites to keep track of my progress.
              </Paragraph>
              <br />
              <Paragraph>
                - My curiosity is what keeps me going, along with the desire to
                help other people with their endeavors.
              </Paragraph>
              <SubscribeSection />
            </AboutContent>
          </Grid>
        </Wrapper>
      </div>
    </>
  );
};

export default about;
