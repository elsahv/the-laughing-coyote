import styled from "styled-components";
import GlobalStyles from "./Global";
import Sidebar from "./Sidebar";
import WebDevSection from "./WebDevSection";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  background: #fff;
  color: #000;
  border-right: solid 2px #000;
  // margin-left: 830px;
  padding: 15px 30px;
  overflow-y: scroll;
  height: 100%;
  width: 45%;
  position: absolute;
  left: 0;
  z-index: 700;

  // background: maroon;

  @media only screen and (max-width: 1024px) {
    margin-left: 470px;
  }

  @media only screen and (max-width: 834px) {
    margin-left: 350px;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 320px;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <WebDevSection />
      </motion.div>
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  );
}
