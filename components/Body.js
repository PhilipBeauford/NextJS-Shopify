
export default function Body() {
    return (
        <div className="bg-purple-800">
            <div className="max-w-xl mx-auto mt-16 pt-12 pb-8 px-4 sm:mt-48 sm:pb-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="mb-6 font-sans text-4xl font-bold tracking-tight text-center lg:text-left text-white sm:text-5xl lg:pt-12 lg:w-1/2 lg:mb-0">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
                        I can build projects
                    </span>
                    <br/>
                    You will actually use.
                    
                </h3>
            </div>


            <div className="max-w-2xl mx-auto pb-8 px-4 sm:py-8 sm:px-6 lg:py-16 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 text-black">
                    <div className="w-full h-full p-8 rounded-3xl shadow-2xl bg-white">
                        <span className="text-4xl">
                            🚀
                        </span>

                        <h3 className="font-bold text-2xl">
                            I Can Build + Deploy your first&nbsp;
                            <span className="decoration-clone text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                                Headless Shopify Storefront
                            </span>
                            &nbsp;with Next.js & Tailwind in as little as a few days.
                        </h3>
                        <p className="text-gray-500 py-5">
                        Start building with me utilizing the latest technologies used by the top brands, designers, and developers today!
                        </p>
                        <div className="relative h-96 w-full">
                            <div style={{ display:"block", overflow:"hidden", position:"absolute", top:0, left:0, bottom:0, right:0, boxSizing:"border-box", margin:0 }} >


                                <img 
                                alt="Hero Image" 
                                sizes="100vw" 
                                src="./Screenshot-mine.png" 
                                decoding="async" 
                                style={{ position:"absolute", top:0, left:0, bottom:0, right:0, boxSizing:"border-box", padding:0, border:"none", margin:"auto", 
                                display:"block", width:0, height:0, minWidth:"100%", maxWidth:"100%", minHeight:"100%", maxHeight:"100%", objectFit:"contain" }}
                                />

                            </div>

                            
                        </div>
                    </div>



                    <div className="w-full h-full p-8 rounded-3xl shadow-2xl bg-white lg:relative lg:-top-16">
                    </div>

                    <div className="w-full h-full p-8 rounded-3xl shadow-2xl bg-white">
                    </div>

                    <div className="w-full h-full p-8 rounded-3xl shadow-2xl bg-white lg:relative lg:-top-16">
                    </div>

                </div>
            </div>

        </div>
    )
}



