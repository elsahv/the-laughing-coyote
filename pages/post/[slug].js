/* eslint-disable @next/next/no-img-element */
import { sanityClient, urlFor } from "../../client";
import { PortableText } from "@portabletext/react";
import PostLeftSide from "../../components/PostLeftSide";
import styled from "styled-components";

const PostHero = styled.div`
  width: 100%;
  height: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "title mainImg mainImg mainImg";
  background: #333232;
`;

const PostWrapper = styled.div`
  width: 75%;
  overflow-y: scroll;
  height: 100%;
  position: absolute;
  right: 0;
  border-left: solid 1px #000;
`;

const ImgWrapper = styled.main`
  grid-area: mainImg;
  margin: 50px 100px;
  border: 1px solid #000;
`;

const PostTitle = styled.h2`
  grid-area: title;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  text-transform: capitalize;
`;

const PostTextWrapper = styled.div`
  margin: 50px 200px;
  opacity: 0.8;
  line-height: 1.5;
`;

const post = ({ title, image, body }) => {
  return (
    <>
      <PostLeftSide />
      <PostWrapper>
        <PostHero>
          <PostTitle>{title}</PostTitle>
          {/* ADD CATEGORY */}
          {/* ADD DATE */}
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
          <PortableText value={body} />
        </PostTextWrapper>
      </PostWrapper>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[_type == "posts" && slug.current == $pageSlug][0] {
  title,
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
        image: post.image,
        body: post.body,
      },
    };
  }
};

export default post;
