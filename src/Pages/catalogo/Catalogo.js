import React, { useState, useEffect } from "react";
import data from "../../Datos.jsx"
import Card from "../../componentes/Card/Card.js"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Catalogo = () => {
    const [datos, setDatos] = useState([{imagen:'', precio:'',nombre:''}]);
    const phoneNumber = '94791561';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    useEffect(() => {
    const cargarDatos = async () => {
      try {
        setDatos(data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    }; 
    cargarDatos();
    }, []);

    return (
      <>
      <div className="colorfondo">
        <Container>
          <br/>
        <h1 className="Titulo">Catalogo</h1>
        <br/>
          <Row xs={1} md={3}>
          {datos.map((item, idx) => (
            <>
            <Card
              key={idx}
              imagen={item.imagen}
              precio={item.precio}
              nombre={item.nombre}
            />
            
            </>
          ))}
        </Row>
        <a href={whatsappUrl} class="float" target="_blank">
              <i class="fa fa-whatsapp my-float"></i>
            </a>
        </Container>
      </div>
      
        
      </>
    );
  }
  
  export default Catalogo;