import { DetailComponent } from "../DetailComponent/DetailComponent";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [detalle, setDetalle] = useState({})

    useEffect(() =>{
        const getProducto = async()=>{
            const queryRef = doc(db, "items", id);
            const response = await getDoc(queryRef);
            const producto = {
                ...response.data(),
                id: response.id
            }
            setDetalle(producto)
        }
        getProducto()
    }, [id])

    return (
        <div className="m-5">
            <DetailComponent detalle={detalle}/>
        </div>
    )
}