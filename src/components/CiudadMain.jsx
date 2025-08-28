import  {useContext}  from "react";
import { WeatherContext } from "../contexts/weatherContext";
const CiudadMain = () =>{
const value = useContext(WeatherContext);

    return(
        <>
        {/* mostrar los datos de {value} de forma bonita */}
            <div>
                {value.ciudadActual.nombre}
                {value.siguientesHoras.forEach(hora => {
                    <div>
                        {hora.hora}
                        {hora.temp}
                        {hora.icon}
                        <img src={`https://openweathermap.org/img/wn/${hora.icon}@2x.png`} alt="Clima">

                    </div>
                })}
            </div>
        </>
    )
}
export default CiudadMain