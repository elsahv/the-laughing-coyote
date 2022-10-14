import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import PortfolioPic from "../public/images/portfolio-pic.jpg";

export const Wrapper = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 70px 40px 20px 50px;

  @media only screen and (max-width: 600px) {
    padding: 0 0 0 80px;
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
  width: 250px;
  grid-area: a;
  border: solid 2px black;
  margin-left: 20px;

  @media only screen and (max-width: 834px) {
    margin-top: 30px;
    margin-left: 0;
  }

  @media only screen and (max-width: 600px) {
    left: 50%;
    transform: translateX(-50%);
    margin-left: 20px;
  }
`;

export const Paragraph = styled.div`
  grid-area: b;
  font-size: 20px;
  padding: 20px;
  opacity: 0.8;
  line-height: 1.5em;
  color: #000;
  h4 {
    font-size: 30px;
    padding: 20px 0;
    text-decoration: underline;
  }
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
    // padding: 0 25px;
    padding-left: 155px;
    // background: green;
    font-size: 16px;
  }
  @media only screen and (max-width: 390px) {
    padding-left: 175px;
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
            <Paragraph>
              <h4>About Elsa</h4>
              <p>
                - Im currently working as a freelance web developer while
                building up my
                <Link href="/featured-websites">own side projects.</Link>I like
                to keep multiple hobbies and small business projects, and have
                created websites to keep track of my progress.
              </p>
              <br />
              <p>
                - My curiosity is what keeps me going, along with the desire to
                help other people with their endeavors.
              </p>
              {/* ADD CONTACT BELOW CTA */}
            </Paragraph>
          </Grid>
        </Wrapper>
      </div>
    </>
  );
};

export default about;
