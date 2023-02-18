import Link from "next/link";
import { Header, Logo, NavLinks } from "./styled";

const HeaderSection = () => {
  return (
    <Header>
      <Logo style>
        <Link href="/">The Laughing Coyote</Link>
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
