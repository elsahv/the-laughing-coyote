import styled from 'styled-components'
import GlobalStyles from './Global'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'



const Wrapper = styled.div`
padding-top: 10px;
padding-bottom: 55px;
margin-left: 480px;
// background: aquamarine;

@media only screen and (max-width: 1024px) {
  margin-top: 20px;
  margin-left: 0px;
}

@media only screen and (max-width: 600px) {
  margin-left: 10px;
 }
`


 

export default function Layout({ children }) {
  return (
    <>
    <GlobalStyles />
    <Header />
    <Sidebar />
    <Wrapper>
      <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}