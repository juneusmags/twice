import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic.js'




const CoverFlow = dynamic(()=>import("../components/CoverFlowComponent"),{ssr: false})



const AboutPage = () => {
  
    const AboutSection = styled.div`
        display: flex;
        justify-content: center;
        align-items : center;
        background-color : blue;
        width: 100%;
        height: 65vh;
        
    `

    

  return (
    <>
        <section className='about'>
            <AboutSection>
              <CoverFlow style = {{backgroundColor : "purple"}}/>
            </AboutSection>
        </section>
    
    </>
  )
}

export default AboutPage