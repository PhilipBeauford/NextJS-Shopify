
export default function Ready() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-indigo-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                <span className="block">
                                    Ready to build
                                </span>
                                <span>
                                    the modern experience?
                                </span>

                            </h2>
                            <p className="mt-4 text-lg leading-6 text-indigo-200">
                                I have all the skills needed to help you stand out and build epic stores.
                            </p>
                            
                            <a href="https://www.philipbeauford.com" className="mt-4 bg-white border border-transparent rounded-md 
                                shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-800 hover:bg-indigo-50">
                                Build Now
                            </a>
                        </div>
                    </div>

                    <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        <div style={{ display:"block", overflow:"hidden", position:"absolute", top:0, left:0, bottom:0, right:0, boxSizing:"border-box", margin:0 }} >
                            <img 
                            alt="App Screenshot" 
                            sizes="100vw" 
                            src="./screenshot.png" 
                            decoding="async" 
                            class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" 
                            style={{ position:"absolute", top:0, left:0, bottom:0, right:0, boxSizing:"border-box", padding:0, border:"none", margin:"auto", 
                            display:"block", width:0, height:0, minWidth:"100%", maxWidth:"100%", minHeight:"100%", maxHeight:"100%", objectFit:"contain" }} />

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
