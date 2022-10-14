import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FiShoppingCart } from "react-icons/fi";

export const CartWidget = () => {
    return (
        <>
            <Button variant="ligth">
            <FiShoppingCart className="me-2"/>
            <Badge bg="secondary">0</Badge>
            </Button>
        </>
    )
}
