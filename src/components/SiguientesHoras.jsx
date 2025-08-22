import { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";



const SiguientesHoras=()=>{
    const {value} = useContext(WeatherContext);
}

export default SiguientesHoras;