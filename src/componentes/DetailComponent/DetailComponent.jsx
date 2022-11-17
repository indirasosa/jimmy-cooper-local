import { useContext, useState } from "react";
import "./detailComponent.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const DetailComponent = ({detalle})=> {

    const {addProduct} = useContext(CartContext)

    //variable de estado para renderizar botones de Seguir comprado / Terminar compra
    const [hayCompra, setHayCompra] = useState(false)

    //función para renderizar esos botones
    const botonesCompra = ()=>{
        setHayCompra(false)
    }

    const agregarProducto = (cantidad)=>{
        addProduct(detalle, cantidad);
        setHayCompra(true)
    }

return(
    <>
        <div className="flex">
            <div className='cardContainer'>
                <img className="cardImg" src={detalle.imagen} alt="ImagenProducto" />
                <div className="mx-5">
                    <h2 className="h3 flex">{detalle.name}</h2>
                    <p className="texto flex">${detalle.price}</p>
                    <p className="texto flex">Stock: {detalle.stock}</p>
                </div>
                {
                    hayCompra === true ?  <div className="terminarCompra">
                                                    <div className="px-2">
                                                        <Link to="/">
                                                            <Button variant="outline-dark" onClick={botonesCompra}>Seguir comprando</Button>
                                                        </Link>
                                                    </div>
                                                    <div className="px-2">
                                                        <Link to="/cart">
                                                            <Button variant="dark" onClick={botonesCompra}>Terminar compra</Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                :
                                                <div className="itemCount">
                                                    <ItemCount stock={detalle.stock} initial={1} onAdd={agregarProducto}/>
                                                </div> 
                                                
                }

            </div>
        </div>
    </>     
    )
}
