import React from 'react'
import styled from 'styled-components'
import wallpaper from "../public/other.jpg"
import data from "../data_bio.js"

const AboutPage = () => {
    const AboutSection = styled.div`
        background-color: rgba(135, 135, 135, 0.7);
        width : 100%;
        height: 100vh;
        color : black;
    `
  return (
    <>
        <section className='about'>
             <AboutSection>
                {data.map((member)=>{
                    const [name, image, about, birthday] = member
                    return (
                        <div>
                            <Image src = {image} alt = {name}/>
                            <h3>{name}</h3>
                        </div>
                    )
                })}
           </AboutSection> 
           
        </section>
    
    </>
  )
}

export default AboutPage