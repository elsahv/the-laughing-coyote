import Link from "next/link";

import { MenuItems, Logo, NavLinks } from "./styles/Header.styled";

const Header = () => {
  return (
    <>
      <MenuItems>
        <Logo>
          <Link href="/">The Indoor Jungle Project</Link>
        </Logo>

        <NavLinks>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </NavLinks>
      </MenuItems>
    </>
  );
};

export default Header;
