/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import sanityClient from "../utils/client";
import LeftSide from "../components/LeftSide";
import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "../components/Card";

const Grid = styled.div`
  display: grid;
  grid-template-areas: "a b";
  @media only screen and (max-width: 600px) {
    grid-template-areas:
      "a"
      "b";
  }
`;

const LeftSideWrapper = styled.div`
  grid-area: a;
`;

const RightSideWrapper = styled.div`
  grid-area: b;
  width: 55%;
  background-color: #333232;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  overflow-y: scroll;
  height: 100vh;
  position: absolute;
  right: 0;
  // background: maroon;

  @media only screen and (max-width: 600px) {
    position: relative;
    bottom: 0;
    height: 100%;
    width: 100%;
    overflow-y: none;
  }
`;

const Title = styled.h2`
  // background: pink;
  font-size: 35px;
  margin-top: 120px;
  margin-left: 50px;
  margin-bottom: 50px;
  width: 75%;
  text-decoration: underline;
  @media only screen and (max-width: 1024px) {
    margin-left: 30px;
    margin-top: 50px;
  }

  @media only screen and (max-width: 810px) {
    width: 90%;
  }

  @media only screen and (max-width: 768px) {
    margin: 35px 10px 0;
  }
  @media only screen and (max-width: 531px) {
  }
`;

const BlogPostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px 0 50px;
  // background: pink;

  @media only screen and (max-width: 1024px) {
    margin: 0 0 0 30px;
  }

  @media only screen and (max-width: 800px) {
    margin: 10px;
  }
`;

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>The Laughing Coyote | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.  i1co" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Grid>
          <LeftSideWrapper>
            <LeftSide />
          </LeftSideWrapper>
          <RightSideWrapper id="blog">
            <Title>Featured Websites</Title>
            <BlogPostsGrid>
              {posts &&
                posts.map((post, index) => (
                  <span key={index}>
                    <Card post={post} />
                  </span>
                ))}
            </BlogPostsGrid>
          </RightSideWrapper>
        </Grid>
      </motion.div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = '*[_type == "posts"] | order(_createdAt asc)';
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
