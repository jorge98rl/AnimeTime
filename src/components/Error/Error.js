

const Error = () => {

    // const [contador, setContador] = useState(0);

    // function sumarToque(){
    //     setContador(prev => prev +1)
    // }

    return (
        <div style={{display : 'flex', flexDirection: 'column', alignItems: 'center',  justifyContent: 'center', background : '', height: '100vh'}}>

            <h1 style={{fontSize: '', color: 'red'}}>Página no encontrada</h1>
            <p style={{fontSize: '', color: 'red'}}>La página a la que intentas acceder no existe en la web</p>
            {/* <h2>{saludo}</h2>
            <h3>{cabeza} {contador}</h3>

            <button onClick={sumarToque}>Clicka aquí hazme caso</button> */}
        </div>
    )
}

export default Error