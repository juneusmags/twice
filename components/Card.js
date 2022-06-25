import React from 'react'
import Image from 'next/image'
const Card = ({...props}) => {
    const {name, birthday, img, bio} = props
  return (
    <>
    <div style = {{maxHeight : "500px"}}>
        <Image width = "100%" height = "100%" src = {img} alt = {name}/>
    </div>
        
        <h1>{name}</h1>
        <p>{bio}</p>
    </>
  )
}

export default Card



