import { Footer } from "./styles/Footer.styled";
const today = new Date();

const FooterSection = () => {
  return (
    <Footer>
      {" "}
      <p>Copyright &copy; {today.getFullYear()}</p>
    </Footer>
  );
};

export default FooterSection;
