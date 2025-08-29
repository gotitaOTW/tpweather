import axios from 'axios'
import { useContext, createContext, useState, useEffect } from 'react'

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
    //https://api.openweathermap.org/data/2.5/forecast?q=Buenos Aires&appid=4dd92e406c57a71ac7d4ec01c8cd5a2d&units=metric&lang=es
    const [tipoTemperatura, setTipoTemperatura] = useState("metric");
    const [nombreCiudadActual, setNombreCiudadActual] = useState("Tokio");//hardcodeado, buscar como pedir la ubicacion
    const [idioma, setIdioma] = useState("sp");

    const [ciudadActual, setCiudadActual] = useState({});
    // const [ciudadActual, setCiudadActual] = useState({
    //     name:"Buenos Aires",
    //     pais: "AR",
    //     temp:13,
    //     sensTermica:15,
    //     icon:"01d",
    //     textClima:"despejado"
    // });//con el nombre de la ciudad carga acá la basicInfo
     const [siguientesHoras, setSiguientesHoras] = useState([]);
    //     { hora: "15:00", temp: 23, icon: "01d" },
    //     { hora: "18:00", temp: 21, icon: "02d" },
    //     { hora: "21:00", temp: 19, icon: "03n" },
    //     { hora: "00:00", temp: 17, icon: "04n" },
    //     { hora: "03:00", temp: 16, icon: "10n" },
    // ]);//array conn temp, icon y hora, proximos 5 objetos
     const [siguientesDias, setSiguientesDias] = useState([]);
    //     { fecha: "2025-08-21", max: 24, min: 15, icon: "01d" },
    //     { fecha: "2025-08-22", max: 22, min: 14, icon: "02d" },
    //     { fecha: "2025-08-23", max: 21, min: 13, icon: "03d" },
    //     { fecha: "2025-08-24", max: 23, min: 14, icon: "04d" },
    //     { fecha: "2025-08-25", max: 25, min: 16, icon: "01d" },
    // ]);//array con fecha, max/min y icon, proximos 5 objetos donde hora=12hs
    const [bigCitiesNames, setBigCitiesNames] = useState([]);
    //nombres de otras ciudades, todas con .getTemp/icon y pais
    const [bigCities, setBigCities] = useState([])
    //     {
    //         nombre: "Madrid",
    //         temp: 29,
    //         iconClima: "01d",
    //         pais: "España",
    //     },
    //     {
    //         nombre: "Nueva York",
    //         temp: 27,
    //         iconClima: "03d",
    //         pais: "EE.UU.",
    //     },
    // ]);
    //array con objetos de ciudad: nombre, temp, iconClima, pais, sensTermica y textClima (estas ultimas solo se muestran en la main)

    
    
        
    
    //name, pais, temp, sensTermica, icon, textClima
        const getResponseFromCity = async (ciudad) => {
        const apiid="4dd92e406c57a71ac7d4ec01c8cd5a2d";
        const path = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiid}&units=${tipoTemperatura}&lang=${idioma}`;
      
        try {
          const response = await axios.get(path);
          return response.data;

        } catch (error) {
          console.error(`${ciudad} inválida: ${error}`);
          const bigCitiesNamesActualizado = bigCitiesNames.filter((name)=>name!=ciudad);
          setBigCitiesNames(bigCitiesNamesActualizado);
          console.log(`${ciudad} borrada de bigCitiesNames`);
          return error;
        }
      };
      

    const getBasicInfoFromResponse=(response)=>{
        if(!response)return null;
        const basicInfo = {
            name: response.city.name,
            pais: response.city.country,
            temp: response.list[0].main.temp, 
            sensTermica: response.list[0].main.feels_like,
            icon: response.list[0].weather[0].icon,
            textClima: response.list[0].weather[0].description,
            min:response.list[0].main.temp_min,
            max:response.list[0].main.temp_max
          };

        return basicInfo;
    }

    useEffect(() => {
                

        //trae la inof de ciudad actual con getBasicInfoOfCity, si no puede deja la que estaba y muestra que no existe si error 404 con msjtio bonito
        //filtra y guarda en siguientesDias tambien
        try {
            const fetchData = async()=>{

                const response = await getResponseFromCity(nombreCiudadActual);
                const basicInfo = getBasicInfoFromResponse(response);
               

                const sigHoras=[];
                const sigDias=[];
                for (let i = 0; i < 8; i++) {//sigHoras
                let hora = {
                    hora:response.list[i].dt_txt,
                    temp:response.list[i].main.temp,
                    icon:response.list[i].weather.icon
                }
                sigHoras.push(hora); 
                }
                for (let i = 0; i < response.list.length; i+=8) {//sigDias
                let dia = {
                    dia:response.list[i].dt_txt,
                    max:response.list[i].main.temp_max,
                    min:response.list[i].main.temp_min,
                    icon:response.list[i].weather.icon
                }
                sigDias.push(dia);
                }
                setCiudadActual(basicInfo);
                setSiguientesHoras(sigHoras);
                setSiguientesDias(sigDias);
            }
            fetchData();
        } catch (error) {
            console.error(error);
            if(nombreCiudadActual)window.alert(`${nombreCiudadActual} no encontrada`);
            setNombreCiudadActual(ciudadActual.name);
            //si el nombre solo sirve para buscar la ciudad, y, si no la encuentra no la pone por lo que hasta que no se cambie el nombre no va a cambiar la ciudad
            //entonces esta línea no sería necesaria pero por las dudas, además queda bien
        }
    }, [nombreCiudadActual]);
        
    useEffect(() => {
        const fetchData= async ()=>{
            let response, basic;
                    const citiesInfo=[];
                    for (const name of bigCitiesNames) {
                        try {
                            response = await getResponseFromCity(name);
                            basic = getBasicInfoFromResponse(response);
                            console.log(`basicinfo de ${basic.name}:
                                ${basic}`)
                            citiesInfo.push(basic);
                        } catch (error) {
                            window.alert(`${name} no encontrada.`);
                            console.error(error);
                        }
                    };
                    setBigCities(citiesInfo);
                    console.log("la grande ciudade mi helmano")
                    console.log(bigCities);
        }
        
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
        bigCitiesNames,
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
