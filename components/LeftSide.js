import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Sidebar from "./Sidebar";

import styled from "styled-components";

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 45%;
  position: absolute;
  left: 0;
  z-index: 700;
  background: #fff;
`;

const LeftSideWrapper = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <About />
      <Contact />
    </Wrapper>
  );
};

export default LeftSideWrapper;
