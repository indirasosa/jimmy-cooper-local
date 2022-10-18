import {ItemList} from "../ItemList/ItemList";
import { productos } from "../../productos";
import { useState, useEffect } from "react"; 


export const ItemListContainer = () => { 

    const [catalogo, setCatalogo] = useState([])

    const getProductos = () => {
        return new Promise ((resolve,reject)=> {
            setTimeout(()=>{
                resolve (productos)
            }, 2000)
        })
    }
    useEffect(()=>{
        getProductos().then((resultadoProductos)=>setCatalogo(resultadoProductos))
    },[])
    
    return (
    <div className="d-flex row m-4 center">
        <ItemList catalogo={catalogo}/>
    </div>
    )
}


