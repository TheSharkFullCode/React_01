import React, { useState } from 'react'


export const ComponentContador = () => {

        const [value,setValue]= useState(null)
        const [number1,setNumber1]=useState()
        const [number2,setNumber2]=useState()
        const [result,setResult]=useState()

            const sumar=()=>{
                setValue(value + 1)
            }
            const dismunuir=()=>{
                setValue(prev => prev -1)
            }
            const Borrar=()=>{
                setValue(0)
            }

            const Operation=()=>{
                setResult(parseInt(number1)+parseInt(number2))
            }

            const Modificar=(e)=>{
                setNumber1(e.target.value)
            }
            const Modificar2=(e)=>{
                setNumber2(e.target.value)
            }

  return (
    <div className='flex gap-10'>
        <button onClick={sumar} className='px-3 py-2 border-[1px] rounded-[9px] bg-[#6ed86e]'>add</button>
            <input readOnly value={value} className='w-[50px] rounded-[3px]  text-center'/>
        <button onClick={dismunuir} className='px-3 py-2 border-[1px] rounded-[9px] bg-[#e340ca]'>less</button>
        <button onClick={Borrar} className='px-3 py-2 border-[1px] rounded-[9px] bg-[#4483c7]'>Reset</button>

        <div>

             <input type="text" className='w-[50px] h-[50px] text-center text-2xl  'onChange={Modificar} value={number1}/>+
             <input type="text" className='w-[50px] h-[50px] text-center text-2xl  'onChange={Modificar2} value={number2}/>=
             <input type="text" className='w-[50px] h-[50px] text-center text-2xl 'readOnly value={result}/>^^
        <button onClick={Operation} className='px-3 py-2 border-[1px] rounded-[9px] bg-[#7f2132]'>Sumar</button>
        </div>
    </div>
  )
}
