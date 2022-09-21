
import Link from "next/link"
import { sanityClient, urlFor } from "../client"
import { motion } from 'framer-motion';
import styled from 'styled-components'



// STYLES
const Wrapper = styled.div`
// background: #3aa1aa;
padding: 65px;
@media only screen and (max-width: 1024px) {
padding-top: 150px;
}
`

const Navbar = styled.div`
height: 120px;
width: 100%;
display: flex;
justify-content: flex-end;
padding-right: 105px; 
@media only screen and (max-width: 1024px) {
margin: auto;
}
` 

const Logo = styled.div`
background: teal;
font-size: 45px;
padding: 25px;
`


const Content = styled.div`
padding: 25px;
`


const BlogWrapper = styled.div`
margin: 55px 105px;
padding-top: 25px;
padding-bottom: 25px;
border-top: solid 2px gray;
border-bottom: solid 2px gray;
@media only screen and (max-width: 1024px) {
margin: auto;
}
` 
 

const Post = styled.div`
display: flex;
margin: 15px;
cursor: pointer;
@media only screen and (max-width: 531px) {
flex-direction: column;
margin: 25px 55px;
}
@media only screen and (max-width: 531px) {
  margin: 25px 5px;
  } 
` 

const Section = styled.div`
 padding: 25px 55px; 
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
@media only screen and (max-width: 1024px) {
  padding: auto;
}
@media only screen and (max-width: 600px) {
  padding: 10px; 
}
` 

 
const PostTitle = styled.h3`
font-size: 25px;
color: #3aa1aa;
text-transform: capitalize;
text-align: left;
width: 100%;
&:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 834px) {
  padding: 0;
}
@media only screen and (max-width: 834px) {
  font-size: 18px;
}
` 

const PostDescription = styled.div`
color: #3aa1aa;
font-size: 22px;
@media only screen and (max-width: 834px) {
font-size: 16px;
}
@media only screen and (max-width: 600px) {
font-size: 14px;
}
` 



//END STYLES



const Home = ({ posts }) => {
  return (
    <>
    <Wrapper>
       <Navbar>
        <Content>
<Logo>
        Newsletter
       </Logo>
       </Content>
       </Navbar>

                <BlogWrapper>
                          {posts &&
                          posts.map((post, index) => (   
                         
                            <span key={index}>
                         <Link href={`post/${post.slug.current}`}> 
                              <Post>
                                <Section>
                                    <PostTitle>{post.title}</PostTitle>
                                    <PostDescription>{post.description}</PostDescription>
                                    </Section>
                                   
                                    </Post>
                              </Link>

                              </span>   
                            ))}
                          </BlogWrapper>
    </Wrapper>
    </>
  )
}



export const getServerSideProps = async() => {
  const query = '*[_type == "newsletter"]'
  const posts = await sanityClient.fetch(query)
  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    }
  } else {
    return {
      props: {
        posts,
      },
    }
  }
}
 

export default Home