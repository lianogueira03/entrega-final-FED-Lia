import React from "react";
import "./styles.css";

class Contacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <h3>- CONTACTO -</h3>


            <div className="form-group">
              <label htmlFor="NombrePersona">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="NombrePersona"
              />
            </div>

            <div className="form-group">
              <label htmlFor="AsuntoConsulta">Asunto:</label>
              <input
                type="text"
                className="form-control"
                id="AsuntoConsulta"
              />
            </div>
 
            <div className="form-group">
              <label htmlFor="Mail">E-mail de contacto:</label>
              <input
                type="email"
                className="form-control"
                id="Mail"
              />
            </div> 


            <div className="mb-3">
              <label htmlFor="Consulta">Description</label>
              <textarea
                class="form-control"
                id="Consulta">
              </textarea>
            </div>


            <button type="submit" className="btn btn-primary">
              Enviar
              </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contacto; 