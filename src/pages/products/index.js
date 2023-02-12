export default function Products({ productsList }) {
    return (
      <>
        <h1>List of Products</h1>
        {
            productsList.map(product=> (
                <>
                    <h2 key={product.id}>{product.id} {product.title}: {product.price}</h2>
                    <hr />
                </>
            ))
        }
      </>
    )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products');
    const responseData = await response.json();

    return {
        props: {
            productsList: responseData
        }
    }
}