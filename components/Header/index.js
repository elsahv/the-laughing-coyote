import Link from "next/link";
import { Header, Logo, NavLinks } from "./styled";
const HeaderSection = () => {
  return (
    <Header>
      <Logo>
        <Link href="/">Laughing Coyote</Link>
      </Logo>
      <NavLinks>
        <Link href="/#services">Services</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </NavLinks>
    </Header>
  );
};

export default HeaderSection;
