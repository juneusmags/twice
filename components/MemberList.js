import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const MemberList = ({members}) => {

    const ContainerMain = styled.div`
        display: flex;
        justify-content : center;
        align-items: center
        width : 100vw;
        height: 60%;
        background-color: blue;
        flex-wrap : wrap;
        z-index : 1;
    `
    
  return (
    <ContainerMain>
        
        <h1>Hello</h1>
        
    </ContainerMain>
  )
}

export default MemberList