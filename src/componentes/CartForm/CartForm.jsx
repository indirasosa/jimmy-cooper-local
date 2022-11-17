import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/CartContext";

export const CartForm = ()=>{
        //enlazando el contexto
        const value = useContext(CartContext)
        
        const {productosCarrito, calcularPrecioTotal, clear, estadoCompra} = value
    
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
            estadoCompra()
            clear()
        }
        console.log(compraId)
        return (
            <>
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
            </>
        
        )
}
    
