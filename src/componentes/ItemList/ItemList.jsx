import {Item} from "../Item/Item"; 
import {productos} from "../../productos";
 
export const ItemList = () => {
    return (
        <>
        {
            productos.map (element => {
                return(
                    <Item name={element.name} price={element.price} brand={element.brand} key={element.id} imagen={element.imagen}/>
                )
            })
        }
        </>
    )
}