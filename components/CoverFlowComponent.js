import React from 'react'
import Coverflow from 'react-coverflow';
import Card from './Card';
import data from '../data_bio';
import { useState } from 'react';

const CoverFlowComponent = () => {

    const [members, setMembers] = useState(data)
    
  return (
    <Coverflow
              width={960}
              height={480}
              displayQuantityOfSide={2}
              navigation={false}
              enableHeading={false}
            >
              <div
                
                role="menuitem"
                tabIndex="0"
              >
                <Card member = {members}/>
              </div>
                {members.map((member)=>{
                    return (
                        <Card name = {member.name}/>
                    )
                })}
              
  </Coverflow>
  )
}

export default CoverFlowComponent