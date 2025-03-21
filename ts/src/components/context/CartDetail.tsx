import { useCart } from "./CartContex"
import { CartItem } from "./CartItem";
import './Cart.css'

export const CartDetail = ()=>{
    const {cart} = useCart();

    return(
        <div className="cartContainer">
            {cart.map(item=>(
                <CartItem item={item}/>
            ))}
        </div>
    )
}