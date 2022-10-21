import { DetailComponent } from "../DetailComponent/DetailComponent";
import { useEffect, useState } from "react";
import {productos} from "../../productos";
import {useParams} from "react-router-dom";


export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [detalle, setDetalle] = useState({})

    const getProductsDetail = ()=> {
        return new Promise ((resolve, reject) => {
            setTimeout(()=> {
                resolve(productos)
            }, 1000)
        })
    }

    useEffect (()=> {
        getProductsDetail().then(resultado => {
            const productoFind = resultado.find(elm=> elm.id == id)
            setDetalle(productoFind)
        })
    }, [id])

    return (
        <div className="m-5">
            <DetailComponent detalle={detalle}/>
        </div>
    )
}