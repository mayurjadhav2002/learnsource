'use client'

import { NextUIProvider } from '@nextui-org/react'
import './globals.css'
import Nav from './(components)/Navbar/page'


import 'vuesax/dist/vuesax.css'
import Footer from './(components)/footer/footer'
import { UserSessionProvider } from './auth/userContext/userContext'

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body>
      <NextUIProvider>
      <UserSessionProvider>

      <Nav />

            {children}
       <Footer />
       </UserSessionProvider>

      </NextUIProvider>
      </body>
  
    </html>
  )
} 
