import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product, qty = 1) => {

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + qty }
          : item
      ));

    } else {

      setCart([...cart, { ...product, qty }]);

    }

  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, qty: Math.max(item.qty - 1, 1) }
        : item
    ));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);