import rey from "../../assets/reyes/rey_incognito.png";


export const ComponentReyes = ({img,name,className}) => {


  const handleClick=(e)=>{
  if(  e.target.src.includes('incognito')){
    e.target.src=""
  }else{
    e.target.src =rey
  }

  }
  const hiddent=(e)=>{
    // alert("hola mundo")
    if(e.target.innerHTML == "visto"){
      e.target.innerHTML = ""

    }else{
      e.target.innerHTML = "visto"
    }


  }

  return (

    <div className={className}>
        
        <img src={img} alt="" onClick={handleClick}/>
        <span onClick={hiddent}>{name}</span>

    </div>

  )
}

export default ComponentReyes



