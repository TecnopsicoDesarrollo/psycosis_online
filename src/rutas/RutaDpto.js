import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import ListaDpto from '../componentes/maestras/departam/ListaDpto.js';

const RutaDpto = () => {

  return (
  <>
  <div>
    <h1>Estoy en RutaDpto</h1>
  </div>
    <div className="main-content">   
      <Routes>
        <Route path="ListaDpto" element={<ListaDpto />} />
        <Route path="*" element={<Navigate to="/rutas/departam/ListaDpto" />} />
      </Routes>

    </div>
  </>
  )
};


export default RutaDpto;

