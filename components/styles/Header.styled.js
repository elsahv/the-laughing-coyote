import styled from "styled-components";

export const NavSection = styled.nav`
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

export const Menu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;

  @media only screen and (max-width: 834px) {
    padding-left: 0px;
  }
`;

export const MenuItems = styled.div`
  padding-left: 15px;
`;

export const Logo = styled.h1`
  font-size: 80px;
  display: block;
  padding: 70px 0 35px 25px;
  // background: green;
  a {
    color: #000;
    text-decoration: none;
    // text-shadow: 1px 1px 1px #000;
  }

  @media only screen and (max-width: 1024px) {
    padding-top: 10px;
  }

  @media only screen and (max-width: 834px) {
    font-size: 30px;
  }
`;

export const NavLinks = styled.li`
  margin-bottom: 350px;
  margin-right: 55px;
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
