import { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";


const BigCities=()=>{
    const {value} = useContext(WeatherContext);
    return(
        <>
            <button onClick={(e)=>value.ponerBigCityEnMain(bigcity.nombre)}>ampliar</button>
        </>
    )
}

export default BigCities;