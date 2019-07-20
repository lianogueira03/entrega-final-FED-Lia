import React from "react";
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-nav">
          <div className="img-center">
            <img
              src="assets/logo.png"
              onClick={() => this.props.goToCatalogo()}
              alt="adoptme"
              width="600"
              className="img-center"
            />
          </div> 

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    this.props.goToCatalogo();
                  }}
                >
                  Catálogo{" "}
                  <span className="sr-only">(current)</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    this.props.goToSobreMi();
                  }}
                >
                  Sobre Mi{" "}
                  <span className="sr-only">(current)</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    this.props.goToContacto();
                  }}
                >
                  Contacto
                  </button>
              </li>
            </ul>

          </div>
        </nav>
      </header>
    );
  }
}


export default Header;