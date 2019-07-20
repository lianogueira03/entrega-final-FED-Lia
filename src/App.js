import React from 'react';
import Header from './Header.js';
import Catalogo from './Catalogo.js';
import DescripcionTrabajo from './DescripcionTrabajo.js';
import SobreMi from './SobreMi.js';
import Contacto from './Contacto.js';
import Footer from './Footer.js';
import "./styles.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,
      trabajoSeleccionado: 0,
      Catalogo: [
        {
          id: 1,
          imagen: "assets/web_abel.jpg",
          cliente: "Abel Hernández",
          descripcion: "Diseño de la página web del jugador Abel Hernández",
          type: "web"
        },
        {
          id: 2,
          imagen: "assets/identidad_femina.jpg",
          cliente: "Femina",
          descripcion: "Desarrollo de identidad para Femina",
          type: "identidad"
        },
        {
          id: 3,
          imagen: "assets/redes_kevingston.jpg",
          cliente: "Kevingston",
          descripcion: "Diseño de posteos para redes sociales",
          type: "redes"
        },
        {
          id: 4,
          imagen: "assets/web_femina.jpg",
          cliente: "Femina",
          descripcion: "Diseño de la página web para Femina",
          type: "web"
        },
        {
          id: 5,
          imagen: "assets/web_marvic.jpg",
          cliente: "Marvic",
          descripcion: "Diseño de la página web para Marvic",
          type: "web"
        },
        {
          id: 6,
          imagen: "assets/redes_puertomadera.jpg",
          cliente: "Puerto Madera",
          descripcion: "Diseño de posteos para redes sociales",
          type: "redes"
        },
        {
          id: 7,
          imagen: "assets/identidad_fundacion.jpg",
          cliente: "Fundación Celeste",
          descripcion: "Diseño de calendario para Fundación Celeste",
          type: "identidad"
        },
        {
          id: 8,
          imagen: "assets/redes_kevingston2.jpg",
          cliente: "Kevingston",
          descripcion: "Diseño de posteos para redes sociales",
          type: "redes"
        },
        {
          id: 9,
          imagen: "assets/identidad_otros.jpg",
          cliente: "Otros Mundos Otras Voces",
          descripcion: "Desarrollo de identidad para Otros Mundos Otras Voces",
          type: "identidad"
        },
        {
          id: 10,
          imagen: "assets/identidad_marvic.jpg",
          cliente: "Marvic",
          descripcion: "Desarrollo de identidad para Marvic",
          type: "identidad"
        },
        {
          id: 11,
          imagen: "assets/identidad_manzana.jpg",
          cliente: "Manzana Brooklyn",
          descripcion: "Desarrollo de identidad para Manzana Brooklyn",
          type: "identidad"
        },
        {
          id: 12,
          imagen: "assets/identidad_ideasoft.jpg",
          cliente: "Ideasoft",
          descripcion: "Desarrollo de papeleria para Ideasoft",
          type: "identidad"
        },
        {
          id: 13,
          imagen: "assets/web_dofin.jpg",
          cliente: "Dofin",
          descripcion: "Diseño de la página web para Dofin",
          type: "web"
        },
        {
          id: 14,
          imagen: "assets/web_ideasoft.jpg",
          cliente: "Ideasoft",
          descripcion: "Diseño de la página web para Ideasoft",
          type: "web"
        },
        {
          id: 15,
          imagen: "assets/identidad_marvic2.jpg",
          cliente: "Marvic",
          descripcion: "Desarrollo de identidad para Marvic",
          type: "identidad"
        },
       ]
}
}




handleSection = id => {
  this.setState({
    section: 2,
    trabajoSeleccionado: this.state.Catalogo.find(function(trabajo) {
      return trabajo.id === id;
    })
  });
};


goToCatalogo = () => {
  this.setState({
    section: 1
  });
};

goToSobreMi = () => {
  this.setState({
    section: 3
  });
}; 

goToContacto = () => {
  this.setState({
    section: 4
  });
};


currentSection() {
  if (this.state.section === 1) {
    return (
      <Catalogo
        trabajos={this.state.Catalogo}
        handleSection={this.handleSection}
      />
    );
  }

  if (this.state.section === 2) {
    return <DescripcionTrabajo trabajo={this.state.trabajoSeleccionado} />;
  }


  if (this.state.section === 3) {
    return <SobreMi trabajo={this.state.SobreMi} />;
  }

  if (this.state.section === 4) {
    return <Contacto trabajo={this.state.Contacto} />;
  }

}


render() {
  return (
    <React.Fragment>
      <Header
        goToCatalogo={this.goToCatalogo}
        goToSobreMi={this.goToSobreMi}
        goToContacto={this.goToContacto}
      />

      {this.currentSection()}

      <Footer />
    </React.Fragment>
  );
}
}


export default App;