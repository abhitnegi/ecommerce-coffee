import React, { createContext, useState} from 'react'
import { PRODUCT } from './product'

export const ShopContext = createContext(null)

const getDefault = () => {
  let cart = {}
  for( let i=1; i< PRODUCT.length + 1; i++){
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getDefault());
  const [view, setView] = useState (false);
  const [showLinks, setshowLinks] = useState (false)

  const addToCart = (itemid) => {
    if(view === false){
      alert("Log In First")
    }
    else{
    setcartItems((prev) => ({...prev, [itemid]: prev[itemid]+1}));
    }
  }

  const removeFromCart = (itemid) => {
    setcartItems((prev) => ({...prev, [itemid]: prev[itemid]-1}));
  }

  const updateCart = (newAmount,itemid) => {
    setcartItems((prev) => ({...prev, [itemid]: Number(newAmount)}))
  }

  const contextValue = { showLinks, setshowLinks, cartItems, addToCart, removeFromCart, updateCart, view, setView }

  return(
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider