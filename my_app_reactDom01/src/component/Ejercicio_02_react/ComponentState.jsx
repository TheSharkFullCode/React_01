import React, { useRef, useState } from 'react'



export const ComponentState = ({img,className}) => {
    const [imgs,setImgs]= useState(img)

    const cambio = 23.16;

    const [value,setValue]= useState(0);
    const refCaja = useRef();

    const Aumentar=(e)=>{

        setValue(prev => prev + 1);
        e.target.style.backgroundColor = 'green';//este parte de codigo no esta funcional, no cambia de color soloo es para ver que existe su utilidad.
    }

    const Convertir=()=>{
   const resultado =  parseFloat( refCaja.current.innerHTML ) * cambio;
   refCaja.current.textContent = resultado;
    }

    const cambiarImg=()=>{
        if(imgs === img){
            setImgs(className)
        }else{

            setImgs(img)
        }

    }

  return (
    <div className=''>
        <div className='flex'>

        <span className='text-6xl' style={{backgroundColor:'green'}}  ref={refCaja} >{value}</span>

        <button className='border-[2px] border-[orange] px-3 py-1 rounded-[4px] bg-[#8fdcf3]' onClick={Aumentar}> Aumentar</button>
        <button  className='border-[2px] border-[orange] px-3 py-1 rounded-[4px] bg-[#8fdcf3]' onClick={Convertir}>Convertir</button>
        <button className='border-[2px] border-[orange] px-3 py-1 rounded-[4px] bg-[#8fdcf3] ' onClick={cambiarImg}>Cambiar imagen </button>
        <input type="text" className='ml-[15px] px-[4px] py-[4px] rounded-[3px] border-[#a444a7] border-[2px]' value={(parseFloat(refCaja.current?.textContent*cambio)) } readOnly/>
        </div>
        <div>

            <img src={imgs} alt="" className='w-[400px]' onClick={cambiarImg}  />
        </div>

        
    </div>
  )
}
