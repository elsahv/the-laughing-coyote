import Image from "next/image";
import Hero from "./Hero";
import ServicesIncludes from "./ServicesIncludes";
import PkgRate from "./PkgRate";
import PgOptions from "./PgOptions";
import styled from "styled-components";

export const Wrapper = styled.nav`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 55%;
  height: 100%;
  position: absolute;
  right: 0;
  background: #333232;
  color: #fff;

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
        {/* <Hero />
        <ServicesIncludes />
        <PkgRate />
        <PgOptions /> */}
        <ul>
          <li>blog</li>
          <li>cat 2</li>
        </ul>
      </LeftSideContent>
    </Wrapper>
  );
};

export default LeftSideSection;
