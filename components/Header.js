import Link from "next/link";

import {
  NavSection,
  Menu,
  MenuItems,
  Logo,
  NavLinks,
  PageID,
} from "./styles/Header.styled";

const Header = () => {
  return (
    <>
      {/* <NavSection> */}
      {/* <Menu> */}
      <MenuItems>
        <Logo>
          <Link href="/">The Indoor Jungle Project</Link>
        </Logo>
        {/* <PageID>
              <Link href="/">Development/ Design</Link>
            </PageID> */}
        <NavLinks>
          {/* <Link href="/">Purpose</Link> */}
          <Link href="/#about">About</Link>
          <Link href="/#process">Services</Link>
          <Link href="/#newsletter">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </NavLinks>
      </MenuItems>
      {/* </Menu> */}
      {/* </NavSection> */}
    </>
  );
};

export default Header;
