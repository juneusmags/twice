import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'

const Card = ({member}) => {
  const {name, image} = member
  
  
const CardContainer = styled.div`
  background-color: pink;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  
`
  
  
  return (
    <CardContainer>
     <Image src = {image} width = {"500px"} height = {"700px"}/>
      <h1>{name}</h1>
    </CardContainer>
  )
}

export default Card



