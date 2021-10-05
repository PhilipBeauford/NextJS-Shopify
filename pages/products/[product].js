import ProductPageContent from "../../components/ProductPageContent"
import { getAllProducts, getProduct } from "../../lib/shopify"

export default function ProductPage ({ product }) {


    return (
        <div>
            <ProductPageContent product={product} />
        </div>
    )
}

export async function getStaticPaths() {
    const products = await getAllProducts()

    const paths = products.map(item => {
        const handle = String(item.node.handle)

        return {
            params: { product: handle }
        }
    })

    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
      const product = await getProduct(params.product)

      return {
          props: {
              product
          }
      }
  }