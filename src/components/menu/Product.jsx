import React, { useContext } from 'react'
import { ShopContext } from '../../shop-context';

export default function Product(props) {
    const { id, title, price, productImage } = props.data;
    const { cartItems, addToCart} = useContext(ShopContext)
    const cartItemsAmount = cartItems[id]
  return (
    <div>
      <div className="product">
        <img src={productImage} alt=""/>
        <div className="description">
            <p>
                <b>{title}</b>
            </p>
            <p>
                <b>{price}</b>
            </p>
            <button className='buttons' onClick={() => {addToCart(id)}}>Add To Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
        </div>
      </div>
    </div>
  )
}
