import Link from "next/link";
import { Header, Logo, NavLinks } from "./styled";

const HeaderSection = () => {
  return (
    <Header>
      <Link href="/">
        <Logo>
          <h1>Laughing Coyote Dev</h1>
          {/* <h1> Development/ Design</h1> */}
        </Logo>
      </Link>

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
