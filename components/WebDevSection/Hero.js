import { Section } from "../styles/WebDevSections.styled";
import {
  FaPencilAlt,
  FaRegNewspaper,
  FaToolbox,
  FaDesktop,
} from "react-icons/fa";
import styled from "styled-components";

//todo SERVICES STYLES
const ServicesTitle = styled.h2`
  // background: green;
  grid-area: t;
  display: flex;
  align-items: flex-end;
  padding-left: 10px;
  font-size: 30px;
  text-decoration: underline;
`;

const Grid = styled.div`
  opacity: 0.9;
  padding: 70px 40px;
  // background: pink;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 1fr 1fr;
  grid-template-areas:
    "t t"
    "a b"
    "c d";
  grid-gap: 1em;
  ul {
    padding-left: 20px;
  }
  li {
    padding: 3px 0;
    font-size: 18px;
  }

  #sq {
    background: teal;
    padding: 20px;
    border: solid 2px black;
    font-size: 18px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 10px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "t"
      "a"
      "b"
      "c"
      "d";
  }

  @media only screen and (max-width: 834px) {
    padding: 30px 30px;
  }
`;

const Sq1 = styled.div`
  grid-area: a;
`;
const Sq2 = styled.div`
  grid-area: b;
`;
const Sq3 = styled.div`
  grid-area: c;
`;
const Sq4 = styled.div`
  grid-area: d;
`;
const GridSqTitle = styled.h2`
  display: flex;
  font-size: 25px;
`;

const Icon = styled.div`
  font-size: 30px;
  padding-left: 20px;
`;
//todo SERVICES STYLES

const HomePageHero = () => {
  return (
    <Section>
      <h2>Web Design for Creatives and Small Businesses</h2>
      <h3>Stand out in the crowd</h3>
      <h2>Info</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique
        itaque quam impedit assumenda, ipsa porro beatae. Natus veritatis
        facilis fugiat saepe, quisquam maxime impedit iure voluptatibus
        consequuntur, molestias unde.
      </p>

      <Grid>
        <ServicesTitle id="services">Services</ServicesTitle>
        <Sq1 id="sq">
          <GridSqTitle>
            Web Design
            <Icon>
              <FaPencilAlt />
            </Icon>
          </GridSqTitle>

          <div>
            Create a web presence for your business. Whether you need a simple
            one pager, or a multi-page app to build your empire... I can help!
          </div>
        </Sq1>
        <Sq2 id="sq">
          <GridSqTitle>
            Web + Hosting
            <Icon>
              <FaDesktop />
            </Icon>
          </GridSqTitle>

          <div>
            I portfolio with one-on-one with clients regarding hosting and
            maintenance, leaving them to fully concentrate on their businesses.
          </div>
        </Sq2>
        <Sq3 id="sq">
          <GridSqTitle>
            Blogging Mgmt Integration
            <Icon>
              <FaRegNewspaper />
            </Icon>
          </GridSqTitle>

          <div>
            Need a blog? Youre at the right place! I portfolio with many
            different types of tools, including Wordpress.
          </div>
        </Sq3>
        <Sq4 id="sq">
          <GridSqTitle>
            ToolBox
            <Icon>
              <FaToolbox />
            </Icon>
          </GridSqTitle>
          <ul>
            <li> Programming Languages: Javascript, PHP</li>
            <li>
              Libraries & Frameportfolios: React, NextJS, Node,
              Styled-Components, bootstrap, SASS
            </li>
            <li>Tools & Databases: Wordpress, Sanity.io, Git, Mailchimp API</li>
          </ul>
        </Sq4>
      </Grid>

      <button style={{ width: "100px", height: "20px" }}>CTA BUTTON</button>
    </Section>
  );
};

export default HomePageHero;
