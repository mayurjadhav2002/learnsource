import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SkeletonUdemy from './SkeletonUdemy';
import useSWR from 'swr/immutable'

const fetcher = (url) => fetch(url).then((res) => res.json());

function Udemy() {
  const { data, error } = useSWR("https://flask-udemy-coupon-code.mayurjadhav.repl.co/", fetcher, { revalidateOnFocus: false }    )
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div className='text-center relative h-72'> <SkeletonUdemy/> </div>
  return (
    <div >
      <div className='w-4/5 mx-auto '>
        <h1 className="my-4 text-4xl font-extrabold lg:text-start text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span className="text-red-600 dark:text-red-500">Udemy</span> Free Courses.</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Click on the Courses below, the coupon codes will be applied automatically (they are passed as a variables in url)
        </p>



        {data.length > 0 && (


          <div className="grid lg:grid-cols-4 py-4 grid-cols-1  gap-6">

            {data.map((udemydata, index) => (
              <Link key={index} to={udemydata.link} target='blank' id={udemydata.id} className="max-w-sm mx-auto shadow-lg hover:scale-105 ease-in-out duration-200 bg-white border border-gray-100 rounded-lg 
               dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-none w-full rounded-t-lg" src={udemydata.img} alt="" />
                <div className="px-5">


                  <h5 className="text-xl text-center leading-6 font-bold tracking-tight text-gray-900 dark:text-white">{udemydata.title}</h5>

                  <p className="mb-3 text-center leading-4 text-sm font-normal text-gray-700 dark:text-gray-400">
                    {udemydata.description}
                  </p>

                </div>
              </Link>
            ))}


          </div>
        )}
      </div>

    </div>
  )
}

export default Udemy
