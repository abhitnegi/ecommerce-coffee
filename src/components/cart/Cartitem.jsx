import React, { useContext } from 'react'
import { ShopContext } from '../../shop-context';


export default function Cartitem(props) {
    const {id, title, price, productImage} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCart} = useContext(ShopContext)
    const cartItemsAmount = cartItems[id]
  return (
    <div>
      <div className="cart-products">
        <img src={productImage} alt=""/>
        <div className="cart-description">
            <p>
                <b>{title}</b>
            </p>
            <p>
                <b>{price}</b>
            </p>
            <button onClick={() => {removeFromCart(id)}}>-</button>
            <input value={cartItemsAmount} onChange={(e) =>{updateCart(e.target.value,id)}} />
            <button onClick={() => {addToCart(id)}}>+</button>
        </div>
      </div>
    </div>
  )
}
