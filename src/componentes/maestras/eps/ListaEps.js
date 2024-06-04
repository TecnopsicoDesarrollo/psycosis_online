import React from 'react';
import Cabecera from '../../../Cabecera.js';
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
  { id: 1, codigo: "EPS002", entidad: "Salud Total", tipoenti: "01", tercero: "2", no_identi: "890540812" },
  { id: 2, codigo: "EPS003", entidad: "Emcosalud", tipoenti: "01", tercero: "3", no_identi: "900765432" },
  { id: 3, codigo: "EPS013", entidad: "Salud Vida", tipoenti: "03", tercero: "4", no_identi: "890111345" },
  { id: 4, codigo: "ESS062", entidad: "Seguros Bolivar", tipoenti: "05", tercero: "5", no_identi: "890523418" },
];

class ListaEps extends React.Component {
  
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      codigo: "",
      entidad: "",
      tipoenti: "",
      tercero: "",
      no_identi: "",
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
        arreglo[index].entidad = dato.entidad;
        arreglo[index].tipoenti = dato.tipoenti;
        arreglo[index].tercero = dato.tercero;
        arreglo[index].no_identi = dato.no_identi;
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
          <h1>Lista de E.P.S.</h1>
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
                <th>Entidad</th>
                <th>N.I.T.</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.codigo}</td>
                  <td>{dato.entidad}</td>
                  <td>{dato.no_identi}</td>
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
                Nombre Entidad: 
              </label>
              <input
                className="form-control"
                name="entidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.entidad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Tipo de Entidad: 
              </label>
              <input
                className="form-control"
                name="tipoenti"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tipoenti}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Id del Tercero: 
              </label>
              <input
                className="form-control"
                name="tercero"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tercero}
              />
            </FormGroup>

            <FormGroup>
              <label>
                N.I.T. Entidad: 
              </label>
              <input
                className="form-control"
                name="no_identi"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.no_identi}
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
           <div><h3>Adicionar E.P.S.</h3></div>
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
                Nombre Departamento: 
              </label>
              <input
                className="form-control"
                name="dpto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Tipo de Entidad: 
              </label>
              <input
                className="form-control"
                name="tipoenti"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Id del Tercero: 
              </label>
              <input
                className="form-control"
                name="tercero"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                N.I.T. Entidad: 
              </label>
              <input
                className="form-control"
                name="no_identi"
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


export default ListaEps;
