'use client'
import { useEffect, useState } from 'react'

import { NextUIProvider } from '@nextui-org/react'
import './globals.css'
import Nav from './(components)/Navbar/page'


import 'vuesax/dist/vuesax.css'
import Footer from './(components)/footer/footer'
import Preloader from './(components)/(more)/Loaders/Preloader'


export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  return (

    <html lang="en">
      <head>

        <title>Student Resources | LearnSource</title>
      </head>
      <body>
          {loading ? (
        <NextUIProvider>

              <Nav />

              {children}
              <Footer />
        </NextUIProvider>
          ) :
            (
              <Preloader />
            )
          }
      </body>

    </html>
  )
} 
