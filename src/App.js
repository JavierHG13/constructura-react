import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navBar';
import { Footer } from './components/footer';
import { Inicio } from './pages/Inicio';
import { Servicios } from './pages/Servicios';
import { Proyectos } from './pages/Proyectos';
import { Detalles } from './pages/Detalles';


function App() {
    return (
        <Router>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={< Inicio />} />
                    
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/servicios/:nombreServicio" element={<Detalles />} /> 

                    <Route path="/proyectos" element={<Proyectos />} />
                </Routes>
            </div>

            <Footer/>
        </Router>
    );
}

export default App;
