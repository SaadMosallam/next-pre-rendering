export default function ArticleListByCategory({ articles, category }) {
    return (
        <>
        <h1>Showing news for category <i>{category}</i></h1>
        {
            articles.map(article => (
                <div key={article.id}>
                    <h2>{article.id} {article.title} | {article.category}</h2>
                    <p>{article.description}</p>
                    <hr />
                </div>
            ))
        }
    </>
    )
}

export async function getServerSideProps(context) {
    const { params, req, res, query } = context;
    const { category } = params;
    // res.setHeader('Set-Cookie', ['name=Saad'])
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const responseData = await response.json();
    console.log(`Pre-rendering News Articles for category ${category}`)

    return {
        props: {
            articles: responseData,
            category
        }
    }
}