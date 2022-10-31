import { CartContext } from "../../context/CartContext";
import { ComponenteA } from "../ComponenteA/ComponenteA";

export const PaginaContexto = ()=>{
    return(
        <CartContext.Provider value={{nombre: "pepito"}}>
            <ComponenteA></ComponenteA>
        </CartContext.Provider>
    )
}