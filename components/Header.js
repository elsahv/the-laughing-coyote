import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import About from "../components/About";
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
      <NavSection>
        <Menu>
          <FaBars />
          <MenuItems>
            <Logo>
              <Link href="/">The Laughing Coyote</Link>
            </Logo>
            <NavLinks>
              <Link href="/">About</Link>
              <Link href="/">list item</Link>
              <Link href="/">list item</Link>
              <Link href="/">list item</Link>
              <Link href="/contact/#about">Contact</Link>
            </NavLinks>
          </MenuItems>

          <About />
        </Menu>
      </NavSection>
    </>
  );
};

export default Header;
