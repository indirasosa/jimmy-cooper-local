import {ItemList} from "../ItemList/ItemList";
import { useState, useEffect } from "react"; 
import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import { db } from "../../utils/firebase";


export const ItemListContainer = () => { 

    const [catalogo, setCatalogo] = useState([])

    useEffect(()=>{
        const getProductos = async()=>{
            const queryRef = collection(db, "items");
            const response = await getDocs(queryRef);
            const documents = response.docs;
            console.log(documents)
            const productos = documents.map(elemento=>{
                return({
                    ...elemento.data(),
                    id: elemento.id
                })
            })
            setCatalogo(productos)
        }
        getProductos();
    },[])
    
    return (
    <div className="d-flex row m-4 center">
        <ItemList catalogo={catalogo}/>
    </div>
    )
}


