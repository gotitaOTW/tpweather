import { useContext } from "react"
import { WeatherContext } from "../contexts/weatherContext";
import CiudadMain from "../components/CiudadMain";
const Home = () =>{

    return(
        <>
            <Buscadores />
            <CiudadMain />
        </>
    )
}
export default Home