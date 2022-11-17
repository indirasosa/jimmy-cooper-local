import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ImagenCarrito from "../../img/cart2.svg";
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const value = useContext (CartContext)
    return (
        <>
        <Button variant="light">
            <img className='pe-2' src={ImagenCarrito} alt="ícono carrito" />
            <Badge bg="secondary">{value.calcularTotalProductos()}</Badge>
        </Button>
        </>
    )
}
