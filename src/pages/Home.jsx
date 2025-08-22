import { useContext } from "react"
import { WeatherContext } from "../contexts/weatherContext";
import CiudadMain from "../components/CiudadMain";
import Buscadores from "../components/Buscadores";
import SiguientesDias from "../components/SiguientesDias";
import SiguientesHoras from "../components/SiguientesHoras";
import BigCities from "../components/BigCities";

const Home = () =>{

    return(
        <>
            <Buscadores />
            <CiudadMain />
            <SiguientesHoras />
            <SiguientesDias />
            <BigCities />
        </>
    )
}
export default Home