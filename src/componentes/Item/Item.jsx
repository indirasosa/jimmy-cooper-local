import Card from 'react-bootstrap/Card';
import { BotonContador } from '../botonCantidad/botonCantidad';

export const Item = ({name, price, brand, imagen})=> {
        return (
            <>
            <Card style={{ width: '16rem', margin:"1rem" }} >
              <Card.Img variant="top" src={imagen} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Precio: {price}
                    Marca: {brand}
                </Card.Text>
                <BotonContador/>
              </Card.Body>
            </Card>
            </>
          );

}


