import hamburguesaImg from '/images/burger.webp'
import cheddarImg from '/images/cheddar.webp'
import pizzaImg from '/images/pizza.webp'
import onionRingsImg from '/images/onionRings.webp'
import papasImg from '/images/potatoes.webp'
import gaseosaImg from '/images/gaseosa.webp'
import './MenuComida.css'
import { CardItem } from '../cardItem/CardItem'
import { ItemComida } from '../cardItem/CardItem'


const itemsComida: ItemComida[] = [
    {
        id: 1,
        nombre: "Hamburguesa",
        precio: 5000,
        img: hamburguesaImg,
        quantity: 0
    },
    {
        id: 2,
        nombre: "Pizza",
        precio: 9000,
        img: pizzaImg,
        quantity: 0
    },
    {
        id: 3,
        nombre: "Balde de Cheddar",
        precio: 2000,
        img: cheddarImg,
        quantity: 0
    },
    {
        id: 4,
        nombre: "Papas",
        precio: 2500,
        img: papasImg,
        quantity: 0
    },
    {
        id: 5,
        nombre: "Aros de Cebolla",
        precio: 3000,
        img: onionRingsImg,
        quantity: 0
    },
    {
        id: 6,
        nombre: "Gaseosa 500ml",
        precio: 3000,
        img: gaseosaImg,
        quantity: 0
    }
]


export const MenuComida = ()=>{
    return(
        <div className="menuComidaContainer">
            {itemsComida.map(item=>(
                <CardItem item={item} key={item.id}/>
            ))}
        </div>
    )
}

