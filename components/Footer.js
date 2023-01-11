import styled from "styled-components";

export const Footer = styled.footer`
  color: teal;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px 25px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const today = new Date();

const FooterSection = () => {
  return (
    <Footer>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </Footer>
  );
};

export default FooterSection;
