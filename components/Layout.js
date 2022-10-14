import styled from "styled-components";
import GlobalStyles from "./Global";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";

const Wrapper = styled.div`
  margin-left: 450px;
  overflow-y: scroll;
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 700;
  // background: maroon;

  @media only screen and (max-width: 1024px) {
    // margin-left: 250px;
  }

  @media only screen and (max-width: 834px) {
    margin-left: 300px;
  }

  @media only screen and (max-width: 600px) {
    margin: 0px;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <Header />

      <Wrapper>
        <main>{children}</main>
      </Wrapper>

      {/* <Footer /> */}
      {/* <MobileFooter /> */}
    </>
  );
}
