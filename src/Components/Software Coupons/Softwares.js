'use client';

import React, { useState } from 'react';

import Skeleton from './Skeleton/Skeleton';
import Axios from '../../Hooks/Axios';

import { Link } from 'react-router-dom';
import "./softwares.css";
import { Pagination } from 'flowbite-react';


function Softwares() {

  const { data, loading, total, getData } = Axios(`?page=${1}`);
  const [currentPage, setCurrentPage] = useState(1);
  var total_data = 12;
  if (total) {
    total_data = Math.ceil(total / 20)
  }
  return (

    <div className='bg-slate-100'>
      <div className="grid grid-cols-1 lg:grid-cols-6 w-11/12 mx-auto gap-4">
        <div className=" bg-white none lg:block hidden col-span-1 h-screen sticky top-0  text-left  rounded-lg my-10 px-4">
          <h2 className="text-xl font-medium mt-24 dark:text-white">Tools That Makes the Life Easy</h2>
          <p className="text-sm text-gray-700 mb-6">
          Our motto, "Unlock Your Potential," reflects our belief in the transformative power of education and technology. We strive to ensure that every individual can reach their full potential and excel in their chosen fields by providing them with the essential resources they need.
        </p>
        <p className="text-sm text-gray-700 mb-6">
        We recognize the financial constraints that many learners and professionals face. Premium software can be expensive, and this cost often becomes a significant obstacle. Our platform helps you overcome this challenge by providing free access to these tools, enabling you to develop your skills, complete your projects, and advance your career without the burden of financial limitations.
        </p>
        </div>

        <div className="col-span-1 lg:col-span-5 my-10 overflow-hidden">
          <div>


            <div className="w-full sm:mr-80 ">

              <div className="grid gap-4
           grid-cols-1 md:grid-cols-2 mx-auto mb-4 lg:grid-cols-4">

                {loading ? <Skeleton item={20} /> : data.map((data, key) =>

                  <Link key={key} to={'view/' + data._id + '/' + data.title.split(" ").join("-")}
                    className="max-w-sm mt-5 bg-white card-software 
                    
                    border border-gray-100 rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700">

                    <img className="w-2/4 py-2 object-fill rounded-2xl  text-center mx-auto " src={data.image} alt="" />



                    <div className="px-5 relative">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {data.title}
                      </h5>
                      <h6 className='mb-5 extrabold text-green-700'>{data.price} | <del className='text-red-700'>{data.price_before}</del> </h6>



                    </div>

                    <div className="px-5 py-1 bottom-0  z-40 flex justify-between bg-slate-50">

                      <div className='flex justify-start'>
                        {/*Likes*/}
                        <div
                          className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            className="flex-shrink-0 w-4 h-4 text-green-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            viewBox="0 0 16 16">
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                          </svg>
                          <span className="flex-1 ml-1 text-sm  text-green-500 whitespace-nowrap">posted {data.posted_on}</span>
                        </div>

                        {/*Views*/}

                      </div>

                      <div
                      >
                        <p className='text-xs text-end text-gray-600'>{data.category}</p>

                        <p className='text-end text-xs font-semibold'>{data.brand}</p>

                      </div>
                    </div>


                  </Link>
                )}

              </div>
            </div>
          </div>
          <Pagination className='w-full text-center mx-auto p-4'
            currentPage={currentPage}

            onPageChange={page => { setCurrentPage(page); getData(`?page=${currentPage}`); console.log(currentPage) }}
            showIcons

            totalPages={total_data}
          />
        </div>
      </div>
    </div>
  )
}

export default Softwares
