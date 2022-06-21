import {useRouter} from "next/router"
import Link from "next/Link"

const NavbarActiveLink = ({href, children, spacing}) => {

    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    const isCurrentPath = router.pathname === href || router.asPath === href
  return (
        < Link href = {href} onClick = {handleClick}><a style = {{marginLeft : `${spacing}rem`, color : "black", textDecoration : 'none', padding : "20px", fontwWeight : isCurrentPath? 'bold' : 'normal', backgroundColor : isCurrentPath ? "grey" : "#DBDBDB"}}>{children}</a></Link>
  )
}

export default NavbarActiveLink