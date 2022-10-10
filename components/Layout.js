import styled from "styled-components";
import GlobalStyles from "./Global";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";

const Wrapper = styled.div`
  margin-left: 450px;
  // background: #3aa1aa;
  overflow-y: scroll;
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 700;
  // border-left: solid 2px black;

  @media only screen and (max-width: 600px) {
    margin-left: auto;
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
    </>
  );
}
