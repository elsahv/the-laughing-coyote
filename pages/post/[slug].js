/* eslint-disable @next/next/no-img-element */
import { sanityClient, urlFor } from "../../client";
import { PortableText } from "@portabletext/react";
import styled from "styled-components";

const post = ({ title, image, body }) => {
  return (
    <main>
      <h2>{title}</h2>

      <img src={urlFor(image)} alt="" className="img" />
      <PortableText value={body} />
    </main>
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
