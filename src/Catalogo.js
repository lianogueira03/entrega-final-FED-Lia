import React from "react";
import Trabajocard from "./Trabajocard.js";
class Catalogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
    };
  }

  filterByType = (type) => {
    this.setState({
      type: type 
    });
  };


 
  render() {
    return (
      <div className="container">
        <div className="col-12">
          <div className="titulo-list">
            <h3>- Portfolio -</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="form-row align-items-center" style={{ justifyContent: "center" }}>
              <div className="col-auto my-1">
              <button type="button" className="btn btn-outline-primary" onClick={() => this.filterByType("")}>Todos</button> 
              </div>

              <div className="col-auto my-1">
              <button type="button" className="btn btn-outline-primary" onClick={() => this.filterByType("identidad")}>Identidad Corporativa</button> 
              </div>

              <div className="col-auto my-1">
              <button type="button" className="btn btn-outline-primary" onClick={() => this.filterByType("redes")}>Redes Sociales</button>
              </div>

              <div className="col-auto my-1">
              <button type="button" className="btn btn-outline-primary" onClick={() => this.filterByType("web")}>Diseño web</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {this.props.trabajos
            .filter(todo => todo.type.includes(this.state.type))
            .map(item => (
              <Trabajocard
                key={item.id}
                trabajo={item}
                handleSection={this.props.handleSection}
              />
            ))}
        </div>

      </div>
    );
  }
} 

export default Catalogo;
