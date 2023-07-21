import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import SideBar from "./Components/SideBar/SideBar";
import { createContext } from "react";
export const productsContext = createContext()

export default function App() {
  const [state, setState] = useState({
    cart: []
  })
  const clearCart = () => {

    setState({
      cart: []
    })

  }

  const addToCart = product => setState({
    ...state,
    cart: state.cart.find(cartItem => cartItem.id === product.id) ?
      state.cart.map(cartItem => cartItem.id === product.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem) :
      [...state.cart, { ...product, count: 1 }]
  })
  const removeProduct = id => setState({
    ...state,
    cart: state.cart.filter(cartItem => cartItem.id !== id)
  })
  const totalCArtAmount = state.cart.reduce((total, product) => total = total + (product.price * product.count), 0)
  const addToMoney = (money) => {

    console.log(totalCArtAmount + money)
  }

  const [money, SetMoney] = useState()
  const remainingMoney = (par) => {
    SetMoney(par - totalCArtAmount)

  }


  return (
    <productsContext.Provider value={{ state: state, addToCart, removeProduct, totalCArtAmount, addToMoney, remainingMoney, money, clearCart }}>
      <div className="flex">
        <Menu />
        <SideBar />
      </div></productsContext.Provider>
  );
}

