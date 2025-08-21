import  {useContext}  from "react";
import { WeatherContext } from "../contexts/weatherContext";
const CiudadMain = () =>{
const value = useContext(WeatherContext);

    return(
        <>
        {/* mostrar los datos de {value} de forma bonita */}
            <div>
                {value.ciudadActual.nombre}
            </div>
        </>
    )
}
export default CiudadMain