import reyRomano from "./assets/reyes/rey_recesvinto.png";
import ComponentReyes from "./component/ComponentReyes";
import atanagildo from "./assets/reyes/rey_atanagildo.png";
import sisebuto from "./assets/reyes/rey_sisebuto.png";
import leovigildo from "./assets/reyes/rey_leogivildo.png";


function App() {
  const nombre = 'oscar'


  return (
    <div className='bg-[#c1c1f5] h-[300px] '>

        <span className='text-[45px] font-semibold text-[#f0e1e1] '> Curso de React </span>  

        <div className='flex gap-[30px]  '>

        <span className="block mb-2 font-bold"> Nombre del Alumno:</span>
        <input type="text" value={nombre} className='rounded' />
        <label htmlFor="" className="block mb-2 font-bold">Dirección:</label>
        <input type='text' className='rounded'/>
        <label htmlFor="" className="block mb-2 font-bold">Código postal</label>
        <input type="text"  className=" rounded"/>
        </div>
        <img src={reyRomano} alt="reyromano" className='w-[150px] h-[150px]' />
        {/* <img src={atanagildo} alt="" /> */}
        
        <div className=" flex gap-10 mt-[50px] bg-[#f28cdf] justify-center">

          
            <ComponentReyes img={atanagildo} name={'Rey_atanagildo'} className={'bg-[orange] w-[300px] h-[400px] rounded-[8px] flex flex-col gap-8 items-center'}/>
            <ComponentReyes img={sisebuto} name={'Rey_sisebuto'} className={'bg-[orange] w-[300px] h-[400px] rounded-[8px] flex flex-col gap-8 items-center'}/>
            <ComponentReyes img={leovigildo} name={'Rey_leovigildo'} className={'bg-[orange] w-[300px] h-[400px] rounded-[8px] flex flex-col gap-8 items-center'}/>

        </div>
    </div>
  )
}

export default App
