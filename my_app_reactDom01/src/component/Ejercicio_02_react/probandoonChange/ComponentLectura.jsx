import React, { useRef, useState } from 'react'



export const ComponentLectura = () => {
    const [valueCurrent,setCurrentvalue]= useState();

        const refCaja = useRef();

        const lectura=(e)=>{
         refCaja.current.textContent = e.target.value
        }

  return (

    <div className='flex gap-10'>
        
        <label htmlFor="">Escribe dentro de la caja de  texto</label>

            <input type="text" name="" id="" onChange={lectura} />

            <span ref={refCaja} > {valueCurrent}</span>
    </div>
  )
}
