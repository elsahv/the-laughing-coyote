import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  z-index: 100000;
`;

export const Logo = styled.h1`
  font-size: 40px;
  width: 890px;
  padding: 70px 0 35px 25px;
  // background: green;

  a {
    color: #000;
    text-decoration: none;
    // text-shadow: 1px 1px 1px #000;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 45px;
  }

  @media only screen and (max-width: 834px) {
    font-size: 37px;
    padding: 60px 10px 20px 10px;
  }
`;

export const NavLinks = styled.li`
  margin-bottom: 350px;
  margin-right: 55px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  text-decoration: none;
  padding: 35px;
  font-size: 25px;

  border-top: solid 2px black;
  a {
    margin: 1px 0;
    text-decoration: none;
    color: #000;

    &:hover {
      // color: aquamarine;
      transition: 1s;
      text-shadow: 1px 1px 1px #000;
    }
  }
`;

const HeaderSection = () => {
  return (
    <Header>
      <Logo style>
        <Link href="/">The Indoor Jungle Project</Link>
      </Logo>
      <NavLinks>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </NavLinks>
    </Header>
  );
};

export default HeaderSection;
