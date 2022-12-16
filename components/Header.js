import Link from "next/link";
import { FaBars } from "react-icons/fa";

import {
  NavSection,
  Menu,
  MenuItems,
  Logo,
  NavLinks,
} from "./styles/Header.styled";

const Header = () => {
  return (
    <>
      {/* <NavSection> */}
      {/* <Menu> */}
      <FaBars />
      <MenuItems>
        <Logo>
          <Link href="/">The Laughing Coyote</Link>
        </Logo>
        <NavLinks>
          {/* <Link href="/">Purpose</Link> */}
          <Link href="/">About</Link>
          <Link href="/">Process</Link>
          <Link href="/">Newsletter</Link>
          <Link href="/">Contact</Link>
        </NavLinks>
      </MenuItems>
      {/* </Menu> */}
      {/* </NavSection> */}
    </>
  );
};

export default Header;
