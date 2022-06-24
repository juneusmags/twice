import React from 'react'
import Image from 'next/image'
import logo from '../public/formula.png'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'


const MiddleSection = () => {
    const MidSection = styled.section`
        height: 75vh;
        display: flex;
        justify-content : center;
        align-items: center;
    `

const BoxContainer = styled.div`
    background-color: rgba(201, 201, 201, 0.3);
    max-height : 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
`

const Purchase = styled.div`
    padding : 50px 0px;
    text-align: center;
    width: 100%;
`

const PurchaseButton = styled.button`
    max-width: 100%;
    padding: 25px 50px;
    background-color: #8399B3;
    border : none;
    border-radius : 5px;
    text-align: center;
    color: white;
    font-size : 1.3rem;
    &:hover {
        cursor : pointer;
    }
`

const Socials = styled.div`
    
`
  return (
    <MidSection>
    <BoxContainer>
        <div>
            <Image style = {{width : "100%", height : "auto", zIndex : "0"}} src = {logo} alt = "FORMULA OF LOVE LOGO"/>
        </div>
        <Purchase>
            <PurchaseButton>
                PURCHASE NOW
            </PurchaseButton>
            <Socials>
            <FontAwesomeIcon icon="fa-brands fa-instagram"/>
            </Socials>
        </Purchase>
    </BoxContainer>
    </MidSection>
  )
}

export default MiddleSection