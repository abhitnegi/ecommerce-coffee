import React, { useContext } from 'react'
import { PRODUCT } from '../../product'
import { ShopContext } from '../../shop-context'
import Cartitem from './Cartitem'
import './Cart.css'

export default function Cart() {
    const { cartItems, view } = useContext(ShopContext)
    let count = 0 ;
  return (
    <div>
      <div className="cart-title">
        <h1>Cart Item</h1>
      </div>
      <div className="cart-product">
        {view && PRODUCT.map((value) => {
            if ( cartItems[value.id] !== 0){
              count = count + 1;
              return <Cartitem data={value}/>
            }
        })}
      </div>
      {count === 0 ? <div className='empty'><h2>Cart is Empty</h2></div> : ""}
    </div>
  )
}
