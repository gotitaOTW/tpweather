import axios from 'axios'
import { useContext, createContext, useState, useEffect } from 'react'

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
    //https://api.openweathermap.org/data/2.5/forecast?q=Buenos Aires&appid=4dd92e406c57a71ac7d4ec01c8cd5a2d&units=metric&lang=es
    const [tipoTemperatura, setTipoTemperatura] = useState("metric");
    const [nombreCiudadActual, setNombreCiudadActual] = useState("Buenos Aires");//hardcodeado, buscar como pedir la ubicacion
    const [idioma, setIdioma] = useState("sp");

    const [ciudadActual, setCiudadActual] = useState({
        nombre: "Buenos Aires",
        temp: 22,
        iconoClima: "01d",
        pais: "Argentina",
        sensTermica: 21,
        textClima: "Despejado",
    });//con el nombre de la ciudad carga acá la basicInfo
    const [siguientesHoras, setSiguientesHoras] = useState([
        { hora: "15:00", temp: 23, icon: "01d" },
        { hora: "18:00", temp: 21, icon: "02d" },
        { hora: "21:00", temp: 19, icon: "03n" },
        { hora: "00:00", temp: 17, icon: "04n" },
        { hora: "03:00", temp: 16, icon: "10n" },
    ]);//array conn temp, icon y hora, proximos 5 objetos
    const [siguientesDias, setSiguientesDias] = useState([
        { fecha: "2025-08-21", max: 24, min: 15, icon: "01d" },
        { fecha: "2025-08-22", max: 22, min: 14, icon: "02d" },
        { fecha: "2025-08-23", max: 21, min: 13, icon: "03d" },
        { fecha: "2025-08-24", max: 23, min: 14, icon: "04d" },
        { fecha: "2025-08-25", max: 25, min: 16, icon: "01d" },
    ]);//array con fecha, max/min y icon, proximos 5 objetos donde hora=12hs
    const [bigCitiesNames, setBigCitiesNames] = useState([
        "Madrid",
        "Nueva York",
        "Tokio",
        "Londres",
    ]);
    //nombres de otras ciudades, todas con .getTemp/icon y pais
    const [bigCities, setBigCities] = useState([
        {
            nombre: "Madrid",
            temp: 29,
            iconClima: "01d",
            pais: "España",
        },
        {
            nombre: "Nueva York",
            temp: 27,
            iconClima: "03d",
            pais: "EE.UU.",
        },
    ]);
    //array con objetos de ciudad: nombre, temp, iconClima, pais, sensTermica y textClima (estas ultimas solo se muestran en la main)

    const getBasicInfoOfCity = (ciudad) => {
        //devuelve nombre, temp, iconClima, pais, sensTermica y textClima (estas ultimas solo se muestran en la main)
    }

    useEffect(() => {
        //trae la inof de ciudad actual con getBasicInfoOfCity, si no puede deja la que estaba y muestra que no existe si error 404 con msjtio bonito
        //filtra y guarda en siguientesDias tambien
    }, [nombreCiudadActual]);
        
    useEffect(() => {
        //trae la info de las bigCities con getBasicInfoOfCity y las guarda en su Setter, si no puede alguna  no la agrega y muestra que no existe si error 404 con msjtio
    }, [bigCitiesNames]);

    const cambiarTemperatura = () =>{
        let nuevoTipo="metric";
        if(tipoTemperatura=="metric"){nuevoTipo="imperial";}
        setTipoTemperatura(nuevoTipo);
    }

    const idiomas = [
        { nombre: "English", valor: "en" },
        { nombre: "Spanish", valor: "sp" },
        { nombre: "German", valor: "de" }
      ];

      function ponerBigCityEnMain(ciudad)
      {
            const copia = [...bigCitiesNames];
            const index = copia.indexOf(ciudad);
          
            if (index !== -1) {
              copia[index] = nombreCiudadActual;
              setBigCitiesNames(copia);
              setNombreCiudadActual(ciudad);
            }
      }

    const value = {
        setNombreCiudadActual, 
        setBigCitiesNames, 
        ciudadActual, 
        siguientesHoras, 
        siguientesDias, 
        bigCities,
        cambiarTemperatura,
        idiomas,
        setIdioma,
        ponerBigCityEnMain
    };

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    );
}
