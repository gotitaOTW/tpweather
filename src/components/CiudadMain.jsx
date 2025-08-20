import  {useContext}  from "react";
import { WeatherContext } from "../contexts/weatherContext";
const CiudadMain = () =>{
const value = useContext(WeatherContext);
    return(
        <>
            <div>
                {value.ciudadActual.nombre}
            </div>
        </>
    )
}
export default CiudadMain