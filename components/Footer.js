import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";

const Footer = styled.footer`
  background: red;
  position: absolute;
  bottom: 0;
  right: 0;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const FooterSection = () => {
  return <Footer>Elsa Hovey- Copyright @2022</Footer>;
};

export default FooterSection;
