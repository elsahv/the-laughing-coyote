import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import About from "../components/About";
import styled from "styled-components";
import JtPic from "../public/images/joshuatreeabout.jpg";

export const NavSection = styled.nav`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 500px;
  height: 100%;
  position: absolute;
  left: 0;
  border-right: solid 2px gray;
  background-color: #3aa1aa;
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
  font-size: 32px;
  // background: green;
  a {
    color: #fff;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
  }

  @media only screen and (max-width: 1024px) {
    padding-top: 10px;
  }

  @media only screen and (max-width: 834px) {
    font-size: 30px;
  }
`;

export const PageID = styled.h2`
  font-size: 30px;
  padding: 5x 0;
  a {
    color: #fff;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
  }
  @media only screen and (max-width: 834px) {
    font-size: 28px;
  }
`;

export const NavLinks = styled.li`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  text-decoration: none;
  padding-top: 25px;
  padding-left: 5px;
  a {
    margin: 1px 0;
    text-decoration: none;
    color: #fff;
    text-shadow: 1px 1px 1px rgb(0, 123, 165);

    &:hover {
      // color: aquamarine;
      transition: 1s;
      text-shadow: 1px 1px 1px #000;
    }
  }
`;

export const AboutImgWrapper = styled.div`
  width: 670px;
  grid-area: ls;
  border-right: solid 2px black;
  padding-top: 335px;

  @media only screen and (max-width: 1024px) {
    padding-top: 785px;
  }

  @media only screen and (max-width: 834px) {
    padding-top: 595px;
  }
`;

const Header = () => {
  return (
    <>
      <NavSection>
        <Menu>
          <FaBars />
          <MenuItems>
            <Logo>
              <Link href="/">Elsa Hovey-</Link>
            </Logo>
            <PageID>
              <Link href="/">Development/ Design</Link>
            </PageID>
            <NavLinks>
              <Link href="/#services">Services</Link>
              <Link href="/featured-websites">Featured Websites</Link>
              <Link href="/contact/#about">Contact</Link>
              {/* <Link href="/newsletter/#subscribe">Newsletter</Link> */}
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
        </Menu>
      </NavSection>
    </>
  );
};

export default Header;
