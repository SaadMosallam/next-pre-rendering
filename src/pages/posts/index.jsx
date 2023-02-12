import Link from 'next/link'

export default function Posts({ postsList }) {
    return (
      <>
        <h1>List of Posts</h1>
        {
            postsList.map(post => (
                <>
                    <Link href={`/posts/${post.id}`}>
                        <h2 key={post.id}>{post.id} {post.title}</h2>
                    </Link>
                    <hr />
                </>
            ))
        }
      </>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseData = await response.json();

    return {
        props: {
            postsList: responseData.slice(0, 3)
        }
    }
}