import styled from "styled-components";

export const Header = styled.header`
  padding-left: 20px;
  padding-top 40px;
`;

export const Logo = styled.h1`
  font-size: 80px;
  width: 80%;
  // background: green;

  a {
    color: #000;
    text-decoration: none;
    // text-shadow: 1px 1px 1px #000;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 55px;
  }
`;

export const NavLinks = styled.li`
  margin-bottom: 350px;
  margin-right: 55px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  text-decoration: none;
  padding: 10px;
  font-size: 25px;
  border-top: solid 2px #333232;
  border-bottom: solid 2px #333232;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0px;
  }

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

  @media only screen and (max-width: 600px) {
    margin: 20px 0;
  }
`;
