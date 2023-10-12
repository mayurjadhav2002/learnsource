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

const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div className='h-72 relative object-contain overflow-hidden animate-pulse duration-300 shadow-xl
     bg-white w-full rounded-xl'>
      <div className='w-2/4 h-2/4 my-8 bg-gray-100 mx-auto'></div>
      <div className='w-4/5 mx-auto bg-gray-100 h-8'></div>
      <div className='w-full mt-4 bottom-0 mx-auto bg-gray-100 h-8'></div>

    </div>
  ))
}

export default Skeleton
