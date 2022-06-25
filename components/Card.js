import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'

const Card = ({member}) => {
  const {name, about, birthday, image} = member

  const [flip, setFlip] = useState(false)

  const MainContainer = styled.div`
    position : relative;
    width : 250px;
    height : 320px;
    background : none;
    margin : 15px;

  `

  const CardContainer = styled.div`
    margin : 15px;
    position : relative;
    width: 100%;
    height: 100%;
    transform-style : preserve-3d;
    transition : all 0.5s ease;
    
    

    ${flip && "transform : rotateY(180deg);"}
      
    
  `

  const Front = styled.div`
    position : absolute;
    width: 100%;
    height: 100%;
    backface-visibility : hidden;
  `

  const Back = styled.div`
  position : absolute;
    width : 100%;
    height: 100%;
    backface-visibility : hidden;
    transition : all 0.5s ease;
    background-color: pink;
    transform : rotateY(180deg);
  
  `
  return (
  
      
    <MainContainer onClick = {()=>{
      setFlip(!flip)
      console.log(flip)
      }}>


    <CardContainer>
      <Front>
          <Image layout = "fill" style = {{width : "100%", height: "100%"}} src = {image}/>
      </Front>

      <Back>

      </Back>
    </CardContainer>

    </MainContainer>
        
    
  )
}

export default Card



