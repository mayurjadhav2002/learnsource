'use client'
import React, { useState } from 'react'
import Blog from './blog'
import PaginationUI from './pagination'
import Sidebar from './Sidebar'
import useSWR from 'swr'
import Loading from '@/app/loading'


const fetcher = (url: URL) => fetch(url, { method: 'get' }).then((res) => res.json());

function page() {
  const [pageIndex, setPageIndex] = useState(1);
  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/all-blogs?page=${pageIndex}`;

  const { data, error } = useSWR(apiUrl, fetcher, { revalidateOnFocus: false });
  if (error) return <div>Failed to load</div>
  if (!data) return <div className='text-center relative h-72'><Loading /></div>

  console.log(data)
  console.log(apiUrl)
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 w-5/6 mx-auto relative'>
        <div className='h-auto col-span-2 w-full border-r-0 lg:border-r-2 text-center'>
          <Blog data={data} />
          <PaginationUI pageIndex={pageIndex} setPageIndex={setPageIndex} />

        </div>

        <div>
          <Sidebar />
        </div>

      </div>
    </>
  )
}

export default page