import {useRouter} from "next/router"
import Link from "next/Link"

import styled from "styled-components"



const NavbarActiveLink = ({href, children}) => {

  const router = useRouter()

  const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
  }

  const isCurrentPath = router.pathname === href || router.asPath === href

  const NavLinksA = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding : 1rem;
  margin-right: 1.5rem;
  display: block;
  background-color: ${isCurrentPath ? "#DBDBDB" : "white"};
  font-size: 1.1rem;
  padding: 20px 40px;
  border-radius: 50px;
  &:hover{
    cursor: pointer;
    background-color: #DBDBDB
  }

  @media(max-width : 1050px){
    background-color: transparent;
    border : 1px 0px 1px 0 solid black;
    margin: 0;
    border-radius: 0;
    padding: 30px !important;
  }
`

    
  return (
        < Link href = {href} onClick = {handleClick}><NavLinksA>{children}</NavLinksA></Link>
  )
}

export default NavbarActiveLink