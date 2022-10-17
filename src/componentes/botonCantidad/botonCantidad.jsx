import Button from 'react-bootstrap/Button'
import { useState } from 'react';

export const BotonContador = ()=> {
    const [cantidad, setCambiarCantidad] = useState(0);
    const funcionCambiarCantidad = () => {
        setCambiarCantidad(cantidad+1)
    }
  return (
    <div className="d-flex justify-content-between border border-dark rounded m-2">
        <Button variant="outline-dark" size="sm" className="rounded-end">-</Button>
        <p className="d-flex align-items-center">{cantidad}</p>
        <Button onClick={funcionCambiarCantidad} variant="outline-dark" size="sm">+</Button>
    </div>
  );
}

