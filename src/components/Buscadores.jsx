import { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";



const Buscadores=()=>{
    const value = useContext(WeatherContext);
    const [arrayAAgregar, setArrayAAgregar]=useState("");
    const [ciudad, setCiudad] = useState("");
    const [idioma] = useState("sp");


    const buscarCiudad = (e) =>{
        e.preventDefault();
        if(arrayAAgregar==="1"){
            value.setNombreCiudadActual(ciudad);
            console.log(`Agregando ${ciudad} a ciudad actual`);
        }
        else{
            value.setBigCitiesNames([ciudad, ...value.bigCitiesNames]);
            console.log(`Agregando ${ciudad} a bigCities`);
            console.log(`${value.bigCitiesNames}`);
        }   
    }

    const cambiarTipoGrados = (e) =>{
        e.preventDeafault();
        value.cambiarTemperatura();
    }

    const handleChangeIdioma = (e) =>{
        value.setIdioma(e.target.value);
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


    C° <input type="radio" name="tipoGrado" value="metric" onChange={(e)=>cambiarTipoGrados(e)}></input>
    F° <input type="radio" name="tipoGrado" value="imperial" onChange={(e)=>cambiarTipoGrados(e)}></input>

    <select value={idioma} onChange={handleChangeIdioma}>
        <option value="">Idioma</option>
        {value.idiomas.map((i) => (
          <option key={i.valor} value={i.valor}>
            {i.nombre}
          </option>
        ))}
      </select>

        
    </>
)
}

export default Buscadores