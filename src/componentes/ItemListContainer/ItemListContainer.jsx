import {ItemList} from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import {productos} from "../../productos";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
    const [listado, setListado] = useState ([]);

    const idCategory = useParams().idCategory;
    console.log(idCategory)
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
        <div className="d-flex row m-4 center">
        <ItemList propiedad={listado}/>
        </div>
        </>
    )
}