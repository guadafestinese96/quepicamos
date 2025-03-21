import './CardItem.css'
import { useCart } from '../context/CartContex';


interface ItemComida {
  id: number;
  nombre: string;
  precio: number;
  img: string;
}

interface CardItemProps {
  item: ItemComida;
}

export const CardItem = ({ item }: CardItemProps) => {
const {addToCart} = useCart();

  return (
    <div key={item.id} className="itemComidaContainer">
      <div className="pContainer">
        <p className="p1">{item.nombre}</p>
        <p className="p2">${item.precio}</p>
      </div>
      <img src={item.img} alt={item.nombre} className="itemComidaImg" />
        <button className="addToCartBtn"
        onClick={()=>addToCart(item)}>Añadir Al Carrito</button>
    </div>
  );
};
