import {Item} from "../Item/Item"; 
import {productos} from "../../productos";

export const ItemList = () => {
    return (
        <>
        {
            productos.map (element => {
                return(
                    <>
                    <Item key={element.id} name={element.name} price={element.price} brand={element.brand} imagen={element.imagen}/>
                    </>    
                )
            })
        }
        </>
    )
}