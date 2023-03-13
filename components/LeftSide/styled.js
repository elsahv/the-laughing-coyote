import styled from "styled-components";

export const Wrapper = styled.div`
  // background: teal;
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
  p {
    padding-right: 30px;
  }
  a {
    color: #000;
    padding-left: 4px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  grid-area: left;
  border: solid 2px #000;
  margin-left: 15px;

  @media only screen and (max-width: 1024px) {
    width: 210px;
    margin-right: 20px;
  }
`;

export const ContactSection = styled.section`
  margin-top: 200px;
`;
