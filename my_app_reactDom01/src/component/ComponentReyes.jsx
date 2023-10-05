import React from 'react'


export const ComponentReyes = ({img,name,className}) => {

  return (

    <div className={className}>
        
        <img src={img} alt="" />
        <span>{name}</span>

    
    </div>

  )
}

export default ComponentReyes