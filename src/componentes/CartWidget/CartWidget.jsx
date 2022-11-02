import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { BsCart3 } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const value = useContext (CartContext)
    return (
        <>
            <Button variant="dark">
            <BsCart3 className="me-2"/>
            <Badge bg="secondary">{value.productosCarrito.length}</Badge>
            </Button>
        </>
    )
}
