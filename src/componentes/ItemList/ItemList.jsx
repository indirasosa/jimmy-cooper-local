import {Item} from "../Item/Item"; 


export const ItemList = ({catalogo}) => {
    return (
        <>
         {catalogo.map(element =><Item name={element.name} price= {element.price} brand= {element.brand} imagen= {element.imagen} key={element.id} id={element.id} stock={element.stock}/>)}
        </>
    )
}