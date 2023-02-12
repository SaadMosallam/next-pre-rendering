import { useRouter } from "next/router";


export default function PostDetails({ postDetails }) {
    const router = useRouter();

    if (router.isFallback) return <h1>Loading...</h1>
    return ( 
      <div key={postDetails.id}>
        <h1>{postDetails.id} {postDetails.title}</h1>
        <p>{postDetails.body}</p>
      </div>
    )
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const responseData = await response.json();
  const postIds = responseData.slice(0, 3).map(post => ({ params: { postId: `${post.id}` } }))
  return {
    paths: [
      ...postIds
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
    const { postId } = context.params;
    console.log(postId)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const responseData = await response.json();

    return {
        props: {
            postDetails: responseData
        }
    }
}