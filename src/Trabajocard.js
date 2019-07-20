import React from "react";
  
class Trabajocard extends React.Component {
  render() {
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <img
            src={this.props.trabajo.imagen}
            className="card-img-top"
            alt="Trabajo"
          /> 
          <div className="card-body">
            <h5 className="card-title">{this.props.trabajo.tipo}</h5>
            <p className="card-text">
              {this.props.trabajo.cliente} - {this.props.trabajo.cliente}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => this.props.handleSection(this.props.trabajo.id)}
            >
              Ver más
            </button>
            
          </div>
        </div>
      </div>
    );
  }
} 

export default Trabajocard;
