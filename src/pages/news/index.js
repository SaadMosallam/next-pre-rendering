export default function NewsArticleList({ articles }) {
    return (
        <>
            <h1>List of News Articles</h1>
            {
                articles.map(article => (
                    <div key={article.id}>
                        <h2>{article.id} {article.title} | {article.category}</h2>
                    </div>
                ))
            }
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news');
    const responseData = await response.json();
    console.log('Pre-rendering NewsArticles')
    return {
        props: {
            articles: responseData
        }
    }
}