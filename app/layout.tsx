'use client'

import { NextUIProvider } from '@nextui-org/react'
import './globals.css'
import Nav from './(components)/Navbar/page'


import 'vuesax/dist/vuesax.css'
import Footer from './(components)/footer/footer'
import { UserContextProvider } from './auth/userContext/userContext'  // Import your UserSessionProvider
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


export default function RootLayout({

  children,
}: {
  children: React.ReactNode
})
 {
  useEffect(() => {
    AOS.init()
}, [])
  return (

    <html lang="en">
      <head>

        <title>Student Resources | QbyteSpace</title>
      </head>
      <body>
      <NextUIProvider>
      <UserContextProvider>

      <Nav />

            {children}
       <Footer />
       </UserContextProvider>

      </NextUIProvider>
      </body>
  
    </html>
  )
} 
