/* eslint-disable @next/next/no-img-element */
import { sanityClient, urlFor } from "../client";
import LeftSide from "../components/LeftSide";
import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "../components/Card";

const RightSide = styled.div`
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
    top: 0;
    height: 100%;
    width: 100%;
    overflow-y: none;
  }
`;

const HomeDescriptionP = styled.p`
  // background: pink;
  margin-top: 120px;
  margin-left: 50px;
  margin-bottom: 50px;
  width: 75%;
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
  margin: 0 0 0 50px;
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <LeftSide />
        <RightSide>
          <HomeDescriptionP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            inventore ullam qui corrupti impedit sed reiciendis architecto
            dignissimos quaerat perspiciatis laborum placeat, iusto harum et
            error aliquid cum libero numquam.
          </HomeDescriptionP>
          <BlogPostsGrid>
            {posts &&
              posts.map((post, index) => (
                <span key={index}>
                  <Card post={post} />
                </span>
              ))}
          </BlogPostsGrid>
        </RightSide>
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
