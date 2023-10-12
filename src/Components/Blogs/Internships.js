'use client';

import React, { useEffect, useState } from 'react'
import './internship.css'
import { Link } from 'react-router-dom'
import FAQ from './FAQ'
import useFetchData from '../../Hooks/useFetchData'
import moment from 'moment/moment';
import Skeleton from './Skeleton';
import { Pagination } from 'flowbite-react';
import axios from 'axios';

function Internships() {
  console.log(process.env.REACT_APP_BASE_BACKEND_URL)
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(30)
  const {
    data,
    loading, error, getData
  } = useFetchData(`?page=${1}`);
  const Total = async () => {
    try {
      const res = await axios(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/blog/total_blogs`);
      setTotal(Math.ceil(res.data.total / 10));
    } catch (error) {
    }
  }
  useEffect(() => {
    Total();
  }, [])
  return (
    <div>
      <div className="lg:grid lg:grid-cols-5 gap-3 py-4 lg:w-4/5 w-full mx-auto">
        {
          // Column 1 Blogs
        }
  

        {loading && <div className='lg:col-span-3'>
          <Skeleton />
        </div>}
        {!loading && (

          <div className="lg:col-span-3 lg:p-5 p-1 ">

            {data.map((data, index) => (

              <div className='w-11/12 p-5 rounded-xl  internship-blog my-2 mx-auto' key={index}>

                <Link to={'/blogs/' + data._id + '/' + data.title.split(" ").join("-")}>
                  <div className='flex justify-between'>
                    <div className="flex items-center space-x-1">
                      <img className="w-8 h-8 rounded-full object-cover" 
                      src={`${process.env.REACT_APP_BASE_BACKEND_URL}/static/avatar/${data.written_by.image}`}
                      alt="" />
                      <div className="font-medium dark:text-white">
                        <div><strong>{data.written_by.name}</strong> | <span className='text-xs text-gray-600'>
                          {moment.utc(data.created_on).local().startOf('seconds').fromNow()}
                        </span></div>
                      </div>
                    </div>

                  </div>
                  <div className='lg:grid grid lg:grid-cols-6 gap-0 '>

                    <div className='col-span-6  lg:col-span-6 xl:col-span-4 '>
                      <h4 className='headline-text break-words'>{data.title}</h4>
                      <div className='lg:h-8 h-0 overflow-clip text-ellipsis'>
                        <p className='text-[14px] lg:block hidden leading-4  line-clamp-3 text-gray-700 mt-[-4px] text-ellipsis'>
                          {data.description}
                        </p>

                      </div>
                      <div className="flex mt-4 h-6 justify-between my-4">
                        <div className='flex items-center justify-center align-middle'>
                          <p className='text-xs px-2 py-1 mr-2 bg-purple-200 rounded-full text-purple-800 font-semibold'>{data.tags[0].split(",")[0]}</p>
                          <p className='text-xs lg:block  px-2 py-1 mr-2 bg-purple-200 rounded-full text-purple-800 font-semibold'>{data.tags[0].split(",")[1]}</p>

                        </div>

                        <div
                          className='flex items-center justify-end align-middle gap-2'
                        >
                          <p className='text-sm font-extralight text-violet-600'>Share: </p>
                          <Link to="/linkedin" className="text-blue-700 hover:text-blue-800">
                            <span className="sr-only">Linkedin</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-4 h-4" viewBox="0 0 16 16">
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                          </Link>

                          <Link to="/twitter" className="text-cyan-400 hover:text-cyan-500">
                            <span className="sr-only">Twitter</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </Link>


                          <Link to={`whatsapp://send?text=${data.title} ${process.env.REACT_APP_BASE_URL + '/blogs/'+ data._id + '/' + data.title.split(" ").join("-")}`} className="text-green-500 hover:text-green-800">
                            <span className="sr-only">whatsapp</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 bi bi-whatsapp" viewBox="0 0 16 16">
                              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                          </Link>

                        </div>
                      </div>
                    </div>

                    <div className='lg:hidden xl:block block  xl:w-full xl:ml-4 
                   overflow-hidden xl:h-44 lg:rounded-lg xl:rounded-lg xl:col-span-2 xl:justify-end md:w-3/5 
                  md:rounded-lg mx-auto lg:mt-0 lg:items-center col-span-6 w-full px-1' >
                      <img
                        src={`${process.env.REACT_APP_BASE_BACKEND_URL}/static/Blogs/thumbnail/` + data.thumbnail}
                        loading='lazy'
                        alt='Image'
                        className=" lg:h-44 object-cover" />
                    </div>



                  </div>


                </Link>


              </div>

            ))}



     <Pagination className='w-full text-center mx-auto p-4'
          currentPage={currentPage}

          onPageChange={page => { getData(`?page=${page}`); setCurrentPage(page) }}
          showIcons

          totalPages={total}
        />



          </div>


        )}
   







        {
          // recommended articles
        }
        <div className="col-span-2 border-l-2 align-center justify-center ">
          <FAQ />
        </div>
      </div>


    </div>
  )
}

export default Internships
