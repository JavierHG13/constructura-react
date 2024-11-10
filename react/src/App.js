import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navBar';
import { Footer } from './components/footer';
import { Inicio } from './pages/Inicio';
import { Servicios } from './pages/Servicios';
import { Proyectos } from './pages/Proyectos';
import { DetallesProyecto } from './pages/DetallesProyecto';
import { DetallesServicio } from './pages/DetallesServicio';
import { MyAcount } from './pages/Cuenta';
import {ContactForm } from './pages/contacto'; 
import OfertaComponent from './pages/cliente/Ofertas';
import Modulo from './pages/Administrador/Modulo'
//import { FormLogin } from './pages/login';

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={< Inicio />} />

                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/servicios/:nombreServicio" element={<DetallesServicio />} /> 

                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/proyectos/:nombreProyectos" element={<DetallesProyecto />} /> 

                    <Route path="/mi-cuenta" element={<  MyAcount/>} /> 

                    <Route path="/contactanos" element={< ContactForm/>} /> 


                    <Route path="/clientedecons" element={< OfertaComponent/>} /> 

                    <Route path="/moduloadm" element={< Modulo/>} /> 

                </Routes>
            </div>

            <Footer/>
        </Router>
    );
}

export default App;
