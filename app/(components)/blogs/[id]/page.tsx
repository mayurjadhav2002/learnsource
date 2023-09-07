'use client'
import { Image } from '@nextui-org/react'
import React, { Fragment } from 'react'
import './style.css'
export default function page({ params }: { params: { id: string } }) {
  const blog = {
    title: 'Hello world',
    user_image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000',
    created_by: 'mayur',
    user_bio: 'My anme is mayur',
    content: '<h1>Hellow World</h1>',
    views: 2,
    thumbnail: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'
  }
  return (
    <>
      <div className='mt-10 col-span-2 w-full border-r-0 lg:border-r-2 text-center'>


        <div className="flex  items-center flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">

          <div className="w-full mx-auto">

            <h1 className='lg:text-5xl text-4xl font-bold my-2'> {blog.title}</h1>
            <div className='flex justify-between my-5 items-center'>
              <div className="flex items-center space-x-1 lg:space-x-3">
                <Image
                  className="w-10 h-10 rounded-full object-cover"
                  src={`${blog.user_image}`}
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <div>{blog.created_by} <small className='text-gray-500'>| {blog.user_bio}</small></div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Posted  2 days ago
                  </div>
                </div>
              </div>
            </div>
            <figure>
              <Image

                src={blog.thumbnail}
                loading='lazy'
                alt='Image could not load Properly'
                className='w-full max-h-max py-1'

              />  <figcaption>Fig.1 - {blog.title}</figcaption>
            </figure>

            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
          <div className=' text-left lg:text-left'>

          </div>
          <hr className='mt-10 mb-3' />


          <div className="flex w-full items-center justify-between">

            <div className='flex items-center'>
              <div>


                <button className='hover:bg-gray-50 flex items-center px-5 py-2 rounded-md cursor-pointer'  >


                  <span className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="blue" d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z" /></svg>

                  </span>

                  <span className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg"

                      width="24" height="24" viewBox="0 0 24 24"><path fill="blue" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12H15z" /></svg>



                  </span>


                </button>


              </div>


            </div>

            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye mr-2" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
              <span className='text-sm text-gray-900'>{blog.views} Views</span>
            </div>


          </div>

        </div>





      </div>
    </>
  )
}
