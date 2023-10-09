import React from 'react'
import useSWR from 'swr'
import Blog from '../(components)/blogs/blog';

const fetcher = (url) => fetch(url, { method: 'get' }).then((res) => res.json()).then((json) => json.data);

const Blogs = () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/get-all-blogs?page=${1}`;
  const { data, error } = useSWR(apiUrl, fetcher, { revalidateOnFocus: false });
  if (error) return <div>Failed to load</div>
console.log(data)
  return (
    <div className='bg-blue-100 p-5 border-2 rounded-lg hover:shadow-2xl hover:scale-105 hover:ease-in-out duration-700'>
      <div  className='border-gray-400 min-h-56 dark:bg-black  '>
        <h1 className='text-5xl font-sans'>Curated Career Opportunities for you </h1>

        <div className='grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>

          {data ? <Blog data={data} />
            : <>Loading...</>}
        </div>
      </div>
    </div>
  )
}

export default Blogs
