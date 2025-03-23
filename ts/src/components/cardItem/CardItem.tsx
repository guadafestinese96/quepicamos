import './CardItem.css'
import { useCart } from '../context/CartContex';


export interface ItemComida {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  quantity: number;
}

interface CardItemProps {
  item: ItemComida;
}

export const CardItem = ({ item }: CardItemProps) => {
const {addToCart, cart} = useCart();
const itemInCart = cart.find(it=>it.id === item.id)

  return (
    <div key={item.id} className="itemComidaContainer">
      <div className="pContainer">
        <p className="p1">{item.nombre}</p>
        <p className="p2">${item.precio}</p>
      </div>
      <img src={item.img} alt={item.nombre} className="itemComidaImg" />
        <button className="addToCartBtn"
        onClick={()=>addToCart(item)}>{itemInCart? "En Carrito" : "Añadir Al Carrito"}</button>
    </div>
  );
};
