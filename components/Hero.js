import Link from 'next/link'
import { stylesA } from './Styles'
import { stylesB } from './Styles'



export default function Hero() {
  return (

      <div className="flex flex-col justify-between max-w-xl pt-0 px-4 mx-auto lg:pt-24 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-24 pb-12 mb-16 lg:mb-0 lg:pt-12 lg:max-w-lg lg:pr-5 text-center md:text-left">

          <div className="max-w-xl mb-6">
            <h1 className="max-w-lg mb-6 font-sans text-4xl font-extrabold text-gray-900 sm:text-5xl md:leading-none leading-tighten">
                Building the Future:

                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                                  text-4xl sm:text-6xl md:text-5xl">
                    Modern&nbsp;eCommerce&nbsp;
                  </span> 

              with Shopify + Next.js + Tailwind
            </h1>

            <h2 className="text-gray-500 sm:text-lg md:text-xl md:max-x-3xl lg:text-lg">
            If you are a Merchant looking to level up your Shopify Store theme and join the fastest growing industry, this is the place for you.
            </h2>
          </div>

          <div className="flex justify-center md:justify-start z-50">
              <a href="https://philipbeauford.com" className="inline-flex items-center justify-center h-12 px-6 mr-6
                  font-medium tracking-wider py-3 border-transparent text-base rounded-full text-white bg-gradient-to-r from-indigo-400 to-pink-500 shadow-xl
                  hover:from-indigo-300 hover:to-pink-400 ">
                Build Now
              </a>
              <a href="https://philipbeauford.com" className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800">
                My Work
              </a>
          </div>
        </div>

        <div className="relative object-cover object-top w-full h-72 mx-auto lg:h-auto xl:mr-24 md:max-w-sm">
            <div style={stylesA}>
                <img 
                alt="Hero Image" 
                sizes="100vw" 
                src="./Saly_19.png" 
                decoding="async" 
                style={stylesB} />
            </div>
        </div>

      </div> 
  )
}
