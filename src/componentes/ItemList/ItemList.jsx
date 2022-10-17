import {Item} from "../Item/Item"; 
import {productos} from "../../productos";

export const ItemList = () => {
    return (
        <>
        {
            productos.map (element => {
                return(
                    <>
                    <Item name={element.name} brand={element.brand} price={element.price} imagen={element.imagen} key={element.id}/>
                    </>    
                )
            })
        }
        </>
    )
}