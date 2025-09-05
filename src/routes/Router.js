import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SectionPiratas from '../components/SectionPiratas/SectionPiratas';
import SectionLuffy from '../components/SectionLuffy/SectionLuffy';
import Landing from '../view/Landing';
import Error from '../components/Error/Error';
import PaginaPruebas from '../components/PaginaPruebas/PaginaPruebas';
import Header from '../components/Header/Header';

class Router extends Component {

    render() {
        return (

            <BrowserRouter>
                {/*CONFIGURAR RUTAS Y PAGINAS*/}
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path="/ruta-prueba" element={<>
                        <Header />
                        <SectionPiratas />
                    </>} />
                    <Route path="/segunda-ruta" element={<>
                        <Header />
                        <SectionLuffy />
                    </>} />
                    <Route path="/header" element={<Header />} />
                    <Route path="*" element={<Error saludo="Hola amigo" cabeza="Click nº " />} />

                    {/**Ruta más compleja y con mayor flexibilidad, sin componentes */}
                    <Route path="/pagina-1" element={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '', height: '100vh' }}>
                        <div style={{ border: '2px solid black', padding: '60px', boxShadow: '4px 4px 4px black' }}>
                            <h1 style={{ fontSize: '', color: 'blue', textAlign: 'center' }}>Hola mi gente</h1>
                            <p style={{ fontSize: '', color: 'blue' }}>Esta página está creada para mostrar una ruta creada sin componentes</p>
                        </div>

                    </div>} />

                    <Route path='/pruebas/:nombre/:apellidos?/:id?' element={<>
                        <Header />
                        <PaginaPruebas prueba="Probando las rutas con parametros en la URL " />
                    </>} />
                </Routes>
            </BrowserRouter>

        );

    }

}

export default Router;