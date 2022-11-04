import {ItemList} from "../ItemList/ItemList";
import { useState, useEffect } from "react"; 
import {collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => { 

    const categoryName = useParams().categoryName;
    
    const [catalogo, setCatalogo] = useState([])


    useEffect(()=>{
        const getProductos = async()=>{
            if(categoryName){
                const queryRef = query(collection(db, "items"), where("category", "==", categoryName));
                const response = await getDocs(queryRef);
                const documents = response.docs;
                const productos = documents.map(elemento=>{
                    return({
                        ...elemento.data(),
                        id: elemento.id
                    })
                })
                setCatalogo(productos)
            } else {
                const queryRef = collection(db, "items");
                const response = await getDocs(queryRef);
                const documents = response.docs;
                const productos = documents.map(elemento=>{
                    return({
                        ...elemento.data(),
                        id: elemento.id
                    })
                })
                setCatalogo(productos)
            }
        }
        getProductos();
    },[categoryName])
    
    return (
    <div className="d-flex row m-4 center">
        <ItemList catalogo={catalogo}/>
    </div>
    )
}


