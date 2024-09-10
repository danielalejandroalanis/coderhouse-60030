import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const addItem = (product, qtyItem) => {
    const existingProduct = cartState.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, actualizamos la cantidad, sumando solo la diferencia
      setCartState(
        cartState.map((item) =>
          item.id === product.id
            ? { ...item, qtyItem: item.qtyItem + 1 } // Aquí solo sumamos 1 a la cantidad existente
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, lo agregamos
      setCartState([...cartState, { ...product, qtyItem }]);
    }
  };

  const removeItem = (product) => {
    const existingProduct = cartState.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si la cantidad es 1, eliminamos el producto del carrito
      if (existingProduct.qtyItem === 1) {
        setCartState(cartState.filter((item) => item.id !== product.id));
      } else {
        // Si la cantidad es mayor a 1, restamos 1 a la cantidad existente
        setCartState(
          cartState.map((item) =>
            item.id === product.id
              ? { ...item, qtyItem: item.qtyItem - 1 }
              : item
          )
        );
      }
    }
  };

  return (
    <CartContext.Provider value={{ cartState, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
