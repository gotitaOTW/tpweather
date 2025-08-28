import { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";



const SiguientesHoras=()=>{
    const value = useContext(WeatherContext);
    return(
        <>
            {value.siguientesHoras.forEach(hora => {
                    <div>
                        {hora.hora}
                        {hora.temp}
                        <img src={`https://openweathermap.org/img/wn/${hora.icon}@2x.png`} alt="Clima"/>
                    </div>
                })}
        </>
    )
}

export default SiguientesHoras;