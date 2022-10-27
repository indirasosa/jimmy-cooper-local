import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import "./item.css";
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = ({name, price, brand, imagen, id, stock})=> {
        return (
            <>
            <Card style={{ width: '16rem', margin:"1rem" }} >
              <Card.Img variant="top" src={imagen} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Precio: ${price}
                </Card.Text>
                <Card.Text>
                    Marca: {brand}
                </Card.Text>
                <Card.Text>
                    Stock: {stock}
                </Card.Text>
                <Button variant="outline-dark">
                <Link className='buttonDetail' to={`/item/${id}`}>Detalle</Link>
                </Button>
                <ItemCount stock={stock} initial={1}/>
              </Card.Body>
            </Card>
            </>
          );

}


