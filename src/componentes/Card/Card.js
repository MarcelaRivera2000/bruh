import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./Card.css"
const Cardd = ({imagen,precio,nombre}) => {
    return (
    <>
    <Col sm={4}> 
      <Card className="h-100 carrd">
        <Card.Img className="imagencard" variant="top" src={imagen} alt={nombre} />
        <Card.Body>
          <Card.Title className='textocard'>{nombre}</Card.Title>
          <Card.Text className='textocardprecio'>Precio: {precio}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
}

export default Cardd;