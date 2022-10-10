import Link from "next/link";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  // text-shadow: 1px 1px 1px teal;
  text-align: center;
  padding: 10px;
  display: none;
  padding: 25px;
  overflow-x: hidden;
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
    position: sticky;
    top: 0;
    z-index: 7500;
    background: #3aa1aa;
    border: solid 2px black;
    width: 100%;
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  padding: 10px;
  a {
    color: #000;
    text-decoration: none;
    font-size: 30px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 2px;
  }
`;

export const NavLinks = styled.div`
  font-size: 20px;
  padding-top: 10px;
  a {
    color: #000;
    text-decoration: none;
    margin: 0 15px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <Logo>
          <Link href="/">Elsa Hovey</Link>
        </Logo>

        <NavLinks>
          <Link href="/">Services</Link>
          <Link href="/featured-websites">Featured Websites</Link>
          <Link href="/#contact-mobile">Contact</Link>
        </NavLinks>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
