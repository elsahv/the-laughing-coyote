import GlobalStyles from "./Global";
import Footer from "./Footer";
import styled from "styled-components";
// import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
