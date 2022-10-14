import Link from "next/link";
import { sanityClient, urlFor } from "../client";
import { motion } from "framer-motion";
import styled from "styled-components";

// STYLES
const Wrapper = styled.div`
  padding: 65px;
  opacity: 0.8;
  // background: green;
  @media only screen and (max-width: 1024px) {
    padding: 30px 10px;
  }

  @media only screen and (max-width: 834px) {
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const Logo = styled.div`
  font-size: 45px;
  padding: 25px;

  @media only screen and (max-width: 834px) {
    padding-left: 60px;
    padding-top: 65px;
    font-size: 35px;
  }
`;

const BlogWrapper = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: solid 2px gray;
  @media only screen and (max-width: 1024px) {
    margin: auto;
  }
`;

const Post = styled.div`
  display: flex;
  margin: 15px;
  cursor: pointer;
  // background: pink;
  @media only screen and (max-width: 834px) {
    flex-direction: column;
    margin: 25px 55px;
  }

  @media only screen and (max-width: 768px) {
    margin: 25px 15px;
  }

  @media only screen and (max-width: 531px) {
    margin: 25px 5px;
  }
`;

const Section = styled.div`
  padding-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    padding: auto;
  }
  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const PostTitle = styled.h3`
  font-size: 20px;
  text-align: left;
  width: 100%;
  &:hover {
    text-decoration: underline;
    color: rgb(0, 123, 165);
    transition: 2s;
  }
  @media only screen and (max-width: 834px) {
    padding: 0;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    // text-align: center;
  }
`;

const PostDescription = styled.div`
  font-size: 20px;
  padding-top: 10px;
  @media only screen and (max-width: 834px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

//END STYLES

const Home = ({ posts }) => {
  return (
    <>
      <Wrapper>
        <Logo>Newsletter</Logo>

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
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "newsletter"]';
  const posts = await sanityClient.fetch(query);
  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};

export default Home;
