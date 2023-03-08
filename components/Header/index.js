import Link from "next/link";
import { Header, Logo, NavLinks } from "./styled";
//TODO: IMPLEMENT SERVICES AND RATES LINKS WHEN READY
const HeaderSection = () => {
  return (
    <Header>
      <Logo>
        <Link href="/">Laughing Coyote</Link>
      </Logo>
      <NavLinks>
        <Link href="/#about">About</Link>
        {/* <Link href="/#services">Services</Link>
        <Link href="/#rates">Rates</Link> */}
        <Link href="/#contact">Contact</Link>
      </NavLinks>
    </Header>
  );
};

export default HeaderSection;
