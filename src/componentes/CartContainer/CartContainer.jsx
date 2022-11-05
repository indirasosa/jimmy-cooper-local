import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "./cartContainer.css";
import Button from 'react-bootstrap/Button';
import CloseImg from "../../img/x-lg.svg"



export const CartContainer = ()=>{
    //enlazando el contexto
    const value = useContext(CartContext)
    const {productosCarrito, calcularPrecioTotal, eliminarProducto} = value

    //creando la variable de estado del Id de la compra
    const [compraId, setCompraId] = useState("");

    //función para enviar orden
    const sendOrder = (evt)=>{
        evt.preventDefault();
        const compra = {
            buyer: {
                name: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value
            },
            items: productosCarrito, 
            total: calcularPrecioTotal()
        }
        const queryRef = collection(db, "compras")
        addDoc(queryRef, compra).then((result)=>{ 
            setCompraId(result.id)
        })
    }

    if(productosCarrito.length >0){
        return(
            <div className="cartBody">
                <h1 className="h4 m-3">Carrito de compras</h1>
                <div className="divFlex">
                    <div>
                    <div className="cardContainer">
                        {
                            productosCarrito.map((producto)=>(
                                <div className="cardProductoCarrito">
                                    <div className="titleProduct">
                                        <p className="h5">{producto.name}</p>
                                        <Button variant="outline-dark" size="sm" onClick={()=>eliminarProducto(producto.id)}>
                                            <img src={CloseImg} alt="eliminar" />
                                        </Button>
                                    </div>
                                    <div className="flexInfo">
                                        <div>
                                            <img className="Img" src={producto.imagen} alt="foto del producto"/>
                                        </div>
                                        <div className="infoProduct">
                                            <p>$ {producto.price}</p>
                                            <p>Cantidad: {producto.cantidad}</p>
                                            <p>Precio por cantidad: ${producto.precioPorCantidad}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="precioTotal">
                            <div className="px-4">
                                <p className="h5">Precio total: {calcularPrecioTotal()}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                    <div className="carrito">
                    <form className="formCompra" onSubmit={sendOrder}>
                        <h3 className="h6">Datos del comprador</h3>
                        <p className="pt-2">Nombre</p>
                        <input type="text" placeholder="Nombre" />
                        <p className="pt-2">Teléfono</p>
                        <input type="tel" placeholder="Número de teléfono" />
                        <p className="pt-2">Email</p>
                        <input  type="email" placeholder="Email" />
                        <Button className="mt-3" variant="dark" type="submit">Comprar</Button>
                    </form>
                    </div>
                    </div>
                    </div>
                    <div className="carrito">
                        {
                            compraId && <div><p className="h4">¡La compra ha sido exitosa! Id:{compraId}</p></div>
                        }
                    </div>
                </div>
        )
    } else {
        return(
            <>
            <p className="h5 m-5">Aún no has elegido ningún producto</p>
            <Link to="/">
               <Button variant="outline-dark">Ver tienda</Button>
            </Link>
            </>
        )
    }
}

