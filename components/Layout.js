import GlobalStyles from "./Global";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
}
