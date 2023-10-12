import React from 'react'
import ErrorImg from '../../Assets/SVG/error.svg'
import './Errors.css'
function Errors() {
  return (
    <div className='lg:w-3/4 w-full mx-auto p-2  lg:p-10 justify-center items-center'>
      <img src={ErrorImg} alt="" className='mx-auto'/>
      <div className='w-4/5  mx-auto lg:my-10 my-5 font-mono lg:p-10 py-2 px-1 page-error text-gray-400'>
            
      <h1 className='text-center lg:text-3xl p-none text-sm '>Hey you! I've Stole this Page. </h1>
      <h2 className='text-end lg:text-2xl  text-sm'>~ Arnim Zola</h2>
      </div>

    </div>
  )
}

export default Errors
