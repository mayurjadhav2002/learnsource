import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function AItools() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-6 w-4/5 mx-auto gap-4">
        <div className=" none lg:block hidden col-span-1 sticky top-10 text-left bg-slate-50 rounded-lg my-10 px-4">
          <h2 className="text-xl font-medium mt-24 dark:text-white">Tools That Makes the Life Easy</h2>

          <ul className="sticky top-8 ">

            <li>
              <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm cursor-pointer text-slate-700 rounded-md hover:bg-purple-50 dark:bg-gray-900 dark:text-white">
                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
                Audio
              </Link>
            </li>

            <li>
              <Link to="/" className="flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-purple-50 dark:bg-gray-900 dark:text-white">

                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
                Video
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-purple-50 dark:bg-gray-900 dark:text-white">

                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-purple-50 dark:bg-gray-900 dark:text-white">

                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-purple-50 dark:bg-gray-900 dark:text-white">

                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-purple-50 dark:bg-gray-900 dark:text-white">

                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
                Dashboard
              </Link>
            </li>


          </ul>
        </div>

        <div className="col-span-1 lg:col-span-5 my-10">
          <div id="scrollspy-2" className="space-y-4">
            <div id="item-1">
              <h2 className="font-semibold text-violet-700">Audio</h2>
              <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className="col-2 w-full h-72 max-h-72 overflow-hidden ai-tools-card rounded-xl">
                  <Link to="/">
                    <div className='max-h-44 h-44 overflow-hidden ai-tools-card-inside rounded-xl m-2'>
                      <img src="https://framerusercontent.com/images/ogkLKmn0ssfDpt3igfVl9IpQZa4.png" className='object-fill rounded-xl p-3' alt="" />
                    </div>
                    <div className='px-5'>
                      <h6 className='mt-3 font-bold dark:text-gray-600' >Namelink</h6>
                      <p className='text-xs mt-1 dark:text-gray-600'>
                        An AI business name generator to brainstorm and brand your next startup.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>





<hr/>       <div id="item-3">
           
<h2 className="font-semibold text-violet-900">Image Generator</h2>
              <div className='grid grid-cols-4'>
                <div className="col-2 w-full h-72 max-h-72 overflow-hidden ai-tools-card rounded-xl">
                  <Link to="/">
                    <div className='max-h-44 h-44 overflow-hidden ai-tools-card-inside rounded-xl m-2'>
                      <img src="https://framerusercontent.com/images/ogkLKmn0ssfDpt3igfVl9IpQZa4.png" className='object-fill rounded-xl p-3' alt="" />
                    </div>
                    <div className='px-5'>
                      <h6 className='mt-3 font-bold dark:text-gray-600' >Namelink</h6>
                      <p className='text-xs mt-1 dark:text-gray-600'>
                        An AI business name generator to brainstorm and brand your next startup.
                      </p>
                    </div>
                  </Link>
                </div>
         </div>
            
            </div>




<hr/>


            <div id="item-2">
                        
<h2 className="font-semibold text-violet-900">Video</h2>
<div className='grid grid-cols-4'>
  <div className="col-2 w-full h-72 max-h-72 overflow-hidden ai-tools-card rounded-xl">
    <Link to="/">
      <div className='max-h-44 h-44 overflow-hidden ai-tools-card-inside rounded-xl m-2'>
        <img src="https://framerusercontent.com/images/ogkLKmn0ssfDpt3igfVl9IpQZa4.png" className='object-fill rounded-xl p-3' alt="" />
      </div>
      <div className='px-5'>
        <h6 className='mt-3 font-bold dark:text-gray-600' >Namelink</h6>
        <p className='text-xs mt-1 dark:text-gray-600'>
          An AI business name generator to brainstorm and brand your next startup.
        </p>
      </div>
    </Link>
  </div>
</div>   </div>

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default AItools
