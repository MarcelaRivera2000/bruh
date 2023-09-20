import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../img/carrusel3.jpg"
import img2 from "../../img/carrusel2.jpg"
function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="Cimagen" src={img1}/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="Cimagen" src={img2}/>
        
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CarouselFadeExample;