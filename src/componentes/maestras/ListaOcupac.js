import React from 'react';
import Cabecera from '../../Cabecera.js';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, codigo: "010", nombre: "FISICOS, QUIMICOS Y TECNICOS ASIMILADOS" },
  { id: 2, codigo: "020", nombre: "ARQUITECTOS E INGENIEROS DE CUALQUIER AREA" },
  { id: 3, codigo: "030", nombre: "TECNICOS EN INGENIERIA, MECANICA, MINERIA, ELECTRONICA, METALURGIA Y OTROS" },
  { id: 4, codigo: "041", nombre: "PILOTOS,  OFICIALES, MECANICOS DE AVIACION, CONTROLADORES DEL TRAFICO AER" },
];

class ListaOcupac extends React.Component {
  
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      codigo: "",
      nombre: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var arreglo = this.state.data;
    arreglo.forEach((registro, index) => {
      if (dato.id === registro.id) {
        arreglo[index].codigo = dato.codigo;
        arreglo[index].nombre = dato.nombre;
      }
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("¿Estás seguro de que deseas eliminar el elemento " + dato.id + "?");
    if (opcion === true) {
      var arreglo = this.state.data.filter(registro => registro.id !== dato.id);
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <Cabecera />
  
        <div>
          <h1>Lista de Ocupaciones</h1>
        </div>
  
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Nuevo</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Codigo</th>
                <th>Ocupación</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.codigo}</td>
                  <td>{dato.nombre}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editando Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Codigo: 
              </label>
              <input
                className="form-control"
                name="codigo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.codigo}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre Ocupación: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Adicionar Ocupación</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Codigo: 
              </label>
              <input
                className="form-control"
                name="codigo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre Ocupación: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Adicionar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

      </React.Fragment>
    );
  }  
};


export default ListaOcupac;



