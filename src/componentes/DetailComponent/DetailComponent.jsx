import "./detailComponent.css";
import { CartButton } from "../CartButton/CartButton";

export const DetailComponent = ({detalle})=> {
    return(
        <>
        <div className="flex">
            <div className='cardContainer'>
                <img className="cardImg" src={detalle.imagen} alt="ImagenProducto" />
                <div className="mx-5 mb-2">
                    <h2 className="h4 flex">{detalle.name}</h2>
                    <p className="texto flex">${detalle.price}</p>
                    <CartButton className="margin"/>
                </div>
            </div>
        </div>

        </>      
    )
}
