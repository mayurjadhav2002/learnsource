"use client"
import React, { useState } from 'react'
import {Pagination} from "@nextui-org/react";

function PaginationUI({setPageIndex}) {
  
  return (
  <>
  <div className='flex justify-center'>
    <Pagination total={23} initialPage={cu} 
    onChange={e=>setPageIndex(e)}
    />



  </div>
</>
  )
}

export default PaginationUI