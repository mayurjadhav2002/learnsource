'use client'
import React from 'react'
import PaginationUI from '../blogs/pagination'
import Sidebar from '../blogs/Sidebar'
import Link from 'next/link'
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

function page() {

  return (
    <>
      <div className='grid grid-cols-3 w-5/6 mx-auto relative'>
        <div className='h-auto col-span-2 w-full border-r-0 lg:border-r-2 text-center'>

          <div className='grid my-10 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>

            <Card className='cursor-pointer hover:scale-105'>
              <CardBody>

                <Image
                  alt="Card background"
                  className="object-cover h-48 mx-auto"
                  src='https://img-c.udemycdn.com/course/240x135/5049556_f105_3.jpg'


                />
                <p className="font-bold text-large text-center">
                  <span className='text-green-600 m-1'>$0</span>
                  <span className='text-red-600 line-through  m-1'>$100</span>


                </p>

                <h4 className="font-bold text-large text-center pb-2">Frontend Radio</h4>

                <div className='w-full'>
                  <div className="px-5 flex justify-between bg-slate-50">

                    <div className='flex justify-start'>
                      {/*Likes*/}
                      <div
                        className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                          className="flex-shrink-0 w-4 h-4 text-green-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          viewBox="0 0 16 16">
                          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                        </svg>
                        <span className="flex-1 ml-1 text-sm  text-green-500 whitespace-nowrap">posted today</span>
                      </div>

                      {/*Views*/}

                    </div>

                    <div
                    >
                      <p className="text-tiny uppercase font-bold">Daily Mix</p>
                      <small className="text-default-500">12 Tracks</small>

                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>





          </div>
          <PaginationUI />


        </div>

        <div>
          <Sidebar />
        </div>

      </div>
    </>
  )
}

export default page