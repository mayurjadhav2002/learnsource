// import React from 'react'

// const Skeleton = (item) => {
//     return [...Array(item).keys()].map(() => (

        // <div className='h-40 bg-violet-50 w-full'>
        //     <div class="flex items-center align-bottom p-4 space-x-2">

        //         <div class="w-10 h-10 rounded-full bg-violet-200" src="/docs/images/people/profile-picture-5.jpg" alt=""></div>
        //         <div class="font-medium dark:text-white text-left">
        //             <div className='bg-violet-200 w-28 h-6'></div>
        //         </div>
        //     </div>
        // </div>


//     ))

  
// }

// export default Skeleton
import React from 'react'

const Skeleton = () => {
  return [...Array(20).keys()].map(() =>(
    <div className='w-full p-5 rounded-xl bg-gray-200 animate-pulse m-2 '>

    <div>
      <div className='flex justify-between'>
        <div className="flex items-center space-x-1">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="font-medium dark:text-white">
            <div><strong className="bg-gray-300 h-4 w-full mr-2"></strong> <span className='bg-gray-300 h-4 px-10'>
            </span></div>
          </div>
        </div>

      </div>
      <div className='lg:grid grid lg:grid-cols-6 gap-0 '>

        <div className='col-span-6  lg:col-span-6 xl:col-span-4 '>
        <div className='w-full p-4 my-2 bg-gray-300'></div>

        <div className='w-full p-1 rounded-md my-2 bg-gray-300'></div>
        <div className='w-full p-1 rounded-md my-2 bg-gray-300'></div>
        <div className='w-full p-1 rounded-md my-2 bg-gray-300'></div>


          <div className="flex mt-4 h-6 justify-between my-4">
          <div className='flex items-center justify-center align-middle'>
            <p className='py-2 lg:py-3 px-5 lg:px-10 mr-2 bg-purple-200 rounded-full '></p>
            <p className='py-2 lg:py-3 px-5 lg:px-10 mr-2 bg-purple-200 rounded-full '></p>

          </div>

          <div
            className='flex items-center justify-end align-middle gap-1'
          >
          <p className='lg:py-3 py-2 lg:px-10 px-7  mr-1 bg-gray-300 rounded-full '></p>
          <div className=" p-3 lg:p-4 rounded-full bg-gray-300 ">
              
            </div>

            <div className=" p-3 lg:p-4 rounded-full bg-gray-300 ">
              
            </div>

            <div className=" p-3 lg:p-4 rounded-full bg-gray-300 ">
              
            </div>

          </div>
        </div>
        </div>

        <div className='lg:hidden xl:block block  xl:w-full xl:ml-4 
         xl:h-44 bg-gray-300 lg:rounded-lg xl:rounded-lg xl:col-span-2 xl:justify-end md:w-3/5 
        md:rounded-lg mx-auto lg:mt-0 lg:items-center col-span-6 w-full justify-center' >
  
        </div>



      </div>
  

    </div>
  

  </div>
  ))
}

export default Skeleton
