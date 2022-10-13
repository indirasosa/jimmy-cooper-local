import {ItemList} from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import {productos} from "../../productos";



export const ItemListContainer = () => {
    const [listado, setListado] = useState ([]);

    const renderizarProductos = () => {
        return new Promise ((resolve, reject)=> {
            setTimeout(()=> {
                resolve(productos)
            }, 2000);
        })
    }
    useEffect(()=> {
        renderizarProductos().then((catalogo)=> setListado(catalogo))
    }, [])

    return (
        <>
        <ItemList listado={listado}/>
        </>
    )
}