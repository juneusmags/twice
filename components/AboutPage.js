import React from 'react'
import styled from 'styled-components'
import Card from './Card.js'
import data from "../data_bio.js"
import MemberList from './MemberList.js'
import { useState } from 'react'

const AboutPage = () => {
    const [members, setMembers] = useState(data)

    const AboutSection = styled.div`
        display: flex;
        justify-content: center;
        align-items : center;
        background-color: rgba(135, 135, 135, 0.7);
        width : 100%;
        height: 100vh;
        color : black;
        display : flex;
    `
  return (
    <>
        <section className='about'>
             <AboutSection>
                <MemberList members = {members}/>
           </AboutSection> 
           
        </section>
    
    </>
  )
}

export default AboutPage