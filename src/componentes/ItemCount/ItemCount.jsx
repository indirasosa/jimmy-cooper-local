import Button from 'react-bootstrap/Button'
import { useState } from 'react';

export const ItemCount = ({stock, initial})=> {

    const [count, setCount] = useState(initial);

    const restarCantidad = () => {
      if(count>1){
        setCount(count-1)
      }
    }

    const incrementarCantidad = ()=>{
      if(count<stock){
          setCount(count+1)
       }
    }

  return (
    <div className="d-flex justify-content-between border border-dark rounded m-2">
        <Button disabled={stock===0} onClick={restarCantidad} variant="outline-dark" size="sm" className="rounded-end">-</Button>
        <p className="d-flex align-items-center">{count}</p>
        <Button disabled={stock===0} onClick={incrementarCantidad} variant="outline-dark" size="sm">+</Button>
    </div>
  );
}

