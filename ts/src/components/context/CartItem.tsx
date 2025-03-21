
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
            <p>{item.quantity}</p>
        </div>
    )
}