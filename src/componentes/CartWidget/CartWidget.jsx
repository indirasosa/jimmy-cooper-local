import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { BsCart3 } from "react-icons/bs";

export const CartWidget = () => {
    return (
        <>
            <Button variant="ligth">
            <BsCart3 className="me-2"/>
            <Badge bg="secondary">0</Badge>
            </Button>
        </>
    )
}
