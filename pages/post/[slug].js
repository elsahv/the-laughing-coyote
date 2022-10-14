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
    width: 380px;
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
  font-size: 25px;
  text-align: left;
  padding: 20px 0px;
`;

export const BodyContent = styled.div`
  opacity: 0.8;
  text-align: left;
  font-size: 17px;
  line-height: 2em;
  margin-top: 80px;
  background: aquamarine;
  padding: 30px 250px;
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

const Post = ({ title, image, body }) => {
  return (
    <>
      <MainImgWrapper>
        <img src={urlFor(image)} alt="" className="img" />
      </MainImgWrapper>
      <BodyContent>
        <Title>{title}</Title>

        <PortableText value={body} components={PostComponents} />
      </BodyContent>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[_type == "newsletter" && slug.current == $pageSlug][0]{
    title,
    image,
    // description,
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

export default Post;
