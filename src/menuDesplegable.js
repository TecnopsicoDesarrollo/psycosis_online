import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Menudesplegable = () => {
    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Mi Aplicación</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Maestras
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/rutas/departam">
                  Departam
                </DropdownItem>
                <DropdownItem tag={Link} to="/rutas/eps">
                  EPS
                </DropdownItem>
                <DropdownItem tag={Link} to="/rutas/municipio">
                  Municipio
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Salud
              </DropdownToggle>
{/*               <DropdownMenu right>
                <DropdownItem tag={Link} to="">
                  Admision
                </DropdownItem>
                <DropdownItem tag={Link} to="">
                  Cabecera
                </DropdownItem>
                <DropdownItem tag={Link} to="">
                  Historia
                </DropdownItem>
              </DropdownMenu> */}
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Admon
              </DropdownToggle>
{/*               <DropdownMenu right>
                <DropdownItem tag={Link} to="">
                  Factura
                </DropdownItem>
                <DropdownItem tag={Link} to="">
                  Rips
                </DropdownItem>
                <DropdownItem tag={Link} to="">
                  Recibo
                </DropdownItem> 
              </DropdownMenu> */}
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      );
}

export default Menudesplegable;