import { useParams } from 'react-router-dom'

const PaginaPruebas = ({ prueba }) => {

    const {nombre} = useParams();
    const {apellidos} = useParams();
    const {id} = useParams();
    return (

        <div style={{ height: '100vh', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Bienvenido {nombre} {apellidos}, su id es: {id}</h1>
            <p style={{ textAlign: 'center' }}>{prueba}</p>
            

        </div>

    );
};

export default PaginaPruebas