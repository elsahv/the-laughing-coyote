import GlobalStyles from "./Global";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
      <Footer />
    </>
  );
}
