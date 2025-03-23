
interface ItemEnCarrito{
    nombre: string;
    quantity: number;
}

interface ItemEnCarritoProps{
    item: ItemEnCarrito
}


export const CartItem=({item}:ItemEnCarritoProps)=>{
    return(
        <div className="cartItemContainer">
            <p>{item.nombre}</p>
            
            <button>-</button>
            <p>{item.quantity}</p>
            <button>+</button>
        </div>
    )
}