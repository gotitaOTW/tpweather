import { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";


const SiguientesDias=()=>{
    const {value} = useContext(WeatherContext);
}

export default SiguientesDias;