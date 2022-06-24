import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import LOGO from '../public/background.webp'


const Layout = ({children}) => {
    
    const WallpaperBackground = styled.div`
        background-image : url("../public/formula.png")
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
    `
  return (



    <>
    <div style = {{
        backgroundImage : `url(${LOGO})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh"}}> 
         <Navbar/>
        {children}
    </div>
       
    </>
  )
}

export default Layout