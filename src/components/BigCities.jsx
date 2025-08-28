import { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";


const BigCities=()=>{
    const value = useContext(WeatherContext);
    return(
        <>
            {value.bigCities.forEach(city => {
                {city.name}
                {city.pais}
                {city.temp}
                {city.min}
                {city.max}
            })}
            <button onClick={(e)=>value.ponerBigCityEnMain(bigcity.nombre)}>ampliar</button>
        </>
    )
}

export default BigCities;