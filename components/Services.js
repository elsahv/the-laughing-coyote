import styled from "styled-components";

export const Wrapper = styled.div`
  line-height: 1.5;
  padding: 80px 20px 20px 60px;
  text-align: right;
  opacity: 0.8;

  h3 {
    font-size: 25px;
    font-weight: bold;
  }

  ul {
    margin: 25px;
    padding-bottom: 15px;
  }

  li {
    font-size: 20px;
    list-style-type: none;
    padding: 3px 0;
  }

  @media only screen and (max-width: 1024px) {
    text-align: left;
    padding: 10px 25px;
    margin-top: 40px;
    margin-left: 10px;

    h3 {
      margin-top: 35px;
    }
    li {
      font-size: 17px;
      padding: 10px 0 0 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    ul {
      margin: 0px 10px;
    }
    li {
      padding-left: 20px;
    }
  }

  @media only screen and (max-width: 834px) {
    padding-left: 50px;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 10px;
  }

  @media only screen and (max-width: 390px) {
    h3 {
      font-size: 18px;
    }
  }
`;

export const SkillsTitle = styled.h2`
  font-weight: bold;
  padding-right: 25px;
  padding-top: 20px;
  text-decoration: underline;
  font-size: 35px;
  text-align: right;

  @media only screen and (max-width: 1024px) {
    font-size: 32px;
    padding-top: 60px;
    padding-left: 20px;
    text-align: left;
  }

  @media only screen and (max-width: 600px) {
    padding-top: 55px;
    padding-left: 20px;
    text-decoration: underline;
  }
`;

const skills = () => {
  return (
    <>
      <Wrapper>
        <SkillsTitle id="services">Services/ Skills</SkillsTitle>
        <ul>
          <h3>- Frontend Web Design</h3>
          <li>Colorful websites for creative niches and small businesses.</li>
          <li>Quick and interactive styling</li>
          <li>Effective SEO</li>
        </ul>

        <ul>
          <h3>- Content Management</h3>
          <li>
            I use React coding with Sanity.io for content writing, image
            management, and backend data storage
          </li>
          <li>
            Or if Wordpress is your thing... I also create custom themes with
            php
          </li>
          <li>
            I work one on one with customers to create the ideal website product
          </li>
        </ul>
      </Wrapper>
    </>
  );
};

export default skills;
