import ProductList from '../components/ProductList'
import { getProductsInCollection } from '../lib/shopify'
import Hero from "../components/Hero"
import Head from 'next/head'
import Body from '../components/Body'
import Midsection from '../components/Midsection'
import Ready from '../components/Ready'
import Reviews from './../components/Reviews'


export default function Home( {products}) {

  return (
    <div className="mx-auto max-w-6xl lg:max-w-7xl xl:max-w-full">
      <Head>
        <title>Modern eCommerce | Headless Shopify</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Modern eCommerce Website focusing on Shopify, Next.js, TailwindCSS & GraphQL. 
          Additional tech stack includes Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
        <meta property="og:title" content="Modern eCommerce | Headless Shopify" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-js-shopify-six.vercel.app/" />
        <meta property="og:image" content="./share.png" />
        <meta property="og:description"
          content="Modern eCommerce Website focusing on Shopify, Next.js, TailwindCSS & GraphQL. 
          Additional tech stack includes Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Modern eCommerce | Headless Shopify" />
      </Head>
      <Hero />
      <Body />
      <Midsection />
      <Reviews />
      <ProductList products={products} />
      <Ready />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}

