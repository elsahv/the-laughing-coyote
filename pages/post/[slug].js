import { sanityClient, urlFor } from "../../client"
import { PortableText } from '@portabletext/react'
import styled from 'styled-components'
 

const Wrapper = styled.div`
// background: #3aa1aa;
padding: 65px 125px;
@media only screen and (max-width: 1024px) {
padding-top: 150px;
}
`

const PostTitle = styled.h3`
font-size: 25px;
color: #3aa1aa;
text-transform: capitalize;
text-align: left;
width: 100%;
&:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 834px) {
  padding: 0;
}
@media only screen and (max-width: 834px) {
  font-size: 18px;
}
` 

const PostDescription = styled.div`
color: #3aa1aa;
font-size: 18px;
@media only screen and (max-width: 834px) {
font-size: 16px;
}
@media only screen and (max-width: 600px) {
font-size: 14px;
}
` 



// const PostComponents = {
//   types: {
//     image: ({value}) => {
//       return (
//         <div>
//         <img
//           alt={value.alt || ' '}
//           src={urlFor(value)}
//           layout="responsive"
//           className="images"
//           width={650}
//           />
//           </div>
//       )
//     }
//   }
// }


const Post = ({
  title,
  // image,
  body,
  // publishedAt
 
}) => {
  return (
    <Wrapper>
         <PostTitle>{title}</PostTitle>

              {/* <p>{new Date(publishedAt).toDateString()}</p> */}
            

                    {/* <img
                      src={urlFor(image)} 
                      alt=""
                      className="img"
                      layout="responsive"
                      /> */}
              
              <PostDescription>
            <PortableText value={body}
            //  components={PostComponents}
              />
              </PostDescription>
    </Wrapper>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type == "newsletter" && slug.current == $pageSlug][0]{
    title,
    // image,
    body,
    // publishedAt
  }`

  const post = await sanityClient.fetch(query, { pageSlug })

  if (!post) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: post.title,
        // image: post.image,
        body: post.body,
        // publishedAt: post.publishedAt
      },
    }
  }
}

export default Post