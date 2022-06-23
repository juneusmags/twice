 
import logo from "../public/logo_white.png"
import Image from "next/Image"
import Link from "next/Link"
import styles from "../styles/home.module.css"

import NavbarActiveLink from "./NavbarActiveLink"

let toggleSwitch = false
const toggleButtonFunction = () =>{
    toggleSwitch = !toggleSwitch
    console.log(toggleSwitch)
    console.log(styles)
}




const Navbar = () => {
  return (
    <>
    {/* NAVBAR START */}
    <nav className={styles.navbar} style = {{alignItems : toggleSwitch ? "center" : "", backgroundColor : toggleSwitch ? "#8399B3" : ""}}>
        <div className = {styles.logo}>
            <Image src = {logo} alt = "Twice Logo"/>
         </div>
         <a href = "#" className = {styles.toggleButton} onClick = {toggleButtonFunction}>
            <span className = {styles.bar}></span>
            <span className = {styles.bar}></span>
            <span className = {styles.bar}></span>
         </a>
         <div className = {styles.navLinks}>
            <ul>
                <li><a className = "nav-btn" href = "/">HOME</a></li>
                <li><a className = "nav-btn" href = "about.html">ABOUT</a></li>
                <li><a className = "nav-btn" href = "">DISCOVERY</a></li>
                <li><a className = "nav-btn" href ="">SONGS</a></li>
                <li><a className = "nav-btn" href = "">LISTEN</a></li>
            </ul>
         </div>
    </nav>
    </>
  )
}

export default Navbar