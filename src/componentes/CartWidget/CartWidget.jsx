import ImagenCarrito from "../../img/carrito-icono.png";
import "./CartWidget.css";

export const CartWidget = () => {
    return (
        <>
        <img src={ImagenCarrito} className="CartWidgetTamaño" alt="Ícono carrito" />
        <span className="CartWidgetColor">0</span>
        </>
    )
}