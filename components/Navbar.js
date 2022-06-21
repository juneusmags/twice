import styled from "styled-components"
import logo from "../public/logo.png"
import Image from "next/Image"
import Link from "next/Link"

import NavbarActiveLink from "./NavbarActiveLink"

const Nav = styled.nav`
    background-color : traansparent;
    display: flex;
    justify-content : space-between;
    align-items : center
`
const StyledLinks = styled.ul`
    display: flex;
    align-items: center;    
    list-style-type : none;
`

const StyledLink = styled.a`
    margin-left: 30px;
    cursor : pointer;
`

const LinkPill = styled.div`
    background-color: #DBDBDB;
    padding: 0px;
    
`



const Navbar = () => {
  return (
    <>
        <Nav>
            <div>
                <Link href ="/">
                    <a>
                        <Image 
                            src = {logo}
                            alt="Twice Logo"
                            width={100}
                            height={100}
                        />
                    </a>
                </Link>
                
            </div>
            <LinkPill>
                <StyledLinks>
                    <NavbarActiveLink spacing = {0} href = "/">
                        Home   
                    </NavbarActiveLink> 
                    <NavbarActiveLink spacing= {2} href = "/about">
                        About
                    </NavbarActiveLink>
                    <NavbarActiveLink spacing = {2} href = "/discovery">
                        Discovery
                    </NavbarActiveLink>
                    <NavbarActiveLink spacing = {2} href = "/songs">
                        Songs
                    </NavbarActiveLink>
                    <NavbarActiveLink spacing = {2} href = "/listen">
                        Listen
                    </NavbarActiveLink>
                    
                </StyledLinks>
            </LinkPill>
        </Nav>
    </>
  )
}

export default Navbar