import Link from "next/link";
import { urlFor } from "../../utils/image";
import { PostTitle, Image, PostDescription, Button } from "./styled";

export default function Card({ post }) {
  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <Link href={`post/${post.slug.current}`}>
        <Image src={urlFor(post.image)} alt="" />
      </Link>
      <PostDescription>{post.description}</PostDescription>
      <Button>
        <Link href={`post/${post.slug.current}`}>Read more</Link>
      </Button>
    </>
  );
}
