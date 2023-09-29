import React from 'react'

function Hero() {
    return (
        <div class="bg-white relative pt-10 pb-20 lg:pt-10 dark:bg-gray-900">

            <div className='flex items-center justify-between w-11/12 mx-auto'>


                <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6 ">
                    <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
                        Unlock a World of Free
                        <br />
                        <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-500 dark:from-blue-400">
                            Software,
                        </span>
                        <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 dark:from-blue-400
                         dark:to-orange-300"> Internships,</span>
                        <span className='text-gray-800'> &</span>
                        <span class="relative bg-clip-text bg-gradient-to-r text-purple-600 
                         dark:text-purple-300"> Learning Resources. </span></h1>
                    <div class="relative">
                        <div class="relative mt-6 md:mt-6 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left 
                        lg:mr-auto lg:w-7/12">
                            <div>
                                <span>Subscribe the newsletter to Stay updated!</span>
                                <div class="flex items-center mt-4 w-full bg-red-100">
                                    <div class="relative w-full bg-slate-50">

                                        <input type="email" className="h-14 w-full pl-4 pr-24 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Your Email..." />
                                        <div class="absolute top-2 right-2">

                                            <button class="h-10 w-24 px-2 font-semibold text-white rounded-lg bg-blue-500 hover:bg-blue-600">Subscribe</button>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="dark:text-gray-300">
                                <div class="grid grid-cols-3 gap-auto space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                                    <a aria-label="add to slack" href="#" class="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                                        <div class="flex justify-center space-x-4">
                                            <img class="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png" alt="slack logo" loading="lazy" width="128" height="128" />
                                            <span class="hidden font-medium md:block dark:text-white">Slack</span>
                                        </div>
                                    </a>
                                    <a aria-label="add to chat" href="#" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                                        <div class="flex justify-center space-x-4">
                                            <img class="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png" alt="chat logo" loading="lazy" width="128" height="128" />
                                            <span class="hidden font-medium md:block dark:text-white">Google Chat</span>
                                        </div>
                                    </a>
                                    <a aria-label="add to zoom" href="#" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                                        <div class="flex justify-center space-x-4">
                                            <img class="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png" alt="chat logo" loading="lazy" width="128" height="128" />
                                            <span class="hidden font-medium md:block dark:text-white">Zoom</span>
                                        </div>
                                    </a>
                                </div>
                                <span class="block font-semibold text-gray-500 dark:text-gray-400 pt-4 mx-auto">Join our Other medium too...</span>

                            </div>


                        </div>

                    </div>
                </div>



                <div className='relative justify-center lg:w-3/5 w-3/6'>
                    <div
                        className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 
                        rounded-full rotate-45 bg-gradient-to-r from-sky-400 to-cyan-300 blur-3xl">

                    </div>
                    <img
                        src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                        class="relative object-contain w-full " alt="wath illustration" loading="lazy" />
                </div>
            </div>

        </div>

    )
}

export default Hero
