import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const MemberList = ({members}) => {

    const Container = styled.div`
        display: flex;
        justify-content : center;
        align-items: center
        width : 100%;
        height: 40%;
        background : green;
        flex-wrap : wrap;
    `
    
  return (
    <Container>
        {members.map((member)=>{
            return (
                <div>

                    <Card style = {{backgroundColor: "blue"}} member = {member} key = {member.id}/>
                </div>
            )
        })}

        
    </Container>
  )
}

export default MemberList