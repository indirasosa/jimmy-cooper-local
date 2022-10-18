import {ItemList} from "../ItemList/ItemList";
import { productos } from "../../productos";
import { useState, useEffect } from "react"; 
import {useParams} from "react-router-dom";


export const ItemListContainer = () => { 

    const categoryName = useParams().categoryName;
    
    const [catalogo, setCatalogo] = useState([])

    const getProductos = () => {
        return new Promise ((resolve,reject)=> {
            setTimeout(()=>{
                resolve (productos)
            }, 2000)
        })
    }
    useEffect(()=>{
        getProductos().then(resultadoProductos =>{
            if (categoryName) {
                const productosFiltrados = resultadoProductos.filter(elm=>elm.category === categoryName);
                setCatalogo (productosFiltrados);
            } else {
                setCatalogo(resultadoProductos)
            }
        })
    },[categoryName])
    
    return (
    <div className="d-flex row m-4 center">
        <ItemList catalogo={catalogo}/>
    </div>
    )
}


