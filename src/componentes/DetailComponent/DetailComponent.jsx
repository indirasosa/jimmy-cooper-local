import { useContext } from "react";
import "./detailComponent.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';

export const DetailComponent = ({detalle})=> {

    const {addProduct, isInCart} = useContext(CartContext)

    const agregarProducto = (cantidad)=>{
        addProduct(detalle, cantidad);
    }
    if (isInCart(detalle.id))
    return(
        <>
        <div className="flex">
            <div className='cardContainer'>
                <img className="cardImg" src={detalle.imagen} alt="ImagenProducto" />
                <div className="mx-5 mb-2">
                    <h2 className="h4 flex">{detalle.name}</h2>
                    <p className="texto flex">${detalle.price}</p>
                    <p className="texto flex">Stock: {detalle.stock}</p>
                </div>
                <div className="terminarCompra">
                    <div className="px-2">
                        <Button variant="outline-dark">Ver más productos</Button>
                    </div>
                    <div className="px-2">
                        <Button variant="dark">Terminar compra</Button>
                    </div>
                </div>
            </div>
        </div>
        </>      
    ); else {
        return (
            <>
                <div className="flex">
                    <div className='cardContainer'>
                        <img className="cardImg" src={detalle.imagen} alt="ImagenProducto" />
                        <div className="mx-5">
                            <h2 className="h3 flex">{detalle.name}</h2>
                            <p className="texto flex">${detalle.price}</p>
                            <p className="texto flex">Stock: {detalle.stock}</p>
                        </div>
                        <div className="itemCount">
                            <ItemCount stock={detalle.stock} initial={1} onAdd={agregarProducto}/>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}
