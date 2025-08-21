import { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";


const Buscadores=()=>{
    const {value} = useContext(WeatherContext);
    const [arrayAAgregar, setArrayAAgregar]=useState("");
    const [ciudad, setCiudad] = useState("");


    const buscarCiudad = (e) =>{
        e.preventDefault();
        if(arrayAAgregar==="1"){
            value.setNombreCiudadActual(ciudad);
        }
        else{
            value.setBigCitiesNames([ciudad, ...value.BigCitiesNames]);
        }
    }


return(
    <>
    <form onSubmit={(e)=>buscarCiudad(e)}>
        <input type="text" id="ciudad" onChange={(e)=>setCiudad(e.target.value)}></input>

        ciudad principal <input type="radio" name="tipoCiudad" value="1" onChange={(e)=>setArrayAAgregar(e.target.value)}></input>
        más ciudades <input type="radio" name="tipoCiudad" value="2" onChange={(e)=>setArrayAAgregar(e.target.value)}></input>

        <button type="submit" value="cambiarCiudad" disabled={!ciudad || !arrayAAgregar}>
            {arrayAAgregar === "1" ? "Cambiar Ciudad" : "Agregar Ciudad"}
        </button>
    </form>
        
    </>
)
}

export default Buscadores