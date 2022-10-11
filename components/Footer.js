import styled from "styled-components";

const Footer = styled.footer`
  // background: teal;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px 25px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const FooterSection = () => {
  return <Footer>- Copyright @2022</Footer>;
};

export default FooterSection;
