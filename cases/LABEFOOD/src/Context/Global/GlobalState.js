import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [order, setOrder] = useState(null)
  const [activeOrder, setActiveOrder] = useState(null)

// --- Adiciona o produto ao carrinho --- 
  const addItemToCart = (product, quantity, newRestaurant) => {
    if(newRestaurant.id === restaurant.id){
    setCart([...cart, { ...product, quantity }]); 
  }else{
    setCart([{ ...product, quantity }])
    setRestaurant(newRestaurant)
  }
}

// --- Remove o produto do carrinho ---
  const removeItemToCart = (id) => {
    const index = cart.findIndex((product) => product.id === id)
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  };

  const states = {cart, restaurant, order, activeOrder};
  const requests = {addItemToCart, removeItemToCart};
  const setters = {setOrder, setActiveOrder, setCart};

  return (
    <GlobalStateContext.Provider value={{ states, requests, setters }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
