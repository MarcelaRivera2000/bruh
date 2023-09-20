import React, { useState,useEffect } from "react";
import Carrousel from "../../componentes/Carrusel/Carrusel.js"
import foto from "../../img/productos/10.jpg"
import Container from 'react-bootstrap/Container';
import "./paginaprincipal.css"
import Card from "../../componentes/Card/Card.js"
import data from "../../Datosbarbie.jsx"
import Row from 'react-bootstrap/Row';

const Paginaprincipal=()=> {
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
        <Carrousel/>
        <div className="colorfondo">
        <br/>
        <br/>
        <br/>
        <Container>
        <Row xs={1} md={4}>
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
      <br/>
      <br/>
          <div class="d-flex justify-content-between divv">
            <div className="info">
            <h1 className="Titulo">Formas de Pago</h1>
              <h2>Transferencia</h2>
              <li> <b>Atlantida</b></li>
              <li> <b>BAC</b></li>
              <br/>
              <h3>Pago con tarjeta por llamada (POS)</h3>
              <br/>
              <h3>Efectivo</h3>
              <br/>
              <br/>
              <br/>
              
              
            </div>
            <img className="fotoprincipal" src={foto} alt=""/>
          </div>
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <a href={whatsappUrl} class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a>
        </Container>
        </div>
      </>
    );
  }
  
  export default Paginaprincipal;