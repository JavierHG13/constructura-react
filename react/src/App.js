import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navBar';
import { Footer } from './components/footer';
import { Inicio } from './pages/Inicio';
import { Servicios } from './pages/Servicios';
import { Proyectos } from './pages/Proyectos';
import { DetallesProyecto } from './pages/DetallesProyecto';
import { DetallesServicio } from './pages/DetallesServicio';

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

                </Routes>
            </div>

            <Footer/>
        </Router>
    );
}

export default App;
