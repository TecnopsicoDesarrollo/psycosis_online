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
  Row,
} from "reactstrap";

const data = [
  { id: 1, docu: "AD", serdoc: "1   ", nombre: "ADMISION", no_ini: "0", no_fin: "99999999", no_actual: "14" },
  { id: 2, docu: "SP", serdoc: "1   ", nombre: "EGRESO DE PACIENTE", no_ini: "0", no_fin: "99999999", no_actual: "11" },
  { id: 3, docu: "FR", serdoc: "1   ", nombre: "FACTURA DE VENTA", no_ini: "0", no_fin: "99999999", no_actual: "3" },
  { id: 4, docu: "TE", serdoc: "1   ", nombre: "TERCEROS", no_ini: "0", no_fin: "99999999", no_actual: "5" },
];

class ListaEstratos extends React.Component {
  
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      docu: "",
      serdoc: "",
      nombre: "",
      no_ini: "",
      no_fin: "",
      no_actual: "",
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
        arreglo[index].docu = dato.docu;
        arreglo[index].serdoc = dato.serdoc;
        arreglo[index].nombre = dato.nombre;
        arreglo[index].no_ini = dato.no_ini;
        arreglo[index].no_fin = dato.no_fin;
        arreglo[index].no_actual = dato.no_actual;
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
          <h1>Lista de Documentos</h1>
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
                <th>Documento</th>
                <th>Serie</th>
                <th>Nombre</th>
                <th>Inicial</th>
                <th>Final</th>
                <th>Actual</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.docu}</td>
                  <td>{dato.serdoc}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.no_ini}</td>
                  <td>{dato.no_fin}</td>
                  <td>{dato.no_actual}</td>
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
            <Row>
              <div className="pl-lg-2">
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
              </div>
              <div className="pl-lg-3">
                <FormGroup>
                  <label>
                    Codigo Documento: 
                  </label>
                  <input
                    className="form-control"
                    name="docu"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.docu}
                  />
                </FormGroup>
              </div>
              <div className="pl-lg-3">
                <FormGroup>
                  <label>
                    Serie Documento: 
                  </label>
                  <input
                    className="form-control"
                    name="serdoc"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.serdoc}
                  />
                </FormGroup>
              </div>
              <div className="pl-lg-4">
                <FormGroup>
                  <label>
                    Nombre Documento: 
                  </label>
                  <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.nombre}
                  />
                </FormGroup>
              </div>
            </Row>

            <FormGroup>
              <label>
                Numero Inicial: 
              </label>
              <input
                className="form-control"
                name="no_ini"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.no_ini}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Numero Final: 
              </label>
              <input
                className="form-control"
                name="no_fin"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.no_fin}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Numero Actual: 
              </label>
              <input
                className="form-control"
                name="no_actual"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.no_actual}
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
           <div><h3>Adicionar Estrato</h3></div>
          </ModalHeader>

          <ModalBody>
            <Row>
              <div className="pl-lg-2">
                <FormGroup>
                  <label>
                  Id:
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                  />
                </FormGroup>
              </div>
              <div className="pl-lg-3">
                <FormGroup>
                  <label>
                    Codigo Documento: 
                  </label>
                  <input
                    className="form-control"
                    name="docu"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </div>
              <div className="pl-lg-3">
                <FormGroup>
                  <label>
                    Serie Documento: 
                  </label>
                  <input
                    className="form-control"
                    name="serdoc"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </div>
              <div className="pl-lg-4">
                <FormGroup>
                  <label>
                    Nombre Documento: 
                  </label>
                  <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </div>
            </Row>

            <FormGroup>
              <label>
                Numero Inicial: 
              </label>
              <input
                className="form-control"
                name="no_ini"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Numero Final: 
              </label>
              <input
                className="form-control"
                name="no_fin"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Numero Actual: 
              </label>
              <input
                className="form-control"
                name="no_actual"
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

export default ListaEstratos;

