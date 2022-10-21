import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

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
                <Link to={`/item/${id}`}>Ver más </Link>
              </Card.Body>
            </Card>
            </>
          );

}


