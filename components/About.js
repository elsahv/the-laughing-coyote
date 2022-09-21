import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import PortfolioPic from '../public/images/portfolio-pic.jpg'



export const Wrapper = styled.div`
display: flex;
justify-content: center;
margin: 10px 25px;
padding: 20px  35px;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-areas:
'a b b b';

@media only screen and (max-width: 810px) {
     grid-template-columns: 1fr;
     grid-template-areas:
     'a'
     'b'
     'b'
     'b';
}
`



export const ImageWrapper = styled.div`
position: relative;
width: 300px;     
grid-area: a;
border: solid 2px black;

@media only screen and (max-width: 834px) {
  margin-left: 25px;
  margin-top: 30px;
}

@media only screen and (max-width: 531px) {
  padding: 0;
  left: 50%;
transform: translateX(-50%);
}
`


export const Paragraph = styled.div`
grid-area: b;
font-size: 20px;
padding-top: 40px;
opacity: 0.8;
line-height: 1.5em;
h4 {
   font-size: 30px;
   padding: 20px 0;
   text-decoration: underline;
}
 a {
   color: #000;
   margin: 5px;
 }
 a:hover {
   color: teal;
   transition: 2s;
 }

@media only screen and (max-width: 1024px) {
  padding-top: 0;
  padding-left: 25px;
  padding-top: 25px;
  p {
    font-size: 18px;      
  }
  }
  `

const about = () => {
  return (
    <>
              <div id="about">  
                <Wrapper>
                      <Grid>
                  <ImageWrapper>
                      <Image
                        className='portfolio-img'
                        src={PortfolioPic}
                        alt="elsa hovey"
                        layout='responsive'
                        />
                      </ImageWrapper>
                     <Paragraph>
                     <h4>About Elsa</h4>
                       <p>Im currently working as a freelance web developer while building up my
                        <Link href="/featured-websites">
                         own side projects.
                         </Link>
                        I like to keep multiple hobbies and small business projects, and have created websites to keep track of my progress.</p>
                        <br />
                        <p>My curiosity is what keeps me going, along with the desire to help other people with their endeavors.
                         </p>
                         </Paragraph>
                        </Grid>
                </Wrapper>
                </div>
    </>
  )
}

export default about