import reyRomano from "./assets/reyes/rey_recesvinto.png";
import ComponentReyes from "./component/ComponenteReyes/ComponentReyes";
import atanagildo from "./assets/reyes/rey_atanagildo.png";
import sisebuto from "./assets/reyes/rey_sisebuto.png";
import leovigildo from "./assets/reyes/rey_leogivildo.png";
import { ComponentState } from "./component/Ejercicio_02_react/UseState/ComponentState";
import { ComponentLectura } from "./component/Ejercicio_02_react/probandoonChange/OnChange/ComponentLectura";


function App() {
  const nombre = 'oscar'


  return (
    <div className='bg-[#c1c1f5] h-[300px] '>

        <span className='text-[45px] font-semibold text-[#f0e1e1] '> Curso de React </span>  

        <div className='flex gap-[30px]  '>

        <span className="block mb-2 font-bold"> Nombre del Alumno:</span>
        <input type="text" value={nombre} className='rounded' readOnly />
        <label htmlFor="" className="block mb-2 font-bold">Dirección:</label>
        <input type='text' className='rounded' />
        <label htmlFor="" className="block mb-2 font-bold">Código postal</label>
        <input type="text"  className=" rounded"/>
        </div>
        <img src={reyRomano} alt="reyromano" className='w-[150px] h-[150px]' />
          <span className="font-semibold text-1xl">En el Ejercicio 1 del componente 1 y 2 aprendimos  a  crear componentes input y a pasar imagenes ya en el ejercicio 2 aprendimos a crear estados y pasamos de ser estaticos a dinamicos</span>        
        <div className=" flex gap-10 mt-[50px] bg-[#f3c1ea] justify-center">

            <ComponentReyes img={atanagildo} name={'Rey_atanagildo'} className={'bg-[orange] w-[300px] h-[400px] rounded-[8px] flex flex-col gap-8 items-center text-[32px] font-medium'}/>
            <ComponentReyes img={sisebuto} name={'Rey_sisebuto'} className={'bg-[orange] w-[300px] h-[400px] rounded-[8px] flex flex-col gap-8 items-center text-[32px] font-medium'}/>
            <ComponentReyes img={leovigildo} name={'Rey_leovigildo'} className={'bg-[orange] w-[300px] h-[400px] rounded-[8px] flex flex-col gap-8 items-center text-[32px] font-medium'}/>

        </div>

      <div className="mt-[10px] bg-[yellow]">

        <span className="text-[40px] font-medium"> 
       Ejercicio 02 practicando los estados.
        (USE REF:)

        </span>
         <ComponentState img={atanagildo} className={leovigildo} text={''} />

        <ComponentLectura/>
      </div>
        
      </div>
  )
}

export default App
