import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'

const Card = ({name}) => {
  
const CardContainer = styled.div`
  background-color: pink;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  
`
  
  
  return (
    <CardContainer>
      <h1>{name}</h1>
    </CardContainer>
  )
}

export default Card



