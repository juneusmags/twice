import logo from "../public/logo_white.png"
import Image from "next/Image"
import styled from 'styled-components'
import NavbarActiveLink from "./NavbarActiveLink"
import { useState } from "react"
import Link from "next/link"

import { useRouter } from "next/router"










const Navbar = () => {

  const router = useRouter()
  console.log(router)

  const isCurrentPath = router.pathname === "/"
  
  const [hamburger, setHamburger] = useState(false)

  const ToggleButton = styled.a`
    position: absolute;
    top : 2.5rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 40px;
    height: 40px;

    @media(max-width : 1050px){
        display: flex;
    }
`

  const Bar = styled.span`
    height: 5px;
    width: 100%;
    background-color: white;
    border-radius : 10px;
`

  const breakPoint = "1050px"

  const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:${isCurrentPath ? "transparent" : "#8399B3"};
    color: black;
    z-index : 1;

    @media(max-width : ${breakPoint}){
      flex-direction : column;
      align-items: ${hamburger ? "center" : "flex-start"};
      background-color: ${hamburger && "#8399B3"}

    }

  `


  const LogoBox = styled.div`
    width: 8rem;
    height: auto;
    margin: 0.5rem;
  `

  const LogoImg = styled.img`
    max-width : 100%;
  `

  const NavLinks = styled.div`
    background-color: white;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding-right: 40px;

    @media (max-width : ${breakPoint}){
      display: none;
      width: 100%;
      display : ${hamburger && "flex"}
    }
  `

  const NavLinksUl = styled.ul`
    text-decoration: none;
    margin: 0;
    padding: 0;
    display: flex;

    @media(max-width : ${breakPoint}){
      flex-direction: column;
      width: 100%;
      background-color: rgba(131, 153, 179, 0.7);
      position: absolute;
    }
  `

  const NavLinksLi = styled.li`
    list-style: none; 
    @media(max-width : ${breakPoint}){
      text-align: center;
    }
  `


  


  
  
  return (
    <>
    {/* NAVBAR START */}
    <NavBar>
        <LogoBox>
          <Link href = "/">

           <a><Image style = {{maxWidth : "100%;"}} src = {logo} alt = "Twice Logo"/></a> 
          </Link>
         </LogoBox>
         <ToggleButton href = "#" onClick = {()=> setHamburger(!hamburger)}> 
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
        </ToggleButton>
         <NavLinks>
            <NavLinksUl>
                <NavLinksLi><NavbarActiveLink href = "/">HOME</NavbarActiveLink></NavLinksLi>
                <NavLinksLi><NavbarActiveLink href = "/about">ABOUT</NavbarActiveLink></NavLinksLi>
                <NavLinksLi><NavbarActiveLink href = "/discovery">DISCOVERY</NavbarActiveLink></NavLinksLi>
                <NavLinksLi><NavbarActiveLink href = "/watch">WATCH</NavbarActiveLink></NavLinksLi>
                <NavLinksLi><NavbarActiveLink href ="/songs">SONGS</NavbarActiveLink></NavLinksLi>
                <NavLinksLi><NavbarActiveLink href = "/listen">LISTEN</NavbarActiveLink></NavLinksLi>
            </NavLinksUl>
         </NavLinks>
    </NavBar>
    </>
  )
}

export default Navbar