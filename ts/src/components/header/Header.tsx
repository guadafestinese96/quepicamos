import { NavLink } from "react-router-dom";
import "./Header.css";
import { useCart } from "../context/CartContex";

export const Header = () => {
    const {cart} = useCart()
  return (
    <div className="headerContainer">
        <NavLink to="/">
      <img
        src="/images/QuePicamosLogo.webp"
        alt="logoHeader"
        className="logoHeader"
      />
      </NavLink>
      <NavLink to="/carrito">
        <div className="cartItemContainer">
          <img
            src="/images/shoppingCart.webp"
            alt="logoCart"
            className="logoCart"
          />
          <span className="quantityCart">{cart.length}</span>
        </div>
      </NavLink>
    </div>
  );
};
