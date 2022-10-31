import "./detailComponent.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";


export const DetailComponent = ({detalle})=> {
    const [contador, setContador] = useState(0);
    const addProduct = (cantidad)=> {
        setContador(cantidad);
      }
    return(
        <>
        <div className="flex">
            <div className='cardContainer'>
                <img className="cardImg" src={detalle.imagen} alt="ImagenProducto" />
                <div className="mx-5 mb-2">
                    <h2 className="h4 flex">{detalle.name}</h2>
                    <p className="texto flex">${detalle.price}</p>
                    <p className="texto flex">Stock: {detalle.stock}</p>
                    <ItemCount stock={detalle.stock} initial={1} onAdd={addProduct}/>
                </div>
            </div>
        </div>

        </>      
    )
}
