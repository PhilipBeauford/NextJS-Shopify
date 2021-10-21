
export default function Midsection() {
    return (
        <div className="bg-white my-16 sm:mt-0">
            <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-5">
                    Lets talk about 
                    <span className="decoration-clone text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        &nbsp;Building
                    </span>
                </h2>
                <p className="max-w-2xl text-center text-xl text-gray-500 lg:mx-auto pb-12">
                    There are many ways to build, but some are better than others.
                </p>
                
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    <div className="w-full h-full p-8 rounded-3xl shadow-2xl text-white bg-gradient-to-br from-yellow-300  to-pink-500">
                        <div className="relative h-48 w-full my-24">
                            <div style={{ display:"block", overflow:"hidden", position:"absolute", top:0, left:0, bottom:0, right:0, boxSizing:"border-box", margin:0 }} >
                                <img alt="Home Image" sizes="100vw" src= "./Saly-25.png" decoding="async" class="w-full" style={{ position:"absolute", top:0, left:0, bottom:0, right:0, 
                                    boxSizing:"border-box", padding:0, border:"none", margin:"auto", display:"block", width:0, height:0, minWidth:"100%", maxWidth:"100%", minHeight:"100%", 
                                    maxHeight:"100%", objectFit:"contain" }} />
                            </div>
                        </div>
                        
                        <h3 className="font-bold text-3xl">
                                Self-Paced Build
                        </h3>
                        <p className="py-5">
                            You have a busy life, I undestand that and believe in building asynchronous. Easily access the current project preview at anytime.
                        </p>
                    </div>

                    <div className="w-full h-full p-8 rounded-3xl shadow-2xl text-white bg-gradient-to-br from-pink-400 to-blue-400">
                        <div className="relative h-48 w-full my-24">
                            <div style={{ display:"block", overflow:"hidden", position:"absolute", top:0, left:0, bottom:0, right:0, boxSizing:"border-box", margin:0 }} >
                                    <img alt="Home Image" sizes="100vw" src= "./Saly-20.png" decoding="async" class="w-full" style={{ position:"absolute", top:0, left:0, bottom:0, right:0, 
                                        boxSizing:"border-box", padding:0, border:"none", margin:"auto", display:"block", width:0, height:0, minWidth:"100%", maxWidth:"100%", minHeight:"100%", 
                                        maxHeight:"100%", objectFit:"contain" }} />
                            </div>
                            
                        </div>
                        <h3 className="font-bold text-3xl -mt-3">
                                Jam-Packed with Modern Tech
                        </h3>
                        <p className="py-5">
                                Next.js, GraphQL, Shopify Storefront API, Tailwind CSS, Vercel, React Hooks and more!
                        </p>
                    </div>

                    <div className="w-full h-full p-8 rounded-3xl shadow-2xl text-white bg-gradient-to-br from-green-400 to-blue-400">
                        <div className="relative h-48 w-full my-24">
                            <div style={{ display:"block", overflow:"hidden", position:"absolute", top:0, left:0, bottom:0, right:0, boxSizing:"border-box", margin:0 }} >
                                    <img alt="Home Image" sizes="100vw" src= "./Rocket.png" decoding="async" class="w-full" style={{ position:"absolute", top:0, left:0, bottom:0, right:0, 
                                        boxSizing:"border-box", padding:0, border:"none", margin:"auto", display:"block", width:0, height:0, minWidth:"100%", maxWidth:"100%", minHeight:"100%", 
                                        maxHeight:"100%", objectFit:"contain" }} />
                            </div>
                            
                        </div>
                        <h3 className="font-bold text-3xl -mt-3">
                                Action Based
                        </h3>
                        <p className="py-5">
                                I can get your project started in as little time as possible. There are no Uhhs or Hmms. All straight to the point.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
