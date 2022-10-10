/* eslint-disable @next/next/no-img-element */
import { sanityClient, urlFor } from "../../client";
import { PortableText } from "@portabletext/react";
import styled from "styled-components";

//STYLES

export const MainImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .img {
    width: 1380px;
    border: solid 2px black;
  }
`;
export const ImagesWrapper = styled.div`
  .postImage {
    width: 1200px;
    border: solid 2px black;
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  text-align: left;
  padding: 60px 30px 10px;
  text-transform: capitalize;
  text-shadow: 1px 1px 1px black;
  color: #fff;
  @media only screen and (max-width: 1024px) {
  }
`;

export const BodyContent = styled.div`
  text-align: left;
  font-size: 17px;
  line-height: 2em;
  margin-top: 80px;
  background: coral;
  padding: 30px 80px;
  @media only screen and (max-width: 1024px) {
    margin: 20px 100px;
  }
  @media only screen and (max-width: 600px) {
    margin: 30px;
  }
`;

//END STYLES

const PostComponents = {
  types: {
    image: ({ value }) => {
      return (
        <ImagesWrapper>
          <img
            alt={value.alt || " "}
            src={urlFor(value)}
            className="postImage"
          />
        </ImagesWrapper>
      );
    },
  },
};

const Post = ({ title, mainImage, body }) => {
  return (
    <>
      <Title>{title}</Title>

      <MainImgWrapper>
        <img src={urlFor(mainImage)} alt="" className="img" />
      </MainImgWrapper>
      <BodyContent>
        <PortableText value={body} components={PostComponents} />
      </BodyContent>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[_type == "newsletter" && slug.current == $pageSlug][0]{
    title,
    description,
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
        mainImage: post.mainImage,
        body: post.body,
      },
    };
  }
};

export default Post;
