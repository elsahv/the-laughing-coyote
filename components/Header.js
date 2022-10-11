import Link from "next/link";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import styled from "styled-components";
import JtPic from "../public/images/joshuatreeabout.jpg";
// import { motion } from "framer-motion";

export const NavSection = styled.nav`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 450px;
  height: 100%;
  position: absolute;
  left: 0;
  border-right: solid 2px #000;
  background-color: #3aa1aa;
  z-index: 1000;
  text-decoration: none;

  @media only screen and (max-width: 1024px) {
    width: 450px;
  }
  @media only screen and (max-width: 834px) {
    width: 350px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;

  @media only screen and (max-width: 834px) {
    padding-left: 15px;
  }
`;

export const MenuItems = styled.div`
  padding-left: 15px;
  padding-top: 50px;
`;

export const Logo = styled.h1`
  font-size: 50px;
  a {
    color: #000;
    text-decoration: none;
  }

  @media only screen and (max-width: 1024px) {
    padding-top: 10px;
  }

  @media only screen and (max-width: 834px) {
    font-size: 40px;
  }
`;

export const NavLinks = styled.li`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  text-decoration: none;
  padding-top: 5px;
  padding-left: 5px;
  a {
    margin: 1px 0;
    text-decoration: none;
    color: #000;

    &:hover {
      color: aquamarine;
      transition: 1s;
    }
  }
`;

export const AboutImgWrapper = styled.div`
  width: 670px;
  grid-area: ls;
  border-right: solid 2px black;
  padding-top: 385px;

  @media only screen and (max-width: 1024px) {
    padding-top: 805px;
  }

  @media only screen and (max-width: 834px) {
    padding-top: 615px;
  }
`;

const Header = () => {
  return (
    <>
      <NavSection>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        > */}
        <Menu>
          <MenuItems>
            <Logo>
              <Link href="/">Elsa Hovey</Link>
            </Logo>

            <NavLinks>
              <Link href="/#services">Services</Link>
              <Link href="/featured-websites">Featured Websites</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact">Contact</Link>
            </NavLinks>
          </MenuItems>

          <AboutImgWrapper>
            <Image
              className="portfolio-img"
              src={JtPic}
              alt="elsa hovey"
              layout="responsive"
            />
          </AboutImgWrapper>

          <About />
          <Contact />
        </Menu>
        {/* </motion.div> */}
      </NavSection>
    </>
  );
};

export default Header;
