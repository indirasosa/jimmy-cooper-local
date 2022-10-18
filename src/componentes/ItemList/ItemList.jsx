import {Item} from "../Item/Item"; 
//import {productos} from "../../productos";

export const ItemList = ({catalogo}) => {
    return (
        <>
         {catalogo.map(element =><Item name={element.name} price= {element.price} brand= {element.brand} imagen= {element.imagen} key={element.id}/>)}
        </>
    )
}