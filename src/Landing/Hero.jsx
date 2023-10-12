
export default function Hero() {
    return (
        <section className="overflow-hidden">

            {/* Illustration behind hero content */}
            <div className="absolute  lg:right-0 left-0 lg:left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none z-0"
                aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>


            <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16 z-10">
                        <h1 class=" text-blue-900 text-4xl sm:text-5xl 
           xl:text-7xl dark:text-white leading-relaxed font-bold" data-aos="zoom-y-out">
                            Unlock a World of Free <br />
                            <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-500 dark:from-blue-400">
                                Software,
                            </span>
                            <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 dark:from-blue-400
           dark:to-orange-300"> Internships,</span>
                            <span className='text-gray-800'> &</span>
                            <span class="relative bg-clip-text bg-gradient-to-r text-purple-600 
           dark:text-purple-300"> Learning Resources. </span></h1>
                    </div>


                </div>

            </div>
        </section>
    )
}