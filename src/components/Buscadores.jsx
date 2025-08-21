

const Buscadores=()=>{
    const [arrayAAgregar
    const radios = document.querySelectorAll('input[name="radio"]');
    radios.forEach((radio)=>{
        radio.addEventListener('change',()=>{
            if(radio.checked)
        })
    })

return(
    <>
    <form onSubmit={buscarCiudad}>
        <input type="text"></input>
        Agregar a: 
        <input type="radio" name="tipoCiudad" value="ciudad principal"></input>
        <input type="radio" name="tipoCiudad" value="más ciudades"></input>
        <button type="submit" value="cambiarCiudad"></button>
    </form>
        
    </>
)
}

export default Buscadores