/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { sanityClient, urlFor } from "../../client";
import { PortableText } from "@portabletext/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 100vh;
  position: absolute;
  right: 0;
  border-left: solid 1px #000;
  z-index: 1200;
  background: #fff;
`;

const PostHero = styled.div`
  width: 100%;
  background: #333232;
  display: flex;
  border-bottom: solid 1px #000;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const PostHeroNav = styled.div`
  padding: 25px;
  background: #333232;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Logo = styled.h1`
  font-size: 30px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const LinkItems = styled.div`
  border-top: solid 1px #000;
  margin-top: 10px;
  padding-left: 5px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    border-top: none;
  }
`;

const PostHeroContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 50px;
  padding: 35px 0 0 55px;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  text-transform: capitalize;
  ul {
    list-style: none;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 20px;
    padding-left: 20px;
  }
`;

const IconWrapper = styled.div`
  font-size: 25px;
  padding: 15px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const PostTitle = styled.h3`
  margin: 5px 0;
  font-size: 20px;
`;

const ImgWrapper = styled.div`
  grid-area: mainImg;
  margin: 50px 100px;
  // border: 1px solid #000;
  height: 70vh;
  @media only screen and (max-width: 1024px) {
    height: 100%;
    margin: 20px 30px;
  }
`;

const PostTextWrapper = styled.div`
  // margin: 0 0 0 600px;
  // background: green;
  opacity: 0.8;
  line-height: 1.5;
  display: flex;
  justify-content: flex-end;
`;

const PostContainer = styled.div`
  width: 70%;
  padding: 45px 85px 0 0;
  @media only screen and (max-width: 600px) {
    padding: 40px 20px 20px;
    width: 100%;
  }
`;

const post = ({ title, publishedDate, image, body }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Wrapper>
          <PostHero>
            <PostHeroNav>
              <Logo>
                <Link href="/">The Indoor Jungle Project</Link>
              </Logo>
              <LinkItems>
                <Link href="/#about">about</Link>
                <Link href="/#contact">contact</Link>
              </LinkItems>
            </PostHeroNav>
            <PostHeroContent>
              <ul>
                <li>
                  <IconWrapper>
                    <Link href="/">
                      <AiOutlineArrowLeft />
                    </Link>
                  </IconWrapper>
                </li>
                <li>
                  <PostTitle>{title}</PostTitle>
                </li>
                <li>{publishedDate}</li>
              </ul>
            </PostHeroContent>
            <ImgWrapper>
              <img
                src={urlFor(image)}
                alt=""
                className="img"
                width="100%"
                height="100%"
              />
            </ImgWrapper>
          </PostHero>
          <PostTextWrapper>
            <PostContainer>
              <PortableText value={body} />
            </PostContainer>
          </PostTextWrapper>
          <footer>blog footer</footer>
        </Wrapper>
      </motion.div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[_type == "posts" && slug.current == $pageSlug][0] {
  title,
  publishedDate,
  image,
  body,
}`;

  const post = await sanityClient.fetch(query, { pageSlug });
  if (!post) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        publishedDate: post.publishedDate,
        image: post.image,
        body: post.body,
      },
    };
  }
};

export default post;
