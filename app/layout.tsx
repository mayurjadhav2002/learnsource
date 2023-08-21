'use client'

import { NextUIProvider } from '@nextui-org/react'
import './globals.css'
import Nav from './(components)/Navbar/page'


import 'vuesax/dist/vuesax.css'
import Footer from './(components)/footer/footer'

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body>
      <NextUIProvider>
      <Nav />

            {children}
       <Footer />
      </NextUIProvider>
      </body>
  
    </html>
  )
}
