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
    font-size: 24px;
    list-style-type: none;
    padding: 3px 0;
    // color: rgb(0, 123, 165);
  }

  @media only screen and (max-width: 768px) {
    // line-height: 1;
    padding: 10px;
    li {
      font-size: 17px;
      padding: 10px 0;
    }
  }

  @media only screen and (max-width: 600px) {
    ul {
      margin: 0px 10px;
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

  @media only screen and (max-width: 600px) {
    font-size: 30px;
    padding-bottom: 15px;
    padding-top: 55px;
    padding-right: 2px;
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
