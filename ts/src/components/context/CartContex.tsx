import { createContext, ReactNode, useState, useContext } from "react";

interface CartItem{
    id: number;
    nombre: string;
    precio: number;
    img:string;
    quantity: number;
}

interface CartContentType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContentType | undefined>(undefined);


export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  console.log(cart)

  const addToCart = (item: CartItem) => {
  
    setCart((prevCart) => {
      
      const itemInCart = prevCart.find(
        (itemBuscado) => itemBuscado.id === item.id
      );
      if (itemInCart) {
        return prevCart.map((itemBuscado) =>
          itemBuscado.id === item.id
            ? { ...itemBuscado, quantity: itemBuscado.quantity + 1 }
            : itemBuscado
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
      
    });

  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
  };
  