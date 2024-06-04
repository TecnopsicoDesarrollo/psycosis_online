import React from 'react';
import { Link } from 'react-router-dom';


const Cabecera = () => {
  
  return (
    <header className='Cabecera'>
      <div className='Cabecera-row'>
        <nav className='Cabecera-nav'>
          <div class="Menu-column">
            <ul className='Cabecera-ul'>
              <h3>Generales</h3>
              <li className='Cabecera-li'>
                <Link to={"/rutas/departam"}>Departamento</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/municipio"}>Municipio</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/documentos"}>Documentos</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/ocupacion"}>Ocupacion</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/estratos"}>Estratos</Link>
              </li>                            
            </ul>
          </div>
          <div class="menu-column">
            <ul className='Cabecera-ul'>
              <h3>Salud</h3>
              <li className='Cabecera-li'>
                <Link to={"/rutas/fasesatencion"}>Fases de Atencion</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/tiposatencion"}>Tipos de Atencion</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/tiposvinculacion"}>Tipos de Vinculacion</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/cancelacion"}>Motivos cancelacion Citas</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/especialidades"}>Especialidades</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/medicos"}>Psicologos</Link>
              </li>
            </ul>
          </div>
          <div class="menu-column">
            <ul className='Cabecera-ul'>
              <h3>Contratacion</h3>
              <li className='Cabecera-li'>
                <Link to={"/rutas/terceros"}>Crear Terceros</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/eps"}>E.P.S.</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/cups"}>C.U.P.S.</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/manual"}>Manual Tarifario</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/tarifas"}>Tarifarios</Link>
              </li>
              <li className='Cabecera-li'>
                <Link to={"/rutas/contrato"}>Contrato</Link>
              </li>
            </ul>
          </div>
        </nav> 
      </div>
    </header>
  )
};

export default Cabecera;


