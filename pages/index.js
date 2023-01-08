/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { sanityClient, urlFor } from "../client";
import LeftSide from "../components/LeftSide";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 55%;
  background-color: #333232;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  overflow-y: scroll;
  height: 100%;
  position: absolute;
  right: 0;
  // background: maroon;

  @media only screen and (max-width: 1024px) {
    margin-left: 470px;
  }
`;

const HomeDescriptionP = styled.p`
  // background: pink;
  margin-top: 120px;
  margin-left: 50px;
  margin-bottom: 50px;
  width: 75%;
  @media only screen and (max-width: 1024px) {
    margin-top: 90px;
  }
`;

const BlogPostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 50px;

  @media only screen and (max-width: 810px) {
    margin: 0 0 0 20px;
  }
`;

const PostTitle = styled.h2`
  // background: pink;
  margin-top: 50px;
  padding: 10px 5px;
  text-transform: capitalize;
`;

const Image = styled.img`
  border: solid 1px #000;
  width: 950px;
  height: 550px;
  @media only screen and (max-width: 1024px) {
    width: 450px;
    height: 290px;
  }
  @media only screen and (max-width: 834px) {
    width: 370px;
    height: 250px;
  }
`;

const PostDescription = styled.p`
  // background: pink;
  padding: 5px 10px;
  @media only screen and (max-width: 1024px) {
    padding-right: 100px;
  }
`;

const Home = ({ posts }) => {
  return (
    <>
      <LeftSide />
      <MainWrapper>
        <HomeDescriptionP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore
          ullam qui corrupti impedit sed reiciendis architecto dignissimos
          quaerat perspiciatis laborum placeat, iusto harum et error aliquid cum
          libero numquam.
        </HomeDescriptionP>
        <BlogPostsGrid>
          {posts &&
            posts.map((post, index) => (
              <span key={index}>
                <Link href={`post/${post.slug.current}`}>
                  <PostTitle>{post.title}</PostTitle>
                </Link>

                <Image src={urlFor(post.image)} alt="" />
                <PostDescription>{post.description}</PostDescription>
              </span>
            ))}
        </BlogPostsGrid>
      </MainWrapper>
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
