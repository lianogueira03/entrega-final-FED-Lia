import React from "react";
  
class DescripcionTrabajo extends React.Component {
  render() {
    return (
      <div className="container-trabajo">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img
              src={this.props.trabajo.imagen}
              className="card-img-top"
              alt=""
            /> 
          </div> 
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <p className="card-text">
              <b>Cliente:</b> {this.props.trabajo.cliente}
            </p>
            <p className="card-text">
              <b>Descripción:</b> {this.props.trabajo.descripcion}
            </p>

          </div>
        </div>
      </div>
    );
  }
}

export default DescripcionTrabajo;
