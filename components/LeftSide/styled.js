import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-y: scroll;
  height: 100vh;
  width: 45%;
  position: absolute;
  left: 0;
  z-index: 700;
 

  @media only screen and (max-width: 600px) {
    position: relative;
    top: 0;
    height: 100%;
    width: 100%;
`;

export const Section = styled.section`
  padding: 70px 20px;
  margin-top: 100px;
  // background: pink;
  p {
    padding-right: 30px;
  }
  a {
    color: #000;
    padding-left: 4px;
  }
`;

export const ContactSection = styled.section`
  margin-top: 200px;
`;
