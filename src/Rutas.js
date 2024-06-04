import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ListaDpto from './componentes/maestras/departam/ListaDpto.js';
import ListaEps from './componentes/maestras/eps/ListaEps.js';
import ListaMpio from './componentes/maestras/municipio/ListaMpio.js';
import ListaDocumen from './componentes/maestras/ListaDocumen.js'
import ListaOcupac from './componentes/maestras/ListaOcupac.js'
import ListaEstratos from './componentes/maestras/ListaEstratos.js'
import Dashboard from './Dashboard.js';

const Rutas = () => {

  return (
    
    <BrowserRouter>
      <div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rutas/departam/*" element={<ListaDpto />} />
            <Route path="/rutas/eps/" element={<ListaEps />} />
            <Route path="/rutas/municipio/" element={<ListaMpio />} />
            <Route path="/rutas/documentos/" element={<ListaDocumen />} />
            <Route path="/rutas/ocupacion/" element={<ListaOcupac />} />
            <Route path="/rutas/estratos/" element={<ListaEstratos />} />


            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>  
      </div>  
    </BrowserRouter>
    
  )
}

export default Rutas;
