"use client"
import React from 'react'
import SoftwareCards from '../(components)/softwares/SoftwareCards'
import useSWR from 'swr'
import Blog from '../(components)/blogs/blog';

const fetcher = (url) => fetch(url, { method: 'get' }).then((res) => res.json()).then((json) => json.data);

function Deals() {
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/software/recent`;
    const apiUrl2 = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/all-blogs?page=${1}`;

    const { data2, error2 } = useSWR(apiUrl2, fetcher, { revalidateOnFocus: false });
    
    const { data, error } = useSWR(apiUrl, fetcher, { revalidateOnFocus: false });
    if (error) return <div>Failed to load</div>
    const companies = [{
        name: "Iobit",
        url: './iobit.png'
    },

    {
        name: "easyus",
        url: './easyus.png'
    },
    {
        name: "wps",
        url: './wps.jpeg'
    },
    {
        name: "anymp",
        url: './anymp.jpg'
    },
    {
        name: "imyfone",
        url: './imyfone.png'
    },
    {
        name: "Donemax",
        url: './donemax.png'
    },
    {
        name: "imobi",
        url: './imobile.png'
    },
    {
        name: "imobi",
        url: './unknown.png'
    },
    {
        name: "tensorshare",
        url: './tensorshare.png'
    },

    ]

    return (
        <div className=' mx-auto border-t-2 pt-4 '>


            <h1 className=' text-center my-5 underline
           font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600

            '>Dont Waste Money, Get Deals for Free</h1>






            <div className='w-full lg:w-4/5 mx-auto p-1 lg:p-5 '>

                <div className='border-gray-400 min-h-56 mt-10 dark:bg-black  '>
                    <h1 className='text-primary text-5xl'>Recent Deals</h1>

                    <div className='grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>

                        {data ? <SoftwareCards data={data} />
                            : <>Loading...</>}
                    </div>
                </div>








                <div className='border-gray-400 min-h-56 mt-10 dark:bg-black  '>
                    <h1 className='text-primary text-5xl'>Internships</h1>

                    <div className='grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>

                        {data ? <Blog data={data} />
                            : <>Loading...</>}
                    </div>
                </div>








            </div>













            <div className="bg-white w-4/6 mx-auto p-5 rounded-lg">
                <h2 className="text-center font-semibold ">Softwares from</h2>

                <div class="text-center">
                    <div class="grid grid-cols-5 gap-8 mx-auto  lg:grid-cols-7">
                        {companies.map((e, index) =>
                            <div className='flex h-28 item-center justify-center align-middle hover:animate-appearance-in cursor-pointer'>
                                <img src={e.url} alt="" className='object-scale-down' />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}








export default Deals