import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ComponenteA = ()=> {
    const value = useContext(CartContext);
    return(
        <>
            <p>Componente A</p>
            <p>{value.nombre}</p>
        </>
    )
}