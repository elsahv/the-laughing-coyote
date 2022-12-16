import Image from "next/image";
import Header from "./Header";
import About from "./About";
import styled from "styled-components";

export const Wrapper = styled.nav`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 830px;
  height: 100%;
  position: absolute;
  left: 0;
  border-right: solid 2px #000;
  // background-color: #3aa1aa;
  z-index: 1000;
  text-decoration: none;

  @media only screen and (max-width: 1024px) {
    width: 450px;
  }
  @media only screen and (max-width: 834px) {
    width: 350px;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const LeftSideContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;
  // background: teal;

  @media only screen and (max-width: 834px) {
    padding-left: 0px;
  }
`;

const LeftSideSection = () => {
  return (
    <Wrapper>
      <LeftSideContent>
        <Header />
        <About />
      </LeftSideContent>
    </Wrapper>
  );
};

export default LeftSideSection;
