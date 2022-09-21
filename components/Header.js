import Link from 'next/link'
import Image from 'next/image'
import JtPic from '../public/images/joshuatreeabout.jpg'
import styled from 'styled-components'



export const NavSection = styled.nav`
display: flex;
width: 480px;
height: 100vh;
position: fixed;    
left: 0;
border-right: solid 2px #000;
background: #3aa1aa;  
z-index: 1000;
text-decoration: none;  
display: flex;


@media only screen and (max-width: 1024px) {
  width: 300px;
  display: none;
}

@media only screen and (max-width: 834px) {
  width: 250px;
}

 
@media only screen and (max-width: 600px) {
  display: none;
  }

`
 
export const SubscribeWrapper = styled.div`
`


export const Menu = styled.div`
height: 100%;
// opacity: 0.8; 
display: flex;  
flex-direction: column;
justify-content: space-between;
position: absolute;
top: 0;
width: 100%;

@media only screen and (max-width: 834px) {
  padding-left: 15px;
}
`

export const MenuItems = styled.div`
padding-left: 15px;
padding-top: 50px;
`

export const Logo = styled.h1`
font-size: 65px;
// margin: 10px 0;
 a{
  color: #fff;
   text-decoration: none;
   text-shadow: 1px 1px 1px teal;
}
@media only screen and (max-width: 834px) {
  margin-right: 5px;
}
`
 

export const NavLinks = styled.li`
font-size: 30px;
display: flex;
flex-direction: column;
text-transform: capitalize;
text-decoration: none;  
padding-top: 5px;
padding-left: 5px;
// margin: 5px 0;
  a {
  margin: 1px 0;
  text-decoration: none;  
  color: #fff;
  text-shadow: 1px 1px 1px teal;

  &:hover{
    color: aquamarine;
    transition: 1s;
  }
}
`
 

export const SmIcons = styled.div`
font-size: 25px;
text-decoration: none;  
margin: 20px 0;
 a {
   margin: 0 5px;
   color: aquamarine;
   &:hover{
    color: aquamarine;
    transition: 1s;
  }
 }

 @media only screen and (max-width: 768px) {
  display: none;
  }
`
 

const Header = () => {
  return (
    <>
    <NavSection>  
<Menu>

  <MenuItems>
 <Logo> 
 <Link href="/">
  Elsa Hovey
   </Link>
   </Logo> 
 
   <NavLinks>
   <Link href="/#services">Services</Link>
   <Link href="/#featuredWebsites">Featured Websites</Link>
       <Link href="/#contact">Contact</Link>
 
           {/* <SmIcons> 
          <a href="http://linkedin.com/in/elsa-hovey"> 
        <FaLinkedin />
        </a>  
        <a href="http://github.com/elsahv"> 
        <FaGithub />
        </a>
      <a href="https://www.instagram.com/elsahoveydevdesign/"> 
        <FaInstagram />
        </a>
        </SmIcons>   */}
     </NavLinks>
     </MenuItems>
     
       <Image
                        className='portfolio-img'
                        src={JtPic}
                        alt="elsa hovey"
                        layout='responsive'
                        />
    </Menu>
    
     </NavSection>
     </>
  )
}

export default Header