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
import { ContactForm } from './pages/contacto';
import OfertaComponent from './pages/cliente/Ofertas';
import Modulo from './pages/Administrador/Modulo';
import { CrearCuenta } from './pages/CrearCuenta';
import { IniciarSesion } from './pages/Iniciar_sesion';

import { AuthProvider } from './pages/Contexto/AuthContext';
import { ProtectedRoute } from './pages/Contexto/ProtectedRoute';

function App() {
    return (
        <Router>
            <AuthProvider>

                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/servicios/:nombreServicio" element={<DetallesServicio />} />
                        <Route path="/proyectos" element={<Proyectos />} />
                        <Route path="/proyectos/:nombreProyectos" element={<DetallesProyecto />} />
                        <Route path="/contactanos" element={<ContactForm />} />
                        <Route path="/mi-cuenta" element={<MyAcount />} />
                        <Route path="/crear-cuenta" element={<CrearCuenta />} />
                        <Route path="/iniciar-sesion" element={<IniciarSesion />} />

                        <Route element={<ProtectedRoute />}>
                            <Route path="/clientedecons" element={<OfertaComponent />} />
                            <Route path="/moduloadm" element={<Modulo />} />
                            <Route path="/mi-perfil" element={<h1>Profile</h1>} />
                            <Route path="/dashboard" element={<h1>dashboard</h1>} />
                        </Route>

                    </Routes>
                </div>
                <Footer />

            </AuthProvider>

        </Router>
    );
}

export default App;
