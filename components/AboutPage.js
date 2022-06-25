import React from 'react'
import styled from 'styled-components'
import Card from './Card.js'
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
                    const {name, image, birthday, about} = member
                    return (
                        <Card name = {name} birthday = {birthday} img = {image} bio = {about}/>
                    )
                })}
           </AboutSection> 
           
        </section>
    
    </>
  )
}

export default AboutPage