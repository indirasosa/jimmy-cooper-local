import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import "./item.css";

export const Item = ({name, price, brand, imagen, id})=> {
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
                <Button variant="outline-dark">
                <Link className='buttonDetail' to={`/item/${id}`}>Detalle</Link>
                </Button>
              </Card.Body>
            </Card>
            </>
          );

}


