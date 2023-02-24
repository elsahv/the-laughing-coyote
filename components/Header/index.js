import Link from "next/link";
import { Header, Logo, NavLinks } from "./styled";

const HeaderSection = () => {
  return (
    <Header>
      <Logo>
        <Link href="/">Laughing Coyote Development/ Design</Link>
      </Logo>
      <NavLinks>
        <Link href="/#about">About</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#rates">Rates</Link>
        <Link href="/#contact">Contact</Link>
      </NavLinks>
    </Header>
  );
};

export default HeaderSection;
