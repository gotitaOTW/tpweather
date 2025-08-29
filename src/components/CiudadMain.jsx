import  {useContext}  from "react";
import { WeatherContext } from "../contexts/weatherContext";
const CiudadMain = () =>{
const value = useContext(WeatherContext);

    return(
        <>
        {/* mostrar los datos de {value} de forma bonita */}
            <div>
                ciudad: {value.ciudadActual.name} <br></br>
                pais: {value.ciudadActual.pais} <br></br>
                temp: {value.ciudadActual.temp}<br></br>
                feels like {value.ciudadActual.sensTermica}<br></br>
                <img src={`https://openweathermap.org/img/wn/${value.ciudadActual.icon}@2x.png`} alt="Clima"/><br></br>
                {value.ciudadActual.textClima}
            </div>
        </>
    )
}
export default CiudadMain