import { useRouter } from "next/router";


export default function ProductDetails({ productDetails }) {
    const router = useRouter();

    if (router.isFallback) return <h1>Loading...</h1>
    return ( 
      <div key={productDetails.id}>
        <h1>{productDetails.id} {productDetails.title}: {productDetails.price}</h1>
        <p>{productDetails.description}</p>
      </div>
    )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: '1' }}
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
    const { productId } = context.params;
    console.log(`generating/ regenerating page for product: ${productId}`);
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const responseData = await response.json();

    return {
        props: {
          productDetails: responseData,
        },
        revalidate: 10
    }
}