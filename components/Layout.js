import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { useRouter } from 'next/router'



const Layout = ({children}) => {
  const router = useRouter()

  const isHome = router.pathname === "/"
  return (



    <>
    <div className = {isHome && "home"}> 
         <Navbar/>
        {children}
    </div>
       
    </>
  )
}

export default Layout