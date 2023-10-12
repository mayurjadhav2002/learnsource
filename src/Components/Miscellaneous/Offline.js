import React from 'react'
function Offline() {
  return (
    <div className='w-4/5 select-none mx-auto my-16 justify-center text-center'>
    <h1 class=" text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Seems Like 
    You're <mark class="px-2 text-white bg-red-600 rounded dark:bg-blue-500">Offline</mark></h1>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    
    Please connect to the  <span class="text-blue-600 dark:text-blue-500">Internet</span> and Try again</h1>


    </div>
  )
}

export default Offline
