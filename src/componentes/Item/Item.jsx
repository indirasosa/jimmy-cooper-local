import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({name, price, brand, imagen})=> {
        return (
            <>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imagen} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>Precio: {price}</p>
                    <p>Marca: {brand}</p>
                </Card.Text>
                <Button variant="dark">Detalle</Button>
              </Card.Body>
            </Card>
            </>
          );

}


